
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReviewModal = ({ isOpen, onClose }: ReviewModalProps) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewData, setReviewData] = useState({
    name: '',
    email: '',
    condition: '',
    review: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reviewData.name || !reviewData.review || rating === 0) {
      toast.error('Please fill all required fields and provide a rating');
      return;
    }

    // Simulate review submission
    console.log('Review submitted:', { ...reviewData, rating });
    
    toast.success('Thank you for your review! Your feedback helps us improve our services.');
    
    // Reset form
    setReviewData({ name: '', email: '', condition: '', review: '' });
    setRating(0);
    setHoverRating(0);
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setReviewData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Write a Review
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
              Full Name *
            </Label>
            <Input
              id="name"
              value={reviewData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your full name"
              className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              required
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={reviewData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Enter your email"
              className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <Label htmlFor="condition" className="text-gray-700 dark:text-gray-300">
              Medical Condition/Service
            </Label>
            <Input
              id="condition"
              value={reviewData.condition}
              onChange={(e) => handleInputChange('condition', e.target.value)}
              placeholder="e.g., Heart Surgery, General Checkup"
              className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
            />
          </div>

          <div>
            <Label className="text-gray-700 dark:text-gray-300">
              Rating *
            </Label>
            <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="p-1"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= (hoverRating || rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300 dark:text-gray-600'
                    } transition-colors`}
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {rating > 0 && `${rating}/5 stars`}
              </span>
            </div>
          </div>

          <div>
            <Label htmlFor="review" className="text-gray-700 dark:text-gray-300">
              Your Review *
            </Label>
            <Textarea
              id="review"
              value={reviewData.review}
              onChange={(e) => handleInputChange('review', e.target.value)}
              placeholder="Share your experience with our medical services..."
              rows={4}
              className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Submit Review
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;
