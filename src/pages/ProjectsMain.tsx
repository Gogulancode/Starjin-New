import Wrapper from '../layouts/Wrapper';
import SEO from '../components/SEO';
import Projects from '../components/projects';

const ProjectsMain = () => {
   return (
      <Wrapper>
         <SEO pageTitle={'Projects'} />
         <Projects />
      </Wrapper>
   );
};

export default ProjectsMain;