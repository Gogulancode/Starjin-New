import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import blog_data from '../../../data/BlogData';

const BlogDetailsArea = () => {
   const { id } = useParams();
   const { t } = useTranslation();
   const blogId = id ? parseInt(id) : 1;
   const blogKey = String(blogId);

   // Get blog thumbnail from BlogData
   const currentBlogData = blog_data.find(blog => blog.id === blogId && blog.page === "home_1");

   const title = t(`blogDetails.posts.${blogKey}.title`);
   const author = t(`blogDetails.posts.${blogKey}.author`);
   const date = t(`blogDetails.posts.${blogKey}.date`);
   const subtitle = t(`blogDetails.posts.${blogKey}.subtitle`);
   const content = t(`blogDetails.posts.${blogKey}.content`, { returnObjects: true }) as string[];
   const sections = t(`blogDetails.posts.${blogKey}.sections`, { returnObjects: true }) as any[];
   const quoteText = t(`blogDetails.posts.${blogKey}.quoteText`);
   const quoteAuthor = t(`blogDetails.posts.${blogKey}.quoteAuthor`);
   const prevPost = t(`blogDetails.posts.${blogKey}.prevPost`);
   const nextPost = t(`blogDetails.posts.${blogKey}.nextPost`);

   return (
      <section className="blog-details-section section-bg pt-100 pb-100">
         <div className="container">
            <div className="row g-sm-4 g-3 justify-content-center align-items-end">
               <div className="col-lg-9">
                  <div className="blog-details-thumb rounded-4 w-100 mb-40 position-relative wow fadeInUp"
                     data-wow-delay=".4s">
                     <img src={currentBlogData?.thumb || "/assets/img/blog/Korea–India Trade Relations Reach New Heights in 2026.png"} alt={title} className="w-100 rounded-4" loading="lazy" style={{height: '400px', objectFit: 'cover'}} />
                     <div className="social-icon blog-details-social d-flex align-items-center">
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
                  <h3 className="theme-clr4 mb-3 fz-36 wow fadeInUp" data-wow-delay=".2s">{title}</h3>
                  <div className="d-flex align-items-center gap-3 fz-14 mb-40 wow fadeInUp" data-wow-delay=".4s">
                     <span className="fw-600 theme-clr4">{author}</span> / {date}
                  </div>
                  <p className="theme-clr4 mb-xl-3 mb-2 wow fadeInUp" data-wow-delay=".6s">
                     <strong>{subtitle}</strong>
                  </p>
                  {Array.isArray(content) && content.map((paragraph: string, index: number) => (
                     <p key={index} className="theme-clr4 mb-40 wow fadeInUp" data-wow-delay=".5s">
                        {paragraph}
                     </p>
                  ))}
                  {Array.isArray(sections) && sections.map((section: any, sectionIndex: number) => (
                     <div key={sectionIndex}>
                        <h4 className="theme-clr4 mb-3 wow fadeInUp" data-wow-delay=".3s">{section.title}</h4>
                        {section.content.map((paragraph: string, paragraphIndex: number) => (
                           <p key={paragraphIndex} className="theme-clr4 mb-40 wow fadeInUp" data-wow-delay=".5s">
                              {paragraph}
                           </p>
                        ))}
                        {section.list && (
                           <ul className="theme-clr4 mb-40 wow fadeInUp" data-wow-delay=".5s" style={{paddingLeft: '20px'}}>
                              {section.list.map((item: string, itemIndex: number) => (
                                 <li key={itemIndex} style={{marginBottom: '10px'}}>{item}</li>
                              ))}
                           </ul>
                        )}
                     </div>
                  ))}
                  <div className="mb-lg-5 mb-4 quote-box d-flex gap-xxl-4 gap-xl-3 gap-2 wow fadeInUp"
                     data-wow-delay=".3s">
                     <img width="70" height="50" src="/assets/img/blog/quoe-blog.png" alt="img" />
                     <div>
                        <h3 className="italic fw-500 mb-sm-2 mb-1">{quoteText}</h3>
                        <span className="theme-clr4"> - {quoteAuthor}</span>
                     </div>
                  </div>
                  <div className="d-flex post-viewer align-items-center justify-content-between flex-md-nowrap flex-wrap gap-3 mb-lg-5 mb-4">
                     <div>
                        <span className="text-uppercase theme-clr4 fz-12 d-block">{t('blogDetails.previousPost')}</span>
                        <h5 className="theme-clr4">{prevPost}</h5>
                     </div>
                     <div className="text-md-end">
                        <span className="text-uppercase theme-clr4 fz-12 d-block">{t('blogDetails.nextPost')}</span>
                        <h5 className="theme-clr4">{nextPost}</h5>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default BlogDetailsArea
