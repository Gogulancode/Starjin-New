import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import PrivacyPolicy from '../components/legal/PrivacyPolicy';

const PrivacyPolicyMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Privacy Policy'} />
         <PrivacyPolicy />
      </Wrapper>
   );
};

export default PrivacyPolicyMain;
