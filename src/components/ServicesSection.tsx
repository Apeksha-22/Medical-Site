
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye, 
  Stethoscope,
  ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care including preventive cardiology, cardiac surgery, and emergency interventions.',
      features: ['Heart Surgery', 'Cardiac Catheterization', 'Preventive Care'],
      slug: 'cardiology'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Advanced neurological care for brain, spine, and nervous system conditions.',
      features: ['Brain Surgery', 'Stroke Care', 'Neurological Disorders'],
      slug: 'neurology'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents.',
      features: ['Newborn Care', 'Pediatric Surgery', 'Child Development'],
      slug: 'pediatrics'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Expert care for bones, joints, muscles, and sports-related injuries.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care'],
      slug: 'orthopedics'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
      features: ['Cataract Surgery', 'Retinal Care', 'LASIK Surgery'],
      slug: 'ophthalmology'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Primary care and preventive medicine for adult health conditions.',
      features: ['Annual Checkups', 'Chronic Disease Management', 'Preventive Care'],
      slug: 'internal-medicine'
    }
  ];

  const handleLearnMore = (serviceSlug: string) => {
    // Navigate to a service detail page (you can create these pages later)
    navigate(`/services/${serviceSlug}`);
  };

  const handleViewAllServices = () => {
    navigate('/services');
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of medical services with specialized departments staffed by board-certified physicians and healthcare professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-700 border dark:border-gray-600">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                  onClick={() => handleLearnMore(service.slug)}
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleViewAllServices}
          >
            View All Services
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
