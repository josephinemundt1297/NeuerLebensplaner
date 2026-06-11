import { createFileRoute } from "@tanstack/react-router";
import { CategoriesPage } from "../pages/categories.page";

export const Route = createFileRoute("/categories")({
  component: CategoriesRoute,
});

function CategoriesRoute() {
  return (
    <>
      <CategoriesPage />
    </>
  );
}
