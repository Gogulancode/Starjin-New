import Wrapper from '../layouts/Wrapper';
import HomeOne from '../components/homes/home-one';
import SEO from '../components/SEO';

const HomeMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Korea-India Business Consulting"
            description="StaraJIN is a leading Korea-India business consulting firm specializing in market entry strategy, JV advisory, partner matching, and end-to-end execution support for Korean companies expanding into India."
            keywords="Korea-India business consulting, India market entry for Korean companies, India JV advisory, Korea India trade and investment, India execution support, Korean business in India, partner matching, cultural exchange programs"
         />
         <HomeOne />
      </Wrapper>
   );
};

export default HomeMain;