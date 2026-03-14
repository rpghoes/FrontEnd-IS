import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

// Lazy imports
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));

function Loading() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <div className="spinner"></div>
      <p>Loading page...</p>
    </div>
  );
}

function ErrorFallback() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Something went wrong</h2>
      <p>Please try again.</p>
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <div>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/profile">Profile</Link>
        </nav>

        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
