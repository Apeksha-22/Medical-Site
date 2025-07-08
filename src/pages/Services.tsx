
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Brain, 
  Baby, 
  Bone, 
  Eye, 
  Stethoscope,
  Calendar,
  Clock,
  MapPin,
  Phone
} from 'lucide-react';

const Services = () => {
  const { serviceSlug } = useParams();

  const allServices = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care including preventive cardiology, cardiac surgery, and emergency interventions.',
      features: ['Heart Surgery', 'Cardiac Catheterization', 'Preventive Care', 'Angioplasty', 'Heart Transplant'],
      slug: 'cardiology',
      doctors: ['Dr. Sarah Johnson', 'Dr. Michael Heart'],
      timing: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
      emergency: '24/7 Available'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Advanced neurological care for brain, spine, and nervous system conditions.',
      features: ['Brain Surgery', 'Stroke Care', 'Neurological Disorders', 'Epilepsy Treatment', 'Spinal Surgery'],
      slug: 'neurology',
      doctors: ['Dr. Michael Chen', 'Dr. Lisa Brain'],
      timing: 'Mon-Fri: 9AM-5PM, Emergency: 24/7',
      emergency: '24/7 Available'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents.',
      features: ['Newborn Care', 'Pediatric Surgery', 'Child Development', 'Vaccination', 'Growth Monitoring'],
      slug: 'pediatrics',
      doctors: ['Dr. Emily Rodriguez', 'Dr. James Child'],
      timing: 'Mon-Sat: 8AM-7PM, Emergency: 24/7',
      emergency: '24/7 Available'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Expert care for bones, joints, muscles, and sports-related injuries.',
      features: ['Joint Replacement', 'Sports Medicine', 'Fracture Care', 'Arthroscopy', 'Physical Therapy'],
      slug: 'orthopedics',
      doctors: ['Dr. David Kim', 'Dr. Robert Bone'],
      timing: 'Mon-Fri: 8AM-6PM, Sat: 9AM-1PM',
      emergency: 'Emergency: 24/7'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
      features: ['Cataract Surgery', 'Retinal Care', 'LASIK Surgery', 'Glaucoma Treatment', 'Eye Exams'],
      slug: 'ophthalmology',
      doctors: ['Dr. Priya Sharma', 'Dr. Vision Care'],
      timing: 'Mon-Fri: 9AM-5PM, Sat: 9AM-1PM',
      emergency: 'Emergency: On Call'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Primary care and preventive medicine for adult health conditions.',
      features: ['Annual Checkups', 'Chronic Disease Management', 'Preventive Care', 'Health Screening', 'Wellness Programs'],
      slug: 'internal-medicine',
      doctors: ['Dr. Robert Wilson', 'Dr. Internal Med'],
      timing: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
      emergency: 'Emergency: Referral'
    }
  ];

  // If serviceSlug is provided, show specific service details
  if (serviceSlug) {
    const service = allServices.find(s => s.slug === serviceSlug);
    
    if (!service) {
      return (
        <div className="min-h-screen">
          <Header />
          <div className="pt-20 py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">The requested service does not exist.</p>
            </div>
          </div>
          <Footer />
        </div>
      );
    }

    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Services Include</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Department Info</h3>
                    <div className="space-y-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
                        <span>{service.timing}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Phone className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
                        <span>{service.emergency}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="h-5 w-5 mr-3 text-blue-600 dark:text-blue-400" />
                        <span>Floor 3, Wing A</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Our Specialists</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.doctors.map((doctor, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="text-gray-900 dark:text-white font-medium">{doctor}</span>
                        <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Show all services
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Our Medical Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive healthcare services with specialized departments and expert medical professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border dark:border-gray-700">
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
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
