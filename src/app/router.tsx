// Router for Pages
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function Router() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Home />} />
    </Routes>
  );
}

export default Router;
