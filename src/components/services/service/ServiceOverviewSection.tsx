import { useTranslation } from "react-i18next";

const ServiceOverviewSection = () => {
   const { t } = useTranslation();

   const services = [
      {
         id: "01",
         titleKey: "services.overview.businessEntry.title",
         itemsKey: "services.overview.businessEntry.items",
         icon: "fa-building",
      },
      {
         id: "02",
         titleKey: "services.overview.investment.title",
         itemsKey: "services.overview.investment.items",
         icon: "fa-chart-line",
      },
      {
         id: "03",
         titleKey: "services.overview.b2bPartner.title",
         itemsKey: "services.overview.b2bPartner.items",
         icon: "fa-handshake",
      },
      {
         id: "04",
         titleKey: "services.overview.strategy.title",
         itemsKey: "services.overview.strategy.items",
         icon: "fa-chess",
      },
      {
         id: "05",
         titleKey: "services.overview.businessData.title",
         itemsKey: "services.overview.businessData.items",
         icon: "fa-database",
      },
      {
         id: "06",
         titleKey: "services.overview.cultural.title",
         itemsKey: "services.overview.cultural.items",
         icon: "fa-users",
      },
   ];

   return (
      <section className="pt-80 pb-80">
         <div className="container">
            {/* Tagline */}
            <div className="row justify-content-center mb-50">
               <div className="col-lg-10 text-center">
                  <h2 className="theme-clr4 fw-600 mb-3 wow fadeInUp" data-wow-delay=".1s" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)' }}>
                     {t('services.hero.tagline1')}{' '}
                     <span className="theme-clr">{t('services.hero.taglineHighlight')}</span>
                     <br />
                     {t('services.hero.tagline2')}
                  </h2>
                  <p className="fz-16 text-secondary wow fadeInUp" data-wow-delay=".2s" style={{ maxWidth: '650px', margin: '0 auto' }}>
                     {t('services.hero.description')}
                  </p>
               </div>
            </div>

            {/* Services Grid */}
            <div className="row g-4">
               {services.map((service, index) => (
                  <div key={service.id} className="col-lg-4 col-md-6">
                     <div 
                        className="team-items service-items1 hover-translate8 px-4 py-4 section-bg rounded-4 h-100 wow fadeInUp"
                        data-wow-delay={`${0.1 * (index + 1)}s`}
                     >
                        <div className="d-flex align-items-start gap-3 mb-3">
                           <div className="service-icon-box d-flex align-items-center justify-content-center rounded-3" 
                              style={{ 
                                 width: '48px', 
                                 height: '48px', 
                                 background: 'rgba(146, 194, 1, 0.1)',
                                 flexShrink: 0
                              }}>
                              <i className={`fa-solid ${service.icon} theme-clr fz-20`}></i>
                           </div>
                           <div>
                              <span className="fz-12 fw-700 theme-clr d-block mb-1">{service.id}</span>
                              <h5 className="theme-clr4 fw-600 mb-0 fz-18 lh-120">{t(service.titleKey)}</h5>
                           </div>
                        </div>
                        <ul className="list-unstyled mb-0">
                           {(t(service.itemsKey, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                              <li key={idx} className="d-flex align-items-start gap-2 mb-2 fz-14 text-secondary">
                                 <i className="fa-solid fa-circle theme-clr fz-6 mt-2"></i>
                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServiceOverviewSection;
