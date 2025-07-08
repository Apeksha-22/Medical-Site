
import React, { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const VoiceSearch = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = 'en-US';

      recognitionInstance.onresult = (event: any) => {
        const speechResult = event.results[0][0].transcript;
        setTranscript(speechResult);
        toast.success(`Voice search: "${speechResult}"`);
        // Here you can add logic to search based on the transcript
        performVoiceSearch(speechResult);
      };

      recognitionInstance.onerror = () => {
        toast.error('Voice recognition error. Please try again.');
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }
  }, []);

  const performVoiceSearch = (searchTerm: string) => {
    // Add search logic here
    console.log('Searching for:', searchTerm);
    // You can integrate this with your existing search functionality
  };

  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();
    } else {
      toast.error('Voice recognition not supported in this browser.');
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
          Voice Search for Medical Services
        </h3>
        <div className="text-center">
          <Button
            onClick={isListening ? stopListening : startListening}
            className={`${
              isListening 
                ? 'bg-red-600 hover:bg-red-700 animate-pulse' 
                : 'bg-blue-600 hover:bg-blue-700'
            } text-white px-6 py-3 rounded-lg font-medium transition-all duration-300`}
          >
            {isListening ? (
              <>
                <MicOff className="h-5 w-5 mr-2" />
                Stop Listening
              </>
            ) : (
              <>
                <Mic className="h-5 w-5 mr-2" />
                Start Voice Search
              </>
            )}
          </Button>
          {transcript && (
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Last search: "{transcript}"
            </p>
          )}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Say something like "Find cardiologist" or "Book appointment"
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoiceSearch;
