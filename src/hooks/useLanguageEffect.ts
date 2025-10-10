import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageEffect = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update document language attribute
    document.documentElement.lang = i18n.language;
    
    // Update document direction (Korean is LTR like English)
    document.documentElement.dir = 'ltr';
    
    // Add language-specific CSS class for styling
    document.documentElement.className = 
      document.documentElement.className.replace(/\blang-\w+\b/g, '') + ` lang-${i18n.language}`;
      
  }, [i18n.language]);
};