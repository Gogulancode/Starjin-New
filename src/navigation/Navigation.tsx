import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeMain from '../pages/HomeMain'
import AboutMain from '../pages/AboutMain';
import ServiceMain from '../pages/ServiceMain';
import ServiceDetailsMain from '../pages/ServiceDetailsMain';
import BlogMain from '../pages/BlogMain';
import BlogDetailsMain from '../pages/BlogDetailsMain';
import ProjectsMain from '../pages/ProjectsMain';
import ContactMain from '../pages/ContactMain';
import NotFoundMain from '../pages/NotFoundMain';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/services" element={<ServiceMain />} />
        <Route path="/services-details" element={<ServiceDetailsMain />} />
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/blog-details" element={<BlogDetailsMain />} />
        <Route path="/blog-details/:id" element={<BlogDetailsMain />} />
        <Route path="/projects" element={<ProjectsMain />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="*" element={<NotFoundMain />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
