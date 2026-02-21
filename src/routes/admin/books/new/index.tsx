import { createFileRoute } from "@tanstack/react-router"
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
export const Route = createFileRoute("/admin/books/new/")({
    component: RouteComponent,
})

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

const languages = [
    // coss.com
    { label: "English", value: "en" },
    { label: "Hindi", value: "hi" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
    { label: "German", value: "de" },
]
function RouteComponent() {
    return (
        <div className="px-3 lg:px-6">
            <div className="max-w-(--breakpoint-lg) p-4">
                <FieldSet>
                    <FieldSet>
                        <FieldLegend>Book Information</FieldLegend>
                        <FieldDescription>Enter the details of the book</FieldDescription>
                    </FieldSet>
                    <FieldSet>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="bookTitle">Book Title</FieldLabel>
                                <Input id="bookTitle" autoComplete="off" placeholder="e.g. The Art of Design" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="subTitle">
                                    SubTitle{" "}
                                    <span className="text-xs text-muted-foreground font-normal">(optional)</span>
                                </FieldLabel>
                                <Input id="subTitle" autoComplete="off" placeholder="A comprehensive guide..." />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="slug">Slug</FieldLabel>
                                <Input id="slug" autoComplete="off" placeholder="The-Art-of-Design" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="author">Author(s)</FieldLabel>
                                <Input id="author" autoComplete="off" placeholder="e.g. John Doe, Smith" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="language">Language</FieldLabel>
                                <Select items={languages} defaultValue={"hi"}>
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
                            <Field>
                                <FieldLabel htmlFor="categories">categories</FieldLabel>
                                <Combobox items={categories} multiple required>
                                    <ComboboxChips>
                                        <ComboboxValue>
                                            {(value: { value: string; label: string }[]) => (
                                                <>
                                                    {value?.map((item) => (
                                                        <ComboboxChip aria-label={item.label} key={item.value}>
                                                            {item.label}
                                                        </ComboboxChip>
                                                    ))}
                                                    <ComboboxChipsInput
                                                        placeholder={
                                                            value.length > 0 ? undefined : "Select categories…"
                                                        }
                                                    />
                                                </>
                                            )}
                                        </ComboboxValue>
                                    </ComboboxChips>
                                    <ComboboxPopup>
                                        <ComboboxEmpty>No categories found.</ComboboxEmpty>
                                        <ComboboxList>
                                            {(item) => (
                                                <ComboboxItem key={item.value} value={item}>
                                                    {item.label}
                                                </ComboboxItem>
                                            )}
                                        </ComboboxList>
                                    </ComboboxPopup>
                                </Combobox>
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="description">Description</FieldLabel>
                                <Textarea
                                    id="description"
                                    autoComplete="off"
                                    placeholder="Write a detailed description of your ebook..."
                                    className="min-h-32"
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="summery">Short Summery</FieldLabel>
                                <Textarea
                                    id="summery"
                                    autoComplete="off"
                                    placeholder="A brief summary for search results..."
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                    <Field orientation="horizontal">
                        <Button size={"lg"} variant="outline" type="button">
                            Cancel
                        </Button>
                        <Button size={"lg"}>Continue</Button>
                    </Field>
                </FieldSet>
            </div>
        </div>
    )
}
