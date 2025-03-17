
import { useInView, ANIMATION_CLASSES } from '@/utils/animations';

const Philosophy = () => {
  const { ref, isInView } = useInView();
  
  return (
    <section 
      id="philosophy" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 px-4 md:px-8 bg-accent/50"
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`text-center mb-16 ${isInView ? ANIMATION_CLASSES.fadeIn : 'opacity-0'}`}>
          <div className="inline-block mb-2 px-4 py-1.5 bg-background text-foreground rounded-full text-sm font-medium">
            My Philosophy
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Statement of Career Goals
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            "We are the facilitators of our own creative evolution" — Bill Hicks
          </p>
        </div>
        
        <div className={`relative rounded-2xl p-10 bg-card shadow-xl z-10 ${isInView ? ANIMATION_CLASSES.slideUp : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl z-[-1]"></div>
          
          <blockquote className="text-lg md:text-xl leading-relaxed italic text-card-foreground/90 text-balance">
            <p className="mb-4">
              As a developer, I believe in the transformative power of technology to solve real-world problems. My work is guided by a commitment to creating intuitive, accessible, and elegant solutions that enhance people's lives. I see myself not just as a coder, but as a problem-solver who uses technology as a medium for positive change.
            </p>
            <p>
              Looking forward, my goal is to continue evolving as a professional who bridges technical expertise with human-centered design. I aspire to lead projects that make a meaningful impact, mentor the next generation of developers, and contribute to the advancement of our field. Through continuous learning and adaptation, I aim to remain at the forefront of innovation while staying true to my core belief that technology should serve people, not the other way around.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
