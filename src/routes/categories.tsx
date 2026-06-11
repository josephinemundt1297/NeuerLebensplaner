import { createFileRoute } from "@tanstack/react-router";
import { CategoriesPage } from "../pages/categories.page";

export const Route = createFileRoute("/categories")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <CategoriesPage />
    </>
  );
}
