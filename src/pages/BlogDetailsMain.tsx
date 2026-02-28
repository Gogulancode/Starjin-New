import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import BlogDetails from '../components/blogs/blog-details';

const BlogDetailsMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Blog Article"
            description="In-depth analysis and expert commentary on Korea-India business, market entry, trade, investment, and cross-cultural business strategy from StaraJIN."
            keywords="Korea India business analysis, India market entry guide, Korea India investment insights, cross-cultural business strategy"
         />
         <BlogDetails />
      </Wrapper>
   );
};

export default BlogDetailsMain;