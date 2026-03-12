import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import SocialMedia from '../components/SocialMedia';
import ConsultationBanner from '../components/ConsultationBanner';
import NewsTicker from '../components/NewsTicker';
import ProcessSteps from '../components/ProcessSteps';

const HomePage = () => {
  return (
    <>
      <Hero />
      <NewsTicker />
      <ConsultationBanner />
      <About />
      <ProcessSteps />
      <Services />
      <WhyChooseUs />
      <SocialMedia />
      <Contact />
    </>
  );
};

export default HomePage;
