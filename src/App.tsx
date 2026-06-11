// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from "@tanstack/react-router";

// Damit TS weiß das ich wirklich etwas unveränderbares möchte und nicht einfach
// nur einen String oder eine number die auch irgendwas anderes sein könnte muss
// ich es am Ende auf "as const" setzen.
// Damit setze ich nicht nur die Funktion als Konstante
// sondern auch die darin beinhalteten Werte.
const Schweregrad = {
  Task: { title: "Task Quest", xp: 5 },
  Side: { title: "Nebenquest", xp: 10 },
  Main: { title: "Hauptquest", xp: 15 },
  Instance: { title: "Instance Quest", xp: 20 },
  Boss: { title: "World Boss Quest", xp: 30 },
} as const;
// Durch die Objekt schreibweise kann ich später leichter interriern
// z.B.: Schweregrad.Task.title die Ausgabe wäre dann "Task Quest"
// daher auch das as const da sonst die Ausgabe zwar der title wäre aber für TS als veränderbar gelten würde

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/*Stellt den Router-Kontext bereit und rendert die aktive Route*/}
    </>
  );
}

export default App;
