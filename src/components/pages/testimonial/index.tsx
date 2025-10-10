import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import Faq from "../../homes/home-one/Faq"
import TestimonialArea from "./TestimonialArea"

const Testimonial = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="Testimonial" />
         <TestimonialArea />
         <Faq />
         <FooterOne />
      </>
   )
}

export default Testimonial
