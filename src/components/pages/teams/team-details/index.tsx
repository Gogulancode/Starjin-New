import FooterOne from "../../../../layouts/footers/FooterOne"
import InnerHeader from "../../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../../common/BreadCrumb"
import TeamDetailsArea from "./TeamDetailsArea"

const TeamDetails = () => {
  return (
    <>
      <InnerHeader />
      <BreadCrumb title="James Carter" />
      <TeamDetailsArea />
      <FooterOne />
    </>
  )
}

export default TeamDetails
