import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import PrivacyPolicy from '../components/legal/PrivacyPolicy';

const PrivacyPolicyMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Privacy Policy"
            description="StaraJIN's privacy policy explains how we collect, use, and protect your personal information when you use our Korea-India business consulting services and website."
         />
         <PrivacyPolicy />
      </Wrapper>
   );
};

export default PrivacyPolicyMain;
