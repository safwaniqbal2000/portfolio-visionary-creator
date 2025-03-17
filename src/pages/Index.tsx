
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Capstone from '@/components/Capstone';
import QuickPark from '@/components/QuickPark';
import Contact from '@/components/Contact';
import MainLayout from '@/layouts/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Capstone />
      <QuickPark />
      <Contact />
    </MainLayout>
  );
};

export default Index;
