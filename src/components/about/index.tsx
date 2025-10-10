import FooterOne from "../../layouts/footers/FooterOne"
import HeaderOne from "../../layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import Contact from "../homes/home-one/Contact"
import Choose from "./Choose"
import Financial from "./Financial"
import Solution from "./Solution"

const About = () => {
  return (
    <>
      <HeaderOne />
      <BreadCrumb title="About Us" />
      <Financial />
      <Choose />
      <Solution />
      <Contact />
      <FooterOne />
    </>
  )
}

export default About
