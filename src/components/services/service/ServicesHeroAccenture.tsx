import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServicesHeroAccenture = () => {
   const { t } = useTranslation();

   return (
      <section className="services-hero pt-180 pb-80 position-relative" style={{ 
         background: 'linear-gradient(180deg, var(--section-bg) 0%, #fff 100%)'
      }}>
         <div className="container">
            <div className="row">
               <div className="col-lg-10">
                  <h1 className="theme-clr4 fw-bold mb-4 wow fadeInUp" data-wow-delay=".2s" style={{ 
                     fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                     lineHeight: 1.15
                  }}>
                     {t('services.hero.tagline1')}<br/>
                     <span className="theme-clr">{t('services.hero.taglineHighlight')}</span><br/>
                     {t('services.hero.tagline2')}
                  </h1>
                  <p className="theme-clr4 fz-18 mb-5 wow fadeInUp" data-wow-delay=".3s" style={{ 
                     maxWidth: '700px',
                     lineHeight: 1.8
                  }}>
                     {t('services.hero.description')}
                  </p>
                  <Link to="/contact" className="theme-btn style1 pe-20 wow fadeInUp" data-wow-delay=".4s">
                     <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                     {t('services.hero.cta')}
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ServicesHeroAccenture;
