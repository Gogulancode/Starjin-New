import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Contact from '../components/contact';

const ContactMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Contact Us"
            description="Get in touch with StaraJIN for a free consultation on India market entry, joint venture advisory, or Korea-India business strategy. Offices in Seoul, South Korea and Mumbai, India."
            keywords="contact StaraJIN, Korea India consulting inquiry, India market entry consultation, free business consultation India, Seoul office, Mumbai office"
         />
         <Contact />
      </Wrapper>
   );
};

export default ContactMain;