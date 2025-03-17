import { Code, FileText, Figma, GitBranch } from 'lucide-react';
import { useInView, ANIMATION_CLASSES } from '@/utils/animations';
import { Button } from '@/components/ui/button';
const Capstone = () => {
  const {
    ref,
    isInView
  } = useInView();
  return <section id="capstone" ref={ref as React.RefObject<HTMLDivElement>} className="px-4 md:px-8 bg-accent/5 py-0">
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isInView ? ANIMATION_CLASSES.fadeIn : 'opacity-0'}`}>
          <div className="inline-block mb-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">
            Capstone Project
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Hotel Rental E-Commerce Platform
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive web application for booking and managing hotel accommodations
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${isInView ? ANIMATION_CLASSES.slideUp : 'opacity-0'} animation-delay-200`}>
          <div className="space-y-8">
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
              <div className="aspect-video bg-accent">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Capstone Project Preview" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <p className="text-muted-foreground mb-6">
                  This hotel rental e-commerce platform was developed as my capstone project, showcasing my skills in full-stack development, database design, and user experience design. The application provides a complete solution for hotel booking, management, and customer engagement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">React</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">Node.js</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">MongoDB</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">Express</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">Stripe API</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4">Project Vision</h3>
              <p className="text-muted-foreground mb-4">
                To create a modern, user-friendly platform that simplifies the hotel booking process while providing property owners with powerful management tools. The platform aims to improve the customer experience through intuitive design and streamlined workflows.
              </p>
              <p className="text-muted-foreground">
                The project addresses common pain points in the hotel booking industry, such as complex reservation systems, lack of transparency, and limited payment options. By focusing on user experience and modern technology, this platform offers a competitive alternative to existing solutions.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4">Project Documentation</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Business Requirements</h4>
                    <p className="text-sm text-muted-foreground">
                      Detailed documentation of functional and non-functional requirements for the platform, including user stories and business rules.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded">
                    <Figma size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Wireframes & Mockups</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive design prototypes showing the user interface, user flows, and responsive layouts for different devices.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded">
                    <GitBranch size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">System Implementation</h4>
                    <p className="text-sm text-muted-foreground">
                      Technical documentation detailing the system architecture, database schema, API endpoints, and deployment process.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded">
                    <Code size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Source Code</h4>
                    <p className="text-sm text-muted-foreground">
                      Well-documented codebase with clean architecture, following best practices for maintainability and scalability.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Advanced search and filtering for accommodations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Secure booking and payment processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>User reviews and rating system</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Property management dashboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Booking management and history</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Responsive design for mobile and desktop</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button variant="default" size="lg" className="shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20">
                View Full Project Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Capstone;