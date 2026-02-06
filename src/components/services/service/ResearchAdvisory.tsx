import { useTranslation } from "react-i18next";

const ResearchAdvisory = () => {
   const { t } = useTranslation();

   return (
      <section className="research-section section-bg pt-100 pb-100">
         <div className="container">
            {/* Section Header */}
            <div className="row mb-40">
               <div className="col-lg-8">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> {t('services.detailed.research.title')}
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        {t('services.detailed.research.subtitle')}
                     </h2>
                  </div>
               </div>
            </div>

            {/* Content Grid */}
            <div className="row g-4">
               {/* Research Team */}
               <div className="col-lg-6">
                  <div className="team-items px-4 py-4 section-bg rounded-4 h-100 wow fadeInUp" data-wow-delay=".2s">
                     <div className="content">
                        <div className="d-flex align-items-center gap-3 mb-4">
                           <div className="step-badge theme-bg text-white rounded-pill px-3 py-2 fw-600 fz-14">
                              <i className="fa-solid fa-chart-line me-2"></i>
                              {t('services.detailed.research.team.title')}
                           </div>
                        </div>
                        <p className="theme-clr4 fz-15 mb-4">{t('services.detailed.research.team.desc')}</p>
                        
                        <div className="row g-3">
                           {(t('services.detailed.research.team.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                              <div key={idx} className="col-12">
                                 <div className="d-flex align-items-center gap-3 p-3 bg-white rounded-3">
                                    <div className="num-box theme-clr fw-700 fz-18" style={{ minWidth: '30px' }}>
                                       0{idx + 1}
                                    </div>
                                    <span className="theme-clr4 fz-14 fw-500">{item}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>

               {/* Advisory */}
               <div className="col-lg-6">
                  <div className="team-items px-4 py-4 section-bg rounded-4 h-100 wow fadeInUp" data-wow-delay=".3s">
                     <div className="content">
                        <div className="d-flex align-items-center gap-3 mb-4">
                           <div className="step-badge theme-bg text-white rounded-pill px-3 py-2 fw-600 fz-14">
                              <i className="fa-solid fa-lightbulb me-2"></i>
                              {t('services.detailed.research.advisory.title')}
                           </div>
                        </div>
                        <p className="theme-clr4 fz-15 mb-4">{t('services.detailed.research.advisory.desc')}</p>
                        
                        <div className="row g-3">
                           {(t('services.detailed.research.advisory.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                              <div key={idx} className="col-12">
                                 <div className="d-flex align-items-center gap-3 p-3 bg-white rounded-3">
                                    <div className="num-box theme-clr fw-700 fz-18" style={{ minWidth: '30px' }}>
                                       0{idx + 1}
                                    </div>
                                    <span className="theme-clr4 fz-14 fw-500">{item}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ResearchAdvisory;
