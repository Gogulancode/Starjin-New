import FooterOne from "../../../layouts/footers/FooterOne"
import HeaderOne from "../../../layouts/headers/HeaderOne"
import Banner from "./Banner"
import Blog from "./Blog"
import Choose from "./Choose"
import Contact from "./Contact"
import Industries from "./Industries"
import KeyAchievements from "./KeyAchievements"
import Partners from "./Partners"
import Service from "./Service"

const HomeOne = () => {
   return (
      <>
         <HeaderOne />
         <Banner />
         <Choose />
         <Service />
         <KeyAchievements />
         <Partners />
         <Industries />
         <Blog />
         <Contact />
         <FooterOne />
      </>
   )
}

export default HomeOne
