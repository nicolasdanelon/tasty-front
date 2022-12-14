import { h } from "preact";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Restaurant from "./pages/Restaurant";
import Profile from "./pages/Profile";

export function App() {
  return (
    <div style={{ maxWidth: 1800, marginLeft: "auto", marginRight: "auto" }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Restaurant />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="test" element={() => <p>Holis</p>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
