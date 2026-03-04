import z from "zod"
import { useForm } from "@tanstack/react-form"
import { useNavigate } from "@tanstack/react-router"
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const languages = [
    // coss.com
    { label: "English", value: "English" },
    { label: "Hindi", value: "Hindi" },
    { label: "Spanish", value: "Spanish" },
    { label: "French", value: "French" },
    { label: "German", value: "German" },
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
const formSchema = z.object({
    bookTitle: z.string().min(3, "title is required"),
    subTitle: z.string(),
    slug: z.string().min(3, "slug is required"),
    author: z.string().min(3, "author is required"),
    language: z.string(),
    categories: z.array(z.object({ label: z.string(), value: z.string() })).min(1, "categories are required"),
    description: z.string().min(3, "description is required"),
    summary: z.string().min(3, "summary is required"),
})

export function CreateBookForm() {
    const navigate = useNavigate()
    const form = useForm({
        defaultValues: {
            // step 1
            bookTitle: "",
            subTitle: "",
            slug: "",
            author: "",
            language: "",
            categories: [] as Array<{ label: string; value: string }>,
            description: "",
            summary: "",
        },
        validators: {
            onChange: formSchema,
            onSubmit: formSchema,
        },
        onSubmit: async ({ value }) => {
            console.log(value)
            navigate({
                from: "/admin/dashboard/books/new/",
                to: "/admin/dashboard/books/$book_id/edit",
                params: {
                    book_id: "new-ebook",
                },
            })
        },
    })
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
            }}
        >
            <FieldSet>
                <FieldSet>
                    <FieldLegend>Book Information</FieldLegend>
                    <FieldDescription>Enter the details of the book</FieldDescription>
                </FieldSet>
                <FieldSet>
                    <FieldGroup className="p-4 shadow rounded-2xl">
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
                                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
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
                                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
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
                                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
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
                                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                    </Field>
                                )
                            }}
                        />
                        <form.Field
                            name="language"
                            children={(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Language</FieldLabel>
                                        <Select
                                            name={field.name}
                                            value={field.state.value}
                                            onValueChange={(value) => field.handleChange(value)}
                                            aria-invalid={isInvalid}
                                        >
                                            <SelectTrigger onBlur={field.handleBlur}>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {languages.map((item) => (
                                                    <SelectItem key={item.value} value={item.value}>
                                                        {item.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
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
                                                    {(value: Array<{ value: string; label: string }>) => (
                                                        <>
                                                            {value?.map((item) => (
                                                                <ComboboxChip aria-label={item.label} key={item.value}>
                                                                    {item.label}
                                                                </ComboboxChip>
                                                            ))}
                                                            <ComboboxChipsInput
                                                                placeholder={
                                                                    value.length > 0 ? undefined : "Add a category..."
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
                                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                    </Field>
                                )
                            }}
                        />
                        <form.Field
                            name="summary"
                            children={(field) => {
                                const isInvalid = field.state.meta.isTouched && !field.state.meta.isValid
                                return (
                                    <Field data-invalid={isInvalid}>
                                        <FieldLabel htmlFor={field.name}>Short Summary</FieldLabel>
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
                                        {isInvalid && <FieldError errors={field.state.meta.errors} />}
                                    </Field>
                                )
                            }}
                        />
                    </FieldGroup>
                    <form.Subscribe
                        selector={(state) => [state.canSubmit, state.isSubmitting]}
                        children={([canSubmit, isSubmitting]) => (
                            <Field orientation="horizontal">
                                <Button
                                    type="submit"
                                    disabled={!canSubmit}
                                    className="ml-auto flex-1 w-full max-w-xs py-6"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </Button>
                            </Field>
                        )}
                    />
                </FieldSet>
            </FieldSet>
        </form>
    )
}
