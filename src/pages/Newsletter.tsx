
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedText from '../components/AnimatedText';
import { Check, MailPlus } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">
              <AnimatedText text="Newsletter Signup" className="inline-block" animation="fade-in-right" />
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              <AnimatedText 
                text="Subscribe to our newsletter to receive the latest updates, insights, and special offers directly to your inbox." 
                className="inline-block" 
                animation="fade-in" 
                delay={200}
              />
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-brand-blue p-8 md:p-12 text-white">
                  <MailPlus className="h-16 w-16 text-brand-purple mb-6" />
                  <h2 className="text-2xl font-bold mb-4">Why Subscribe?</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="text-brand-purple mr-2 mt-1 flex-shrink-0" />
                      <span>Latest web design and development trends</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-purple mr-2 mt-1 flex-shrink-0" />
                      <span>Exclusive tutorials and resources</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-purple mr-2 mt-1 flex-shrink-0" />
                      <span>Tips to improve your website's performance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-purple mr-2 mt-1 flex-shrink-0" />
                      <span>Special offers and discounts on our services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-brand-purple mr-2 mt-1 flex-shrink-0" />
                      <span>Industry insights and success stories</span>
                    </li>
                  </ul>
                  <p className="mt-6 text-sm text-gray-300">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>

                <div className="p-8 md:p-12">
                  {!subscribed ? (
                    <>
                      <h2 className="text-2xl font-bold text-brand-blue mb-6">Join Our Newsletter</h2>
                      <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                          <input 
                            type="text" 
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div className="mb-6">
                          <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                          <input 
                            type="email" 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                            placeholder="Your email address"
                            required
                          />
                        </div>
                        <div className="mb-6">
                          <label className="flex items-center">
                            <input 
                              type="checkbox" 
                              className="rounded border-gray-300 text-brand-purple focus:ring-brand-purple"
                              required
                            />
                            <span className="ml-2 text-gray-600 text-sm">
                              I agree to receive marketing emails and can unsubscribe at any time.
                            </span>
                          </label>
                        </div>
                        <button 
                          type="submit" 
                          className="w-full btn-primary flex justify-center items-center"
                          disabled={loading}
                        >
                          {loading ? (
                            <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                          ) : null}
                          {loading ? 'Subscribing...' : 'Subscribe Now'}
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-8">
                      <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <Check className="h-8 w-8 text-green-500" />
                      </div>
                      <h2 className="text-2xl font-bold text-brand-blue mb-4">Thank You for Subscribing!</h2>
                      <p className="text-gray-600 mb-6">
                        You've successfully subscribed to our newsletter. We've sent a confirmation email to <span className="font-medium">{email}</span>.
                      </p>
                      <p className="text-gray-600">
                        Please check your inbox (and spam folder, just in case) to confirm your subscription.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-16 bg-brand-lightPurple rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-brand-blue mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-brand-blue mb-2">How often will I receive the newsletter?</h3>
                  <p className="text-gray-600">We send our newsletter twice a month, typically on the 1st and 15th. Occasionally, we may send special announcements or offers.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-blue mb-2">Can I choose what type of content I receive?</h3>
                  <p className="text-gray-600">Currently, we offer a single newsletter with varied content. In the future, we plan to introduce content preferences to tailor your experience.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-blue mb-2">How do I unsubscribe?</h3>
                  <p className="text-gray-600">Every newsletter includes an unsubscribe link at the bottom. Simply click this link to stop receiving emails from us.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-blue mb-2">Is my information secure?</h3>
                  <p className="text-gray-600">Yes, we take data security seriously. We never share your information with third parties without your consent. Please review our Privacy Policy for more details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;
