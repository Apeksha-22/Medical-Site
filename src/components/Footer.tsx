
import { Heart, Phone, Mail, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'About Us', section: 'about' },
    { name: 'Our Services', section: 'services' },
    { name: 'Find a Doctor', href: '/doctors' },
    { name: 'Patient Portal', href: '/login' },
    { name: 'Contact Us', section: 'contact' }
  ];

  const services = [
    'Emergency Care',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics'
  ];

  const handleNavClick = (item: typeof quickLinks[0]) => {
    if (item.href) {
      navigate(item.href);
    } else if (item.section) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(item.section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-500 mr-2" />
              <span className="text-2xl font-bold text-white">MediCare+</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
              Providing exceptional healthcare services with compassion and excellence for over 25 years.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-sm text-gray-300 dark:text-gray-400">Emergency: (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-sm text-gray-300 dark:text-gray-400">info@medicareplus.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-sm text-gray-300 dark:text-gray-400">123 Medical Center Drive</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => handleNavClick(link)}
                    className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => {
                      navigate('/');
                      setTimeout(() => {
                        const element = document.getElementById('services');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }, 100);
                    }}
                    className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Emergency</h3>
            <div className="space-y-4">
              <div className="bg-red-600 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-white">24/7 Emergency Care</h4>
                <p className="text-sm mb-3 text-gray-100">Call immediately for life-threatening emergencies</p>
                <a href="tel:911" className="bg-white text-red-600 px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors">
                  Call 911
                </a>
              </div>
              <div className="text-sm text-gray-300 dark:text-gray-400">
                <p>For non-emergency inquiries:</p>
                <p className="font-semibold text-white">(123) 456-7891</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 dark:text-gray-400 text-sm">
              © 2024 MediCare+. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-white text-sm transition-colors">
                HIPAA Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
