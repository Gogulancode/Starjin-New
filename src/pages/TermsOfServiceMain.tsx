import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TermsOfService from '../components/legal/TermsOfService';

const TermsOfServiceMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Terms of Service'} />
         <TermsOfService />
      </Wrapper>
   );
};

export default TermsOfServiceMain;
