import NavMenu from "./Menu/NavMenu"
import { useState } from "react";
import Offcanvas from "./Menu/Offcanvas";
import HeaderSearch from "./Menu/HeaderSearch";
import UseSticky from "../../hooks/UseSticky";
import { Link } from "react-router-dom";

const InnerHeader = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [isSearch, setIsSearch] = useState<boolean>(false);

   return (
      <>
         <header id="header-sticky" className={`header-section inner-header style1 w-100 ${sticky ? "sticky" : ""}`}>
            <div className="container">
               <div className="mega-menu-wrapper">
                  <div className="header-main d-flex align-items-center justify-content-between">
                     {/* Logo Section */}
                     <div className="header-left">
                        <div className="logo">
                           <Link to="/" className="header-logo">
                              <img 
                                 src="/assets/img/logo/Starajin - Header  3x svg.svg" 
                                 alt="StaraJIN Logo" 
                              />
                           </Link>
                        </div>
                     </div>

                     {/* Navigation Menu - Center */}
                     <div className="header-center d-none d-xl-block">
                        <div className="main-menu">
                           <nav id="mobile-menu">
                              <NavMenu />
                           </nav>
                        </div>
                     </div>

                     {/* Action Buttons - Right */}
                     <div className="header-right d-flex align-items-center gap-3">
                        {/* Desktop Action Buttons */}
                        <div className="header-actions d-none d-xl-flex align-items-center gap-3">
                           {/* Contact Us Button */}
                           <Link to="/contact" className="contact-us-btn d-flex align-items-center gap-2 px-4 py-3 rounded-pill border">
                              <div className="arrow-icon d-flex align-items-center justify-content-center">
                                 <i className="fa-solid fa-arrow-right"></i>
                              </div>
                              <span>Contact Us</span>
                           </Link>
                           
                           {/* Search Icon */}
                           <button 
                              onClick={() => setIsSearch(true)}
                              className="header-action-btn search-btn d-flex align-items-center justify-content-center"
                              title="Search"
                           >
                              <i className="fa-solid fa-magnifying-glass"></i>
                           </button>
                           
                           {/* Phone Icon */}
                           <button 
                              className="header-action-btn phone-btn d-flex align-items-center justify-content-center"
                              title="Call Us"
                           >
                              <i className="fa-solid fa-phone"></i>
                           </button>
                        </div>

                        {/* Mobile Elements */}
                        <div className="mobile-elements d-xl-none d-flex align-items-center gap-3">
                           <div className="header__hamburger">
                              <div className="sidebar__toggle" onClick={() => setOffCanvas(true)} style={{ cursor: "pointer" }}>
                                 <img src="/assets/img/icon/bars.png" alt="icon" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <HeaderSearch isSearch={isSearch} setIsSearch={setIsSearch} />
      </>
   )
}

export default InnerHeader
