import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import BreadCrumb from "../../common/BreadCrumb"
import Solutions from "./Solutions"
import HowWeWork from "./HowWeWork"
import ServiceArea from "./Service"
import Choose from "./Choose"

const Service = () => {
  return (
    <>
      <HeaderOne />
      <BreadCrumb title="Services" />
      <Solutions />
      <HowWeWork />
      <ServiceArea />
      <Choose />
      <FooterOne />
    </>
  )
}

export default Service
