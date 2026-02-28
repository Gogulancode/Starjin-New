import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Contact from '../components/contact';

const ContactMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Contact'} />
         <Contact />
      </Wrapper>
   );
};

export default ContactMain;