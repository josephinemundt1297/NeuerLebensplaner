import { createFileRoute } from "@tanstack/react-router";
import { ToDoPage } from "../pages/toDo.page";

export const Route = createFileRoute("/todo")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <ToDoPage />
    </>
  );
}
