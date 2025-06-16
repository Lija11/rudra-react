import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeMain from '../pages/HomeMain'
import HomeTwoMain from '../pages/HomeTwoMain';
import HomeThree from '../components/homes/home-three';
import BlogMain from '../pages/BlogMain';
import CaseDetailsMain from '../pages/CaseDetailsMain';
import CaseStudiesMain from '../pages/CaseStudiesMain';
import ServiceDetailsMain from '../pages/ServiceDetailsMain';
import ServiceMain from '../pages/ServiceMain';
import AboutMain from '../pages/AboutMain';
import BlogDetailsMain from '../pages/BlogDetailsMain';
import TeamMain from '../pages/TeamMain';
import TeamDetailsMain from '../pages/TeamDetailsMain';
import TestimonialMain from '../pages/TestimonialMain';
import FaqMain from '../pages/FaqMain';
import PricingMain from '../pages/PricingMain';
import ContactMain from '../pages/ContactMain';

const AppNavigation = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/home-two" element={<HomeTwoMain />} />
        <Route path="/home-three" element={<HomeThree />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/services" element={<ServiceMain />} />
        <Route path="/services-details" element={<ServiceDetailsMain />} />
        <Route path="/case-studies" element={<CaseStudiesMain />} />
        <Route path="/case-details" element={<CaseDetailsMain />} />
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/blog-details" element={<BlogDetailsMain />} />
        <Route path="/team" element={<TeamMain />} />
        <Route path="/team-details" element={<TeamDetailsMain />} />
        <Route path="/testimonials" element={<TestimonialMain />} />
        <Route path="/faqs" element={<FaqMain />} />
        <Route path="/pricing-plan" element={<PricingMain />} />
        <Route path="/contact" element={<ContactMain />} />
      </Routes>
    </Router>
  );
};

export default AppNavigation;
