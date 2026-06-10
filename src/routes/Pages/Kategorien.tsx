import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Pages/Kategorien')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Pages/Kategorien"!</div>
}
