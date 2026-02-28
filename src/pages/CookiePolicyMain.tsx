import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import CookiePolicy from '../components/legal/CookiePolicy';

const CookiePolicyMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Cookie Policy"
            description="Learn about the cookies StaraJIN uses on our website, including essential and analytics cookies, and how to manage your cookie preferences."
         />
         <CookiePolicy />
      </Wrapper>
   );
};

export default CookiePolicyMain;
