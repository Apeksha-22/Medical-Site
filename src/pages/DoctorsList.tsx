import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Star, Search, Filter } from 'lucide-react';
import AppointmentDialog from '@/components/AppointmentDialog';
import Header from '@/components/Header';

const DoctorsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('all');

  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '15 years',
      education: 'Harvard Medical School',
      rating: 4.9,
      availability: 'Available Today',
      consultationFee: '$150',
      languages: ['English', 'Spanish']
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '12 years',
      education: 'Johns Hopkins University',
      rating: 4.8,
      availability: 'Available Tomorrow',
      consultationFee: '$180',
      languages: ['English', 'Mandarin']
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '10 years',
      education: 'Stanford Medical School',
      rating: 4.9,
      availability: 'Available Today',
      consultationFee: '$120',
      languages: ['English', 'Spanish']
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Orthopedic Surgeon',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '18 years',
      education: 'Mayo Clinic',
      rating: 4.9,
      availability: 'Available Mon-Fri',
      consultationFee: '$200',
      languages: ['English', 'Korean']
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Dermatologist',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '8 years',
      education: 'AIIMS Delhi',
      rating: 4.7,
      availability: 'Available Today',
      consultationFee: '$100',
      languages: ['English', 'Hindi']
    },
    {
      name: 'Dr. Robert Wilson',
      specialty: 'Gastroenterologist',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '14 years',
      education: 'Yale Medical School',
      rating: 4.8,
      availability: 'Available Tomorrow',
      consultationFee: '$160',
      languages: ['English']
    },
    {
      name: 'Dr. Lisa Zhang',
      specialty: 'Oncologist',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '16 years',
      education: 'UCLA Medical Center',
      rating: 4.9,
      availability: 'Available Mon-Wed',
      consultationFee: '$250',
      languages: ['English', 'Mandarin']
    },
    {
      name: 'Dr. Ahmed Hassan',
      specialty: 'Urologist',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '11 years',
      education: 'Columbia University',
      rating: 4.6,
      availability: 'Available Today',
      consultationFee: '$140',
      languages: ['English', 'Arabic']
    },
    {
      name: 'Dr. Maria Santos',
      specialty: 'Gynecologist',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '13 years',
      education: 'University of California',
      rating: 4.8,
      availability: 'Available Today',
      consultationFee: '$130',
      languages: ['English', 'Portuguese']
    },
    {
      name: 'Dr. James Thompson',
      specialty: 'Psychiatrist',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400&h=400',
      experience: '20 years',
      education: 'Harvard Medical School',
      rating: 4.9,
      availability: 'Available Tomorrow',
      consultationFee: '$180',
      languages: ['English']
    }
  ];

  const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = filterSpecialty === 'all' || doctor.specialty === filterSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Expert Doctors
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find and book appointments with our experienced medical professionals
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border dark:border-gray-700">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <Input
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            
            <div className="relative">
              <Filter className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <Select value={filterSpecialty} onValueChange={setFilterSpecialty}>
                <SelectTrigger className="pl-10 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <SelectItem value="all" className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">All Specialties</SelectItem>
                  {specialties.map(specialty => (
                    <SelectItem key={specialty} value={specialty} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
              Showing {filteredDoctors.length} of {doctors.length} doctors
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <div className="relative">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600 text-white">
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
                  <p className="font-semibold text-green-600 dark:text-green-400">
                    Consultation: {doctor.consultationFee}
                  </p>
                  <p>Languages: {doctor.languages.join(', ')}</p>
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

        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No doctors found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
