import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import TermsOfService from '../components/legal/TermsOfService';

const TermsOfServiceMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Terms of Service"
            description="Terms and conditions governing the use of StaraJIN's website and Korea-India business consulting services."
         />
         <TermsOfService />
      </Wrapper>
   );
};

export default TermsOfServiceMain;
