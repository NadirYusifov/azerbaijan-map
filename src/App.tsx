import { Footer } from "./layout/footer";
import { Navbar } from "./layout/navbar";
import { lazy, Suspense } from "react";
import { Loading } from "./components/loading";
import { Route, Routes } from "react-router";

export default function App() {
  const Home = lazy(() => import("./pages/home"));
  const About = lazy(() => import("./pages/about"));

  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="haqqimizda" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
