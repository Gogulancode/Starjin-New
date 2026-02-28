import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Projects from '../components/projects';

const ProjectsMain = () => {
   return (
      <Wrapper>
         <SEO
            pageTitle="Projects"
            description="See how StaraJIN has helped Korean companies successfully enter the Indian market through joint ventures, partnerships, and strategic advisory across manufacturing, IT, FMCG, and other industries."
            keywords="Korea India joint venture projects, India market entry case studies, Korean companies in India, India expansion success stories, cross-border partnership projects"
         />
         <Projects />
      </Wrapper>
   );
};

export default ProjectsMain;