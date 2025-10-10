import FooterOne from "../../../../layouts/footers/FooterOne"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../../common/BreadCrumb"
import TeamArea from "./TeamArea"

const Team = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="Team" />
         <TeamArea />
         <FooterOne />
      </>
   )
}

export default Team
