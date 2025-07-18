import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
   <header
  className="fixed top-0 w-full bg-card/95 backdrop-blur-sm z-50"
  style={{ borderBottom: '0.5px solid rgba(255, 255, 255, 0.15)' }}
>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-serif font-bold text-xl text-primary">
            NIVAS's PORTFOLIO
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
