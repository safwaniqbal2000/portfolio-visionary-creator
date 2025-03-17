import { ArrowDown } from 'lucide-react';
import { useInView, ANIMATION_CLASSES } from '@/utils/animations';
const Hero = () => {
  const {
    ref,
    isInView
  } = useInView();
  return <section ref={ref as React.RefObject<HTMLDivElement>} className="relative min-h-screen flex items-center justify-center py-32 px-4 md:px-8" id="hero">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] bg-gradient-to-r from-accent/30 via-primary/5 to-secondary/20 blur-3xl opacity-30" />
      </div>
      
      <div className={`container mx-auto max-w-4xl text-center z-10 ${isInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
        <div className={`${ANIMATION_CLASSES.fadeIn}`}>
          <div className="inline-block mb-6 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
            Professional Portfolio
          </div>
        </div>
        
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight ${ANIMATION_CLASSES.slideUp} animation-delay-200`}>Safwan Iqbal Shahbadi</h1>
        
        <p className={`text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 ${ANIMATION_CLASSES.slideUp} animation-delay-300`}>Software Developer & Data Analysis</p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${ANIMATION_CLASSES.slideUp} animation-delay-400`}>
          <a href="#projects" className="inline-flex items-center justify-center h-12 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300">
            View Portfolio
          </a>
          <a href="#contact" className="inline-flex items-center justify-center h-12 px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/70 transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-pulse text-muted-foreground hover:text-foreground transition-colors">
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={16} />
      </a>
    </section>;
};
export default Hero;