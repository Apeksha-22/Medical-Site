
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight, Heart, Brain, Activity, Baby, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BlogSection = () => {
  const navigate = useNavigate();

  const articles = [
    {
      id: 'heart-disease-prevention',
      title: 'Understanding Heart Disease: Prevention and Care',
      excerpt: 'Learn about the latest approaches to heart disease prevention, early detection, and treatment options available.',
      author: 'Dr. Sarah Johnson',
      date: '2024-05-28',
      category: 'Cardiology',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=400&h=250',
      icon: Heart,
      readTime: '5 min read'
    },
    {
      id: 'mental-health-awareness',
      title: 'Mental Health Awareness: Breaking the Stigma',
      excerpt: 'Discover the importance of mental health care and how to recognize signs that you or loved ones may need support.',
      author: 'Dr. Michael Chen',
      date: '2024-05-25',
      category: 'Mental Health',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=400&h=250',
      icon: Brain,
      readTime: '7 min read'
    },
    {
      id: 'diabetes-management',
      title: 'Diabetes Management: Tips for Healthy Living',
      excerpt: 'Essential guidelines for managing diabetes effectively through diet, exercise, and regular monitoring.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-05-22',
      category: 'Endocrinology',
      image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=400&h=250',
      icon: Activity,
      readTime: '6 min read'
    },
    {
      id: 'child-healthcare-vaccinations',
      title: 'Child Healthcare: Essential Vaccinations Guide',
      excerpt: 'A comprehensive guide to childhood vaccinations, their importance, and recommended schedules.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-05-20',
      category: 'Pediatrics',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=400&h=250',
      icon: Baby,
      readTime: '8 min read'
    },
    {
      id: 'eye-health-protection',
      title: 'Eye Health: Protecting Your Vision',
      excerpt: 'Learn about common eye conditions, prevention strategies, and when to see an eye specialist.',
      author: 'Dr. Neha Patel',
      date: '2024-05-18',
      category: 'Ophthalmology',
      image: 'https://images.unsplash.com/photo-1594824694996-f9b5d8eb2a4e?auto=format&fit=crop&q=80&w=400&h=250',
      icon: Eye,
      readTime: '6 min read'
    }
  ];

  const handleViewAllArticles = () => {
    navigate('/blog');
  };

  const handleReadMore = (articleId: string) => {
    navigate(`/blog/${articleId}`);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, article: any) => {
    const target = e.currentTarget;
    target.style.display = 'none';
    
    // Create a fallback div with icon and category
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'w-full h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center';
    
    const IconComponent = article.icon;
    fallbackDiv.innerHTML = `
      <div class="text-white text-center">
        <div class="text-4xl mb-2">📄</div>
        <p class="text-lg font-semibold">${article.category}</p>
      </div>
    `;
    
    target.parentNode?.appendChild(fallbackDiv);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Health Blog & Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest health tips, medical insights, and wellness advice from our expert doctors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => handleImageError(e, article)}
                />
                <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                  {article.category}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <article.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                  onClick={() => handleReadMore(article.id)}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={handleViewAllArticles}
          >
            View All Articles
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
