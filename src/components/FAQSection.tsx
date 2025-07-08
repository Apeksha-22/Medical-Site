
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment through our website by clicking the "Book Appointment" button, calling our helpline, or visiting the hospital directly. Online booking is available 24/7.'
    },
    {
      question: 'What insurance plans do you accept?',
      answer: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and many others. Please contact our billing department to verify your specific coverage.'
    },
    {
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring a valid ID, insurance card, list of current medications, any previous medical records relevant to your visit, and a form of payment for any co-pays or deductibles.'
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'Yes, our emergency department is open 24/7, 365 days a year. For life-threatening emergencies, call 911 immediately. For urgent but non-life-threatening conditions, you can visit our ER directly.'
    },
    {
      question: 'Can I get my test results online?',
      answer: 'Yes, through our patient portal you can access lab results, imaging reports, and other medical records. You\'ll receive login credentials after your first visit.'
    },
    {
      question: 'What are your visiting hours?',
      answer: 'General visiting hours are from 8:00 AM to 8:00 PM daily. ICU and special care units may have different hours. Please check with the specific department for their visiting policies.'
    },
    {
      question: 'Do you offer telemedicine consultations?',
      answer: 'Yes, we offer virtual consultations for many specialties. These can be scheduled through our online booking system or by calling our appointment line.'
    },
    {
      question: 'How can I pay my medical bills?',
      answer: 'You can pay bills online through our patient portal, by phone, mail, or in person at our billing office. We also offer payment plans for qualifying patients.'
    },
    {
      question: 'Can I request prescription refills online?',
      answer: 'Yes, prescription refills can be requested through our patient portal or by calling our pharmacy directly. Please allow 24-48 hours for processing.'
    },
    {
      question: 'What if I need to cancel or reschedule my appointment?',
      answer: 'Please call at least 24 hours before your scheduled appointment to cancel or reschedule. This helps us accommodate other patients and avoid cancellation fees.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our services, appointments, billing, and more.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 dark:border-gray-600 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-gray-900 dark:text-white hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-300 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Still Have Questions?
              </h3>
              <p className="text-blue-100 mb-6">
                Our customer service team is here to help you with any additional questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Call Us: (555) 123-4567
                </button>
                <button className="bg-blue-700 text-white border border-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                  Send Email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
