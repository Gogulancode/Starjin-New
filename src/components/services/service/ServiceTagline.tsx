import { useTranslation } from "react-i18next";
import { getTranslatedArray } from "../../../utils/i18n";

const serviceIcons = [
   "fa-building-columns",
   "fa-chart-line",
   "fa-handshake",
   "fa-chess-queen",
   "fa-database",
   "fa-palette",
];

const ServiceTagline = () => {
   const { t } = useTranslation();

   const services = [
      { num: "01", titleKey: "services.overview.businessEntry.title", itemsKey: "services.overview.businessEntry.items" },
      { num: "02", titleKey: "services.overview.investment.title", itemsKey: "services.overview.investment.items" },
      { num: "03", titleKey: "services.overview.b2bPartner.title", itemsKey: "services.overview.b2bPartner.items" },
      { num: "04", titleKey: "services.overview.strategy.title", itemsKey: "services.overview.strategy.items" },
      { num: "05", titleKey: "services.overview.businessData.title", itemsKey: "services.overview.businessData.items" },
      { num: "06", titleKey: "services.overview.cultural.title", itemsKey: "services.overview.cultural.items" },
   ];

   // Group into pairs (rows of 2)
   const rows: (typeof services)[] = [];
   for (let i = 0; i < services.length; i += 2) {
      rows.push(services.slice(i, i + 2));
   }

   return (
      <section className="capabilities-section pt-100 pb-100">
         <div className="container">
            {/* Header: Title left, Description right */}
            <div className="row mb-60 align-items-start">
               <div className="col-lg-6">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-lg-3 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> {t('services.capabilities.tag')}
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".2s">
                        {t('services.overview.title')}
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5 offset-lg-1">
                  <p className="wow fadeInUp" data-wow-delay=".3s"
                     style={{ opacity: 0.6, lineHeight: 1.7, paddingTop: '2rem' }}>
                     {t('services.overview.description')}
                  </p>
               </div>
            </div>

            {/* Service rows - 2 per row with dividers */}
            <div className="cap-grid">
               {rows.map((row, rowIdx) => (
                  <div key={rowIdx} className="cap-row">
                     <div className="row">
                        {row.map((service, colIdx) => {
                           const globalIdx = rowIdx * 2 + colIdx;
                           return (
                              <div key={service.num} className={`col-lg-6 cap-col ${colIdx === 0 ? 'cap-col--left' : 'cap-col--right'}`}>
                                 <div className="cap-item wow fadeInUp" data-wow-delay={`${0.1 * (globalIdx + 1)}s`}>
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                       <span className="cap-num">{service.num}</span>
                                       <i className={`fa-solid ${serviceIcons[globalIdx]} cap-icon`}></i>
                                       <h4 className="theme-clr4 fw-700 mb-0">{t(service.titleKey)}</h4>
                                    </div>
                                    <ul className="list-unstyled mb-0 cap-list">
                                       {getTranslatedArray(t, service.itemsKey).map((item, idx) => (
                                          <li key={idx}>
                                             <span className="cap-bullet">•</span>
                                             {item}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                                 {/* Arrow between columns on desktop */}
                                 {colIdx === 0 && row.length > 1 && (
                                    <div className="cap-arrow d-none d-lg-flex">
                                       <i className="fa-solid fa-arrow-right"></i>
                                    </div>
                                 )}
                              </div>
                           );
                        })}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServiceTagline;
