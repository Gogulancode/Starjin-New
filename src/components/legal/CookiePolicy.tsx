import LegalPage from "./LegalPage";

const CookiePolicy = () => {
   return (
      <LegalPage
         breadcrumbTitle="Cookie Policy"
         titleKey="legal.cookies.title"
         introKey="legal.cookies.intro"
         sections={[
            { titleKey: "legal.cookies.section1Title", textKey: "legal.cookies.section1Text" },
            {
               titleKey: "legal.cookies.section2Title",
               textKey: "legal.cookies.section2Text",
               subsections: [
                  { titleKey: "legal.cookies.section2Sub1Title", textKey: "legal.cookies.section2Sub1Text" },
                  { titleKey: "legal.cookies.section2Sub2Title", textKey: "legal.cookies.section2Sub2Text" },
                  { titleKey: "legal.cookies.section2Sub3Title", textKey: "legal.cookies.section2Sub3Text" },
               ]
            },
            { titleKey: "legal.cookies.section3Title", textKey: "legal.cookies.section3Text", itemsKey: "legal.cookies.section3Items", extraKey: "legal.cookies.section3Extra" },
            { titleKey: "legal.cookies.section4Title", textKey: "legal.cookies.section4Text" },
            { titleKey: "legal.cookies.section5Title", textKey: "legal.cookies.section5Text" },
            { titleKey: "legal.cookies.section6Title", textKey: "legal.cookies.section6Text" },
         ]}
      />
   );
};

export default CookiePolicy;
