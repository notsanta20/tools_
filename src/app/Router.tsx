import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import HashGenerator from "./routes/app/HashGenerator";
import ErrorPage from "./routes/ErrorPage";

function Router() {
  return (
    <div className="px-[20%] py-3 font-(family-name:--font-mono) text-white h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hash-generator" element={<HashGenerator />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Router;
