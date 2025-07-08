
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import ReviewModal from './ReviewModal';

const TestimonialsSection = () => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      condition: 'Heart Surgery Patient',
      rating: 5,
      review: 'The cardiac team at MediCare+ saved my life. Dr. Johnson and her team were exceptional throughout my entire treatment journey. The care was personalized and compassionate.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=150&h=150',
      date: 'May 2024'
    },
    {
      name: 'James Thompson',
      condition: 'Orthopedic Patient',
      rating: 5,
      review: 'After my knee replacement surgery, I thought I\'d never walk properly again. Dr. Kim and the physiotherapy team helped me recover completely. I\'m back to hiking!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
      date: 'April 2024'
    },
    {
      name: 'Priya Sharma',
      condition: 'Pediatric Care',
      rating: 5,
      review: 'Dr. Rodriguez has been amazing with my daughter. She makes every visit comfortable and explains everything clearly. My daughter actually looks forward to her checkups now!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
      date: 'May 2024'
    },
    {
      name: 'Robert Chen',
      condition: 'Cancer Survivor',
      rating: 5,
      review: 'The oncology team at MediCare+ provided hope when I needed it most. Their comprehensive care approach and emotional support helped me through the toughest time of my life.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
      date: 'March 2024'
    },
    {
      name: 'Sarah Williams',
      condition: 'Maternity Care',
      rating: 5,
      review: 'From prenatal care to delivery, the maternity team was incredible. They made me feel safe and supported throughout my pregnancy journey. Thank you for helping bring my baby safely into the world.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150',
      date: 'April 2024'
    },
    {
      name: 'David Kumar',
      condition: 'Emergency Care',
      rating: 5,
      review: 'When I had my accident, the emergency team acted swiftly and professionally. Their quick response and excellent care made all the difference in my recovery.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150',
      date: 'May 2024'
    }
  ];

  const handleWriteReview = () => {
    setIsReviewModalOpen(true);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Patient Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear from our patients about their experiences and the quality care they received at MediCare+.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.review}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      console.log('Testimonial image failed to load:', testimonial.image);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.condition}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400">
                    {testimonial.date}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Share Your Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your feedback helps us improve our services and helps other patients make informed decisions.
            </p>
            <button 
              onClick={handleWriteReview}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Write a Review
            </button>
          </div>
        </div>
      </div>

      <ReviewModal 
        isOpen={isReviewModalOpen} 
        onClose={() => setIsReviewModalOpen(false)} 
      />
    </section>
  );
};

export default TestimonialsSection;
