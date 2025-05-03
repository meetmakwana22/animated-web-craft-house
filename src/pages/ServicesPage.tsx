
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Code, Globe, LayoutGrid, PaintBucket, Search, ShoppingCart } from 'lucide-react';

const ServicesPage = () => {
  const servicesList = [
    {
      icon: <Globe className="h-12 w-12 text-brand-purple" />,
      title: "Website Design",
      description: "Custom, responsive website designs that reflect your brand identity and engage your target audience.",
      features: ["Responsive layouts", "User-centered design", "Brand consistency", "Interactive elements"]
    },
    {
      icon: <Code className="h-12 w-12 text-brand-purple" />,
      title: "Web Development",
      description: "Full-stack web development services to bring your design to life with clean, efficient code.",
      features: ["Frontend development", "Backend integration", "API development", "Performance optimization"]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-brand-purple" />,
      title: "E-commerce Solutions",
      description: "End-to-end e-commerce platforms that help you sell products and services online.",
      features: ["Shopping cart integration", "Payment gateway setup", "Inventory management", "Order processing"]
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-brand-purple" />,
      title: "UI/UX Design",
      description: "User interface and experience design that ensures your visitors have a seamless, intuitive experience.",
      features: ["User journey mapping", "Wireframing", "Prototyping", "Usability testing"]
    },
    {
      icon: <Search className="h-12 w-12 text-brand-purple" />,
      title: "SEO Optimization",
      description: "Search engine optimization services to improve your visibility and drive organic traffic.",
      features: ["Keyword research", "On-page optimization", "Content strategy", "Performance metrics"]
    },
    {
      icon: <LayoutGrid className="h-12 w-12 text-brand-purple" />,
      title: "Website Maintenance",
      description: "Ongoing maintenance and support to keep your website secure, up-to-date, and performing optimally.",
      features: ["Regular updates", "Security monitoring", "Content updates", "Technical support"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              <AnimatedText text="Our Services" className="inline-block" animation="fade-in-right" />
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <AnimatedText 
                text="Comprehensive web design and development services to help your business thrive online." 
                className="inline-block" 
                animation="fade-in" 
                delay={200}
              />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {servicesList.map((service, index) => (
              <div key={index} className="service-card">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h4 className="font-semibold text-brand-blue mb-2">Features:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-brand-purple rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-brand-lightPurple rounded-xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <AnimatedText 
                  text="Our Approach" 
                  className="text-2xl font-bold text-brand-blue mb-4"
                  animation="fade-in-left"
                />
                <p className="text-gray-600 mb-4">
                  We follow a collaborative, client-centered approach to every project. By understanding your business goals, target audience, and unique requirements, we create custom solutions that deliver results.
                </p>
                <p className="text-gray-600">
                  Our iterative process ensures you're involved every step of the way, from initial concept to final launch, resulting in a product that exceeds expectations.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-blue mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center text-white mr-3 mt-1">1</span>
                    <div>
                      <h4 className="font-semibold text-brand-blue">Expertise</h4>
                      <p className="text-gray-600">Our team brings years of experience across various industries.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center text-white mr-3 mt-1">2</span>
                    <div>
                      <h4 className="font-semibold text-brand-blue">Custom Solutions</h4>
                      <p className="text-gray-600">Each project is tailored to your specific needs and goals.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-5 h-5 bg-brand-purple rounded-full flex items-center justify-center text-white mr-3 mt-1">3</span>
                    <div>
                      <h4 className="font-semibold text-brand-blue">Ongoing Support</h4>
                      <p className="text-gray-600">We provide continued maintenance and support after launch.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-brand-blue text-white rounded-xl p-8 md:p-12 text-center">
            <AnimatedText 
              text="Ready to elevate your online presence?" 
              className="text-2xl md:text-3xl font-bold mb-6"
              animation="scale-in"
            />
            <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and see how our services can help you achieve your business goals.
            </p>
            <a href="#contact" className="btn-primary inline-block">Get Started</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
