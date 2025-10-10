import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

const brands: string[] = [
   "/assets/img/banner/sponsor1.png",
   "/assets/img/banner/sponsor2.png",
   "/assets/img/banner/sponsor3.png",
   "/assets/img/banner/sponsor4.png",
   "/assets/img/banner/sponsor5.png",
   "/assets/img/banner/sponsor3.png",
]

const setting = {
   spaceBetween: 30,
   speed: 1500,
   loop: true,
   autoplay: {
      delay: 1000,
      disableOnInteraction: false,
   },
   breakpoints: {
      1199: {
         slidesPerView: 5,
      },
      767: {
         slidesPerView: 5,
      },
      575: {
         slidesPerView: 4,
      },
      0: {
         slidesPerView: 2,
      },
   },
};

const Banner = () => {
   return (
      <div className="banner-section position-relative fix style2">
         <div className="container position-relative">
            <div className="banner-content2">
               <h1 className="mb-4 pb-2 text-white wow fadeInDown" data-wow-delay=".2s">
                  Elevate Your
                  <span className="fw-300">Life & <br /> Career Success</span>
               </h1>
               <Link to="/contact" className="theme-btn style3 pe-20 wow fadeInDown" data-wow-delay=".3s">
                  <i className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                  Get Started Today
               </Link>
            </div>
            <img src="/assets/img/banner/collapse-thumb2.png" alt="img" className="position-absolute end-0 collapse-thumb2" />
         </div>
         <div className="sponsor-section style1">
            <div className="container">
               <div className="row g-2">
                  <div className="col-lg-10">
                     <Swiper {...setting} modules={[Autoplay]} className="sponsor-wrapper swiper">
                        {brands.map((brand, i) => (
                           <SwiperSlide key={i} className="swiper-slide">
                              <div className="sponsor-item">
                                 <img src={brand} alt="img" />
                              </div>
                           </SwiperSlide>
                        ))}
                     </Swiper>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Banner
