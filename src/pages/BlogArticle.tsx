
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock, Share2, Heart, Brain, Activity, Baby, Eye } from 'lucide-react';

const BlogArticle = () => {
  const { articleId } = useParams();
  const navigate = useNavigate();

  const articles = {
    'heart-disease-prevention': {
      title: 'Understanding Heart Disease: Prevention and Care',
      author: 'Dr. Sarah Johnson',
      date: '2024-05-28',
      category: 'Cardiology',
      readTime: '5 min read',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800&h=400',
      content: `
        <div class="article-content">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Introduction</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">Heart disease remains one of the leading causes of death worldwide, but the good news is that many forms of heart disease are preventable. Understanding the risk factors, early warning signs, and preventive measures can significantly reduce your chances of developing cardiovascular problems.</p>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Common Types of Heart Disease</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">Heart disease encompasses several conditions that affect the heart and blood vessels:</p>
          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span><strong>Coronary Artery Disease (CAD):</strong> The most common type, caused by plaque buildup in arteries</li>
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span><strong>Heart Failure:</strong> When the heart cannot pump blood effectively</li>
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span><strong>Arrhythmias:</strong> Irregular heartbeats that can be too fast, too slow, or erratic</li>
              <li class="flex items-start"><span class="text-blue-600 mr-2">•</span><strong>Heart Valve Disease:</strong> Problems with one or more heart valves</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Prevention Strategies</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">The best approach to heart disease is prevention. Here are key strategies:</p>
          
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">Healthy Diet</h3>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Eat plenty of fruits and vegetables</li>
                <li>• Choose whole grains over refined grains</li>
                <li>• Include lean proteins like fish and poultry</li>
                <li>• Limit saturated and trans fats</li>
              </ul>
            </div>
            <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h3 class="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-3">Stay Active</h3>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• 150 minutes moderate exercise per week</li>
                <li>• Include both cardio and strength training</li>
                <li>• Take stairs instead of elevators</li>
                <li>• Park farther away to walk more</li>
              </ul>
            </div>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg mb-8">
            <h2 class="text-2xl font-bold text-red-800 dark:text-red-200 mb-4">⚠️ Emergency Warning Signs</h2>
            <p class="text-red-700 dark:text-red-300 mb-4 font-semibold">Seek immediate medical attention if you experience:</p>
            <ul class="space-y-2 text-red-700 dark:text-red-300">
              <li>• Chest pain or discomfort</li>
              <li>• Shortness of breath</li>
              <li>• Pain in arms, neck, jaw, or back</li>
              <li>• Dizziness or lightheadedness</li>
              <li>• Rapid or irregular heartbeat</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Conclusion</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">Heart disease is serious, but with proper prevention, early detection, and treatment, you can significantly reduce your risk and maintain good cardiovascular health. Regular check-ups with your healthcare provider and maintaining a healthy lifestyle are your best defenses.</p>
        </div>
      `
    },
    'mental-health-awareness': {
      title: 'Mental Health Awareness: Breaking the Stigma',
      author: 'Dr. Michael Chen',
      date: '2024-05-25',
      category: 'Mental Health',
      readTime: '7 min read',
      icon: Brain,
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800&h=400',
      content: `
        <div class="article-content">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Understanding Mental Health</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">Mental health is just as important as physical health, yet it's often overlooked or stigmatized. Understanding mental health conditions, recognizing symptoms, and knowing when to seek help can dramatically improve quality of life for millions of people.</p>

          <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg mb-8">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">💡 Did You Know?</h3>
            <p class="text-gray-700 dark:text-gray-300">1 in 4 people worldwide are affected by mental health disorders at some point in their lives. You are not alone!</p>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Common Mental Health Conditions</h2>
          
          <div class="grid md:grid-cols-3 gap-4 mb-8">
            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Anxiety Disorders</h4>
              <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Generalized Anxiety (GAD)</li>
                <li>• Panic Disorder</li>
                <li>• Social Anxiety</li>
                <li>• Specific Phobias</li>
              </ul>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">Mood Disorders</h4>
              <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Major Depression</li>
                <li>• Bipolar Disorder</li>
                <li>• Seasonal Affective Disorder</li>
              </ul>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">Other Conditions</h4>
              <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• PTSD</li>
                <li>• OCD</li>
                <li>• ADHD</li>
              </ul>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Breaking the Stigma</h2>
          <div class="space-y-4 mb-8">
            <div class="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="text-2xl">🗣️</span>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Talk Openly</h4>
                <p class="text-gray-700 dark:text-gray-300">Share your experiences when comfortable - it helps normalize mental health discussions.</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="text-2xl">📚</span>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Educate Yourself</h4>
                <p class="text-gray-700 dark:text-gray-300">Learn about mental health conditions and share accurate information with others.</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="text-2xl">❤️</span>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white">Show Support</h4>
                <p class="text-gray-700 dark:text-gray-300">Be there for friends and family members who may be struggling with mental health.</p>
              </div>
            </div>
          </div>

          <div class="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-lg mb-8">
            <h2 class="text-xl font-bold text-green-800 dark:text-green-200 mb-4">🌟 Remember</h2>
            <p class="text-green-700 dark:text-green-300 font-semibold">Seeking help for mental health is a sign of STRENGTH, not weakness. Recovery is possible, and help is available.</p>
          </div>
        </div>
      `
    },
    'diabetes-management': {
      title: 'Diabetes Management: Tips for Healthy Living',
      author: 'Dr. Emily Rodriguez',
      date: '2024-05-22',
      category: 'Endocrinology',
      readTime: '6 min read',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=800&h=400',
      content: `
        <div class="article-content">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Understanding Diabetes</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">Diabetes is a chronic condition that affects how your body processes blood sugar (glucose). With proper management, people with diabetes can live healthy, active lives. This comprehensive guide covers essential aspects of diabetes management.</p>

          <div class="grid md:grid-cols-3 gap-4 mb-8">
            <div class="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">📈</div>
              <h4 class="font-semibold text-red-800 dark:text-red-200">Type 1</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Autoimmune condition, usually diagnosed young</p>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">📊</div>
              <h4 class="font-semibold text-blue-800 dark:text-blue-200">Type 2</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Most common form, body doesn't use insulin properly</p>
            </div>
            <div class="bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🤱</div>
              <h4 class="font-semibold text-pink-800 dark:text-pink-200">Gestational</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Develops during pregnancy</p>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Blood Sugar Monitoring</h2>
          <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-8">
            <h3 class="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-4">📱 Smart Monitoring Tips</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Check at consistent times daily</li>
                <li>• Keep a detailed log of readings</li>
                <li>• Note what affects your levels</li>
              </ul>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Use smartphone apps for tracking</li>
                <li>• Share data with your doctor</li>
                <li>• Set reminders for testing</li>
              </ul>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Nutrition Guidelines</h2>
          
          <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
            <h3 class="text-xl font-semibold text-green-800 dark:text-green-200 mb-4">🥗 Plate Method</h3>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="text-center">
                <div class="text-4xl mb-2">🥬</div>
                <h4 class="font-semibold">1/2 Plate</h4>
                <p class="text-sm">Non-starchy vegetables</p>
              </div>
              <div class="text-center">
                <div class="text-4xl mb-2">🍗</div>
                <h4 class="font-semibold">1/4 Plate</h4>
                <p class="text-sm">Lean protein</p>
              </div>
              <div class="text-center">
                <div class="text-4xl mb-2">🍚</div>
                <h4 class="font-semibold">1/4 Plate</h4>
                <p class="text-sm">Whole grains/starches</p>
              </div>
            </div>
          </div>

          <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
            <h2 class="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">🏃‍♂️ Exercise Benefits</h2>
            <ul class="space-y-2 text-blue-700 dark:text-blue-300">
              <li>• Improves insulin sensitivity immediately</li>
              <li>• Helps maintain healthy weight</li>
              <li>• Reduces cardiovascular risk factors</li>
              <li>• Boosts mood and energy levels</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Living Well with Diabetes</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">Remember, diabetes management is a lifestyle, not just medical treatment. With consistent effort and proper support, you can successfully manage your diabetes and live a full, healthy life.</p>
        </div>
      `
    },
    'child-healthcare-vaccinations': {
      title: 'Child Healthcare: Essential Vaccinations Guide',
      author: 'Dr. Emily Rodriguez',
      date: '2024-05-20',
      category: 'Pediatrics',
      readTime: '8 min read',
      icon: Baby,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800&h=400',
      content: `
        <div class="article-content">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Why Vaccinations Matter</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">Vaccinations are one of the most important ways to protect children from serious diseases. They have dramatically reduced or eliminated many serious childhood diseases that once affected thousands of children.</p>

          <div class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg mb-8">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">🛡️ Vaccination Benefits</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Protects individual children</li>
                <li>• Creates community immunity</li>
                <li>• Prevents disease outbreaks</li>
              </ul>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Saves lives and reduces costs</li>
                <li>• Protects those who cannot be vaccinated</li>
                <li>• Eliminates serious diseases</li>
              </ul>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Essential Childhood Vaccines</h2>
          
          <div class="space-y-4 mb-8">
            <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h4 class="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">👶 Birth to 6 Months</h4>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                <li>• Hepatitis B (Birth, 1-2 months, 6-18 months)</li>
                <li>• DTaP - Diphtheria, Tetanus, Pertussis (2, 4, 6 months)</li>
                <li>• Polio (2, 4, 6-18 months)</li>
                <li>• PCV13 - Pneumococcal (2, 4, 6 months)</li>
              </ul>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">🧒 6 to 18 Months</h4>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                <li>• MMR - Measles, Mumps, Rubella (12-15 months)</li>
                <li>• Varicella - Chickenpox (12-15 months)</li>
                <li>• Hepatitis A (12-23 months, 2 doses)</li>
                <li>• Annual Flu vaccine (starting at 6 months)</li>
              </ul>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">🎒 School Age (4-6 years)</h4>
              <ul class="text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                <li>• DTaP (4th dose booster)</li>
                <li>• MMR (2nd dose)</li>
                <li>• Polio (4th dose)</li>
                <li>• Varicella (2nd dose)</li>
              </ul>
            </div>
          </div>

          <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg mb-8">
            <h2 class="text-xl font-bold text-red-800 dark:text-red-200 mb-4">🚨 When to Call the Doctor</h2>
            <p class="text-red-700 dark:text-red-300 mb-3">Contact your healthcare provider if your child experiences:</p>
            <ul class="space-y-1 text-red-700 dark:text-red-300">
              <li>• High fever (over 104°F/40°C)</li>
              <li>• Severe allergic reaction</li>
              <li>• Excessive crying for hours</li>
              <li>• Difficulty breathing</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Preparing for Vaccination Day</h2>
          <div class="grid md:grid-cols-3 gap-4 mb-8">
            <div class="text-center p-4">
              <div class="text-4xl mb-2">📋</div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Before Visit</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Bring vaccination records and prepare questions</p>
            </div>
            <div class="text-center p-4">
              <div class="text-4xl mb-2">🤗</div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">During Visit</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Stay calm, hold your child, use distractions</p>
            </div>
            <div class="text-center p-4">
              <div class="text-4xl mb-2">👀</div>
              <h4 class="font-semibold text-gray-900 dark:text-white mb-2">After Visit</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Monitor for side effects, provide comfort</p>
            </div>
          </div>
        </div>
      `
    },
    'eye-health-protection': {
      title: 'Eye Health: Protecting Your Vision',
      author: 'Dr. Neha Patel',
      date: '2024-05-18',
      category: 'Ophthalmology',
      readTime: '6 min read',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1594824694996-f9b5d8eb2a4e?auto=format&fit=crop&q=80&w=800&h=400',
      content: `
        <div class="article-content">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Your Vision Matters</h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">Your eyes are among your most valuable assets, yet many people take their vision for granted. Understanding how to protect and maintain eye health can help preserve your sight throughout your lifetime.</p>

          <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
            <h3 class="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-4">👁️ Common Eye Conditions</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Refractive Errors</h4>
                <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Myopia (Nearsightedness)</li>
                  <li>• Hyperopia (Farsightedness)</li>
                  <li>• Astigmatism</li>
                  <li>• Presbyopia</li>
                </ul>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Age-Related</h4>
                <ul class="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Cataracts</li>
                  <li>• Glaucoma</li>
                  <li>• Macular Degeneration</li>
                  <li>• Diabetic Retinopathy</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Digital Eye Strain Prevention</h2>
          <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-8">
            <h3 class="text-xl font-semibold text-purple-800 dark:text-purple-200 mb-4">💻 20-20-20 Rule</h3>
            <div class="text-center mb-4">
              <div class="inline-flex items-center space-x-4 text-2xl">
                <span>20 minutes</span>
                <span>→</span>
                <span>20 feet away</span>
                <span>→</span>
                <span>20 seconds</span>
              </div>
            </div>
            <p class="text-purple-700 dark:text-purple-300 text-center">Every 20 minutes, look at something 20 feet away for 20 seconds</p>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Eye-Healthy Nutrition</h2>
          <div class="grid md:grid-cols-3 gap-4 mb-8">
            <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg text-center">
              <div class="text-4xl mb-2">🥕</div>
              <h4 class="font-semibold text-orange-800 dark:text-orange-200">Vitamin A</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Carrots, sweet potatoes, spinach</p>
            </div>
            <div class="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
              <div class="text-4xl mb-2">🥬</div>
              <h4 class="font-semibold text-green-800 dark:text-green-200">Lutein</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Leafy greens, corn, eggs</p>
            </div>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <div class="text-4xl mb-2">🐟</div>
              <h4 class="font-semibold text-blue-800 dark:text-blue-200">Omega-3</h4>
              <p class="text-sm text-gray-700 dark:text-gray-300">Fish, flaxseeds, walnuts</p>
            </div>
          </div>

          <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-lg mb-8">
            <h2 class="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">☀️ UV Protection</h2>
            <ul class="space-y-2 text-yellow-700 dark:text-yellow-300">
              <li>• Wear sunglasses that block 99-100% of UV rays</li>
              <li>• Choose wraparound styles for maximum protection</li>
              <li>• Wear a wide-brimmed hat outdoors</li>
              <li>• Never look directly at the sun</li>
            </ul>
          </div>

          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Regular Eye Exams</h2>
          <div class="space-y-3 mb-8">
            <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="font-semibold">Children (first exam)</span>
              <span class="text-blue-600 dark:text-blue-400">By 6 months</span>
            </div>
            <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="font-semibold">Adults 20-39</span>
              <span class="text-blue-600 dark:text-blue-400">Every 2-3 years</span>
            </div>
            <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="font-semibold">Adults 40-64</span>
              <span class="text-blue-600 dark:text-blue-400">Every 1-2 years</span>
            </div>
            <div class="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <span class="font-semibold">Adults 65+</span>
              <span class="text-blue-600 dark:text-blue-400">Annually</span>
            </div>
          </div>
        </div>
      `
    }
  };

  const article = articleId ? articles[articleId as keyof typeof articles] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate('/blog')}
          className="mb-6 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Button>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <article.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <Badge variant="outline" className="border-gray-300 dark:border-gray-600">
              {article.category}
            </Badge>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(article.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            onError={(e) => {
              console.log('Article image failed to load:', article.image);
              const target = e.currentTarget;
              target.style.display = 'none';
              
              // Create a fallback div with gradient background
              const fallbackDiv = document.createElement('div');
              fallbackDiv.className = 'w-full h-64 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center rounded-lg shadow-lg';
              fallbackDiv.innerHTML = `<div class="text-white text-center"><div class="text-6xl mb-4">📄</div><p class="text-xl font-semibold">${article.category}</p></div>`;
              target.parentNode?.appendChild(fallbackDiv);
            }}
          />
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg dark:prose-invert max-w-none text-gray-900 dark:text-gray-100"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Found this article helpful?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share it with others who might benefit from this information.
              </p>
            </div>
            <Button 
              variant="outline"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: article.title,
                    text: `Check out this article: ${article.title}`,
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="border-gray-300 dark:border-gray-600"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogArticle;
