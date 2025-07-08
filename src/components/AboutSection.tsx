
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Heart, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Excellence in Care',
      description: 'Nationally recognized for our high-quality medical care and patient safety standards.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Board-certified physicians and healthcare professionals dedicated to your wellbeing.'
    },
    {
      icon: Heart,
      title: 'Compassionate Service',
      description: 'We treat every patient with dignity, respect, and personalized attention.'
    },
    {
      icon: Shield,
      title: 'Advanced Technology',
      description: 'State-of-the-art medical equipment and innovative treatment approaches.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About MediCare+
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            For over 25 years, MediCare+ has been a trusted healthcare provider, committed to delivering exceptional medical care with compassion and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800&h=600"
              alt="Healthcare professional"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Leading Healthcare Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our mission is to provide comprehensive, patient-centered healthcare that combines clinical excellence with genuine compassion. We believe in treating not just the condition, but the whole person.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">Joint Commission Accredited</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">Magnet Recognition for Nursing Excellence</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">Top 100 Hospitals in America</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border dark:border-gray-700">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
