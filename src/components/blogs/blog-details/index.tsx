import FooterOne from "../../../layouts/footers/FooterOne"
import InnerHeader from "../../../layouts/headers/InnerHeader"
import BreadCrumb from "../../common/BreadCrumb"
import BlogArea from "./BlogArea"
import BlogDetailsArea from "./BlogDetailsArea"

const BlogDetails = () => {
   return (
      <>
         <InnerHeader />
         <BreadCrumb title="Blog details" />
         <BlogDetailsArea />
         <BlogArea />
         <FooterOne />
      </>
   )
}

export default BlogDetails
