import LegalPage from "./LegalPage";

const PrivacyPolicy = () => {
   return (
      <LegalPage
         breadcrumbTitle="Privacy Policy"
         titleKey="legal.privacy.title"
         introKey="legal.privacy.intro"
         sections={[
            { titleKey: "legal.privacy.section1Title", textKey: "legal.privacy.section1Text", itemsKey: "legal.privacy.section1Items", extraKey: "legal.privacy.section1Extra" },
            { titleKey: "legal.privacy.section2Title", textKey: "legal.privacy.section2Text", itemsKey: "legal.privacy.section2Items" },
            { titleKey: "legal.privacy.section3Title", textKey: "legal.privacy.section3Text", itemsKey: "legal.privacy.section3Items" },
            { titleKey: "legal.privacy.section4Title", textKey: "legal.privacy.section4Text" },
            { titleKey: "legal.privacy.section5Title", textKey: "legal.privacy.section5Text", itemsKey: "legal.privacy.section5Items" },
            { titleKey: "legal.privacy.section6Title", textKey: "legal.privacy.section6Text" },
            {
               titleKey: "legal.privacy.section7Title",
               textKey: "legal.privacy.section7Text",
               extraKey: "legal.privacy.section7Email"
            },
         ]}
      />
   );
};

export default PrivacyPolicy;
