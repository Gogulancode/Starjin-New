import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import ServiceDetails from '../components/services/service-details';

const ServiceDetailsMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Service Details"
            description="Explore how StaraJIN delivers tailored consulting solutions for Korean companies entering or expanding in the Indian market — from feasibility studies and partner due diligence to operational setup and ongoing advisory."
            keywords="India market entry strategy, India feasibility study, partner due diligence India, India operational setup, Korea India consulting solutions"
         />
         <ServiceDetails />
      </Wrapper>
   );
};

export default ServiceDetailsMain;