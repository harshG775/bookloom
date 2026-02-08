import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { signUpFn } from "@/server-functions/auth.serverFn"
import { useRouter } from "@tanstack/react-router"
import { useForm } from "@tanstack/react-form"
import z from "zod"
import { Loader } from "lucide-react"
const formSchema = z.object({
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
})

type SignUpFormProps = React.ComponentProps<"div"> & {
    switchToLogIn: () => void
}
export function SignUpForm({ className, switchToLogIn, ...props }: SignUpFormProps) {
    const router = useRouter()
    const form = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        validators: {
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            await signUpFn({
                data: {
                    email: value.email,
                    password: value.password,
                },
            })
            router.invalidate()
        },
    })
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Create a new account</CardTitle>
                    <CardDescription>Enter your email below to create your new account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        id="signup-form"
                        onSubmit={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            form.handleSubmit()
                        }}
                    >
                        <FieldGroup>
                            <form.Field
                                name="email"
                                children={(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field data-invalid={isInvalid}>
                                            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                                            <Input
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                aria-invalid={isInvalid}
                                                placeholder="m@example.com"
                                                autoComplete="email"
                                            />
                                            {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                        </Field>
                                    )
                                }}
                            />
                            <form.Field
                                name="password"
                                children={(field) => {
                                    const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                    return (
                                        <Field data-invalid={isInvalid}>
                                            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                                            <Input
                                                id={field.name}
                                                name={field.name}
                                                value={field.state.value}
                                                onBlur={field.handleBlur}
                                                onChange={(e) => field.handleChange(e.target.value)}
                                                aria-invalid={isInvalid}
                                                type="password"
                                                required
                                            />
                                            {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                        </Field>
                                    )
                                }}
                            />
                        </FieldGroup>
                    </form>
                </CardContent>
                <CardFooter>
                    <form.Subscribe
                        selector={(state) => [state.canSubmit, state.isSubmitting]}
                        children={([canSubmit, isSubmitting]) => (
                            <Field>
                                <Button type="submit" form="signup-form" disabled={!canSubmit}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader className="animate-spin" />
                                        </>
                                    ) : (
                                        "Sign Up"
                                    )}
                                </Button>

                                <FieldDescription className="text-center">
                                    Already have an account?{" "}
                                    <button onClick={switchToLogIn} className="underline cursor-pointer">
                                        Log In
                                    </button>
                                </FieldDescription>
                            </Field>
                        )}
                    />
                </CardFooter>
            </Card>
        </div>
    )
}
