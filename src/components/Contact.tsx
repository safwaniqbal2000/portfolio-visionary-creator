
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Instagram, Linkedin, Facebook } from 'lucide-react';
import { useInView, ANIMATION_CLASSES } from '@/utils/animations';

const Contact = () => {
  const {
    ref,
    isInView
  } = useInView();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formState);
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    // Show success message
    alert('Message sent successfully!');
  };
  
  return <section id="contact" ref={ref as React.RefObject<HTMLDivElement>} className="py-24 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 ${isInView ? ANIMATION_CLASSES.fadeIn : 'opacity-0'}`}>
          <div className="inline-block mb-2 px-4 py-1.5 bg-accent text-accent-foreground rounded-full text-sm font-medium">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Contact Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Interested in working together? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className={`lg:col-span-2 ${isInView ? ANIMATION_CLASSES.slideInLeft : 'opacity-0'}`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out for collaborations, inquiries, or just to say hello!
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-accent rounded-full">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-medium">safwaniqbalshahbadi2000@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-accent rounded-full">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="font-medium">
                    </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 p-2 bg-accent rounded-full">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-medium">Toronto, ON</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/safwaniqbal2000" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/iqbal_shahcase_safwan/" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/safwan-iqbal-shahbadi-212933355/" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://www.facebook.com/safwaniqbal.shahabadi" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`lg:col-span-3 ${isInView ? ANIMATION_CLASSES.slideInRight : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-2xl border border-border/50 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Send a Message</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <input id="name" name="name" type="text" value={formState.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="John Doe" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="john.doe@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 rounded-lg border border-input bg-background placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="Your message here..." />
              </div>
              
              <button type="submit" className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 hover:bg-primary/90 transition-all">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};

export default Contact;
