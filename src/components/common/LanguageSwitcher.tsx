import { useTranslation } from 'react-i18next';
import { useState } from 'react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' }
  ];

  const changeLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div className="language-switcher position-relative">
      <button 
        className="btn btn-outline-dark btn-sm d-flex align-items-center gap-2" 
        type="button" 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          border: '1px solid rgba(0,0,0,0.2)', 
          fontSize: '14px',
          minWidth: '120px',
          justifyContent: 'space-between',
          color: '#000',
          backgroundColor: 'transparent'
        }}
      >
        <div className="d-flex align-items-center gap-2">
          <span>{currentLanguage.flag}</span>
          <span className="d-none d-md-inline" style={{ color: '#000' }}>{currentLanguage.name}</span>
        </div>
        <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`} style={{ fontSize: '12px', color: '#000' }}></i>
      </button>
      
      {isOpen && (
        <>
          {/* Backdrop to close dropdown */}
          <div 
            className="position-fixed top-0 start-0 w-100 h-100" 
            onClick={() => setIsOpen(false)}
            style={{ zIndex: 1000 }}
          ></div>
          
          {/* Dropdown Menu */}
          <div 
            className="position-absolute top-100 end-0 mt-2 bg-white border rounded shadow-lg"
            style={{ 
              zIndex: 1001, 
              minWidth: '180px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
            }}
          >
            {languages.map((language) => (
              <button 
                key={language.code}
                className={`w-100 d-flex align-items-center gap-3 px-3 py-2 border-0 bg-transparent text-start ${
                  i18n.language === language.code ? 'bg-primary text-white' : 'text-dark'
                }`}
                onClick={() => changeLanguage(language.code)}
                style={{ 
                  fontSize: '14px',
                  transition: 'all 0.2s ease',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  if (i18n.language !== language.code) {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                  }
                }}
                onMouseLeave={(e) => {
                  if (i18n.language !== language.code) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span style={{ fontSize: '16px' }}>{language.flag}</span>
                <span>{language.name}</span>
                {i18n.language === language.code && (
                  <i className="fa-solid fa-check ms-auto" style={{ fontSize: '12px' }}></i>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;