import { Link } from "react-router-dom"
import faq_data from "../../../data/FaqData"
import { useEffect, useState } from "react";

interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const Faq = () => {

   const [faqData, setFaqData] = useState<DataType[]>([]);

   useEffect(() => {
      const updatedData = faq_data.map((item) =>
         item.id === 1 ? { ...item, showAnswer: true } : { ...item, showAnswer: false }
      );
      setFaqData(updatedData);
   }, []);

   const toggleAnswer = (faqId: number) => {
      setFaqData((prevFaqData) => {
         return prevFaqData.map((faq) => {
            if (faqId === 1) {
               return faq.id === 1
                  ? { ...faq, showAnswer: !faq.showAnswer }
                  : { ...faq, showAnswer: false };
            }

            if (faq.id === faqId) {
               return { ...faq, showAnswer: !faq.showAnswer };
            }

            return { ...faq, showAnswer: false };
         });
      });
   };

   return (
      <section className="faq-section02 fix section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-4">
               <div className="col-lg-5">
                  <div className="faq-content2">
                     <div className="section-title">
                        <span
                           className="text-uppercase theme-clr4 theme4-border rounded-5 fw-600 d-inline-block py-0 mb-3 px-3">FAQ</span>
                        <h2 className="theme-clr4 mb-3 fw-bold wow fadeInUp" data-wow-delay=".3s">
                           Frequently Asked Questions
                           <span className="fw-300">About Life Coaching</span>
                        </h2>
                        <p className="mb-40 wow fadeInUp" data-wow-delay=".3s">
                           Life coaching is a personal and unique experience. To help you understand more about how
                           coaching works and how it can
                           benefit you, we’ve answered some of the most common questions below. If you still have
                           questions, feel free to reach out
                           — we’re here to help.
                        </p>
                        <h5 className="mb-4">Still have questions? <br />
                           Don’t worries we have answers!</h5>
                        <Link to="/contact" className="theme-btn style3 pe-20 wow fadeIn" data-wow-delay=".4s">
                           <i
                              className="fa-solid fa-arrow-right w-36 h-36 bg-white rounded-circle d-center fz-14 theme-clr4"></i>
                           Contact Us Now
                        </Link>
                     </div>
                  </div>
               </div>
               <div className="col-lg-7">
                  <div className="accordion accordion-style1 accordion-style2" id="accordionExample">
                     {faqData.filter((items) => items.page === "home_1").map((item) => (
                        <div key={item.id} className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                           <h2 className="accordion-header">
                              <button className={`accordion-button ${item.showAnswer ? "" : "collapsed"}`} type="button" onClick={() => toggleAnswer(item.id)} >
                                 {item.id}. {item.title}
                                 <span className="cus-icon"><i className="fa-solid fa-chevron-down"></i></span>
                              </button>
                           </h2>
                           <div id="collapseOne" className={`accordion-collapse collapse  ${item.showAnswer ? "show" : ""}`} >
                              <div className="accordion-body pt-0 pb-4">
                                 <p className="lh-md theme-clr4">
                                    {item.desc}
                                 </p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Faq
