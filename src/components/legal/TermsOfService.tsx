import LegalPage from "./LegalPage";

const TermsOfService = () => {
   return (
      <LegalPage
         breadcrumbTitle="Terms of Service"
         titleKey="legal.terms.title"
         introKey="legal.terms.intro"
         sections={[
            { titleKey: "legal.terms.section1Title", textKey: "legal.terms.section1Text" },
            { titleKey: "legal.terms.section2Title", textKey: "legal.terms.section2Text", itemsKey: "legal.terms.section2Items" },
            { titleKey: "legal.terms.section3Title", textKey: "legal.terms.section3Text", itemsKey: "legal.terms.section3Items" },
            { titleKey: "legal.terms.section4Title", textKey: "legal.terms.section4Text" },
            { titleKey: "legal.terms.section5Title", textKey: "legal.terms.section5Text" },
            { titleKey: "legal.terms.section6Title", textKey: "legal.terms.section6Text" },
            { titleKey: "legal.terms.section7Title", textKey: "legal.terms.section7Text" },
            { titleKey: "legal.terms.section8Title", textKey: "legal.terms.section8Text" },
            { titleKey: "legal.terms.section9Title", textKey: "legal.terms.section9Text" },
         ]}
      />
   );
};

export default TermsOfService;
