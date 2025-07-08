
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Pill, Stethoscope, Activity, Phone, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';

const MedicalSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const medicalData = {
    symptoms: [
      {
        name: 'Fever',
        medicines: ['Paracetamol 500mg', 'Ibuprofen 400mg', 'Aspirin 325mg'],
        doctors: ['Dr. Sarah Johnson - General Medicine', 'Dr. Michael Chen - Internal Medicine'],
        treatment: 'Rest, fluids, and fever-reducing medication. Consult doctor if fever persists over 3 days.',
        emergency: false
      },
      {
        name: 'Cold',
        medicines: ['Cetirizine 10mg', 'Paracetamol + Phenylephrine', 'Vitamin C tablets'],
        doctors: ['Dr. Emily Rodriguez - Family Medicine', 'Dr. David Kim - ENT Specialist'],
        treatment: 'Rest, warm fluids, steam inhalation. Usually resolves in 7-10 days.',
        emergency: false
      },
      {
        name: 'Headache',
        medicines: ['Paracetamol 500mg', 'Ibuprofen 400mg', 'Aspirin 325mg'],
        doctors: ['Dr. Michael Chen - Neurologist', 'Dr. Sarah Johnson - General Medicine'],
        treatment: 'Rest in dark room, cold compress, adequate hydration.',
        emergency: false
      },
      {
        name: 'Stomach Pain',
        medicines: ['Antacid tablets', 'Omeprazole 20mg', 'Simethicone'],
        doctors: ['Dr. Robert Wilson - Gastroenterologist', 'Dr. Sarah Johnson - General Medicine'],
        treatment: 'Light diet, avoid spicy foods, stay hydrated.',
        emergency: false
      },
      {
        name: 'Chest Pain',
        medicines: ['Seek immediate medical attention'],
        doctors: ['Emergency Department', 'Dr. Sarah Johnson - Cardiologist'],
        treatment: 'EMERGENCY: Call ambulance immediately',
        emergency: true
      },
      {
        name: 'Diabetes',
        medicines: ['Metformin', 'Insulin', 'Glimepiride'],
        doctors: ['Dr. Emily Rodriguez - Endocrinologist', 'Dr. Sarah Johnson - General Medicine'],
        treatment: 'Regular monitoring, healthy diet, exercise, medication as prescribed.',
        emergency: false
      },
      {
        name: 'High Blood Pressure',
        medicines: ['Amlodipine', 'Lisinopril', 'Metoprolol'],
        doctors: ['Dr. Sarah Johnson - Cardiologist', 'Dr. Michael Chen - Internal Medicine'],
        treatment: 'Low sodium diet, regular exercise, stress management, medication compliance.',
        emergency: false
      }
    ],
    doctors: [
      { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', available: true },
      { name: 'Dr. Michael Chen', specialty: 'Neurologist', available: true },
      { name: 'Dr. Emily Rodriguez', specialty: 'Pediatrician', available: false },
      { name: 'Dr. David Kim', specialty: 'Orthopedic Surgeon', available: true },
      { name: 'Dr. Priya Sharma', specialty: 'Dermatologist', available: true },
      { name: 'Dr. Robert Wilson', specialty: 'Gastroenterologist', available: false },
    ]
  };

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    
    setIsSearching(true);
    
    // Simulate search delay
    setTimeout(() => {
      const results: any[] = [];
      
      // Search symptoms
      medicalData.symptoms.forEach(symptom => {
        if (symptom.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            type: 'symptom',
            data: symptom
          });
        }
      });
      
      // Search doctors
      medicalData.doctors.forEach(doctor => {
        if (doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())) {
          results.push({
            type: 'doctor',
            data: doctor
          });
        }
      });
      
      setSearchResults(results);
      setIsSearching(false);
      
      if (results.length === 0) {
        toast.error('No results found. Please try different keywords.');
      } else {
        toast.success(`Found ${results.length} result(s)`);
      }
    }, 1000);
  };

  const handleEmergencyCall = () => {
    if (confirm('Do you want to call emergency services? This will dial 108 (Emergency Medical Services).')) {
      window.location.href = 'tel:108';
      toast.success('Calling emergency services...');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Medical Search & Symptom Checker</h2>
        <p className="text-gray-600 dark:text-gray-300">Search for symptoms, doctors, treatments, and medicines</p>
      </div>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Search for symptoms, doctors, treatments, medicines..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="flex-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400"
        />
        <Button onClick={handleSearch} disabled={isSearching} className="bg-blue-600 hover:bg-blue-700 text-white">
          <Search className="h-4 w-4 mr-2" />
          {isSearching ? 'Searching...' : 'Search'}
        </Button>
        <Button 
          variant="destructive" 
          onClick={handleEmergencyCall}
          className="bg-red-600 hover:bg-red-700 text-white"
        >
          <Phone className="h-4 w-4 mr-2" />
          Emergency
        </Button>
      </div>

      {/* Quick Suggestions */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Quick searches:</p>
        <div className="flex flex-wrap gap-2">
          {['Fever', 'Headache', 'Cold', 'Diabetes', 'Chest Pain'].map((suggestion) => (
            <Button
              key={suggestion}
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery(suggestion);
                handleSearch();
              }}
              className="text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>

      {searchResults.length > 0 && (
        <div className="space-y-4">
          {searchResults.map((result, index) => (
            <Card key={index} className="p-4 bg-white dark:bg-gray-700 border dark:border-gray-600">
              {result.type === 'symptom' && (
                <div>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                      <Activity className="h-5 w-5 text-red-500" />
                      {result.data.name}
                      {result.data.emergency && (
                        <Badge variant="destructive" className="bg-red-600 text-white">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          EMERGENCY
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <h4 className="font-semibold flex items-center gap-2 mb-2 text-gray-900 dark:text-white">
                        <Pill className="h-4 w-4" />
                        Suggested Medicines:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.data.medicines.map((medicine: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300">{medicine}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold flex items-center gap-2 mb-2 text-gray-900 dark:text-white">
                        <Stethoscope className="h-4 w-4" />
                        Available Doctors:
                      </h4>
                      <div className="space-y-1">
                        {result.data.doctors.map((doctor: string, idx: number) => (
                          <Badge key={idx} variant="secondary" className="block w-fit bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300">{doctor}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Treatment Advice:</h4>
                      <p className={`text-sm ${result.data.emergency ? 'text-red-600 dark:text-red-400 font-bold' : 'text-gray-600 dark:text-gray-300'}`}>
                        {result.data.treatment}
                      </p>
                    </div>
                    
                    {result.data.emergency && (
                      <Button 
                        variant="destructive" 
                        onClick={handleEmergencyCall}
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Emergency Services Now
                      </Button>
                    )}
                  </CardContent>
                </div>
              )}
              
              {result.type === 'doctor' && (
                <div>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
                      <Stethoscope className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                      {result.data.name}
                      <Badge variant={result.data.available ? "default" : "secondary"} className={result.data.available ? "bg-green-600 text-white" : "bg-gray-500 text-white"}>
                        {result.data.available ? "Available" : "Busy"}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Specialty: {result.data.specialty}
                    </p>
                    {result.data.available && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Book Appointment
                      </Button>
                    )}
                  </CardContent>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-800 dark:text-yellow-200">
          <AlertTriangle className="h-4 w-4 inline mr-1" />
          <strong>Disclaimer:</strong> This is for informational purposes only and not a substitute for professional medical advice. 
          Always consult with a qualified healthcare provider for proper diagnosis and treatment.
        </p>
      </div>
    </div>
  );
};

export default MedicalSearchBar;
