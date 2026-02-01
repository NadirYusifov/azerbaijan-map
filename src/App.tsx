import Footer from "./layout/footer";
import Navbar from "./layout/navbar";
import About from "./pages/about";
import Home from "./pages/home";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="haqqimizda" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

