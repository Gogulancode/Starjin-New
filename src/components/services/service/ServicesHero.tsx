import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServicesHero = () => {
   const { t } = useTranslation();

   return (
      <section 
         className="services-hero-section position-relative pt-120 pb-100"
         style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            overflow: 'hidden'
         }}
      >
         {/* Background Pattern */}
         <div 
            className="position-absolute w-100 h-100" 
            style={{
               top: 0,
               left: 0,
               backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(146, 194, 1, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(65, 105, 225, 0.15) 0%, transparent 50%)',
               pointerEvents: 'none'
            }}
         />
         
         <div className="container position-relative">
            <div className="row align-items-center">
               <div className="col-lg-8 mx-auto text-center">
                  <div className="services-hero-content">
                     <h1 className="text-white fw-normal mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.3 }}>
                        {t('services.hero.tagline1')} <br/>
                        <span className="fw-bold" style={{ color: 'var(--theme)' }}>{t('services.hero.taglineHighlight')}</span> <br/>
                        {t('services.hero.tagline2')}
                     </h1>
                     <p className="text-white opacity-75 fz-18 mb-5" style={{ maxWidth: '600px', margin: '0 auto', lineHeight: 1.8 }}>
                        {t('services.hero.description')}
                     </p>
                     <Link to="/contact" className="theme-btn style1 pe-20">
                        <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                        {t('services.hero.cta')}
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ServicesHero;
