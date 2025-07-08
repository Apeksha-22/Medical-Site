
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppointmentDialog from '@/components/AppointmentDialog';

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '15 years',
      education: 'Harvard Medical School',
      rating: 4.9,
      availability: 'Available Today'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '12 years',
      education: 'Johns Hopkins University',
      rating: 4.8,
      availability: 'Available Tomorrow'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '10 years',
      education: 'Stanford Medical School',
      rating: 4.9,
      availability: 'Available Today'
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Orthopedic Surgeon',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '18 years',
      education: 'Mayo Clinic',
      rating: 4.9,
      availability: 'Available Mon-Fri'
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Dermatologist',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '8 years',
      education: 'AIIMS Delhi',
      rating: 4.7,
      availability: 'Available Today'
    },
    {
      name: 'Dr. Robert Wilson',
      specialty: 'Gastroenterologist',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '14 years',
      education: 'Yale Medical School',
      rating: 4.8,
      availability: 'Available Tomorrow'
    },
    {
      name: 'Dr. Lisa Zhang',
      specialty: 'Oncologist',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '16 years',
      education: 'UCLA Medical Center',
      rating: 4.9,
      availability: 'Available Mon-Wed'
    },
    {
      name: 'Dr. Ahmed Hassan',
      specialty: 'Urologist',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '11 years',
      education: 'Columbia University',
      rating: 4.6,
      availability: 'Available Today'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our team of board-certified physicians brings decades of experience and compassionate care to every patient interaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600">
                  {doctor.availability}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {doctor.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {doctor.specialty}
                </p>
                <div className="flex items-center mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 ml-1">{doctor.rating} rating</span>
                </div>
                <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300 mb-4">
                  <p>{doctor.experience} experience</p>
                  <p>{doctor.education}</p>
                </div>
                <AppointmentDialog doctorName={`${doctor.name} - ${doctor.specialty}`}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </AppointmentDialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/doctors">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400">
              View All Doctors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
