import { useTranslation } from "react-i18next";

const OneStopSolution = () => {
   const { t } = useTranslation();

   const topRowServices = [
      {
         id: 1,
         number: "01",
         titleKey: "services.oneStop.businessEntry.title",
         items: [
            "services.oneStop.businessEntry.items.0",
            "services.oneStop.businessEntry.items.1",
            "services.oneStop.businessEntry.items.2"
         ],
         color: "#4169E1"
      },
      {
         id: 2,
         number: "02",
         titleKey: "services.oneStop.investment.title",
         items: [
            "services.oneStop.investment.items.0",
            "services.oneStop.investment.items.1"
         ],
         color: "#4169E1"
      },
      {
         id: 3,
         number: "03",
         titleKey: "services.oneStop.b2bPartner.title",
         items: [
            "services.oneStop.b2bPartner.items.0",
            "services.oneStop.b2bPartner.items.1",
            "services.oneStop.b2bPartner.items.2"
         ],
         color: "#4169E1"
      }
   ];

   const bottomRowServices = [
      {
         id: 6,
         number: "06",
         titleKey: "services.oneStop.cultural.title",
         items: [
            "services.oneStop.cultural.items.0",
            "services.oneStop.cultural.items.1"
         ],
         color: "#4169E1"
      },
      {
         id: 5,
         number: "05",
         titleKey: "services.oneStop.businessData.title",
         items: [
            "services.oneStop.businessData.items.0",
            "services.oneStop.businessData.items.1",
            "services.oneStop.businessData.items.2"
         ],
         color: "#4169E1"
      },
      {
         id: 4,
         number: "04",
         titleKey: "services.oneStop.strategy.title",
         items: [
            "services.oneStop.strategy.items.0",
            "services.oneStop.strategy.items.1",
            "services.oneStop.strategy.items.2",
            "services.oneStop.strategy.items.3"
         ],
         color: "#4169E1"
      }
   ];

   const ServiceArrow = ({ service, isReverse = false }: { service: typeof topRowServices[0], isReverse?: boolean }) => (
      <div className="col-lg-4 col-md-6 mb-4">
         <div 
            className={`service-arrow-card position-relative ${isReverse ? 'reverse' : ''}`}
            style={{
               background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
               borderRadius: '12px',
               padding: '30px 25px',
               minHeight: '220px',
               boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
               transition: 'all 0.3s ease'
            }}
         >
            {/* Number Badge */}
            <div 
               className="service-number position-absolute"
               style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#1a1a2e',
                  border: '3px dashed var(--theme)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  ...(isReverse ? { left: '-25px' } : { right: '-25px' }),
                  zIndex: 2
               }}
            >
               {service.number}
            </div>

            {/* Content */}
            <div className={`content ${isReverse ? 'text-end pe-3' : 'ps-0'}`}>
               <h4 
                  className="fw-bold mb-3"
                  style={{ color: service.color, fontSize: '1.3rem' }}
               >
                  {t(service.titleKey)}
               </h4>
               <ul className={`list-unstyled mb-0 ${isReverse ? 'text-end' : ''}`}>
                  {service.items.map((item, idx) => (
                     <li 
                        key={idx} 
                        className={`mb-2 d-flex align-items-start gap-2 ${isReverse ? 'justify-content-end' : ''}`}
                        style={{ color: '#444', fontSize: '0.9rem' }}
                     >
                        {isReverse && <span>{t(item)}</span>}
                        <span style={{ color: service.color }}>•</span>
                        {!isReverse && <span>{t(item)}</span>}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );

   return (
      <section className="one-stop-solution-section pt-100 pb-100 section-bg">
         <div className="container">
            {/* Section Header */}
            <div className="row mb-60">
               <div className="col-12 text-center">
                  <h2 className="theme-clr4 fw-normal mb-4" style={{ fontSize: '2.5rem' }}>
                     {t('services.oneStop.tagline1')} <span className="theme-clr fw-bold">{t('services.oneStop.taglineHighlight')}</span> {t('services.oneStop.tagline2')}
                  </h2>
               </div>
            </div>

            {/* Top Row - Left to Right Flow */}
            <div className="row justify-content-center mb-3">
               {topRowServices.map((service) => (
                  <ServiceArrow key={service.id} service={service} />
               ))}
            </div>

            {/* Flow Connector */}
            <div className="row mb-3">
               <div className="col-12 d-flex justify-content-center">
                  <div 
                     style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'var(--theme)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '24px'
                     }}
                  >
                     <i className="fa-solid fa-arrows-rotate"></i>
                  </div>
               </div>
            </div>

            {/* Bottom Row - Right to Left Flow */}
            <div className="row justify-content-center">
               {bottomRowServices.map((service) => (
                  <ServiceArrow key={service.id} service={service} isReverse />
               ))}
            </div>
         </div>
      </section>
   );
};

export default OneStopSolution;
