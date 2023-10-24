import "./App.css";
import "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Certifications from "./Pages/Certifications";
import Courses from "./Pages/Courses";
import NotFound from "./Pages/NotFound";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Nosotros" element={<AboutUs />} />
            <Route path="Cursos" element={<Courses />} />
            <Route path="Certificaciones" element={<Certifications />} />
            <Route path="Contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
