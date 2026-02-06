import { useTranslation } from "react-i18next";
import { useState } from "react";

const ServiceCategories = () => {
   const { t } = useTranslation();
   const [activeTab, setActiveTab] = useState(1);

   const serviceCategories = [
      {
         id: 1,
         icon: "fa-solid fa-briefcase",
         titleKey: "services.categories.consulting.title",
         subtitleKey: "services.categories.consulting.subtitle",
         color: "#4169E1",
         subsections: [
            {
               titleKey: "services.categories.consulting.sole.title",
               items: [
                  "services.categories.consulting.sole.items.0",
                  "services.categories.consulting.sole.items.1",
                  "services.categories.consulting.sole.items.2",
                  "services.categories.consulting.sole.items.3"
               ]
            },
            {
               titleKey: "services.categories.consulting.jv.title",
               items: [
                  "services.categories.consulting.jv.items.0",
                  "services.categories.consulting.jv.items.1",
                  "services.categories.consulting.jv.items.2"
               ]
            }
         ]
      },
      {
         id: 2,
         icon: "fa-solid fa-magnifying-glass-chart",
         titleKey: "services.categories.research.title",
         subtitleKey: "services.categories.research.subtitle",
         color: "#92C201",
         subsections: [
            {
               titleKey: "services.categories.research.team.title",
               items: [
                  "services.categories.research.team.items.0",
                  "services.categories.research.team.items.1",
                  "services.categories.research.team.items.2",
                  "services.categories.research.team.items.3"
               ]
            },
            {
               titleKey: "services.categories.research.advisory.title",
               items: [
                  "services.categories.research.advisory.items.0",
                  "services.categories.research.advisory.items.1",
                  "services.categories.research.advisory.items.2"
               ]
            }
         ]
      },
      {
         id: 3,
         icon: "fa-solid fa-people-group",
         titleKey: "services.categories.execution.title",
         subtitleKey: "services.categories.execution.subtitle",
         color: "#FF6B35",
         subsections: [
            {
               titleKey: "services.categories.execution.agent.title",
               items: [
                  "services.categories.execution.agent.items.0",
                  "services.categories.execution.agent.items.1",
                  "services.categories.execution.agent.items.2"
               ]
            },
            {
               titleKey: "services.categories.execution.academy.title",
               items: [
                  "services.categories.execution.academy.items.0",
                  "services.categories.execution.academy.items.1",
                  "services.categories.execution.academy.items.2"
               ]
            }
         ]
      }
   ];

   return (
      <section className="service-categories-section pt-100 pb-100">
         <div className="container">
            {/* Section Header */}
            <div className="row mb-60">
               <div className="col-lg-8 mx-auto text-center">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-3 justify-content-center">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> {t('services.categoriesSection.tag')}
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp mb-4" data-wow-delay=".3s">
                        {t('services.categoriesSection.title')}
                     </h2>
                     <p className="theme-clr4 fz-18" style={{lineHeight: '1.8'}}>
                        {t('services.categoriesSection.description')}
                     </p>
                  </div>
               </div>
            </div>

            {/* Service Category Tabs */}
            <div className="row mb-5">
               <div className="col-12">
                  <div className="service-tabs d-flex flex-wrap justify-content-center gap-3">
                     {serviceCategories.map((category) => (
                        <button
                           key={category.id}
                           className={`service-tab-btn px-4 py-3 rounded-4 d-flex align-items-center gap-3 border-0 ${activeTab === category.id ? 'active' : ''}`}
                           onClick={() => setActiveTab(category.id)}
                           style={{
                              background: activeTab === category.id ? category.color : '#f5f5f5',
                              color: activeTab === category.id ? 'white' : '#333',
                              transition: 'all 0.3s ease',
                              minWidth: '280px'
                           }}
                        >
                           <div 
                              className="tab-icon d-flex align-items-center justify-content-center rounded-circle"
                              style={{
                                 width: '50px',
                                 height: '50px',
                                 background: activeTab === category.id ? 'rgba(255,255,255,0.2)' : 'white',
                                 color: activeTab === category.id ? 'white' : category.color
                              }}
                           >
                              <i className={`${category.icon} fz-20`}></i>
                           </div>
                           <div className="text-start">
                              <span className="d-block fw-600 fz-16">{t(category.titleKey)}</span>
                              <small className="opacity-75">{t(category.subtitleKey)}</small>
                           </div>
                        </button>
                     ))}
                  </div>
               </div>
            </div>

            {/* Active Category Content */}
            {serviceCategories.map((category) => (
               <div 
                  key={category.id} 
                  className={`service-category-content ${activeTab === category.id ? 'd-block' : 'd-none'}`}
               >
                  <div className="row g-4">
                     {category.subsections.map((subsection, idx) => (
                        <div key={idx} className="col-lg-6">
                           <div 
                              className="subsection-card p-4 rounded-4 h-100 wow fadeInUp"
                              data-wow-delay={`${0.1 * (idx + 1)}s`}
                              style={{
                                 background: 'white',
                                 boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                                 borderLeft: `4px solid ${category.color}`
                              }}
                           >
                              <h4 className="fw-bold mb-4 theme-clr4 d-flex align-items-center gap-2">
                                 <span 
                                    className="subsection-number d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                       width: '36px',
                                       height: '36px',
                                       background: category.color,
                                       color: 'white',
                                       fontSize: '14px',
                                       fontWeight: '700'
                                    }}
                                 >
                                    {idx + 1}
                                 </span>
                                 {t(subsection.titleKey)}
                              </h4>
                              <ul className="service-items-list list-unstyled mb-0">
                                 {subsection.items.map((item, itemIdx) => (
                                    <li 
                                       key={itemIdx} 
                                       className="d-flex align-items-start gap-3 mb-3 pb-3"
                                       style={{borderBottom: itemIdx < subsection.items.length - 1 ? '1px solid #eee' : 'none'}}
                                    >
                                       <div 
                                          className="item-check d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                                          style={{
                                             width: '24px',
                                             height: '24px',
                                             background: `${category.color}15`,
                                             marginTop: '2px'
                                          }}
                                       >
                                          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path
                                                d="M0.682617 9.80076C3.46973 12.8164 6.17207 15.5312 8.76973 18.9648C11.5939 13.3476 14.4846 7.71091 19.2541 1.60662L17.9689 1.01794C13.9416 5.28904 10.8127 9.33201 8.09394 14.1367C6.20332 12.4336 3.14785 10.0234 1.28223 8.78513L0.682617 9.80076Z"
                                                fill={category.color} />
                                          </svg>
                                       </div>
                                       <span className="theme-clr4" style={{lineHeight: '1.6'}}>{t(item)}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default ServiceCategories;
