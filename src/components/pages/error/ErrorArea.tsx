import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const ErrorArea = () => {
   const { t } = useTranslation()

   return (
      <section className="error-section fix pt-100 pb-100">
         <div className="container">
            <div className="error-content text-center">
               <h2 className="title wow fadeInUp">
                  404
               </h2>
               <h3 className="wow fadeInUp title-2" data-wow-delay=".3s">{t('error.title', 'Sorry! Page not found.')}</h3>
               <p className="wow fadeInUp" data-wow-delay=".5s">
                  {t('error.description', 'The page you are looking for was moved, removed, renamed or never existed.')}
               </p>
               <Link to="/" className="theme-btn style1 pe-20">
                  <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                  {t('error.goHome', 'Go To Home')}
               </Link>
            </div>
         </div>
      </section>
   )
}

export default ErrorArea
