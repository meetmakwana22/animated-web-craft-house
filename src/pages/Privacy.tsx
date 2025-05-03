
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              <AnimatedText text="Privacy Policy" className="inline-block" animation="fade-in-right" />
            </h1>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg mb-12">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: May 1, 2025
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-6">
                WebCraft ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [website address] and use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">2. Collection of Your Information</h2>
              <p className="text-gray-600 mb-4">
                We may collect information about you in a variety of ways. The information we may collect via the Site includes:
              </p>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Personal Data</h3>
              <p className="text-gray-600 mb-4">
                Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Site.
              </p>

              <h3 className="text-xl font-semibold text-brand-blue mb-2">Derivative Data</h3>
              <p className="text-gray-600 mb-4">
                Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
              </p>

              <h3 className="text-xl font-semibold text-brand-blue mb-2">Financial Data</h3>
              <p className="text-gray-600 mb-4">
                Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
              </p>

              <h3 className="text-xl font-semibold text-brand-blue mb-2">Mobile Device Data</h3>
              <p className="text-gray-600 mb-6">
                Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the Site from a mobile device.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">3. Use of Your Information</h2>
              <p className="text-gray-600 mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-600">
                <li>Create and manage your account.</li>
                <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
                <li>Email you regarding your account or order.</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
                <li>Increase the efficiency and operation of the Site.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                <li>Notify you of updates to the Site.</li>
                <li>Offer new products, services, and/or recommendations to you.</li>
                <li>Perform other business activities as needed.</li>
                <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
                <li>Process payments and refunds.</li>
                <li>Request feedback and contact you about your use of the Site.</li>
                <li>Resolve disputes and troubleshoot problems.</li>
                <li>Respond to product and customer service requests.</li>
                <li>Send you a newsletter.</li>
              </ul>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">4. Disclosure of Your Information</h2>
              <p className="text-gray-600 mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>

              <h3 className="text-xl font-semibold text-brand-blue mb-2">By Law or to Protect Rights</h3>
              <p className="text-gray-600 mb-4">
                If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
              </p>

              <h3 className="text-xl font-semibold text-brand-blue mb-2">Third-Party Service Providers</h3>
              <p className="text-gray-600 mb-4">
                We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
              </p>

              <h3 className="text-xl font-semibold text-brand-blue mb-2">Marketing Communications</h3>
              <p className="text-gray-600 mb-6">
                With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">5. Security of Your Information</h2>
              <p className="text-gray-600 mb-6">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>

              <h2 className="text-2xl font-bold text-brand-blue mb-4">6. Contact Us</h2>
              <p className="text-gray-600">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <ul className="text-gray-600 mt-2">
                <li>Email: privacy@webcraft.com</li>
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

export default Privacy;
