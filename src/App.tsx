import { HelmetProvider } from "react-helmet-async"
import { useEffect } from "react"
import AppNavigation from "./navigation/Navigation"
import { useLanguageEffect } from "./hooks/useLanguageEffect"

function App() {
  // Apply language effects (HTML lang attribute, CSS classes)
  useLanguageEffect();

  // Initialize theme on app start
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "theme-default";
    document.documentElement.className = savedTheme;
  }, []);

  return (
    <>
      <HelmetProvider>
        <AppNavigation />
      </HelmetProvider>
    </>
  )
}

export default App