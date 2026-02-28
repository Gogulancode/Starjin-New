import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import About from '../components/about';

const AboutMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="About Us"
            description="StaraJIN was founded to bridge the gap between Korean and Indian business ecosystems. Our bilingual team of consultants brings deep expertise in cross-border strategy, cultural intelligence, and on-ground execution."
            keywords="about StaraJIN, Korea India consulting team, cross-border business experts, bilingual consultants Korea India, India business advisory firm"
         />
         <About />
      </Wrapper>
   );
};

export default AboutMain;