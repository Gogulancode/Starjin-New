import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicesBanner = () => {
   const { t } = useTranslation();

   return (
      <section className="breadcrumb-section pt-180 pb-100 position-relative">
         <div className="shape4 position-absolute d-xxl-block d-none">
            <img src="/assets/img/shape/shape8.png" alt="shape" />
         </div>
         <div className="shape2 position-absolute d-xxl-block d-none">
            <img src="/assets/img/shape/shape7.png" alt="shape" />
         </div>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-8">
                  <div className="breadcrumb-content wow fadeInUp" data-wow-delay=".3s">
                     <p className="theme-clr fw-600 fz-18 mb-3">
                        {t('services.hero.tagline1')}
                     </p>
                     <h1 className="theme-clr4 fw-bold mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.2 }}>
                        <span className="theme-clr">{t('services.hero.taglineHighlight')}</span><br />
                        {t('services.hero.tagline2')}
                     </h1>
                     <p className="theme-clr4 fz-16 mb-4" style={{ maxWidth: '600px', lineHeight: 1.8 }}>
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

export default ServicesBanner;
