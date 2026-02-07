import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { logInFn } from "@/lib/supabase/auth"
import { useRouter } from "@tanstack/react-router"

type LoginFormProps = React.ComponentProps<"div"> & {
    switchToSignUp: () => void
}
export function LoginForm({ className, switchToSignUp, ...props }: LoginFormProps) {
    const router = useRouter()
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>Enter your email below to login to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault()
                            const formData = new FormData(e.target as HTMLFormElement)
                            await logInFn({
                                data: {
                                    email: formData.get("email") as string,
                                    password: formData.get("password") as string,
                                },
                            })
                            router.invalidate()
                        }}
                    >
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input id="email" name="email" type="email" placeholder="m@example.com" required />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                <Input id="password" name="password" type="password" required />
                            </Field>
                            <Field>
                                <Button type="submit">Login</Button>

                                <FieldDescription className="text-center">
                                    Don&apos;t have an account?{" "}
                                    <button onClick={switchToSignUp} className="underline cursor-pointer">
                                        Sign up
                                    </button>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
