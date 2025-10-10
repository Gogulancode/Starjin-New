import FooterOne from "../../layouts/footers/FooterOne"
import HeaderOne from "../../layouts/headers/HeaderOne"
import BreadCrumb from "../common/BreadCrumb"
import ProjectsArea from "./ProjectsArea"

const Projects = () => {
   return (
      <>
         <HeaderOne />
         <BreadCrumb title="Projects" />
         <ProjectsArea />
         <FooterOne />
      </>
   )
}

export default Projects