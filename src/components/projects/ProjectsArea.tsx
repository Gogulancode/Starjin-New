import { Link } from "react-router-dom"

interface ProjectType {
   id: number;
   thumb: string;
   category: string;
   title: string;
   description: string;
}

const projects_data: ProjectType[] = [
   {
      id: 1,
      thumb: "/assets/img/blog/financial-thumb1.png",
      category: "Web Development",
      title: "E-commerce Platform Redesign",
      description: "Complete redesign and development of a modern e-commerce platform with improved user experience and conversion rates."
   },
   {
      id: 2,
      thumb: "/assets/img/blog/financial-thumb2.png",
      category: "Mobile App",
      title: "Business Management App",
      description: "Custom mobile application for business management with real-time analytics and team collaboration features."
   },
   {
      id: 3,
      thumb: "/assets/img/blog/financial-thumb3.png",
      category: "Branding",
      title: "Corporate Identity Design",
      description: "Complete brand identity design including logo, marketing materials, and digital presence for a tech startup."
   },
   {
      id: 4,
      thumb: "/assets/img/team/team1.png",
      category: "Web Development",
      title: "SaaS Dashboard Interface",
      description: "Modern and intuitive dashboard interface for a SaaS platform with advanced data visualization."
   },
   {
      id: 5,
      thumb: "/assets/img/team/team2.png",
      category: "Digital Marketing",
      title: "SEO & Content Strategy",
      description: "Comprehensive SEO optimization and content marketing strategy that increased organic traffic by 300%."
   },
   {
      id: 6,
      thumb: "/assets/img/team/team3.png",
      category: "UI/UX Design",
      title: "Healthcare App Design",
      description: "User-centered design for a healthcare mobile application focusing on accessibility and patient experience."
   }
];

const ProjectsArea = () => {
   return (
      <section className="blog-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-sm-4 g-3 justify-content-between align-items-end mb-40">
               <div className="col-lg-6 col-md-7">
                  <div className="section-header">
                     <div className="d-flex align-items-center gap-2 theme-clr fw-600 mb-2">
                        <img src="/assets/img/icon/section-step1.png" alt="img" /> Our Work
                     </div>
                     <h2 className="theme-clr4 fw-bold wow fadeInUp" data-wow-delay=".3s">
                        Showcasing Our Best
                        <span className="fw-300">Projects & Achievements</span>
                     </h2>
                  </div>
               </div>
               <div className="col-lg-6 col-md-5">
                  <div className="wow fadeInUp" data-wow-delay=".4s">
                     <p>
                        Explore our portfolio of successful projects across various industries. Each project represents our 
                        commitment to excellence, innovation, and delivering results that exceed client expectations.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row g-4">
               {projects_data.map((item) => (
                  <div key={item.id} className="col-md-6 col-lg-4">
                     <div className="team-items hover-translate8 bg-white px-xxl-6 px-xl-4 px-3 section-bg rounded-4">
                        <div className="thumb w-100 overflow-hidden">
                           <img src={item.thumb} alt="img" className="w-100 rounded-bottom-3" />
                        </div>
                        <div className="content d-flex align-items-end gap-3 justify-content-between">
                           <div>
                              <span className="fz-14 theme-clr fw-500 mb-2 d-block">{item.category}</span>
                              <h5 className="max-270 mb-2 wow fadeInUp" data-wow-delay=".3s">
                                 <Link to="/projects" className="theme-clr4 lh-110 fw-600">
                                    {item.title}
                                 </Link>
                              </h5>
                              <p className="fz-14 theme-clr4 mb-0">{item.description}</p>
                           </div>
                           <Link to="/projects"
                              className="theme-clr4 border hover-theme1 min-w-48 w-48 h-48 white-bg rounded-circle d-center d-xl-block d-none fs-five">
                              <i className="fa-light fa-arrow-right"></i>
                           </Link>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default ProjectsArea