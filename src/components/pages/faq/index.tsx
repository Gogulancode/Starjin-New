import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import FaqArea from "./FaqArea"

const Faq = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="FAQ" />
         <FaqArea />
         <FooterOne />
      </>
   )
}

export default Faq
