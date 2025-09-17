import { Routes, Route } from "react-router";
import Home from "./routes/Home";
import HashGenerator from "./routes/app/HashGenerator";
import ErrorPage from "./routes/ErrorPage";
import Header from "./routes/Header";
import Footer from "./routes/Footer";
import UnderConstruction from "./routes/UnderConstruction";
import PasswordGenerator from "./routes/app/PasswordGenerator";

function Router() {
  return (
    <div className="px-[20%] py-3 font-(family-name:--font-mono) text-white h-screen flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-tools" element={<UnderConstruction />} />
        <Route path="/hash-generator" element={<HashGenerator />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Router;
