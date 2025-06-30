import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import { Theme } from "./Components/Theme";

function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDarkset"))
  );
  useEffect(() => {
    // localStorage.setItem("isDarkset", JSON.stringify(isDark));
    document.body.classList.toggle("dark_hero", isDark);
  }, [isDark]);
  return (
    <Theme.Provider value={[isDark, setIsDark]}>
      <Profile />
      <Projects />
      <Skills />
      <Contact />
    </Theme.Provider>
  );
}

export default App;
