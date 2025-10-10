import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Contact from '../components/contact';

const ContactMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Contat'} />
         <Contact />
      </Wrapper>
   );
};

export default ContactMain;