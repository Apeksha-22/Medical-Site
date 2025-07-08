
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Check } from 'lucide-react';
import { toast } from 'sonner';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    // Simulate subscription
    setIsSubscribed(true);
    toast.success('Successfully subscribed to our newsletter!');
    setEmail('');
    
    // Reset after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Mail className="h-8 w-8 text-white" />
            <h2 className="text-4xl font-bold text-white">
              Stay Informed
            </h2>
          </div>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Subscribe to our newsletter for the latest health tips, medical breakthroughs, 
            hospital updates, and wellness advice from our expert medical team.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get Health Updates Delivered
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of patients who trust us for reliable health information and updates.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  required
                />
                <Button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                <Check className="h-6 w-6" />
                <span className="text-lg font-medium">Successfully Subscribed!</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">Weekly</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Health Tips</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">Monthly</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Medical Updates</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">Instant</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Emergency Alerts</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-blue-100 text-sm">
            <p>No spam, unsubscribe at any time. Your privacy is important to us.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
