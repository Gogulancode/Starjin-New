import { useTranslation } from "react-i18next";

const ServiceOverview = () => {
   const { t } = useTranslation();

   const services = [
      {
         id: 1,
         number: "01",
         icon: "fa-solid fa-building",
         titleKey: "services.overview.businessEntry.title",
         items: [
            "services.overview.businessEntry.items.0",
            "services.overview.businessEntry.items.1",
            "services.overview.businessEntry.items.2"
         ],
         color: "#4169E1"
      },
      {
         id: 2,
         number: "02",
         icon: "fa-solid fa-chart-pie",
         titleKey: "services.overview.investment.title",
         items: [
            "services.overview.investment.items.0",
            "services.overview.investment.items.1"
         ],
         color: "#92C201"
      },
      {
         id: 3,
         number: "03",
         icon: "fa-solid fa-handshake",
         titleKey: "services.overview.b2bPartner.title",
         items: [
            "services.overview.b2bPartner.items.0",
            "services.overview.b2bPartner.items.1",
            "services.overview.b2bPartner.items.2"
         ],
         color: "#FF6B35"
      },
      {
         id: 4,
         number: "04",
         icon: "fa-solid fa-chess",
         titleKey: "services.overview.strategy.title",
         items: [
            "services.overview.strategy.items.0",
            "services.overview.strategy.items.1",
            "services.overview.strategy.items.2",
            "services.overview.strategy.items.3"
         ],
         color: "#9B59B6"
      },
      {
         id: 5,
         number: "05",
         icon: "fa-solid fa-database",
         titleKey: "services.overview.businessData.title",
         items: [
            "services.overview.businessData.items.0",
            "services.overview.businessData.items.1",
            "services.overview.businessData.items.2"
         ],
         color: "#00BCD4"
      },
      {
         id: 6,
         number: "06",
         icon: "fa-solid fa-users-gear",
         titleKey: "services.overview.cultural.title",
         items: [
            "services.overview.cultural.items.0",
            "services.overview.cultural.items.1"
         ],
         color: "#E91E63"
      }
   ];

   return (
      <section className="service-overview-section pt-100 pb-100">
         <div className="container">
            {/* Section Header */}
            <div className="row mb-60">
               <div className="col-lg-8 mx-auto text-center">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-3 justify-content-center">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> {t('services.overview.tag')}
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp mb-4" data-wow-delay=".3s">
                        {t('services.overview.title')}
                     </h2>
                     <p className="theme-clr4 fz-16" style={{ lineHeight: '1.8' }}>
                        {t('services.overview.description')}
                     </p>
                  </div>
               </div>
            </div>

            {/* Service Cards Grid */}
            <div className="row g-4">
               {services.map((service) => (
                  <div key={service.id} className="col-lg-4 col-md-6">
                     <div 
                        className="service-overview-card h-100 p-4 rounded-4 position-relative wow fadeInUp"
                        data-wow-delay={`${0.1 * service.id}s`}
                        style={{
                           background: 'white',
                           boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                           borderTop: `4px solid ${service.color}`,
                           transition: 'all 0.3s ease'
                        }}
                     >
                        {/* Number Badge */}
                        <div 
                           className="service-number position-absolute"
                           style={{
                              top: '20px',
                              right: '20px',
                              width: '45px',
                              height: '45px',
                              borderRadius: '50%',
                              background: '#1a1a2e',
                              border: '2px dashed var(--theme)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'white',
                              fontWeight: '700',
                              fontSize: '14px'
                           }}
                        >
                           {service.number}
                        </div>

                        {/* Icon */}
                        <div 
                           className="service-icon mb-4"
                           style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '12px',
                              background: `${service.color}15`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                           }}
                        >
                           <i className={`${service.icon} fz-24`} style={{ color: service.color }}></i>
                        </div>

                        {/* Title */}
                        <h4 className="fw-bold mb-3" style={{ color: service.color, fontSize: '1.2rem' }}>
                           {t(service.titleKey)}
                        </h4>

                        {/* Items List */}
                        <ul className="list-unstyled mb-0">
                           {service.items.map((item, idx) => (
                              <li 
                                 key={idx} 
                                 className="d-flex align-items-start gap-2 mb-2"
                                 style={{ color: '#555', fontSize: '0.9rem', lineHeight: '1.5' }}
                              >
                                 <i className="fa-solid fa-circle-check mt-1" style={{ color: service.color, fontSize: '12px' }}></i>
                                 <span>{t(item)}</span>
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

export default ServiceOverview;
