import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Service from '../components/services/service';

const ServiceMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Services"
            description="StaraJIN offers comprehensive services including India market entry strategy, joint venture advisory, partner identification, regulatory compliance, cultural bridge programs, and end-to-end execution support for Korean companies."
            keywords="India market entry services, India JV advisory, partner identification India, regulatory compliance India, Korea India business services, India expansion consulting, market research India"
         />
         <Service />
      </Wrapper>
   );
};

export default ServiceMain;