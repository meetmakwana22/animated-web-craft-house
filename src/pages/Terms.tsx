
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              <AnimatedText text="Terms of Service" className="inline-block" animation="fade-in-right" />
            </h1>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: May 1, 2025
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to WebCraft ("Company", "we", "our", "us"). These Terms of Service govern your use of our website located at [website address] (the "Service") and any related services offered by WebCraft.
              </p>
              <p className="text-gray-600 mb-6">
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">2. Communications</h2>
              <p className="text-gray-600 mb-6">
                By creating an account on our service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">3. Purchases</h2>
              <p className="text-gray-600 mb-6">
                If you wish to purchase any product or service made available through the Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">4. Content</h2>
              <p className="text-gray-600 mb-4">
                Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
              </p>
              <p className="text-gray-600 mb-6">
                By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) and/or you have the right to use it and the right to grant us the rights and license as provided in these Terms, and (ii) that the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person or entity.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">5. Accounts</h2>
              <p className="text-gray-600 mb-4">
                When you create an account with us, you guarantee that you are above the age of 18, and that the information you provide us is accurate, complete, and current at all times. Inaccurate, incomplete, or obsolete information may result in the immediate termination of your account on the Service.
              </p>
              <p className="text-gray-600 mb-6">
                You are responsible for maintaining the confidentiality of your account and password, including but not limited to the restriction of access to your computer and/or account. You agree to accept responsibility for any and all activities or actions that occur under your account and/or password.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">6. Intellectual Property</h2>
              <p className="text-gray-600 mb-6">
                The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of WebCraft and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of WebCraft.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">7. Termination</h2>
              <p className="text-gray-600 mb-6">
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">8. Governing Law</h2>
              <p className="text-gray-600 mb-6">
                These Terms shall be governed and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">9. Changes</h2>
              <p className="text-gray-600 mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">10. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="text-gray-600 mt-2">
                <li>Email: legal@webcraft.com</li>
                <li>Phone: +1 (234) 567-890</li>
                <li>Address: 123 Web Street, Digital City</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
