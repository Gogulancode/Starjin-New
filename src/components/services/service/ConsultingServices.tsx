import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ConsultingServices = () => {
   const { t } = useTranslation();

   return (
      <section className="consulting-section pt-100 pb-100">
         <div className="container">
            {/* Section Header */}
            <div className="row g-lg-4 g-md-3 g-2 align-items-end mb-40">
               <div className="col-lg-6 col-md-6">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> {t('services.detailed.consulting.title')}
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        {t('services.detailed.consulting.subtitle')}
                     </h2>
                  </div>
               </div>
               <div className="col-lg-6 col-md-6">
                  <div className="text-md-end wow fadeInUp" data-wow-delay=".4s">
                     <Link to="/contact" className="theme-btn style1 pe-20">
                        <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                        {t('common.getConsultation')}
                     </Link>
                  </div>
               </div>
            </div>

            {/* Two Column Layout */}
            <div className="row g-4">
               {/* Sole Investment */}
               <div className="col-lg-6">
                  <div className="work-list-item rounded-4 bg-white p-4 h-100 wow fadeInUp" data-wow-delay=".2s" style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
                     <div className="d-flex align-items-start gap-4">
                        <div className="icon rounded-circle d-center flex-shrink-0" style={{ width: '70px', height: '70px', background: 'var(--section-bg)' }}>
                           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 7V3H2V21H22V7H12ZM6 19H4V17H6V19ZM6 15H4V13H6V15ZM6 11H4V9H6V11ZM6 7H4V5H6V7ZM10 19H8V17H10V19ZM10 15H8V13H10V15ZM10 11H8V9H10V11ZM10 7H8V5H10V7ZM20 19H12V17H14V15H12V13H14V11H12V9H20V19ZM18 11H16V13H18V11ZM18 15H16V17H18V15Z" fill="#92C201"/>
                           </svg>
                        </div>
                        <div className="flex-grow-1">
                           <h4 className="theme-clr4 fw-600 mb-3">{t('services.detailed.consulting.sole.title')}</h4>
                           <p className="theme-clr4 fz-14 mb-4 opacity-75">{t('services.detailed.consulting.sole.desc')}</p>
                           <ul className="list-unstyled mb-0">
                              {(t('services.detailed.consulting.sole.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                                 <li key={idx} className="d-flex align-items-start gap-2 mb-3 pb-3" style={{ borderBottom: idx < 3 ? '1px solid #eee' : 'none' }}>
                                    <div className="check-icon rounded-circle d-center flex-shrink-0 mt-1" style={{ width: '22px', height: '22px', background: 'rgba(146, 194, 1, 0.15)' }}>
                                       <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z" fill="#92C201" />
                                       </svg>
                                    </div>
                                    <span className="theme-clr4 fz-15">{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>

               {/* JV / Partnership */}
               <div className="col-lg-6">
                  <div className="work-list-item rounded-4 bg-white p-4 h-100 wow fadeInUp" data-wow-delay=".3s" style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.06)' }}>
                     <div className="d-flex align-items-start gap-4">
                        <div className="icon rounded-circle d-center flex-shrink-0" style={{ width: '70px', height: '70px', background: 'var(--section-bg)' }}>
                           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.0002 14.0625C11.855 14.3125 12.7097 14.5 13.5645 14.5625C13.5645 15.625 13.5645 16.6875 13.5645 17.75C12.2727 17.75 10.981 17.75 9.68921 17.75C9.68921 17.3125 9.68921 16.875 9.68921 16.4375C10.1064 16.3125 10.5237 16.1875 10.9409 16.0625C10.9409 15.3958 10.9409 14.7292 10.9409 14.0625C11.0002 14.0625 11.0002 14.0625 11.0002 14.0625ZM6.50014 8C7.16681 8 7.83348 8 8.50014 8C8.50014 8.66667 8.50014 9.33333 8.50014 10C7.83348 10 7.16681 10 6.50014 10C6.50014 9.33333 6.50014 8.66667 6.50014 8ZM15.5001 8C16.1668 8 16.8335 8 17.5001 8C17.5001 8.66667 17.5001 9.33333 17.5001 10C16.8335 10 16.1668 10 15.5001 10C15.5001 9.33333 15.5001 8.66667 15.5001 8ZM2 5L12 1L22 5V11C22 16.5228 17.5228 21 12 21C6.47715 21 2 16.5228 2 11V5Z" fill="#92C201"/>
                           </svg>
                        </div>
                        <div className="flex-grow-1">
                           <h4 className="theme-clr4 fw-600 mb-3">{t('services.detailed.consulting.jv.title')}</h4>
                           <p className="theme-clr4 fz-14 mb-4 opacity-75">{t('services.detailed.consulting.jv.desc')}</p>
                           <ul className="list-unstyled mb-0">
                              {(t('services.detailed.consulting.jv.items', { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                                 <li key={idx} className="d-flex align-items-start gap-2 mb-3 pb-3" style={{ borderBottom: idx < 2 ? '1px solid #eee' : 'none' }}>
                                    <div className="check-icon rounded-circle d-center flex-shrink-0 mt-1" style={{ width: '22px', height: '22px', background: 'rgba(146, 194, 1, 0.15)' }}>
                                       <svg width="10" height="10" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z" fill="#92C201" />
                                       </svg>
                                    </div>
                                    <span className="theme-clr4 fz-15">{item}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ConsultingServices;
