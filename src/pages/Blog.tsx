
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Calendar, Clock, Search, User } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Web Design Trends to Watch in 2025",
      excerpt: "Explore the latest design trends that will dominate the web in 2025, from 3D elements to dark mode implementations.",
      author: "Jane Wilson",
      date: "April 20, 2025",
      readTime: "8 min read",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "The Ultimate Guide to Optimizing Website Performance",
      excerpt: "Learn how to improve loading times, optimize images, and implement best practices for faster websites.",
      author: "Michael Chen",
      date: "April 15, 2025",
      readTime: "12 min read",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "How to Build a User-Centered Web Experience",
      excerpt: "Discover the principles of user-centered design and how to apply them to create websites that users love.",
      author: "Sarah Johnson",
      date: "April 10, 2025",
      readTime: "10 min read",
      category: "UX/UI",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "The Rise of AI in Web Development",
      excerpt: "Explore how artificial intelligence is transforming the web development landscape and what it means for developers.",
      author: "David Rodriguez",
      date: "April 5, 2025",
      readTime: "9 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Responsive Design: Beyond the Basics",
      excerpt: "Take your responsive design skills to the next level with advanced techniques and strategies.",
      author: "Emily Zhang",
      date: "April 1, 2025",
      readTime: "11 min read",
      category: "Responsive Design",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "E-commerce Best Practices for Increased Conversions",
      excerpt: "Implement these proven strategies to boost your e-commerce conversion rates and improve customer experience.",
      author: "Thomas Wilson",
      date: "March 25, 2025",
      readTime: "13 min read",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const categories = [
    "All Categories",
    "Design Trends",
    "Performance",
    "UX/UI",
    "Technology",
    "Responsive Design",
    "E-commerce",
    "Development"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              <AnimatedText text="Our Blog" className="inline-block" animation="fade-in-right" />
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <AnimatedText 
                text="Insights, tips, and trends from our experts to help you build better digital experiences." 
                className="inline-block" 
                animation="fade-in" 
                delay={200}
              />
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="h-48 bg-gray-200 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-brand-blue mb-3 hover:text-brand-purple transition-colors">
                        <a href="#">{post.title}</a>
                      </h3>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <a href="#" className="text-brand-purple font-medium hover:underline">
                        Read More
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <button className="btn-secondary">Load More Articles</button>
              </div>
            </div>

            <div className="lg:w-1/4">
              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-lg font-bold text-brand-blue mb-4">Search</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search articles..." 
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md mb-8">
                <h3 className="text-lg font-bold text-brand-blue mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a 
                        href="#" 
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          index === 0 
                            ? 'bg-brand-lightPurple text-brand-purple font-medium' 
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-brand-blue mb-4">Subscribe</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with our latest articles and news.
                </p>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                />
                <button className="w-full btn-primary">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
