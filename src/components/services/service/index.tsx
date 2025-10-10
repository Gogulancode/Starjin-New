import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import BreadCrumb from "../../common/BreadCrumb"
import Choose from "./Choose"
import ServiceArea from "./Service"
import WhatdoStart from "./WhatdoStart"

const Service = () => {
  return (
    <>
      <HeaderOne />
      <BreadCrumb title="Services" />
      <WhatdoStart />
      <Choose />
      <ServiceArea />
      <FooterOne />
    </>
  )
}

export default Service
