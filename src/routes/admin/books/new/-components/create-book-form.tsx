import {
    Stepper,
    StepperContent,
    StepperIndicator,
    StepperItem,
    StepperNav,
    StepperPanel,
    StepperSeparator,
    StepperTrigger,
} from "@/components/reui/stepper"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxEmpty,
    ComboboxItem,
    ComboboxList,
    ComboboxPopup,
    ComboboxValue,
} from "@/components/ui/combobox"
import { Select, SelectItem, SelectPopup, SelectTrigger, SelectValue } from "@/components/ui/select"
import z from "zod"
import { useForm } from "@tanstack/react-form"
import { useState } from "react"

const formSchema = z.object({
    bookTitle: z.string().min(3, "title is required"),
    subTitle: z.string(),
    slug: z.string().min(3, "slug is required"),
    author: z.string().min(3, "author is required"),
    languages: z.any(),
    categories: z
        .array(
            z.object({
                label: z.string(),
                value: z.string(),
            }),
        )
        .min(1, "categories are required"),
    description: z.string().min(3, "description is required"),
    summery: z.string().min(3, "summery is required"),
})
const languages = [
    // coss.com
    { label: "English", value: "en" },
    { label: "Hindi", value: "hi" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
]
const categories = [
    // coss.com
    { label: "Fiction", value: "fiction" },
    { label: "Non-Fiction", value: "non-fiction" },
    { label: "Biography", value: "biography" },
    { label: "Children's Books", value: "childrens-books" },
    { label: "Romance", value: "romance" },
    { label: "Mystery", value: "mystery" },
    { label: "Thriller", value: "thriller" },
    { label: "Science Fiction", value: "science-fiction" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Horror", value: "horror" },
    { label: "Self-Help", value: "self-help" },
]

export function CreateBookForm() {
    const [currentStep, setCurrentStep] = useState(1)

    const form = useForm({
        defaultValues: {
            // step 1
            bookTitle: "",
            subTitle: "",
            slug: "",
            author: "",
            languages: languages[0] as { label: string; value: string },
            categories: [] as { label: string; value: string }[],
            description: "",
            summery: "",
        },
        validators: {
            onChange: formSchema,
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            console.log(value)
            alert("Form submitted successfully")
        },
    })
    const handlClickBack = () => {
        setCurrentStep((prev) => prev - 1)

        console.log(form.state.errors)
    }
    const handleClickContinue = () => {
        setCurrentStep((prev) => prev + 1)

        console.log(form.state.errors)
    }

    return (
        <FieldSet>
            <FieldSet>
                <FieldLegend>Book Information</FieldLegend>
                <FieldDescription>Enter the details of the book</FieldDescription>
            </FieldSet>
            <FieldSet>
                <Stepper
                    defaultValue={1}
                    value={currentStep}
                    onValueChange={(value) => {
                        setCurrentStep(value)
                    }}
                >
                    <StepperNav>
                        <StepperItem step={1}>
                            {/* <StepperTrigger> */}
                            <StepperIndicator>1</StepperIndicator>
                            {/* </StepperTrigger> */}
                            <StepperSeparator />
                        </StepperItem>
                        <StepperItem step={2}>
                            {/* <StepperTrigger> */}
                            <StepperIndicator>2</StepperIndicator>
                            {/* </StepperTrigger> */}
                            <StepperSeparator />
                        </StepperItem>
                        <StepperItem step={3}>
                            {/* <StepperTrigger> */}
                            <StepperIndicator>3</StepperIndicator>
                            {/* </StepperTrigger> */}
                        </StepperItem>
                    </StepperNav>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            form.handleSubmit()
                        }}
                    >
                        <StepperPanel className="mt-8">
                            <StepperContent value={1}>
                                <FieldGroup>
                                    <form.Field
                                        name="bookTitle"
                                        children={(field) => {
                                            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                            return (
                                                <Field data-invalid={isInvalid}>
                                                    <FieldLabel htmlFor={field.name}>Book Title</FieldLabel>
                                                    <Input
                                                        id={field.name}
                                                        name={field.name}
                                                        value={field.state.value}
                                                        onBlur={field.handleBlur}
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        aria-invalid={isInvalid}
                                                        autoComplete="off"
                                                        placeholder="e.g. The Art of Design"
                                                    />
                                                </Field>
                                            )
                                        }}
                                    />
                                    <form.Field
                                        name="subTitle"
                                        children={(field) => {
                                            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                            return (
                                                <Field data-invalid={isInvalid}>
                                                    <FieldLabel htmlFor={field.name}>
                                                        SubTitle{" "}
                                                        <span className="text-xs text-muted-foreground font-normal">
                                                            (optional)
                                                        </span>
                                                    </FieldLabel>
                                                    <Input
                                                        id={field.name}
                                                        name={field.name}
                                                        value={field.state.value}
                                                        onBlur={field.handleBlur}
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        aria-invalid={isInvalid}
                                                        autoComplete="off"
                                                        placeholder="A comprehensive guide..."
                                                    />
                                                </Field>
                                            )
                                        }}
                                    />
                                    <form.Field
                                        name="slug"
                                        children={(field) => {
                                            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                            return (
                                                <Field data-invalid={isInvalid}>
                                                    <FieldLabel htmlFor={field.name}>Slug</FieldLabel>
                                                    <Input
                                                        id={field.name}
                                                        name={field.name}
                                                        value={field.state.value}
                                                        onBlur={field.handleBlur}
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        aria-invalid={isInvalid}
                                                        autoComplete="off"
                                                        placeholder="The-Art-of-Design"
                                                    />
                                                </Field>
                                            )
                                        }}
                                    />
                                    <form.Field
                                        name="author"
                                        children={(field) => {
                                            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                            return (
                                                <Field data-invalid={isInvalid}>
                                                    <FieldLabel htmlFor={field.name}>Author(s)</FieldLabel>
                                                    <Input
                                                        id={field.name}
                                                        name={field.name}
                                                        value={field.state.value}
                                                        onBlur={field.handleBlur}
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        aria-invalid={isInvalid}
                                                        autoComplete="off"
                                                        placeholder="e.g. John Doe, Smith"
                                                    />
                                                </Field>
                                            )
                                        }}
                                    />
                                    <form.Field
                                        name="languages"
                                        children={(field) => {
                                            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                            return (
                                                <Field data-invalid={isInvalid}>
                                                    <FieldLabel htmlFor={field.name}>Language</FieldLabel>
                                                    <Select
                                                        items={languages}
                                                        id={field.name}
                                                        name={field.name}
                                                        value={field.state.value}
                                                        onValueChange={(value) =>
                                                            field.handleChange(value || languages[0])
                                                        }
                                                        aria-invalid={isInvalid}
                                                    >
                                                        <SelectTrigger>
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectPopup>
                                                            {languages.map((item) => (
                                                                <SelectItem key={item.value} value={item}>
                                                                    {item.label}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectPopup>
                                                    </Select>
                                                </Field>
                                            )
                                        }}
                                    />
                                    <form.Field
                                        name="categories"
                                        children={(field) => {
                                            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                            return (
                                                <Field data-invalid={isInvalid}>
                                                    <FieldLabel htmlFor={field.name}>Categories</FieldLabel>
                                                    <Combobox
                                                        items={categories}
                                                        value={field?.state?.value}
                                                        onValueChange={(value) => {
                                                            field.handleChange(value)
                                                        }}
                                                        multiple
                                                        required
                                                    >
                                                        <ComboboxChips>
                                                            <ComboboxValue>
                                                                {(value: { value: string; label: string }[]) => (
                                                                    <>
                                                                        {value?.map((item) => (
                                                                            <ComboboxChip
                                                                                aria-label={item.label}
                                                                                key={item.value}
                                                                            >
                                                                                {item.label}
                                                                            </ComboboxChip>
                                                                        ))}
                                                                        <ComboboxChipsInput
                                                                            placeholder={
                                                                                value.length > 0
                                                                                    ? undefined
                                                                                    : "Add a category..."
                                                                            }
                                                                        />
                                                                    </>
                                                                )}
                                                            </ComboboxValue>
                                                        </ComboboxChips>
                                                        <ComboboxPopup>
                                                            <ComboboxEmpty>No categories found.</ComboboxEmpty>
                                                            <ComboboxList>
                                                                {(item: { label: string; value: string }) => (
                                                                    <ComboboxItem key={item.value} value={item}>
                                                                        {item.label}
                                                                    </ComboboxItem>
                                                                )}
                                                            </ComboboxList>
                                                        </ComboboxPopup>
                                                    </Combobox>
                                                </Field>
                                            )
                                        }}
                                    />
                                    <form.Field
                                        name="description"
                                        children={(field) => {
                                            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                            return (
                                                <Field data-invalid={isInvalid}>
                                                    <FieldLabel htmlFor={field.name}>Description</FieldLabel>
                                                    <Textarea
                                                        id={field.name}
                                                        name={field.name}
                                                        value={field.state.value}
                                                        onBlur={field.handleBlur}
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        aria-invalid={isInvalid}
                                                        autoComplete="off"
                                                        placeholder="Write a detailed description of your ebook..."
                                                        className="min-h-32"
                                                    />
                                                </Field>
                                            )
                                        }}
                                    />
                                    <form.Field
                                        name="summery"
                                        children={(field) => {
                                            const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                            return (
                                                <Field data-invalid={isInvalid}>
                                                    <FieldLabel htmlFor={field.name}>Short Summery</FieldLabel>
                                                    <Textarea
                                                        id={field.name}
                                                        name={field.name}
                                                        value={field.state.value}
                                                        onBlur={field.handleBlur}
                                                        onChange={(e) => field.handleChange(e.target.value)}
                                                        aria-invalid={isInvalid}
                                                        autoComplete="off"
                                                        placeholder="A brief summary for search results..."
                                                    />
                                                </Field>
                                            )
                                        }}
                                    />

                                    <Field orientation="horizontal">
                                        <Button
                                            size={"lg"}
                                            type="button"
                                            variant={"outline"}
                                            className="ml-auto flex-1 w-full py-6"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            size={"lg"}
                                            type="button"
                                            className="ml-auto flex-1 w-full py-6"
                                            onClick={handleClickContinue}
                                        >
                                            Continue
                                        </Button>
                                    </Field>
                                </FieldGroup>
                            </StepperContent>
                            <StepperContent value={2}>
                                <FieldGroup>
                                    <Field orientation="horizontal">
                                        <Button
                                            size={"lg"}
                                            variant="outline"
                                            type="button"
                                            className="ml-auto flex-1 w-full py-6"
                                            onClick={handlClickBack}
                                        >
                                            Previous
                                        </Button>
                                        <Button
                                            size={"lg"}
                                            type="button"
                                            className="ml-auto flex-1 w-full py-6"
                                            onClick={handleClickContinue}
                                        >
                                            Continue
                                        </Button>
                                    </Field>
                                </FieldGroup>
                            </StepperContent>
                            <StepperContent value={3}>
                                {/**/}
                                <form.Subscribe
                                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                                    children={([canSubmit, isSubmitting]) => (
                                        <Field orientation="horizontal">
                                            <Button
                                                size={"lg"}
                                                variant="outline"
                                                type="button"
                                                className="ml-auto flex-1 w-full py-6"
                                                onClick={handlClickBack}
                                            >
                                                Previous
                                            </Button>
                                            <Button
                                                type="submit"
                                                disabled={!canSubmit}
                                                className="ml-auto flex-1 w-full py-6"
                                            >
                                                {isSubmitting ? "Submitting..." : "Submit"}
                                            </Button>
                                        </Field>
                                    )}
                                />
                                {/**/}
                            </StepperContent>
                        </StepperPanel>
                    </form>
                </Stepper>
            </FieldSet>
        </FieldSet>
    )
}
