import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, ArrowRight, Search, Heart, Brain, Activity, Baby, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
      readTime: '5 min read',
      featured: true
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
      readTime: '7 min read',
      featured: true
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
      readTime: '6 min read',
      featured: false
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
      readTime: '8 min read',
      featured: false
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
      readTime: '6 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Cardiology', 'Mental Health', 'Endocrinology', 'Pediatrics', 'Ophthalmology'];

  // Filter articles based on search and category
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  const handleReadFullArticle = (articleId: string) => {
    navigate(`/blog/${articleId}`);
  };

  const handleReadMore = (articleId: string) => {
    navigate(`/blog/${articleId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Health Blog & <span className="text-blue-600 dark:text-blue-400">Articles</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Stay informed with expert medical advice, health tips, and the latest healthcare insights from our professional medical team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-2">
                <Input
                  placeholder="Search articles, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="flex-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                />
                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={category === selectedCategory 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Search Results Info */}
      {(searchQuery || selectedCategory !== 'All') && (
        <section className="py-4 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-600 dark:text-gray-300">
              Showing {filteredArticles.length} article(s) 
              {searchQuery && ` matching "${searchQuery}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            </p>
          </div>
        </section>
      )}

      {/* Articles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured Articles */}
          {filteredArticles.filter(article => article.featured).length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Featured Articles
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {filteredArticles.filter(article => article.featured).map((article, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          console.log('Featured article image failed to load:', article.image);
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          
                          const fallbackDiv = document.createElement('div');
                          fallbackDiv.className = 'w-full h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center';
                          fallbackDiv.innerHTML = `<div class="text-white text-center text-4xl">${article.category}</div>`;
                          target.parentNode?.appendChild(fallbackDiv);
                        }}
                      />
                      <Badge className="absolute top-4 left-4 bg-blue-600 text-white">
                        Featured
                      </Badge>
                      <Badge className="absolute top-4 right-4 bg-black/70 text-white">
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <article.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
                      </div>
                      <CardTitle className="text-2xl text-gray-900 dark:text-white leading-tight">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
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
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white group"
                        onClick={() => handleReadFullArticle(article.id)}
                      >
                        Read Full Article
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Recent Articles Grid */}
          {filteredArticles.filter(article => !article.featured).length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                {filteredArticles.filter(article => article.featured).length > 0 ? 'Recent Articles' : 'Articles'}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.filter(article => !article.featured).map((article, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600">
                    <div className="relative">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          console.log('Recent article image failed to load:', article.image);
                          const target = e.currentTarget;
                          target.style.display = 'none';
                          
                          const fallbackDiv = document.createElement('div');
                          fallbackDiv.className = 'w-full h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center';
                          fallbackDiv.innerHTML = `<div class="text-white text-center">${article.category}</div>`;
                          target.parentNode?.appendChild(fallbackDiv);
                        }}
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
            </>
          )}

          {/* No Results Message */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">No Articles Found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                No articles match your current search criteria.
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
