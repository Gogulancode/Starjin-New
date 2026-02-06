import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServiceGrid = () => {
   const { t } = useTranslation();

   const services = [
      {
         id: 1,
         number: "01",
         icon: "/assets/img/icon/choose-icon1.png",
         titleKey: "services.overview.businessEntry.title",
         itemsKey: "services.overview.businessEntry.items",
         thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
         id: 2,
         number: "02",
         icon: "/assets/img/icon/choose-icon2.png",
         titleKey: "services.overview.investment.title",
         itemsKey: "services.overview.investment.items",
         thumb: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
         id: 3,
         number: "03",
         icon: "/assets/img/icon/choose-icon3.png",
         titleKey: "services.overview.b2bPartner.title",
         itemsKey: "services.overview.b2bPartner.items",
         thumb: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
         id: 4,
         number: "04",
         icon: "/assets/img/icon/choose-icon4.png",
         titleKey: "services.overview.strategy.title",
         itemsKey: "services.overview.strategy.items",
         thumb: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
         id: 5,
         number: "05",
         icon: "/assets/img/icon/financial-icon1.png",
         titleKey: "services.overview.businessData.title",
         itemsKey: "services.overview.businessData.items",
         thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      },
      {
         id: 6,
         number: "06",
         icon: "/assets/img/icon/financial-icon2.png",
         titleKey: "services.overview.cultural.title",
         itemsKey: "services.overview.cultural.items",
         thumb: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
   ];

   return (
      <section className="service-section section-bg pt-100 pb-100">
         <div className="container">
            {/* Section Header */}
            <div className="row g-sm-4 g-3 align-items-end mb-40">
               <div className="col-lg-7 col-md-7">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> {t('services.overview.tag')}
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        {t('services.overview.title')}
                     </h2>
                  </div>
               </div>
               <div className="col-lg-5 col-md-5">
                  <p className="theme-clr4 mb-0 wow fadeInUp" data-wow-delay=".4s">
                     {t('services.overview.description')}
                  </p>
               </div>
            </div>

            {/* Service Cards Grid */}
            <div className="row g-4">
               {services.map((service) => (
                  <div key={service.id} className="col-lg-4 col-md-6">
                     <div className="team-items service-items1 hover-translate8 px-4 py-4 section-bg rounded-4 h-100">
                        {/* Card Header with Number */}
                        <div className="d-flex align-items-center justify-content-between mb-3">
                           <div className="d-flex align-items-center gap-3">
                              <div className="icon-box theme-bg rounded-circle d-center" style={{ width: '50px', height: '50px' }}>
                                 <img src={service.icon} alt="icon" style={{ width: '24px', height: '24px' }} />
                              </div>
                              <span className="step-number theme-clr fw-700 fz-24">{service.number}</span>
                           </div>
                           <Link to="/services-details" className="theme-clr4 border hover-theme1 w-40 h-40 white-bg rounded-circle d-center fs-five">
                              <i className="fa-solid fa-arrow-right fz-14"></i>
                           </Link>
                        </div>

                        {/* Title */}
                        <h5 className="mb-3 wow fadeInUp" data-wow-delay=".3s">
                           <Link to="/services-details" className="theme-clr4 lh-110 fw-600">
                              {t(service.titleKey)}
                           </Link>
                        </h5>

                        {/* Items List */}
                        <ul className="list-unstyled mb-4">
                           {(t(service.itemsKey, { returnObjects: true }) as string[]).map((item: string, idx: number) => (
                              <li key={idx} className="d-flex align-items-start gap-2 mb-2">
                                 <svg className="flex-shrink-0 mt-1" width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z" fill="#92C201" />
                                 </svg>
                                 <span className="fz-14 theme-clr4">{item}</span>
                              </li>
                           ))}
                        </ul>

                        {/* Thumbnail */}
                        <div className="thumb w-100 overflow-hidden rounded-3">
                           <img src={service.thumb} alt={t(service.titleKey)} className="w-100" style={{ height: '160px', objectFit: 'cover' }} />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default ServiceGrid;
