import { Link } from "@tanstack/react-router";

export default function Sidebar() {
  return (
    <>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/todo">To-Do</Link>
        <Link to="/categories">Kategorien</Link>
      </nav>
    </>
  );
}
