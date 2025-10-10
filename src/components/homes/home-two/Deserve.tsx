import { Link } from "react-router-dom"

const Deserve = () => {
   return (
      <section className="deserve-create-section mb-0 rounded-end-0 rounded-start-0 overflow-hidden position-relative">
         <div className="container">
            <div className="deserve-content text-center">
               <div className="section-header">
                  <h2 className="theme-clr4 text-white mb-40 fw-bold wow fadeInUp" data-wow-delay=".3s">
                     Ready to create the
                     <span className="fw-300">Life you deserve?</span>
                  </h2>
                  <Link to="/contact" className="theme-btn text-start bg-white style3 pe-20">
                     <i
                        className="fa-solid fa-arrow-right w-36 h-36 theme-bg2 rounded-circle d-center fz-14 theme-clr4"></i>
                     Schedule Your Free Consultation
                  </Link>
               </div>
            </div>
         </div>
         <div className="subscribe-wrapper text-lg-start text-center">
            <div className="container">
               <div className="row g-4 justify-content-center">
                  <div className="col-lg-4">
                     <div className="text-lg-start text-center">
                        <div className="footer-logo mb-4 mx-lg-0 mx-auto">
                           <img src="/assets/img/logo/logo-theme2.png" alt="img" />
                        </div>
                        <p className="lh-110 fz-14 text-white">&copy; 2025 Rudra, Inc.</p>
                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="subscribe-inner">
                        <h3 className="text-white text-lg-nowrap">Subscribe to our newsletter!</h3>
                        <form onSubmit={(e) => e.preventDefault()} className="form-grp2 w-100 d-flex align-items-center justify-content-between">
                           <input type="text" placeholder="Type your email address" className="w-100 italic" />
                           <button className="w-54 h-54 rounded-circle d-center theme-bg2" type="button">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <g clipPath="url(#clip0_2290_2646)">
                                    <path
                                       d="M17.9603 0.771532C18.0013 0.66931 18.0113 0.557327 17.9892 0.449466C17.967 0.341605 17.9137 0.24261 17.8359 0.164753C17.758 0.0868953 17.659 0.0336002 17.5512 0.0114743C17.4433 -0.0106516 17.3313 -0.000635168 17.2291 0.0402818L0.863719 6.58666H0.862594L0.354094 6.78916C0.257783 6.82757 0.173965 6.89186 0.111899 6.97493C0.0498325 7.05799 0.0119337 7.15659 0.00238862 7.25984C-0.00715649 7.36309 0.0120236 7.46697 0.0578101 7.56001C0.103597 7.65304 0.174208 7.73161 0.261844 7.78703L0.723094 8.07953L0.724219 8.08178L6.34359 11.657L9.91884 17.2764L9.92109 17.2787L10.2136 17.7399C10.2692 17.8272 10.3478 17.8975 10.4408 17.943C10.5337 17.9885 10.6375 18.0074 10.7405 17.9978C10.8436 17.9881 10.9419 17.9502 11.0248 17.8882C11.1077 17.8263 11.1719 17.7426 11.2103 17.6465L17.9603 0.771532ZM15.8982 2.89778L7.46747 11.3285L7.22559 10.9483C7.18128 10.8785 7.12212 10.8193 7.05234 10.775L6.67209 10.5332L15.1028 2.10241L16.4281 1.57253L15.8993 2.89778H15.8982Z"
                                       fill="#064635" />
                                 </g>
                                 <defs>
                                    <clipPath id="clip0_2290_2646">
                                       <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                 </defs>
                              </svg>
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Deserve
