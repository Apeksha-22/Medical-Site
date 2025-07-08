
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, AlertTriangle, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const EmergencyAlert = () => {
  const [isOpen, setIsOpen] = useState(false);

  const emergencyContacts = [
    {
      service: 'Emergency Medical Services',
      number: '108',
      description: 'For life-threatening emergencies'
    },
    {
      service: 'Police',
      number: '100',
      description: 'For security emergencies'
    },
    {
      service: 'Fire Department',
      number: '101',
      description: 'For fire emergencies'
    },
    {
      service: 'Hospital Emergency',
      number: '+1-234-567-8900',
      description: 'Direct hospital emergency line'
    }
  ];

  const nearbyHospitals = [
    {
      name: 'MediCare+ Main Hospital',
      address: '123 Health Street, Medical District',
      distance: '0.5 km',
      phone: '+1-234-567-8900'
    },
    {
      name: 'City General Hospital',
      address: '456 Emergency Ave, Downtown',
      distance: '1.2 km',
      phone: '+1-234-567-8901'
    },
    {
      name: 'Trauma Center',
      address: '789 Rescue Blvd, Central',
      distance: '2.1 km',
      phone: '+1-234-567-8902'
    }
  ];

  const handleEmergencyCall = (number: string, service: string) => {
    if (confirm(`Call ${service} at ${number}?`)) {
      window.location.href = `tel:${number}`;
      toast.success(`Calling ${service}...`);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Emergency Button */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 shadow-lg animate-pulse"
            size="lg"
          >
            <AlertTriangle className="h-8 w-8" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-800">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600 dark:text-red-400">
              <AlertTriangle className="h-6 w-6" />
              Emergency Services
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Emergency Notice */}
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <p className="text-red-800 dark:text-red-200 font-semibold text-center">
                If this is a life-threatening emergency, call 108 immediately!
              </p>
            </div>

            {/* Emergency Contacts */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Emergency Contacts</h3>
              <div className="grid gap-3">
                {emergencyContacts.map((contact, index) => (
                  <Card key={index} className="border-red-200 dark:border-red-800">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{contact.service}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{contact.description}</p>
                        </div>
                        <Button
                          onClick={() => handleEmergencyCall(contact.number, contact.service)}
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          {contact.number}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Nearby Hospitals */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Nearby Hospitals
              </h3>
              <div className="grid gap-3">
                {nearbyHospitals.map((hospital, index) => (
                  <Card key={index} className="border-gray-200 dark:border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{hospital.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{hospital.address}</p>
                          <p className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 mt-1">
                            <MapPin className="h-3 w-3" />
                            {hospital.distance} away
                          </p>
                        </div>
                        <Button
                          onClick={() => handleEmergencyCall(hospital.phone, hospital.name)}
                          variant="outline"
                          className="border-gray-300 dark:border-gray-600"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">In case of emergency:</h4>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Stay calm and assess the situation</li>
                <li>• Call the appropriate emergency number</li>
                <li>• Provide clear location information</li>
                <li>• Follow dispatcher instructions</li>
                <li>• Stay on the line until help arrives</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EmergencyAlert;
