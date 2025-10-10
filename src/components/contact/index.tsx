import FooterOne from "../../layouts/footers/FooterOne"
import HeaderOne from "../../layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import ContactHome from "../homes/home-one/Contact"
import ContactInfo from "./ContactInfo"
import ContactInfoTwo from "./ContactInfoTwo"

const Contact = () => {
   return (
      <>
         <HeaderOne />
         <BreadCrumb title="Contact" />
         <ContactInfo />
         <ContactHome />
         <ContactInfoTwo />
         <FooterOne />
      </>
   )
}

export default Contact
