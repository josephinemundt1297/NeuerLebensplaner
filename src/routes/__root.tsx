import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Sidebar from "../components/organism/sidebar.org";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Sidebar />
      <Outlet />
      {/*Im Outlet befinden sich der jeweilige Route Pfad  
      sprich wenn ich auf /todo bin wird mir dort nur die toDo 
      Komponente angezeigt und die Sidebar bleibt fix */}
    </React.Fragment>
  );
}
