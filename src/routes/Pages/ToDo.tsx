import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Pages/ToDo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Pages/ToDo"!</div>
}
