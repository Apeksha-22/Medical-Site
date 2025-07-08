
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DoctorsSection from '@/components/DoctorsSection';
import MedicineReminder from '@/components/MedicineReminder';
import BlogSection from '@/components/BlogSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import NewsletterSection from '@/components/NewsletterSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import EmergencyAlert from '@/components/EmergencyAlert';
import WhatsAppIntegration from '@/components/WhatsAppIntegration';
import TelehealthStatus from '@/components/TelehealthStatus';
import LabTestBooking from '@/components/LabTestBooking';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />

      {/* Medicine Reminder Section */}
      <section id="medicine-reminder" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Medicine Reminder & Tracker
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Never miss your medication with our smart reminder system. Set up personalized alerts for all your medicines.
            </p>
          </div>
          <MedicineReminder />
        </div>
      </section>

      {/* Lab Test Booking Section */}
      <section id="lab-tests" className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Lab Test Booking with Home Sample Pickup
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Book lab tests and schedule home sample pickup. Get tested conveniently at your doorstep.
            </p>
          </div>
          <LabTestBooking />
        </div>
      </section>

      <ServicesSection />
      <DoctorsSection />
      <TelehealthStatus />
      <BlogSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsletterSection />
      <ContactSection />
      <Footer />
      
      {/* Floating Components */}
      <EmergencyAlert />
      <WhatsAppIntegration />
    </div>
  );
};

export default Index;
