
import { useState } from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { useInView, ANIMATION_CLASSES } from '@/utils/animations';
import { cn } from '@/lib/utils';

const Projects = () => {
  const { ref, isInView } = useInView();
  const [filter, setFilter] = useState('all');
  
  const projectCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UX Design' },
    { id: 'research', label: 'Research' },
  ];
  
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: ["web"],
      thumbnail: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "A full-featured e-commerce platform with product management, customer accounts, and secure payment processing.",
      skills: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "#project/1"
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: ["mobile", "design"],
      thumbnail: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Mobile application for patients to schedule appointments, access medical records, and communicate with healthcare providers.",
      skills: ["React Native", "Firebase", "Health API", "Figma"],
      link: "#project/2"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      category: ["web", "design"],
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Interactive dashboard for visualizing and analyzing complex datasets with real-time updates and filtering capabilities.",
      skills: ["Vue.js", "D3.js", "Chart.js", "WebSockets"],
      link: "#project/3"
    },
    {
      id: 4,
      title: "AI Content Recommendation",
      category: ["research", "web"],
      thumbnail: "https://images.unsplash.com/photo-1677442320859-47198a326c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Research project exploring machine learning algorithms for content recommendation in digital media platforms.",
      skills: ["Python", "TensorFlow", "Natural Language Processing", "API Development"],
      link: "#project/4"
    },
    {
      id: 5,
      title: "Smart Home Control System",
      category: ["mobile", "web"],
      thumbnail: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Cross-platform application for controlling smart home devices, with scheduling, automation, and energy monitoring features.",
      skills: ["React", "React Native", "IoT Protocols", "Redux"],
      link: "#project/5"
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(filter));
  
  return (
    <section 
      id="projects" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 px-4 md:px-8"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isInView ? ANIMATION_CLASSES.fadeIn : 'opacity-0'}`}>
          <div className="inline-block mb-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Academic & Professional Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A showcase of my projects, research, and creative work
          </p>
        </div>
        
        <div className={`flex justify-center flex-wrap gap-2 mb-12 ${isInView ? ANIMATION_CLASSES.slideUp : 'opacity-0'} animation-delay-200`}>
          {projectCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all",
                filter === category.id 
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/10" 
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${isInView ? ANIMATION_CLASSES.slideUp : 'opacity-0'} animation-delay-300`}>
          {filteredProjects.map((project, index) => (
            <a 
              key={project.id}
              href={project.link}
              className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-accent">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      +{project.skills.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary flex items-center">
                    View Project <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                  </span>
                  <ExternalLink size={16} className="text-muted-foreground" />
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className={`mt-16 text-center ${isInView ? ANIMATION_CLASSES.fadeIn : 'opacity-0'} animation-delay-500`}>
          <a 
            href="#capstone"
            className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/70 transition-all"
          >
            View Capstone Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
