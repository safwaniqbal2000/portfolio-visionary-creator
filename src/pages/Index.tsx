
import Hero from '@/components/Hero';
import About from '@/components/About';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';
import MainLayout from '@/layouts/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Philosophy />
      <Contact />
    </MainLayout>
  );
};

export default Index;
