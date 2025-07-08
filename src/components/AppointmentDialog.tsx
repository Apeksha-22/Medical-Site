import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface AppointmentDialogProps {
  children: React.ReactNode;
  doctorName?: string;
}

const AppointmentDialog = ({ children, doctorName }: AppointmentDialogProps) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const navigate = useNavigate();
  
  // Check if user is logged in (simple check for demo purposes)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      doctor: doctorName || '',
      time: '',
      reason: ''
    }
  });

  const handleDialogOpen = () => {
    if (!isLoggedIn) {
      toast({
        title: "Login Required",
        description: "Please log in to book an appointment.",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }
    setOpen(true);
  };

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const doctors = [
    'Dr. Sarah Johnson - Cardiologist',
    'Dr. Michael Chen - Neurologist', 
    'Dr. Emily Rodriguez - Pediatrician',
    'Dr. David Kim - Orthopedic Surgeon',
    'Dr. Priya Sharma - Dermatologist',
    'Dr. Robert Wilson - Gastroenterologist',
    'Dr. Lisa Zhang - Oncologist',
    'Dr. Ahmed Hassan - Urologist',
    'Dr. Maria Garcia - Gynecologist',
    'Dr. James Thompson - ENT Specialist',
    'Dr. Neha Patel - Ophthalmologist',
    'Dr. Alex Brown - Psychiatrist'
  ];

  const onSubmit = (data: any) => {
    if (!data.name || !data.email || !data.phone || !data.doctor || !data.time || !selectedDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields including date selection.",
        variant: "destructive",
      });
      return;
    }

    const appointmentData = {
      ...data,
      date: selectedDate ? format(selectedDate, 'PPP') : ''
    };
    
    console.log('Appointment booked:', appointmentData);
    toast({
      title: "Appointment Booked Successfully!",
      description: `Your appointment with ${data.doctor} has been scheduled for ${appointmentData.date} at ${data.time}.`,
    });
    
    setOpen(false);
    form.reset();
    setSelectedDate(undefined);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div onClick={handleDialogOpen}>
          {children}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
        <DialogHeader>
          <DialogTitle className="text-gray-900 dark:text-white">Book an Appointment</DialogTitle>
          <DialogDescription className="text-gray-600 dark:text-gray-300">
            Fill in your details to schedule an appointment with our doctors. All fields are required.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 dark:text-white">Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} required className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 dark:text-white">Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} required className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 dark:text-white">Phone Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} required className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="doctor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 dark:text-white">Select Doctor *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} required>
                    <FormControl>
                      <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                        <SelectValue placeholder="Choose a doctor" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      {doctors.map((doctor) => (
                        <SelectItem key={doctor} value={doctor} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                          {doctor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <Label className="text-gray-900 dark:text-white">Select Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600",
                      !selectedDate && "text-muted-foreground dark:text-gray-400"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 dark:text-white">Select Time *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} required>
                    <FormControl>
                      <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                        <SelectValue placeholder="Choose time slot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time} className="text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            {time}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-900 dark:text-white">Reason for Visit (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Brief description of your concern" {...field} className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Book Appointment
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
