
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Calendar, Home, Clock, TestTube, Heart, Eye, Activity } from 'lucide-react';
import { toast } from 'sonner';

const LabTestBooking = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: ''
  });

  const labTests = [
    {
      id: 'blood-test',
      name: 'Complete Blood Count (CBC)',
      price: 299,
      time: '2 hours',
      icon: TestTube,
      description: 'Comprehensive blood analysis including RBC, WBC, platelets'
    },
    {
      id: 'heart-test',
      name: 'Cardiac Profile',
      price: 1299,
      time: '4 hours',
      icon: Heart,
      description: 'ECG, Cholesterol, Troponin levels for heart health'
    },
    {
      id: 'diabetes-test',
      name: 'Diabetes Panel',
      price: 599,
      time: '3 hours',
      icon: Activity,
      description: 'HbA1c, Fasting glucose, Post-meal glucose levels'
    },
    {
      id: 'eye-test',
      name: 'Eye Examination',
      price: 799,
      time: '1 hour',
      icon: Eye,
      description: 'Vision test, retina scan, eye pressure check'
    },
    {
      id: 'vitamin-test',
      name: 'Vitamin D & B12',
      price: 899,
      time: '2 hours',
      icon: TestTube,
      description: 'Essential vitamin levels for overall health'
    },
    {
      id: 'thyroid-test',
      name: 'Thyroid Function Test',
      price: 699,
      time: '3 hours',
      icon: Activity,
      description: 'TSH, T3, T4 levels for thyroid health assessment'
    }
  ];

  const handleTestSelect = (testId: string) => {
    setSelectedTest(testId);
  };

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleBooking = () => {
    if (!selectedTest) {
      toast.error('Please select a test first');
      return;
    }

    if (!bookingData.name || !bookingData.phone || !bookingData.address || !bookingData.date || !bookingData.time) {
      toast.error('Please fill all required fields');
      return;
    }

    const test = labTests.find(t => t.id === selectedTest);
    toast.success(`Lab test "${test?.name}" booked successfully! Sample will be collected from your home on ${bookingData.date} at ${bookingData.time}`);
    
    // Reset form
    setSelectedTest(null);
    setBookingData({ name: '', phone: '', address: '', date: '', time: '' });
  };

  const selectedTestData = labTests.find(test => test.id === selectedTest);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Test Selection */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Select Lab Test
          </h3>
          <div className="grid gap-4">
            {labTests.map((test) => {
              const IconComponent = test.icon;
              return (
                <Card 
                  key={test.id} 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedTest === test.id 
                      ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' 
                      : 'hover:shadow-md bg-white dark:bg-gray-800'
                  } border-gray-200 dark:border-gray-700`}
                  onClick={() => handleTestSelect(test.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <IconComponent className="h-8 w-8 text-blue-600 dark:text-blue-400 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {test.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                              {test.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                              ₹{test.price}
                            </p>
                            <Badge variant="outline" className="mt-1">
                              <Clock className="h-3 w-3 mr-1" />
                              {test.time}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Booking Form */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Book Home Sample Collection
          </h3>
          
          {selectedTest && selectedTestData && (
            <Card className="mb-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  {React.createElement(selectedTestData.icon, { 
                    className: "h-6 w-6 text-blue-600" 
                  })}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {selectedTestData.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-bold">
                      ₹{selectedTestData.price}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white flex items-center gap-2">
                <Home className="h-5 w-5" />
                Home Collection Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={bookingData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  value={bookingData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-gray-700 dark:text-gray-300">
                  Home Address *
                </Label>
                <Input
                  id="address"
                  value={bookingData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter your complete address"
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date" className="text-gray-700 dark:text-gray-300">
                    Preferred Date *
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={bookingData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="text-gray-700 dark:text-gray-300">
                    Preferred Time *
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={bookingData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Collection Information
                </h4>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Sample collection at your doorstep</li>
                  <li>• Trained phlebotomist will visit</li>
                  <li>• Reports available within {selectedTestData?.time || '2-4 hours'}</li>
                  <li>• Digital reports via email & SMS</li>
                </ul>
              </div>

              <Button
                onClick={handleBooking}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={!selectedTest}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Book Home Collection
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LabTestBooking;
