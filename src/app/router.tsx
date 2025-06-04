// Router for Pages
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function Router() {
  return (
    <Routes>
      <Route path="/jaylogalam" element={<Home />} />
    </Routes>
  );
}

export default Router;
