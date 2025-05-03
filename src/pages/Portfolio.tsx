
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Corporate Website Redesign",
      category: "UI/UX Design",
      description: "Complete redesign of a corporate website to improve user experience and conversion rates.",
      tags: ["Figma", "HTML/CSS", "JavaScript", "WordPress"],
      imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Mobile Banking App",
      category: "App Development",
      description: "Secure, user-friendly banking application with transaction history, transfers, and account management.",
      tags: ["React Native", "Firebase", "API Integration"],
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Restaurant Booking System",
      category: "Web Application",
      description: "Online booking system for restaurants with table management, reservations, and staff scheduling.",
      tags: ["Vue.js", "Laravel", "MySQL"],
      imageUrl: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Real Estate Listing Platform",
      category: "Web Development",
      description: "Property listing platform with search filters, map integration, and agent contact forms.",
      tags: ["React", "Node.js", "MongoDB", "Google Maps API"],
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      title: "Healthcare Provider Portal",
      category: "Web Application",
      description: "Secure portal for healthcare providers to manage patient information and appointments.",
      tags: ["Angular", "Express", "PostgreSQL", "HIPAA Compliant"],
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              <AnimatedText text="Our Portfolio" className="inline-block" animation="fade-in-right" />
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <AnimatedText 
                text="Explore our recent projects and see how we've helped businesses transform their digital presence." 
                className="inline-block" 
                animation="fade-in" 
                delay={200}
              />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-brand-purple text-sm font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-brand-blue mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="bg-brand-lightPurple text-brand-purple px-3 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-brand-purple font-medium flex items-center hover:underline">
                    View Project <ExternalLink className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-200 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="E-commerce Conversion Rate Optimization" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">
                    E-commerce Conversion Rate Optimization
                  </h3>
                  <p className="text-gray-600 mb-4">
                    How we helped an online retailer increase conversion rates by 35% through UX improvements and performance optimization.
                  </p>
                  <button className="text-brand-purple font-medium flex items-center hover:underline">
                    Read Case Study <ExternalLink className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-200 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="SaaS Platform Development" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-brand-blue mb-2">
                    SaaS Platform Development
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The development process of a subscription-based project management platform from initial concept to market launch.
                  </p>
                  <button className="text-brand-purple font-medium flex items-center hover:underline">
                    Read Case Study <ExternalLink className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-blue text-white rounded-xl p-8 md:p-12 text-center">
            <AnimatedText 
              text="Have a project in mind?" 
              className="text-2xl md:text-3xl font-bold mb-6"
              animation="scale-in"
            />
            <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your digital goals and bring your vision to life.
            </p>
            <a href="#contact" className="btn-primary inline-block">Start a Project</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
