
import { useState } from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const InteractiveMap = () => {
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const hospitalLocations = [
    {
      name: "MediCare+ Main Hospital",
      address: "123 Medical Center Drive, Healthcare City, HC 12345",
      phone: "(123) 456-7890",
      hours: "24/7 Emergency",
      lat: 40.7128,
      lng: -74.0060
    },
    {
      name: "MediCare+ North Branch",
      address: "456 North Medical Way, Healthcare City, HC 12346",
      phone: "(123) 456-7891",
      hours: "Mon-Fri 8AM-6PM",
      lat: 40.7589,
      lng: -73.9851
    }
  ];

  const handleSetToken = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
      // Initialize map with token
      console.log('Mapbox token set:', mapboxToken);
    }
  };

  if (showTokenInput) {
    return (
      <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
        <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Interactive Map
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          To display the interactive map, please enter your Mapbox public token.
          Get your free token at mapbox.com
        </p>
        <div className="max-w-md mx-auto space-y-4">
          <Input
            placeholder="Enter Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
          />
          <Button onClick={handleSetToken} className="bg-blue-600 hover:bg-blue-700">
            Load Map
          </Button>
        </div>
        
        {/* Hospital Locations List */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {hospitalLocations.map((location, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-4 text-left">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {location.name}
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{location.phone}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{location.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
      <div className="h-96 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300">Interactive Map Loading...</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Map would be rendered here with Mapbox GL JS
          </p>
        </div>
      </div>
      
      {/* Map Controls */}
      <div className="p-4 bg-white dark:bg-gray-800">
        <div className="grid md:grid-cols-2 gap-4">
          {hospitalLocations.map((location, index) => (
            <div key={index} className="border dark:border-gray-600 rounded-lg p-3">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {location.name}
              </h4>
              <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <a href={`tel:${location.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {location.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{location.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
