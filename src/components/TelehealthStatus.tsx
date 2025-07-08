
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Video, Phone, Clock, Users } from 'lucide-react';

const TelehealthStatus = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      isOnline: true,
      nextAvailable: '2:30 PM',
      consultationFee: 799,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      isOnline: false,
      nextAvailable: '4:00 PM',
      consultationFee: 899,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      isOnline: true,
      nextAvailable: 'Available Now',
      consultationFee: 699,
      image: 'https://images.unsplash.com/photo-1594824694996-f9b5d8eb2a4e?auto=format&fit=crop&q=80&w=150&h=150'
    },
    {
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic',
      isOnline: true,
      nextAvailable: '3:15 PM',
      consultationFee: 749,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=150&h=150'
    }
  ];

  const handleVideoConsultation = (doctorName: string) => {
    // Here you would integrate with video calling API like Jitsi Meet
    console.log(`Starting video consultation with ${doctorName}`);
    // Example: Open Jitsi Meet room
    const roomName = `consultation-${Date.now()}`;
    window.open(`https://meet.jit.si/${roomName}`, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Telehealth Consultation
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with our doctors from the comfort of your home. Real-time availability and instant video consultations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="text-center pb-2">
                <div className="relative inline-block">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full ${
                    doctor.isOnline ? 'bg-green-500' : 'bg-gray-400'
                  } border-2 border-white`}></div>
                </div>
                <CardTitle className="text-lg text-gray-900 dark:text-white">
                  {doctor.name}
                </CardTitle>
                <Badge variant="outline" className="border-gray-300 dark:border-gray-600">
                  {doctor.specialty}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {doctor.nextAvailable}
                    </span>
                  </div>
                  <Badge className={`${
                    doctor.isOnline ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'
                  }`}>
                    {doctor.isOnline ? '🟢 Online' : '🔴 Offline'}
                  </Badge>
                </div>
                
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    ₹{doctor.consultationFee}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Consultation Fee
                  </p>
                </div>

                <div className="space-y-2">
                  <Button
                    onClick={() => handleVideoConsultation(doctor.name)}
                    disabled={!doctor.isOnline}
                    className={`w-full ${
                      doctor.isOnline 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Video Consult
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-gray-300 dark:border-gray-600"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Voice Call
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              24/7 Emergency Teleconsultation
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our emergency doctors are available round the clock for urgent medical consultations.
            </p>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Emergency Consult Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelehealthStatus;
