import NotFound from "../components/pages/error"
import SEO from "../components/SEO"
import Wrapper from "../layouts/Wrapper"

const NotFoundMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle="Page Not Found" />
         <NotFound />
      </Wrapper>
   )
}

export default NotFoundMain
