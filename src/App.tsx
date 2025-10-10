import { HelmetProvider } from "react-helmet-async"
import AppNavigation from "./navigation/Navigation"
import { useLanguageEffect } from "./hooks/useLanguageEffect"

function App() {
  // Apply language effects (HTML lang attribute, CSS classes)
  useLanguageEffect();

  return (
    <>
      <HelmetProvider>
        <AppNavigation />
      </HelmetProvider>
    </>
  )
}

export default App