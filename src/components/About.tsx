import { useInView, ANIMATION_CLASSES } from '@/utils/animations';
const About = () => {
  const {
    ref,
    isInView
  } = useInView();
  return <section id="about" ref={ref as React.RefObject<HTMLDivElement>} className="py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`space-y-6 ${isInView ? ANIMATION_CLASSES.slideInLeft : 'opacity-0'}`}>
            <div className="inline-block mb-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">BIO</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              A passionate developer with a keen eye for design
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                I'm a software developer and UX designer with over 5 years of experience creating intuitive and engaging digital experiences. My approach combines technical expertise with a deep understanding of user needs.
              </p>
              <p>
                Throughout my career, I've worked on a variety of projects ranging from enterprise applications to consumer-facing products. I specialize in front-end development, responsive design, and creating accessible user interfaces.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>
          </div>
          
          <div className={`relative ${isInView ? ANIMATION_CLASSES.slideInRight : 'opacity-0'}`}>
            <div className="aspect-square rounded-2xl overflow-hidden bg-accent">
              <img alt="Professional portrait" className="w-full h-full object-cover" loading="lazy" src="/lovable-uploads/5e0922f1-6fd5-490e-be43-2b9f0acefe26.jpg" />
            </div>
            <div className="absolute inset-0 border-2 border-foreground rounded-2xl -translate-x-4 -translate-y-4 z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;