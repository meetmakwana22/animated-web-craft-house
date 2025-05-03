
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Briefcase, CheckCircle, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              <AnimatedText text="About WebCraft" className="inline-block" animation="fade-in-right" />
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <AnimatedText 
                text="We're a team of passionate web designers and developers dedicated to crafting exceptional digital experiences." 
                className="inline-block" 
                animation="fade-in" 
                delay={200}
              />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <AnimatedText 
                text="Our Story" 
                className="text-2xl font-bold text-brand-blue mb-4"
                animation="fade-in-left"
              />
              <p className="text-gray-600 mb-4">
                Founded in 2018, WebCraft began with a simple mission: to help businesses succeed online through beautiful, functional web design.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of three passionate developers has grown into a full-service web development agency serving clients across industries.
              </p>
              <p className="text-gray-600">
                Our approach combines technical expertise with creative design, ensuring every project not only looks great but performs exceptionally well.
              </p>
            </div>
            <div className="bg-brand-lightPurple rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-blue">Excellence</h4>
                    <p className="text-gray-600">We're committed to delivering work of the highest quality.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-blue">Innovation</h4>
                    <p className="text-gray-600">We stay ahead of trends and technologies to provide cutting-edge solutions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-brand-purple mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-blue">Collaboration</h4>
                    <p className="text-gray-600">We work closely with clients to ensure their vision comes to life.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20">
            <AnimatedText 
              text="Our Team" 
              className="text-3xl font-bold text-brand-blue mb-8 text-center"
              animation="fade-in"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((member) => (
                <div key={member} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-blue mb-1">Team Member {member}</h3>
                    <p className="text-brand-purple font-medium mb-3">Position Title</p>
                    <p className="text-gray-600">Short bio describing their expertise and experience in the field.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-blue text-white rounded-xl p-8 md:p-12 text-center">
            <AnimatedText 
              text="Ready to start your project?" 
              className="text-2xl md:text-3xl font-bold mb-6"
              animation="scale-in"
            />
            <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
              Let's collaborate to bring your digital vision to life with our expertise in web design and development.
            </p>
            <a href="#contact" className="btn-primary inline-block">Get in Touch</a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
