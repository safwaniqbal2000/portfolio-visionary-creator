
import { useInView, ANIMATION_CLASSES } from '@/utils/animations';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const About = () => {
  const { ref, isInView } = useInView();
  
  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript/TypeScript", "Python", "Java", "PHP", "SQL"]
    },
    {
      category: "Frontend Development",
      items: ["React.js", "HTML5", "CSS3/SASS", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Express", "MongoDB", "MySQL", "RESTful APIs"]
    },
    {
      category: "Data Analysis",
      items: ["Data Visualization", "Statistical Analysis", "Data Cleaning", "Reporting"]
    },
    {
      category: "Tools & Others",
      items: ["Git/GitHub", "VS Code", "Agile Methodology", "UI/UX Design", "Problem Solving"]
    }
  ];

  return (
    <section id="about" ref={ref as React.RefObject<HTMLDivElement>} className="py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className={`space-y-6 ${isInView ? ANIMATION_CLASSES.slideInLeft : 'opacity-0'}`}>
            <div className="inline-block mb-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">ABOUT ME</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              A passionate developer with a keen eye for design
            </h2>
            <div className="prose prose-lg text-muted-foreground">
              <p>
                I'm a software developer and data analyst specializing in creating intuitive and engaging digital experiences. My approach combines technical expertise with a deep understanding of user needs.
              </p>
              <p>
                Throughout my academic and professional journey, I've worked on a variety of projects ranging from e-commerce platforms to data visualization dashboards. I specialize in front-end development, responsive design, and creating accessible user interfaces.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
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

        <div className={`mt-16 ${isInView ? ANIMATION_CLASSES.slideUp : 'opacity-0'} animation-delay-500`}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">Skills Developed During My Program</h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A comprehensive overview of technical and soft skills I've acquired through academic training and practical experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillCategory, index) => (
              <Card key={index} className="border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-bold mb-4">{skillCategory.category}</h4>
                  <ul className="space-y-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2">
                        <Check size={16} className="text-primary" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
