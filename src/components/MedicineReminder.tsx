
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Pill, Clock, Plus, Trash2, Bell } from 'lucide-react';
import { toast } from 'sonner';

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  notes?: string;
}

const MedicineReminder = () => {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newMedicine, setNewMedicine] = useState({
    name: '',
    dosage: '',
    frequency: 'once',
    time: '',
    notes: ''
  });

  // Load medicines from localStorage on component mount
  useEffect(() => {
    const savedMedicines = localStorage.getItem('medicineReminders');
    if (savedMedicines) {
      setMedicines(JSON.parse(savedMedicines));
    }
  }, []);

  // Save medicines to localStorage whenever medicines change
  useEffect(() => {
    localStorage.setItem('medicineReminders', JSON.stringify(medicines));
  }, [medicines]);

  const addMedicine = () => {
    if (!newMedicine.name || !newMedicine.dosage || !newMedicine.time) {
      toast.error('Please fill in all required fields');
      return;
    }

    const medicine: Medicine = {
      id: Date.now().toString(),
      ...newMedicine
    };

    setMedicines([...medicines, medicine]);
    setNewMedicine({ name: '', dosage: '', frequency: 'once', time: '', notes: '' });
    setIsOpen(false);
    toast.success('Medicine reminder added successfully!');

    // Set up browser notification if permission granted
    if (Notification.permission === 'granted') {
      scheduleNotification(medicine);
    }
  };

  const removeMedicine = (id: string) => {
    setMedicines(medicines.filter(med => med.id !== id));
    toast.success('Medicine reminder removed');
  };

  const scheduleNotification = (medicine: Medicine) => {
    const now = new Date();
    const [hours, minutes] = medicine.time.split(':').map(Number);
    const reminderTime = new Date();
    reminderTime.setHours(hours, minutes, 0, 0);

    // If the time has passed today, schedule for tomorrow
    if (reminderTime <= now) {
      reminderTime.setDate(reminderTime.getDate() + 1);
    }

    const timeUntilReminder = reminderTime.getTime() - now.getTime();

    setTimeout(() => {
      new Notification('Medicine Reminder', {
        body: `Time to take ${medicine.name} - ${medicine.dosage}`,
        icon: '/favicon.ico'
      });
    }, timeUntilReminder);
  };

  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          toast.success('Notifications enabled for medicine reminders');
        } else {
          toast.error('Notifications denied. You won\'t receive reminders.');
        }
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Pill className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Medicine Reminders
          </h2>
          <p className="text-gray-600 dark:text-gray-300">Manage your medication schedule</p>
        </div>
        
        <div className="flex gap-2">
          <Button
            onClick={requestNotificationPermission}
            variant="outline"
            className="border-gray-300 dark:border-gray-600"
          >
            <Bell className="h-4 w-4 mr-2" />
            Enable Notifications
          </Button>
          
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="h-4 w-4 mr-2" />
                Add Medicine
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white dark:bg-gray-800">
              <DialogHeader>
                <DialogTitle className="text-gray-900 dark:text-white">Add New Medicine Reminder</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="medicine-name" className="text-gray-700 dark:text-gray-300">Medicine Name *</Label>
                  <Input
                    id="medicine-name"
                    placeholder="e.g., Paracetamol"
                    value={newMedicine.name}
                    onChange={(e) => setNewMedicine({ ...newMedicine, name: e.target.value })}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="dosage" className="text-gray-700 dark:text-gray-300">Dosage *</Label>
                  <Input
                    id="dosage"
                    placeholder="e.g., 500mg, 1 tablet"
                    value={newMedicine.dosage}
                    onChange={(e) => setNewMedicine({ ...newMedicine, dosage: e.target.value })}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="frequency" className="text-gray-700 dark:text-gray-300">Frequency</Label>
                  <Select value={newMedicine.frequency} onValueChange={(value) => setNewMedicine({ ...newMedicine, frequency: value })}>
                    <SelectTrigger className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800">
                      <SelectItem value="once">Once daily</SelectItem>
                      <SelectItem value="twice">Twice daily</SelectItem>
                      <SelectItem value="thrice">Three times daily</SelectItem>
                      <SelectItem value="four">Four times daily</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="time" className="text-gray-700 dark:text-gray-300">Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    value={newMedicine.time}
                    onChange={(e) => setNewMedicine({ ...newMedicine, time: e.target.value })}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                </div>
                
                <div>
                  <Label htmlFor="notes" className="text-gray-700 dark:text-gray-300">Notes (Optional)</Label>
                  <Input
                    id="notes"
                    placeholder="e.g., Take with food"
                    value={newMedicine.notes}
                    onChange={(e) => setNewMedicine({ ...newMedicine, notes: e.target.value })}
                    className="bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                  />
                </div>
                
                <Button onClick={addMedicine} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Add Medicine Reminder
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {medicines.length === 0 ? (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-8 text-center">
            <Pill className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No Medicine Reminders</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Add your first medicine reminder to keep track of your medication schedule.
            </p>
            <Button onClick={() => setIsOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Medicine
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {medicines.map((medicine) => (
            <Card key={medicine.id} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-gray-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    <Pill className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    {medicine.name}
                  </div>
                  <Button
                    onClick={() => removeMedicine(medicine.id)}
                    variant="ghost"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <Badge variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                      {medicine.dosage}
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300">
                      {medicine.frequency.charAt(0).toUpperCase() + medicine.frequency.slice(1)} daily
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4" />
                      {medicine.time}
                    </div>
                  </div>
                </div>
                {medicine.notes && (
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Note: {medicine.notes}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Instructions */}
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">How it works:</h4>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• Add your medicines with dosage and timing information</li>
          <li>• Enable browser notifications to get reminders</li>
          <li>• Your reminders are saved locally on your device</li>
          <li>• Set up multiple times for medicines taken several times daily</li>
        </ul>
      </div>
    </div>
  );
};

export default MedicineReminder;
