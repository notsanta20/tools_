import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import HashGenerator from "./routes/app/HashGenerator";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hash-generator" element={<HashGenerator />} />
    </Routes>
  );
}

export default Router;
