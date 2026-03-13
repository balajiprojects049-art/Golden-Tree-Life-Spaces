import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import SocialMedia from '../components/SocialMedia';
import ConsultationBanner from '../components/ConsultationBanner';
import NewsTicker from '../components/NewsTicker';
import ProcessSteps from '../components/ProcessSteps';
import PMGovBanner from '../components/PMGovBanner';

const HomePage = () => {
  return (
    <>
      <Hero />
      <NewsTicker />
      <PMGovBanner />
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
