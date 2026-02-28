import { useTranslation } from "react-i18next";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import BreadCrumb from "../common/BreadCrumb";

interface LegalSection {
   titleKey: string;
   textKey: string;
   itemsKey?: string;
   extraKey?: string;
   subsections?: { titleKey: string; textKey: string }[];
}

interface LegalPageProps {
   breadcrumbTitle: string;
   titleKey: string;
   introKey: string;
   sections: LegalSection[];
}

const LegalPage = ({ breadcrumbTitle, titleKey, introKey, sections }: LegalPageProps) => {
   const { t } = useTranslation();

   return (
      <>
         <HeaderOne />
         <BreadCrumb title={breadcrumbTitle} />
         <section className="pt-100 pb-100">
            <div className="container" style={{ maxWidth: '900px' }}>
               <h2 className="theme-clr4 fw-bold mb-3">{t(titleKey)}</h2>
               <p className="text-muted mb-2" style={{ fontSize: '0.9rem' }}>{t('legal.lastUpdated')}</p>
               <p className="theme-clr4 mb-5" style={{ lineHeight: '1.8' }}>{t(introKey)}</p>

               {sections.map((section, index) => (
                  <div key={index} className="mb-4">
                     <h4 className="theme-clr4 fw-600 mb-3">{t(section.titleKey)}</h4>
                     <p className="theme-clr4" style={{ lineHeight: '1.8' }}>{t(section.textKey)}</p>

                     {section.itemsKey && (
                        <ul className="mt-2 mb-3" style={{ paddingLeft: '1.5rem' }}>
                           {(t(section.itemsKey, { returnObjects: true }) as string[]).map((item, i) => (
                              <li key={i} className="theme-clr4 mb-2" style={{ lineHeight: '1.6' }}>{item}</li>
                           ))}
                        </ul>
                     )}

                     {section.subsections?.map((sub, si) => (
                        <div key={si} className="ms-3 mb-3">
                           <h5 className="theme-clr4 fw-600 mb-2">{t(sub.titleKey)}</h5>
                           <p className="theme-clr4" style={{ lineHeight: '1.8' }}>{t(sub.textKey)}</p>
                        </div>
                     ))}

                     {section.extraKey && (
                        <p className="theme-clr4" style={{ lineHeight: '1.8' }}>{t(section.extraKey)}</p>
                     )}
                  </div>
               ))}
            </div>
         </section>
         <FooterOne />
      </>
   );
};

export default LegalPage;
