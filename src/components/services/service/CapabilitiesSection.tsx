import { useTranslation } from "react-i18next";
import { useState } from "react";

const CapabilitiesSection = () => {
   const { t } = useTranslation();
   const [hoveredId, setHoveredId] = useState<number | null>(null);

   const capabilities = [
      {
         id: 1,
         icon: "fa-solid fa-building",
         titleKey: "services.overview.businessEntry.title",
         itemsKey: "services.overview.businessEntry.items",
         color: "#4169E1"
      },
      {
         id: 2,
         icon: "fa-solid fa-chart-pie",
         titleKey: "services.overview.investment.title",
         itemsKey: "services.overview.investment.items",
         color: "#92C201"
      },
      {
         id: 3,
         icon: "fa-solid fa-handshake",
         titleKey: "services.overview.b2bPartner.title",
         itemsKey: "services.overview.b2bPartner.items",
         color: "#FF6B35"
      },
      {
         id: 4,
         icon: "fa-solid fa-chess",
         titleKey: "services.overview.strategy.title",
         itemsKey: "services.overview.strategy.items",
         color: "#9B59B6"
      },
      {
         id: 5,
         icon: "fa-solid fa-database",
         titleKey: "services.overview.businessData.title",
         itemsKey: "services.overview.businessData.items",
         color: "#00BCD4"
      },
      {
         id: 6,
         icon: "fa-solid fa-users-gear",
         titleKey: "services.overview.cultural.title",
         itemsKey: "services.overview.cultural.items",
         color: "#E91E63"
      }
   ];

   return (
      <section className="capabilities-section pt-80 pb-100">
         <div className="container">
            {/* Section Label */}
            <div className="row mb-4">
               <div className="col-12">
                  <span className="theme-clr fw-700 text-uppercase fz-14 letter-spacing-2">
                     {t('services.overview.tag')}
                  </span>
               </div>
            </div>

            {/* Section Title */}
            <div className="row mb-50">
               <div className="col-lg-8">
                  <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".2s" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
                     {t('services.overview.title')}
                  </h2>
               </div>
            </div>

            {/* Capabilities Grid - Accenture Style */}
            <div className="row">
               {capabilities.map((capability, index) => (
                  <div key={capability.id} className="col-lg-4 col-md-6 mb-4">
                     <div 
                        className="capability-card h-100 p-4 rounded-3 position-relative overflow-hidden wow fadeInUp"
                        data-wow-delay={`${0.1 * (index + 1)}s`}
                        onMouseEnter={() => setHoveredId(capability.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{ 
                           background: hoveredId === capability.id ? capability.color : '#fff',
                           border: '1px solid #eee',
                           transition: 'all 0.4s ease',
                           cursor: 'pointer',
                           minHeight: '280px'
                        }}
                     >
                        {/* Icon */}
                        <div 
                           className="capability-icon mb-3"
                           style={{ 
                              color: hoveredId === capability.id ? '#fff' : capability.color,
                              transition: 'all 0.4s ease'
                           }}
                        >
                           <i className={`${capability.icon} fz-32`}></i>
                        </div>

                        {/* Title */}
                        <h4 
                           className="fw-bold mb-4"
                           style={{ 
                              color: hoveredId === capability.id ? '#fff' : '#234345',
                              transition: 'all 0.4s ease',
                              fontSize: '1.25rem'
                           }}
                        >
                           {t(capability.titleKey)}
                        </h4>

                        {/* Items - Show on hover */}
                        <ul className="list-unstyled mb-0">
                           {(t(capability.itemsKey, { returnObjects: true }) as string[]).slice(0, 3).map((item: string, idx: number) => (
                              <li 
                                 key={idx} 
                                 className="mb-2 fz-14"
                                 style={{ 
                                    color: hoveredId === capability.id ? 'rgba(255,255,255,0.9)' : '#666',
                                    transition: 'all 0.4s ease'
                                 }}
                              >
                                 • {item}
                              </li>
                           ))}
                        </ul>

                        {/* Arrow */}
                        <div 
                           className="capability-arrow position-absolute"
                           style={{ 
                              bottom: '20px',
                              right: '20px',
                              color: hoveredId === capability.id ? '#fff' : capability.color,
                              transition: 'all 0.4s ease',
                              transform: hoveredId === capability.id ? 'translateX(5px)' : 'translateX(0)'
                           }}
                        >
                           <i className="fa-solid fa-arrow-right fz-18"></i>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default CapabilitiesSection;
