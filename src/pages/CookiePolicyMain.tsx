import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import CookiePolicy from '../components/legal/CookiePolicy';

const CookiePolicyMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Cookie Policy'} />
         <CookiePolicy />
      </Wrapper>
   );
};

export default CookiePolicyMain;
