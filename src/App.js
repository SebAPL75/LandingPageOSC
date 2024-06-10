import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="aboutus" element={<AboutUsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
