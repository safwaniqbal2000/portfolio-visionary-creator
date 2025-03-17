
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Resume', href: '#resume' },
    { name: 'Projects', href: '#projects' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo ${
          isScrolled ? 'blur-backdrop py-4 shadow-sm' : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <nav className="flex items-center justify-between">
            <a 
              href="#" 
              className="text-xl font-medium tracking-tight"
            >
              Portfolio
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <button 
              className="md:hidden text-foreground p-1"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 blur-backdrop">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end">
              <button 
                className="p-1"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center h-full space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl font-medium text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
