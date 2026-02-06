import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import BreadCrumb from "../../common/BreadCrumb"
import ServiceTagline from "./ServiceTagline"
import DetailedServices from "./DetailedServices"
import ClientsSection from "./ClientsSection"
import PartnersSection from "./PartnersSection"
import Contact from "../../homes/home-one/Contact"

const Service = () => {
  return (
    <>
      <HeaderOne />
      <BreadCrumb title="Services" />
      <ServiceTagline />
      <DetailedServices />
      <ClientsSection />
      <PartnersSection />
      <Contact />
      <FooterOne />
    </>
  )
}

export default Service
