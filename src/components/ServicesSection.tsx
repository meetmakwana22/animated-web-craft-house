
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div ref={cardRef} className="service-card opacity-0">
      <div className="w-14 h-14 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-brand-gray">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Our Services" 
            className="text-xl font-semibold text-brand-purple mb-3"
          />
          <AnimatedText 
            text="What We Can Do For Your Business" 
            className="text-3xl md:text-4xl font-bold text-brand-blue mb-6"
            delay={200}
          />
          <AnimatedText 
            text="We craft digital experiences that drive growth and engagement through our specialized services." 
            className="text-lg text-brand-gray max-w-2xl mx-auto"
            delay={300}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={
              <svg className="w-8 h-8 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="Website Design & Development"
            description="Custom-designed responsive websites that are built with the latest technologies and optimized for performance and user engagement."
            delay={0}
          />
          
          <ServiceCard 
            icon={
              <svg className="w-8 h-8 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19.1284C16.3304 18.4175 17.5 17.0921 17.5 14.5C17.5 11 15.5 9 12 9C8.5 9 6.5 11 6.5 14.5C6.5 17.0921 7.66957 18.4175 9 19.1284" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 9V6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="E-Commerce Solutions"
            description="Full-featured online stores with secure payment gateways, inventory management, and optimized product displays to maximize sales."
            delay={200}
          />
          
          <ServiceCard 
            icon={
              <svg className="w-8 h-8 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.4 15C19.1277 15.6377 19.2583 16.372 19.7321 16.8458C20.2059 17.3196 20.3355 17.8132 20.2101 18.51C20.0847 19.2068 19.5091 19.5 18.8124 19.5H18.5C17.8433 19.5 17.4775 19.1342 17 18.6569C16.5225 18.1796 15.7892 18 15 18C14.2108 18 13.4775 18.1796 13 18.6569C12.5225 19.1342 12.1567 19.5 11.5 19.5H11.1876C10.4909 19.5 9.99263 19.1431 9.86722 18.4463C9.74181 17.7495 9.79738 17.3327 10.2679 16.8542C10.7384 16.3756 10.8723 15.6373 10.6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 9.5C3 5.91015 5.91015 3 9.5 3H14.5C18.0899 3 21 5.91015 21 9.5V14.5C21 18.0899 18.0899 21 14.5 21H9.5C5.91015 21 3 18.0899 3 14.5V9.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="UI/UX Design"
            description="User-centered design that focuses on creating intuitive, accessible, and visually appealing interfaces that enhance the overall user experience."
            delay={400}
          />
          
          <ServiceCard 
            icon={
              <svg className="w-8 h-8 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 6H3M21 10H3M21 14H3M21 18H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="Content Management Systems"
            description="Custom or template-based CMS solutions that make it easy for you to update and manage your website's content without technical expertise."
            delay={600}
          />
          
          <ServiceCard 
            icon={
              <svg className="w-8 h-8 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="Search Engine Optimization"
            description="On-page and technical SEO implementation to improve your website's visibility in search engines and drive organic traffic."
            delay={800}
          />
          
          <ServiceCard 
            icon={
              <svg className="w-8 h-8 text-brand-purple" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 5.5L13.5 10M4 15.5L8 19.5L20 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            title="Website Maintenance"
            description="Regular updates, security monitoring, performance optimization, and technical support to keep your website running smoothly."
            delay={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
