import FooterTwo from "../../../layouts/footers/FooterTwo"
import HeaderTwo from "../../../layouts/headers/HeaderTwo"
import About from "./About"
import Banner from "./Banner"
import Blog from "./Blog"
import Deserve from "./Deserve"
import DownLoadArea from "./DownLoadArea"
import Faq from "./Faq"
import Pricing from "./Pricing"
import Service from "./Service"
import Testimonial from "./Testimonial"
import WorkArea from "./WorkArea"

const HomeTwo = () => {
   return (
      <>
         <HeaderTwo />
         <Banner />
         <About />
         <Service />
         <WorkArea />
         <DownLoadArea />
         <Testimonial />
         <Pricing />
         <Faq />
         <Blog />
         <Deserve />
         <FooterTwo />
      </>
   )
}

export default HomeTwo
