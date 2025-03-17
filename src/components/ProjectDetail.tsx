
import { ArrowLeft } from 'lucide-react';
import { useInView, ANIMATION_CLASSES } from '@/utils/animations';

interface ProjectDetailProps {
  id: number;
}

const ProjectDetail = ({ id }: ProjectDetailProps) => {
  const { ref, isInView } = useInView();
  
  // Sample project data - in a real app, this would come from an API or database
  const projectData = {
    title: "E-commerce Platform",
    subtitle: "Capstone Project",
    thumbnail: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    overview: "A comprehensive e-commerce solution designed to provide small businesses with an affordable yet powerful online retail presence. The platform includes product management, customer accounts, secure payment processing, and analytics.",
    goals: [
      "Create a user-friendly interface for both customers and store administrators",
      "Implement secure payment processing with multiple provider options",
      "Develop a responsive design that works across all devices",
      "Build robust inventory management features for store owners",
      "Integrate analytics to track sales, customer behavior, and inventory status"
    ],
    challenges: [
      "Ensuring security for payment processing and user data",
      "Creating an intuitive admin interface for non-technical users",
      "Optimizing performance for product catalogs with thousands of items",
      "Implementing a search system with relevant results"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "AWS S3", "Redux", "Material UI"],
    outcomes: "The platform launched successfully with three initial clients, processing over $50,000 in sales within the first three months. User feedback highlighted the intuitive interface and smooth checkout process. The analytics dashboard proved valuable for store owners, leading to inventory optimizations and targeted marketing campaigns.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ]
  };
  
  return (
    <section 
      id="project-detail" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 px-4 md:px-8"
    >
      <div className="container mx-auto max-w-5xl">
        <div className={`mb-12 ${isInView ? ANIMATION_CLASSES.fadeIn : 'opacity-0'}`}>
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </a>
        </div>
        
        <div className={`space-y-12 ${isInView ? ANIMATION_CLASSES.slideUp : 'opacity-0'} animation-delay-200`}>
          <div className="text-center">
            <div className="inline-block mb-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              {projectData.subtitle}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {projectData.title}
            </h1>
          </div>
          
          <div className="aspect-video overflow-hidden rounded-2xl bg-accent">
            <img 
              src={projectData.thumbnail} 
              alt={projectData.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground mb-8">
                {projectData.overview}
              </p>
              
              <h2 className="text-2xl font-bold mb-4">Project Goals</h2>
              <ul className="space-y-2 mb-8 pl-6 list-disc text-muted-foreground">
                {projectData.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
              <ul className="space-y-2 mb-8 pl-6 list-disc text-muted-foreground">
                {projectData.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
              
              <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
              <p className="text-muted-foreground mb-8">
                {projectData.outcomes}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {projectData.images.map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden bg-accent">
                    <img 
                      src={image} 
                      alt={`Project screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="sticky top-24 space-y-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectData.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Project Documents</h3>
                  <div className="space-y-2">
                    <a 
                      href="#"
                      className="flex items-center gap-2 p-3 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors"
                    >
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Project Requirements</span>
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 p-3 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors"
                    >
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Design Mockups</span>
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 p-3 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors"
                    >
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Status Reports</span>
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 p-3 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors"
                    >
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>Technical Documentation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
