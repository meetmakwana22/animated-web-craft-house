
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import AnimatedText from '../components/AnimatedText';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              <AnimatedText text="Get In Touch" className="inline-block" animation="fade-in-right" />
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <AnimatedText 
                text="Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you as soon as possible." 
                className="inline-block" 
                animation="fade-in" 
                delay={200}
              />
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">Our Location</h3>
              <p className="text-gray-600">123 Web Design Avenue<br />Digital City, DC 10101</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">Phone Contact</h3>
              <p className="text-gray-600">+1 (234) 567-8901<br />+1 (234) 567-8902</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-2">Email Us</h3>
              <p className="text-gray-600">info@webcraft.com<br />support@webcraft.com</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedText 
                  text="Business Hours" 
                  className="text-2xl font-bold text-brand-blue mb-6"
                  animation="fade-in-left"
                />
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="text-brand-purple mr-3" size={20} />
                    <div>
                      <h4 className="font-medium text-brand-blue">Monday - Friday</h4>
                      <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-brand-purple mr-3" size={20} />
                    <div>
                      <h4 className="font-medium text-brand-blue">Saturday</h4>
                      <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-brand-purple mr-3" size={20} />
                    <div>
                      <h4 className="font-medium text-brand-blue">Sunday</h4>
                      <p className="text-gray-600">Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <AnimatedText 
                  text="Our Location" 
                  className="text-2xl font-bold text-brand-blue mb-6"
                  animation="fade-in-right"
                />
                <div className="bg-gray-300 rounded-lg w-full h-64 relative overflow-hidden">
                  {/* This is a placeholder for a map. In a real application, you would integrate Google Maps or another map service */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                    <p className="text-gray-600">Map Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
