import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/todo">To-Do</Link>
        <Link to="/categories">Kategorien</Link>
        {/*Link to ist damit nur innerhalb der Seite eine einzelne
        Komponente gerändert wird und nicht die gesammte Seite.
        Wenn ich auf eine externe Seite verlinken möchte kann ich 
        wie gewohnt <a href=""> nutzen*/}
      </nav>
    </>
  );
}
