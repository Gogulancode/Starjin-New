import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ExecutionAcademy = () => {
   const { t } = useTranslation();

   return (
      <section className="execution-section pt-100 pb-100">
         <div className="container">
            {/* Section Header */}
            <div className="row g-lg-4 g-md-3 g-2 align-items-end mb-40">
               <div className="col-lg-7 col-md-7">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> {t('services.detailed.execution.title')}
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        {t('services.detailed.execution.subtitle')}
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5 col-md-5">
                  <div className="text-md-end wow fadeInUp" data-wow-delay=".4s">
                     <Link to="/contact" className="theme-btn style1 pe-20">
                        <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                        {t('common.contactUs')}
                     </Link>
                  </div>
               </div>
            </div>

            {/* Content Cards */}
            <div className="row g-4">
               {/* Execution Service */}
               <div className="col-lg-6">
                  <div className="financial-items rounded-4 overflow-hidden h-100 wow fadeInUp" data-wow-delay=".2s" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' }}>
                     <div className="p-4">
                        <div className="d-flex align-items-center gap-3 mb-4">
                           <div className="icon-box rounded-circle d-center" style={{ width: '60px', height: '60px', background: 'rgba(146, 194, 1, 0.2)' }}>
                              <i className="fa-solid fa-users-gear text-white fz-24"></i>
                           </div>
                           <div>
                              <h4 className="text-white fw-600 mb-1">{t('services.detailed.execution.agent.title')}</h4>
                              <p className="text-white opacity-75 fz-14 mb-0">{t('services.detailed.execution.agent.desc')}</p>
                           </div>
                        </div>

                        <ul className="list-unstyled mb-0">
                           {(t('services.detailed.execution.agent.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                              <li key={idx} className="d-flex align-items-start gap-3 mb-3">
                                 <div className="check-icon rounded-circle d-center flex-shrink-0 mt-1" style={{ width: '24px', height: '24px', background: 'var(--theme)' }}>
                                    <i className="fa-solid fa-check text-white fz-12"></i>
                                 </div>
                                 <span className="text-white opacity-90 fz-15" style={{ lineHeight: 1.6 }}>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="thumb overflow-hidden">
                        <img 
                           src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                           alt="Execution Service" 
                           className="w-100" 
                           style={{ height: '200px', objectFit: 'cover' }}
                        />
                     </div>
                  </div>
               </div>

               {/* Corporates Academy */}
               <div className="col-lg-6">
                  <div className="financial-items rounded-4 overflow-hidden h-100 wow fadeInUp" data-wow-delay=".3s" style={{ background: 'linear-gradient(135deg, #0f3460 0%, #16213e 100%)' }}>
                     <div className="p-4">
                        <div className="d-flex align-items-center gap-3 mb-4">
                           <div className="icon-box rounded-circle d-center" style={{ width: '60px', height: '60px', background: 'rgba(146, 194, 1, 0.2)' }}>
                              <i className="fa-solid fa-graduation-cap text-white fz-24"></i>
                           </div>
                           <div>
                              <h4 className="text-white fw-600 mb-1">{t('services.detailed.execution.academy.title')}</h4>
                              <p className="text-white opacity-75 fz-14 mb-0">{t('services.detailed.execution.academy.desc')}</p>
                           </div>
                        </div>

                        <ul className="list-unstyled mb-0">
                           {(t('services.detailed.execution.academy.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                              <li key={idx} className="d-flex align-items-start gap-3 mb-3">
                                 <div className="check-icon rounded-circle d-center flex-shrink-0 mt-1" style={{ width: '24px', height: '24px', background: 'var(--theme)' }}>
                                    <i className="fa-solid fa-check text-white fz-12"></i>
                                 </div>
                                 <span className="text-white opacity-90 fz-15" style={{ lineHeight: 1.6 }}>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="thumb overflow-hidden">
                        <img 
                           src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                           alt="Corporates Academy" 
                           className="w-100" 
                           style={{ height: '200px', objectFit: 'cover' }}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ExecutionAcademy;
