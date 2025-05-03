
import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  delay: number;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, delay, isLast = false }) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fade-in');
              
              const line = entry.target.querySelector('.process-line');
              if (line) {
                line.classList.add('animate-grow-line');
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div ref={stepRef} className="flex flex-col md:flex-row items-start md:items-center gap-6 opacity-0 relative">
      <div className="w-14 h-14 rounded-full bg-brand-purple text-white flex items-center justify-center text-xl font-bold shrink-0">
        {number}
      </div>
      
      {!isLast && (
        <div className="process-line absolute top-14 left-7 w-0.5 h-16 bg-gray-200 md:hidden origin-top"></div>
      )}
      
      <div className="md:flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-brand-gray">{description}</p>
      </div>
      
      {!isLast && (
        <div className="process-line hidden md:block h-0.5 w-12 bg-gray-200 self-center mx-6 origin-left"></div>
      )}
    </div>
  );
};

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <AnimatedText 
            text="Our Process" 
            className="text-xl font-semibold text-brand-purple mb-3"
          />
          <AnimatedText 
            text="How We Work" 
            className="text-3xl md:text-4xl font-bold text-brand-blue mb-6"
            delay={200}
          />
          <AnimatedText 
            text="Our proven workflow ensures we deliver exceptional results on time and within budget." 
            className="text-lg text-brand-gray max-w-2xl mx-auto"
            delay={300}
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="hidden md:flex justify-between items-center mb-12">
            <ProcessStep 
              number="1"
              title="Discovery & Planning"
              description="We start by understanding your business goals, target audience, and requirements to develop a strategic plan."
              delay={0}
            />
            <ProcessStep 
              number="2"
              title="Design & Prototyping"
              description="Creating wireframes and interactive prototypes to visualize the user interface and experience before development."
              delay={200}
            />
            <ProcessStep 
              number="3"
              title="Development"
              description="Building your website with clean, efficient code while implementing all required functionality."
              delay={400}
            />
            <ProcessStep 
              number="4"
              title="Testing & Launch"
              description="Thorough quality assurance testing across devices followed by a smooth website launch."
              delay={600}
              isLast={true}
            />
          </div>
          
          <div className="md:hidden space-y-12">
            <ProcessStep 
              number="1"
              title="Discovery & Planning"
              description="We start by understanding your business goals, target audience, and requirements to develop a strategic plan."
              delay={0}
            />
            <ProcessStep 
              number="2"
              title="Design & Prototyping"
              description="Creating wireframes and interactive prototypes to visualize the user interface and experience before development."
              delay={200}
            />
            <ProcessStep 
              number="3"
              title="Development"
              description="Building your website with clean, efficient code while implementing all required functionality."
              delay={400}
            />
            <ProcessStep 
              number="4"
              title="Testing & Launch"
              description="Thorough quality assurance testing across devices followed by a smooth website launch."
              delay={600}
              isLast={true}
            />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-brand-gray mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '800ms' }}>
            Ready to start your project with us?
          </p>
          <a href="#contact" className="btn-primary opacity-0 animate-fade-in" style={{ animationDelay: '1000ms' }}>
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
