
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppIntegration = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919999999999"; // Replace with actual phone number
    const message = "Hi, I want to book an appointment for medical consultation.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden md:block font-medium">Chat on WhatsApp</span>
      </button>
    </div>
  );
};

export default WhatsAppIntegration;
