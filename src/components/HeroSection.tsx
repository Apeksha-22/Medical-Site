
import { Button } from '@/components/ui/button';
import { Calendar, Phone, Search } from 'lucide-react';
import AppointmentDialog from '@/components/AppointmentDialog';
import MedicalSearchBar from '@/components/MedicalSearchBar';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 pt-20 pb-16 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Your Health, Our{' '}
            <span className="text-blue-600 dark:text-blue-400">Priority</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Experience world-class healthcare with our team of expert doctors, 
            state-of-the-art facilities, and personalized treatment plans designed just for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <AppointmentDialog>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4">
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </Button>
            </AppointmentDialog>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white px-8 py-4"
            >
              <Phone className="h-5 w-5 mr-2" />
              Emergency Services
            </Button>
          </div>
        </div>

        {/* Medical Search Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 transition-colors border dark:border-gray-700">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
              <Search className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Medical Search & Assistance
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Search for symptoms, find doctors, get treatment suggestions, and medicine recommendations
            </p>
          </div>
          <MedicalSearchBar />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-colors border dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-gray-600 dark:text-gray-300">Expert Doctors</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-colors border dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">10k+</div>
            <div className="text-gray-600 dark:text-gray-300">Happy Patients</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-colors border dark:border-gray-700">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Emergency Care</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-colors border dark:border-gray-700">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
