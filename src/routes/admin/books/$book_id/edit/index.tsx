import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/books/$book_id/edit/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/books/$book_id/edit/"!</div>
}
