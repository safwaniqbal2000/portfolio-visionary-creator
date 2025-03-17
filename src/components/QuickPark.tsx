
import { Map, CreditCard, Car, Timer, Check, Search } from 'lucide-react';
import { useInView, ANIMATION_CLASSES } from '@/utils/animations';
import { Button } from '@/components/ui/button';

const QuickPark = () => {
  const { ref, isInView } = useInView();

  return (
    <section
      id="quick-park"
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-24 px-4 md:px-8 bg-accent/5"
    >
      <div className="container mx-auto max-w-7xl">
        <div className={`text-center mb-16 ${isInView ? ANIMATION_CLASSES.fadeIn : 'opacity-0'}`}>
          <div className="inline-block mb-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">
            Capstone Project
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Quick Park - Advanced Parking Solution
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A comprehensive system for real-time parking availability, reservations, and secure payments
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${isInView ? ANIMATION_CLASSES.slideUp : 'opacity-0'} animation-delay-200`}>
          <div className="space-y-8">
            <div className="bg-card rounded-xl border border-border/50 overflow-hidden">
              <div className="aspect-video bg-accent">
                <img 
                  src="https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Quick Park Project Preview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                <p className="text-muted-foreground mb-6">
                  Quick Park is an advanced parking solution designed to reduce congestion and enhance efficiency by offering real-time parking availability, reservation options, and secure payment integration. The platform aims to provide a seamless experience for users searching for and managing parking spaces.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">HTML/CSS</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">JavaScript</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">PHP</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">MySQL</span>
                  <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">Payment Gateway</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4">Project Vision</h3>
              <p className="text-muted-foreground mb-4">
                To revolutionize urban parking management by providing a streamlined and efficient solution that simplifies the parking process for users. The platform aims to reduce the time spent searching for parking spots, minimize traffic congestion, and create a hassle-free experience for drivers.
              </p>
              <p className="text-muted-foreground">
                Through a robust technology stack and well-coordinated team effort, Quick Park delivers a fully functional and scalable platform for modern parking challenges, addressing pain points in traditional parking methods through innovative technology solutions.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded">
                    <Map size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Real-Time Parking Availability</h4>
                    <p className="text-sm text-muted-foreground">
                      Users can view available parking spots in real-time across different locations, saving time and reducing frustration.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded">
                    <Timer size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Reservation System</h4>
                    <p className="text-sm text-muted-foreground">
                      Enables users to pre-book parking spots for specific time slots, ensuring availability upon arrival.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded">
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Secure Payment Integration</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensures safe and efficient transactions for parking fees with multiple payment options.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded">
                    <Search size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">User-Friendly Interface</h4>
                    <p className="text-sm text-muted-foreground">
                      Designed for accessibility and ease of use, with intuitive navigation and clear information display.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-primary/10 text-primary p-2 rounded">
                    <Car size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Parking History & Notifications</h4>
                    <p className="text-sm text-muted-foreground">
                      Allows users to review their past bookings and receive important updates about their reservations.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4">Development Challenges</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Ensuring smooth integration between frontend and backend</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Optimizing performance for high user traffic</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Implementing secure and seamless payment processing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                  <span>Addressing potential user experience issues</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl border border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4">Upcoming Milestones</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-primary" />
                  <span>Finalizing security enhancements</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-primary" />
                  <span>Completing UI refinements and ensuring mobile responsiveness</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-primary" />
                  <span>Testing and launching the secure online payment system</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={16} className="text-primary" />
                  <span>Conducting final debugging and project demonstration</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button
                variant="default"
                size="lg"
                className="shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20"
              >
                View Project Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickPark;
