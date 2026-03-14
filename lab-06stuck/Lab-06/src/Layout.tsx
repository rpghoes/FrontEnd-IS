import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>Student Portal 2026</footer>
    </>
  );
}

export default Layout;
