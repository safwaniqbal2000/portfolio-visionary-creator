
import { useState } from 'react';
import { Briefcase, GraduationCap, Award, FileText, Download } from 'lucide-react';
import { useInView, ANIMATION_CLASSES } from '@/utils/animations';
import { cn } from '@/lib/utils';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const { ref, isInView } = useInView();
  
  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'cover-letter', label: 'Cover Letter', icon: FileText },
  ];
  
  const experienceData = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Lead frontend development for enterprise SaaS products. Manage a team of 5 developers. Implemented performance optimizations resulting in 40% faster page load times.",
      technologies: ["React", "TypeScript", "GraphQL", "Tailwind CSS"]
    },
    {
      title: "UX Developer",
      company: "Digital Solutions Agency",
      period: "2018 - 2021",
      description: "Designed and developed responsive web applications for various clients. Collaborated closely with design and product teams to implement pixel-perfect interfaces.",
      technologies: ["JavaScript", "Vue.js", "Figma", "SCSS"]
    },
    {
      title: "Web Developer",
      company: "Startup Ventures",
      period: "2016 - 2018",
      description: "Developed and maintained multiple client websites. Implemented responsive designs and ensured cross-browser compatibility.",
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "PHP"]
    }
  ];
  
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "University of Technology",
      period: "2014 - 2016",
      description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
      achievements: ["GPA: 3.9/4.0", "Research Assistant", "Dean's List"]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      period: "2010 - 2014",
      description: "Comprehensive program covering software development, algorithms, and system design.",
      achievements: ["Senior Project: E-commerce Platform", "Programming Club President", "Scholarship Recipient"]
    }
  ];
  
  const certificationData = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      description: "Professional level certification validating expertise in AWS cloud architecture and deployment."
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2021",
      description: "Certification demonstrating knowledge of Scrum framework and its application."
    },
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Google",
      date: "2020",
      description: "Comprehensive program covering all aspects of the UX design process."
    },
    {
      name: "Frontend Development Certification",
      issuer: "freeCodeCamp",
      date: "2019",
      description: "Completion of 300+ hours of coursework covering HTML, CSS, JavaScript, and frontend libraries."
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
            Professional Experience & Academic Credentials
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            An overview of my professional journey, education, and certifications
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
          
          {activeTab === 'certifications' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificationData.map((cert, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/20 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold">{cert.name}</h3>
                      <p className="text-primary text-sm mt-1">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-4">{cert.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'cover-letter' && (
            <div className="max-w-3xl mx-auto">
              <div className="mb-6 p-8 bg-card rounded-xl border border-border/50">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-muted-foreground">Senior Frontend Developer</p>
                    <p className="text-muted-foreground">123 Main Street, City, State, 12345</p>
                    <p className="text-muted-foreground">john.doe@example.com | (123) 456-7890</p>
                  </div>
                  <p className="text-sm text-muted-foreground">October 15, 2023</p>
                </div>
                
                <div className="mb-6">
                  <p className="font-medium">Hiring Manager</p>
                  <p className="text-muted-foreground">Tech Company Inc.</p>
                  <p className="text-muted-foreground">456 Technology Blvd, Tech City, TC 67890</p>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>Dear Hiring Manager,</p>
                  
                  <p>
                    I am writing to express my interest in the Senior Frontend Developer position at Tech Company Inc. With over 5 years of experience in frontend development and a strong background in creating intuitive user interfaces, I am confident in my ability to contribute significantly to your team.
                  </p>
                  
                  <p>
                    Throughout my career, I have consistently delivered high-quality code and user experiences that align with business objectives. At Tech Innovations Inc., I led a team that improved page load performance by 40% and implemented accessibility features that increased our user base by 15%. I am particularly proud of my ability to collaborate effectively with design, product, and backend teams to create cohesive and efficient applications.
                  </p>
                  
                  <p>
                    I am excited about Tech Company Inc.'s mission to revolutionize the industry through innovative technology solutions. My combination of technical expertise and user-focused design thinking makes me well-suited to help your company achieve its goals.
                  </p>
                  
                  <p>
                    I would welcome the opportunity to discuss how my skills and experience align with your needs. Thank you for considering my application.
                  </p>
                  
                  <p>Sincerely,</p>
                  <p>John Doe</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/70 transition-all"
                >
                  <Download size={16} />
                  Download Cover Letter
                </a>
              </div>
            </div>
          )}
        </div>
        
        <div className={`flex justify-center mt-12 ${isInView ? ANIMATION_CLASSES.fadeIn : 'opacity-0'} animation-delay-500`}>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            <Download size={18} />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
