import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import BlogArea from "./BlogArea"

const Blog = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="Blog" />
         <BlogArea />
         <FooterOne />
      </>
   )
}

export default Blog
