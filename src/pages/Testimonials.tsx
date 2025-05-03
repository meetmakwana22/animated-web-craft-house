
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, TechStart Inc.",
      content: "WebCraft transformed our online presence completely. Their team delivered a website that exceeded our expectations in both design and functionality. The attention to detail and responsiveness throughout the project was impressive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      company: "TechStart Inc."
    },
    {
      name: "Emily Johnson",
      position: "Marketing Director, Retail Solutions",
      content: "Working with WebCraft was a game-changer for our e-commerce business. They developed a platform that not only looks great but also significantly improved our conversion rates. Their team was professional and knowledgeable throughout the process.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      company: "Retail Solutions"
    },
    {
      name: "Michael Chen",
      position: "Founder, FoodDelivery App",
      content: "I've worked with several web development agencies, but WebCraft stands out for their expertise and dedication. They helped us create a seamless ordering system that has revolutionized our business model. Highly recommend their services!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      company: "FoodDelivery App"
    },
    {
      name: "Sarah Williams",
      position: "Owner, Boutique Wellness Studio",
      content: "As a small business owner, I needed a website that truly represented my brand and was easy to manage. WebCraft delivered exactly that. Their team took the time to understand my vision and brought it to life beautifully.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      company: "Boutique Wellness Studio"
    },
    {
      name: "David Rodriguez",
      position: "CTO, Financial Services Group",
      content: "Security and reliability were our top priorities for our financial services website. WebCraft not only met these requirements but also created an intuitive user experience that our clients love. Their technical expertise is outstanding.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      company: "Financial Services Group"
    },
    {
      name: "Laura Martinez",
      position: "Creative Director, Design Agency",
      content: "As a design professional, I have high standards for visual aesthetics. WebCraft impressed me with their design sensibility and attention to detail. They created a portfolio website that perfectly showcases our work and has received numerous compliments.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      company: "Design Agency"
    }
  ];

  const featuredTestimonials = [
    {
      name: "Robert Chang",
      position: "COO, Enterprise Solutions",
      content: "We needed a complex web application to manage our internal operations, and WebCraft delivered a solution that transformed our efficiency. Their team's technical capabilities and project management were exceptional. The app they built has become central to our daily operations and has saved us countless hours of work.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      company: "Enterprise Solutions",
      project: "Custom Web Application"
    },
    {
      name: "Jennifer Adams",
      position: "E-commerce Manager, Luxury Brands",
      content: "Our e-commerce platform needed a complete overhaul to improve user experience and increase sales. WebCraft not only redesigned our site beautifully but also implemented advanced features that boosted our conversion rate by 45%. Their understanding of both design principles and technical requirements made them the perfect partner for this project.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      company: "Luxury Brands",
      project: "E-commerce Redesign"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, index) => (
      <Star 
        key={index} 
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              <AnimatedText text="Client Testimonials" className="inline-block" animation="fade-in-right" />
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <AnimatedText 
                text="Hear what our clients have to say about their experience working with WebCraft." 
                className="inline-block" 
                animation="fade-in" 
                delay={200}
              />
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">Featured Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-xl">
                  <div className="bg-brand-blue p-8 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{testimonial.company}</h3>
                        <p className="text-brand-purple font-medium">{testimonial.project}</p>
                      </div>
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="italic text-gray-200">"{testimonial.content}"</p>
                  </div>
                  <div className="p-6 flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-brand-blue">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-brand-blue mb-8 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-brand-blue">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-blue text-white rounded-xl p-8 md:p-12 text-center">
            <AnimatedText 
              text="Ready to join our success stories?" 
              className="text-2xl md:text-3xl font-bold mb-6"
              animation="scale-in"
            />
            <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's create a digital experience that exceeds your expectations and drives results for your business.
            </p>
            <a href="#contact" className="btn-primary inline-block">Start Your Project</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
