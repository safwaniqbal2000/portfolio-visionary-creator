
import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <main className="w-full">
        {children}
      </main>
      <footer className="w-full py-8 px-4 md:px-8 border-t border-border/30 mt-24">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Professional Portfolio
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
