
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Calendar, User, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeToggle } from '@/components/ThemeToggle';
import AppointmentDialog from '@/components/AppointmentDialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationItems = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '/', section: 'about' },
    { name: 'Services', href: '/services', section: null },
    { name: 'Doctors', href: '/doctors', section: null },
    { name: 'Blog', href: '/blog', section: null },
    { name: 'Contact', href: '/', section: 'contact' },
  ];

  const handleNavClick = (item: typeof navigationItems[0]) => {
    if (item.href === '/doctors' || item.href === '/blog' || item.href === '/services') {
      navigate(item.href);
    } else if (item.section) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate(item.href);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    console.log('Logo clicked - navigating to home');
    navigate('/');
    // Scroll to top when logo is clicked
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEmergencyCall = () => {
    if (confirm('Call Emergency Services: (123) 456-7890?')) {
      window.location.href = 'tel:+1234567890';
    }
  };

  return (
    <header className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={handleLogoClick} 
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center text-2xl font-bold text-blue-600 dark:text-blue-400">
              <Heart className="h-8 w-8 mr-2 text-red-500" />
              MediCare+
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={handleEmergencyCall}
              variant="ghost"
              className="flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <Phone className="h-4 w-4 mr-2" />
              Emergency Call
            </Button>
            
            <ThemeToggle />
            
            <AppointmentDialog>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Calendar className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </AppointmentDialog>

            <Link to="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  onClick={handleEmergencyCall}
                  variant="ghost"
                  className="w-full justify-start text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Emergency Call
                </Button>
                
                <div className="flex items-center px-3 py-2">
                  <ThemeToggle />
                </div>

                <AppointmentDialog>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </AppointmentDialog>

                <Link to="/login" className="block">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400">
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
