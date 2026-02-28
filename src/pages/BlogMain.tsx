import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Blog from '../components/blogs/blog';

const BlogMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Blog & Insights"
            description="Expert insights on Korea-India business trends, India market entry strategies, regulatory updates, cultural tips, and industry analysis from StaraJIN's consulting team."
            keywords="Korea India business blog, India market insights, India business trends, Korea India trade news, India regulatory updates, cross-border business tips"
         />
         <Blog />
      </Wrapper>
   );
};

export default BlogMain;