import { Link } from "react-router-dom"
import MobileMenu from "./MobileMenu";

interface MobileSidebarProps {
   offCanvas: boolean;
   setOffCanvas: (offCanvas: boolean) => void;
}

const Offcanvas = ({ offCanvas, setOffCanvas }: MobileSidebarProps) => {

   return (
      <>

         <div className="fix-area">
            <div className={`offcanvas__info ${offCanvas ? "info-open" : ""}`}>
               <div className="offcanvas__wrapper">
                  <div className="offcanvas__content">
                     <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                        <div className="offcanvas__logo">
                           <Link to="/">
                              <img src="assets/img/logo/logo.png" alt="logo-img" />
                           </Link>
                        </div>
                        <div className="offcanvas__close">
                           <button onClick={() => setOffCanvas(false)}>
                              <i className="fas fa-times"></i>
                           </button>
                        </div>
                     </div>

                     <div className="mobile-menu fix mb-3"></div>
                     <div className="mobile-menu fix mb-3 mean-container">
                        <div className="mean-bar">
                           <nav className="mean-nav">
                              <MobileMenu />
                           </nav>
                        </div>
                     </div>
                     <div className="offcanvas__contact">
                        <h4 className="n900-clr">Contact Info</h4>
                        <ul className="d-grid gap-2 mb-5">
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon">
                                 <i className="fal fa-map-marker-alt"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <Link target="_blank" to="/">3517 W. Gray St. Utica, Pennsylvania</Link>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon mr-15">
                                 <i className="fal fa-envelope"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <Link to="mailto:info@example.com"><span
                                    className="mailto:info@example.com">alma.lawson@example.com</span></Link>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon mr-15">
                                 <i className="fal fa-clock"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <Link target="_blank" to="/">Sun-friday, 02am -09pm</Link>
                              </div>
                           </li>
                           <li className="d-flex align-items-center">
                              <div className="offcanvas__contact-icon mr-15">
                                 <i className="far fa-phone"></i>
                              </div>
                              <div className="offcanvas__contact-text">
                                 <Link to="tel:+11002345909">(219) 555-0114</Link>
                              </div>
                           </li>
                        </ul>
                        <div className="header-button mt-4">
                           <Link to="/contact" className="theme-btn p2-bg d-center gap-2 text-center">
                              <span>
                                 Get A Quote
                                 <span className="ani-arrow">
                                    <i className="fa-solid fa-arrow-right-long"></i>
                                 </span>
                              </span>
                           </Link>
                        </div>
                        <div className="social-icon d-flex align-items-center">
                           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-facebook-f"></i>
                           </a>
                           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                              <i className="fab fa-twitter"></i>
                           </a>
                           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-instagram"></i>
                           </a>
                           <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                              <i className="fa-brands fa-pinterest-p"></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div onClick={() => setOffCanvas(false)} className={`offcanvas__overlay ${offCanvas ? "overlay-open" : ""}`}></div>
      </>
   )
}

export default Offcanvas
