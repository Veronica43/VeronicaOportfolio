import { useContext } from "react";

import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

import ContactPage from "./pages/ContactPage";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#000" : "white",

        color: darkMode && "white",
      }}
    >
      <Toggle />

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
