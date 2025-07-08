
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import InteractiveMap from '@/components/InteractiveMap';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're here to help you with any questions or concerns. Reach out to us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  123 Medical Center Drive<br />
                  Healthcare City, HC 12345
                </p>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone Numbers</h3>
                </div>
                <div className="space-y-1 text-gray-600 dark:text-gray-300">
                  <p>Emergency: (123) 456-7890</p>
                  <p>General: (123) 456-7891</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                </div>
                <div className="space-y-1 text-gray-600 dark:text-gray-300">
                  <p>info@medicareplus.com</p>
                  <p>appointments@medicareplus.com</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hours</h3>
                </div>
                <div className="space-y-1 text-gray-600 dark:text-gray-300">
                  <p>Emergency: 24/7</p>
                  <p>General: Mon-Fri 8AM-6PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="Enter your first name" 
                      className="bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Enter your last name" 
                      className="bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    placeholder="Enter your phone number" 
                    className="bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us how we can help you..." 
                    rows={4}
                    className="bg-white dark:bg-gray-600 border-gray-300 dark:border-gray-500 text-gray-900 dark:text-white"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Interactive Map */}
          <div>
            <InteractiveMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
