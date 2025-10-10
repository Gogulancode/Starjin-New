import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import CaseStudiesArea from "./CaseStudiesArea"

const CaseStudies = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="Case studies" />
         <CaseStudiesArea />
         <FooterOne />
      </>
   )
}

export default CaseStudies
