
import { useState } from 'react';
import { Briefcase, GraduationCap, Download } from 'lucide-react';
import { useInView, ANIMATION_CLASSES } from '@/utils/animations';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');
  const { ref, isInView } = useInView();
  
  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
  ];
  
  const educationData = [
    {
      degree: "Advanced Diploma in Computer Programming and Data Analysis",
      institution: "George Brown College",
      period: "2022 - 2025",
      description: "Comprehensive program focusing on advanced programming concepts and data analysis techniques.",
      achievements: ["Data Structures & Algorithms", "Database Design & Development", "Web Development", "Mobile Application Development"]
    },
    {
      degree: "Bachelor of Software Engineering",
      institution: "IUBAT (International University of Business Agriculture and Technology)",
      period: "Completed",
      description: "Foundational program covering software engineering principles, programming fundamentals, and system design.",
      achievements: ["Software Development", "System Analysis", "Project Management", "Database Management"]
    }
  ];
  
  const experienceData = [
    {
      title: "Independent Website Developer and Designer",
      company: "Upwork Online Platform",
      period: "Current",
      description: "Designing and developing custom websites for clients on the Upwork platform. Specializing in responsive design and user experience optimization.",
      technologies: ["HTML/CSS", "JavaScript", "React", "Responsive Design", "UI/UX"]
    },
    {
      title: "Web Application Developer",
      company: "E-Commerce Website of Hotel Rental",
      period: "Academic Project",
      description: "Developed a comprehensive e-commerce platform for hotel rentals, implementing booking system, payment processing, and user management features.",
      technologies: ["React", "Node.js", "MongoDB", "Payment Gateway Integration"]
    }
  ];
  
  return (
    <section 
      id="resume" 
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 px-4 md:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isInView ? ANIMATION_CLASSES.fadeIn : 'opacity-0'}`}>
          <div className="inline-block mb-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">
            Resume & Credentials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Educational Background & Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            An overview of my academic journey and professional experience
          </p>
        </div>
        
        <div className={`flex justify-center mb-12 ${isInView ? ANIMATION_CLASSES.slideUp : 'opacity-0'} animation-delay-200`}>
          <div className="inline-flex p-1 bg-secondary rounded-lg">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all",
                  activeTab === tab.id 
                    ? "bg-background text-foreground shadow-sm" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <tab.icon size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className={`space-y-8 ${isInView ? ANIMATION_CLASSES.slideUp : 'opacity-0'} animation-delay-300`}>
          {activeTab === 'education' && (
            <div className="space-y-10">
              {educationData.map((edu, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row gap-6 md:gap-10"
                >
                  <div className="md:w-1/3">
                    <div className="sticky top-24">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-primary font-medium mt-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'experience' && (
            <div className="space-y-10">
              {experienceData.map((job, index) => (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row gap-6 md:gap-10"
                >
                  <div className="md:w-1/3">
                    <div className="sticky top-24">
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-primary font-medium mt-1">{job.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">{job.period}</p>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-muted-foreground mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className={`flex justify-center mt-12 ${isInView ? ANIMATION_CLASSES.fadeIn : 'opacity-0'} animation-delay-500`}>
          <Button 
            variant="default" 
            size="lg" 
            className="gap-2 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20"
          >
            <Download size={18} />
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
