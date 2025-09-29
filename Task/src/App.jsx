import React, { useState, useEffect } from 'react';
import { ChevronRight, Rocket, Compass, Monitor, Phone, MessageSquare, MapPin, Menu, X } from 'lucide-react';

// Custom hook to reveal elements using IntersectionObserver
const useRevealOnScroll = (dependency) => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal-up'));

    // Ensure starting state
    elements.forEach((el) => {
      el.classList.remove('opacity-100', 'translate-y-0');
      el.classList.add('opacity-0', 'translate-y-12');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [dependency]);
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Reset is handled inside the observer hook now

  const navigation = [
    { name: 'Home', key: 'home' },
    { name: 'Our Products', key: 'products' },
    { name: 'Services', key: 'services' },
    { name: 'Contact', key: 'contact' }
  ];

  const Header = () => (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-purple-600">Isaii</span>
              <span className="text-gray-400 text-sm ml-1">AI</span>
            </span>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  currentPage === item.key
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded ${
                  currentPage === item.key
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );

  const ProductsPage = () => (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Products</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the innovative marketing strategies that set Isaii-Ai apart, driving success in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product Cards */}
          {[
            {
              title: 'Isaii-Daillo',
              subtitle: 'Telephony AI',
              type: 'AI Telephony AGENT',
              gradient: 'from-teal-400 to-cyan-500',
              image: 'https://framerusercontent.com/images/nUyYMvoY4UXXPS7H1sUU2NlZYk.jpg?scale-down-to=1024'
            },
            {
              title: 'Isaii Whispher',
              subtitle: 'Voice AI that can be integrated wherever he want',
              type: 'AI Custom Chat AGENT',
              gradient: 'from-purple-400 to-pink-500',
              image: 'https://framerusercontent.com/images/fq3HOUsRRP2u0Lcppvq43g.png'
            },
            {
              title: 'Isaii Assit',
              subtitle: 'Chatbot that can be integrated to their website in 1 click',
              type: 'AI CustomVoice AGENT',
              gradient: 'from-blue-400 to-indigo-500',
              image: 'https://framerusercontent.com/images/SugX8Csm6hUFMJwDS1pwfOwIoXk.png'
            },
            {
              title: 'Isaii WhatsApp',
              subtitle: 'Coming Soon',
              type: 'AI AGENT',
              gradient: 'from-green-400 to-emerald-500',
              image: 'https://framerusercontent.com/images/t91I5eij1mhMdwAqGQn15ZM9I3U.png'
            },
            {
              title: 'Isaii Instagram',
              subtitle: 'Coming Soon',
              type: 'AI AGENT',
              gradient: 'from-orange-400 to-red-500',
              image: 'https://framerusercontent.com/images/0ImJTakP624MeStH5usjuO7qL5c.png'
            },
            {
              title: 'Isaii Direct',
              subtitle: 'Coming Soon',
              type: 'AI AGENT',
              gradient: 'from-pink-400 to-rose-500',
              image: 'https://framerusercontent.com/images/RbW5KtbEhj1REbz8OYj1D9Cy8.png'
            },
            {
              title: 'Bill Buddy',
              subtitle: 'Ai integrated self billing system',
              type: 'Billing SYSTEM',
              gradient: 'from-yellow-400 to-orange-500',
              image: 'https://framerusercontent.com/images/keIZef0rznBr8S7SrzE19b2UYCY.png'
            },
            {
              title: 'Direkt',
              subtitle: 'Ai integrated product selling solution',
              type: 'Marketplace AGENT',
              gradient: 'from-purple-400 to-indigo-500',
              image: 'https://framerusercontent.com/images/RbW5KtbEhj1REbz8OYj1D9Cy8.png'
            },
            {
              title: 'Isaii Commerce',
              subtitle: 'Ai intergrate E-commerce solution',
              type: 'E-commerce SOLUTION',
              gradient: 'from-pink-400 to-blue-500',
              image: 'https://framerusercontent.com/images/nC1Al5zumZz1FPsYvAuyblIC2s.png'
            }
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div
                className="h-48 w-full overflow-hidden bg-gray-100 cursor-pointer group"
                onClick={() => setCurrentPage('contact')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setCurrentPage('contact'); } }}
              >
                <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        {/* FAQ Section (same structure as Services) */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Explore Our FAQs</h2>
            <p className="text-gray-600">
              Find quick answers to commonly asked questions about Neutra.
              <br />
              Have a question not listed?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: 'Setup Process?',
                answer: 'Initial setup is quick and user-friendly, allowing immediate use.'
              },
              {
                question: 'Subscription Costs?',
                answer: 'Various pricing plans are available to suit different budget needs.'
              },
              {
                question: 'User Support?',
                answer: '24/7 customer support is available via email, chat, and phone.'
              },
              {
                question: 'Customization Options?',
                answer: 'Fully customizable to match your brand\'s style and preferences.'
              },
              {
                question: 'Refund Policy?',
                answer: 'Full refunds provided within 30 days if not satisfied.'
              },
              {
                question: 'Upgrade Options?',
                answer: 'Easy upgrades available for additional features and capabilities.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
    
  );

  const ServicesPage = () => (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-gray-600 text-lg">
            Professional Services That Showcase Our Expertise
          </p>
        </div>

        {/* Three service cards with images as in reference */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Designing */}
          <div className="reveal-up opacity-0 translate-y-12 transition-all duration-700">
            <div className="h-80 w-full rounded-3xl overflow-hidden shadow-md group">
              <img src="https://framerusercontent.com/images/vss98kimC7Rm3BkWtOJ4E7PF0.png?scale-down-to=512" alt="Designing" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <h3 className="mt-6 font-bold text-xl text-gray-900">Designing</h3>
            <p className="text-gray-600 mt-2">
              We provide expert design services that ensure your digital platforms are visually appealing, user-centric,
              and aligned with your brand's goals for optimal customer interaction.
            </p>
          </div>

          {/* Custom AI Solutions */}
          <div className="reveal-up opacity-0 translate-y-12 transition-all duration-700">
            <div className="h-80 w-full rounded-3xl overflow-hidden shadow-md group">
              <img src="https://framerusercontent.com/images/HvEjI5nnCrtIvttqSWsyCuVM.jpg?scale-down-to=512" alt="Custom AI Solutions" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <h3 className="mt-6 font-bold text-xl text-gray-900">Custom AI Solutions</h3>
            <p className="text-gray-600 mt-2">
              We build bespoke AI systems tailored to your business needs, enhancing efficiency, performance,
              and driving continuous innovation.
            </p>
          </div>

          {/* SaaS Products */}
          <div className="reveal-up opacity-0 translate-y-12 transition-all duration-700">
            <div className="h-80 w-full rounded-3xl overflow-hidden shadow-md group">
              <img src="https://framerusercontent.com/images/gEuLZWqISbowA6Z5TeEzISEsgs.jpg?scale-down-to=512" alt="SaaS Products" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <h3 className="mt-6 font-bold text-xl text-gray-900">SaaS Products</h3>
            <p className="text-gray-600 mt-2">
              We offer scalable SaaS products that streamline operations, enhance user experience,
              and provide efficient solutions tailored to your business needs.
            </p>
          </div>

          {/* Web Application */}
          <div className="reveal-up opacity-0 translate-y-12 transition-all duration-700">
            <div className="h-80 w-full rounded-3xl overflow-hidden shadow-md group">
              <img src="https://framerusercontent.com/images/HvEjI5nnCrtIvttqSWsyCuVM.jpg?scale-down-to=512" alt="Web Application" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <h3 className="mt-6 font-bold text-xl text-gray-900">Web Application</h3>
            <p className="text-gray-600 mt-2">
              We develop custom web applications designed to deliver seamless functionality, improve user
              engagement, and drive business growth through intuitive, responsive design.
            </p>
          </div>

          {/* Mobile Application */}
          <div className="reveal-up opacity-0 translate-y-12 transition-all duration-700">
            <div className="h-80 w-full rounded-3xl overflow-hidden shadow-md group">
              <img src="https://framerusercontent.com/images/KjsfCaVMvkjlLs2CFlHb4HZqE.jpg?scale-down-to=1024" alt="Mobile Application" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            <h3 className="mt-6 font-bold text-xl text-gray-900">Mobile Application</h3>
            <p className="text-gray-600 mt-2">
              Our mobile app development services create user-friendly, high-performance apps that cater to your
              business goals, offering a superior mobile experience for customers.
            </p>
          </div>
        </div>

        {/* FAQ Section */}

      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: '',
      phone: '',
      email: '',
      message: ''
    });

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    };

    return (
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm text-gray-500 mb-4">ISAII CONTACT</div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in touch with us today!
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Contact our sales and support teams for demos, onboarding
              assistance, or any product inquiries.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="text-gray-600" size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Message us</h3>
              <p className="text-gray-600 mb-6">
                Message us using our online chat system for quick and efficient support.
              </p>
              <div className="text-sm text-gray-500">support@isaii.com</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Phone className="text-gray-600" size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Let's have a chat – there's nothing quite like talking to another person.
              </p>
              <div className="text-sm text-gray-500">hr@isaii.in</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MapPin className="text-gray-600" size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Address</h3>
              <p className="text-gray-600 mb-6">
                We'd be delighted to welcome you to our Head Office.
              </p>
              <div className="text-sm text-gray-500">Coimbatore</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="text-orange-500" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Feel free to send our friendly team a message
              </h2>
              <p className="text-gray-600 text-lg">
                Message us using our online chat system for quick and efficient support.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HomePage = () => (
    <div>
      {/* Hero Section - Innovate, Automate, and Succeed with AI */}
      <section className="bg-gray-50 py-16 lg:py-24 reveal-up opacity-0 translate-y-12 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="bg-black rounded-3xl relative overflow-hidden flex flex-col lg:flex-row"
            style={{
              padding: '2rem 1rem',
              minHeight: '500px',
              width: '100%',
            }}
          >
            {/* Left: Text Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center items-center lg:items-start lg:pl-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center lg:text-left">
                Innovate, Automate, 
                and Succeed with AI
                <br />
              </h1>
              <p className="text-gray-300 text-lg lg:text-xl mb-8 leading-relaxed text-center lg:text-left max-w-xl">
                Innovative AI technology designed to solve pressing challenges,
                providing businesses with strategic, actionable problem-solving
                tools.
              </p>
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center transition-colors">
                Schedule a call
                <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
            {/* Right: Floating Images */}
            <div className="relative flex-1 flex items-center justify-center min-h-[200px]">
              {/* Show all three images on large screens */}
              <img
                src="https://framerusercontent.com/images/Es0UNVEZFUO6pTmc3NI38eovew.png?scale-down-to=512"
                alt="AI Shape 1"
                className="absolute top-0 right-8 w-36 h-36 object-cover rounded-full shadow-lg animate-float-slow hidden sm:block"
                style={{ animationDelay: '0s' }}
              />
              <img
                src="https://framerusercontent.com/images/LFAxsa4CpX7e4qBI72ijOV2sHg.png?scale-down-to=512"
                alt="AI Shape 3"
                className="absolute top-1/2 right-0 w-28 h-28 object-cover rounded-full shadow-lg animate-float-fast hidden md:block"
                style={{ animationDelay: '1s', transform: 'translateY(-50%)' }}
              />
              <img
                src="https://framerusercontent.com/images/Tq3lgO9Qy66CFuDaYW99KQ5xoLM.png?scale-down-to=512"
                alt="AI Shape 2"
                className="absolute bottom-8 right-24 w-32 h-32 object-cover rounded-full shadow-lg animate-float-medium hidden lg:block"
                style={{ animationDelay: '0.5s' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Unleash the Power of Our AI Innovations */}
      <section className="py-16 lg:py-24 reveal-up opacity-0 translate-y-12 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Unleash the Power of Our AI Innovations
            </h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              From data processing to intelligent automation, our AI solutions seamlessly integrate into your
              existing infrastructure, empowering you to make smarter, faster decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl reveal-up opacity-0 translate-y-12 transition-all duration-700">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="text-gray-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Products</h3>
              <p className="text-gray-600">
                Explore our suite of advanced AI solutions crafted to optimize workflows, elevate
                user experiences, and foster innovation across diverse industries and platforms.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl reveal-up opacity-0 translate-y-12 transition-all duration-700">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <Compass className="text-gray-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design</h3>
              <p className="text-gray-600">
                Redefine digital experiences with our dynamic design expertise, crafted to
                engage users through visually compelling and purpose-driven creations.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl reveal-up opacity-0 translate-y-12 transition-all duration-700">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <Monitor className="text-gray-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customised Products</h3>
              <p className="text-gray-600">
                Experience our tailored AI services designed to automate processes, improve
                decision-making, and deliver transformative results for businesses across various domains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Section - Our services */}
      <section className="py-16 lg:py-24 bg-white reveal-up opacity-0 translate-y-12 transition-all duration-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center mb-8">
            <div className="w-6 h-6 bg-gray-300 rounded mr-3 flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-600 rounded"></div>
            </div>
            <span className="text-gray-600 text-sm">Our services</span>
          </div>

          {/* Title Section */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Professional Services That
                <br />
                Showcase Our Expertise.
              </h2>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600 text-lg">
                From creative design to technical solutions, our
                services define industry excellence
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-5 gap-6">
            {/* SaaS Products Card */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden reveal-up opacity-0 translate-y-12 transition-all duration-700">
              <div className="h-64 bg-gradient-to-br from-purple-100 to-indigo-100 p-6">
                <div className="bg-white rounded-lg p-4 h-full flex items-center justify-center">
                  <div className="w-full">
                    <div className="bg-gray-900 rounded-lg p-3 text-center">
                      <div className="text-white text-xs mb-2">Learn how to design</div>
                      <div className="text-white text-xs mb-3">creative user interfaces</div>
                      <div className="bg-purple-600 text-white px-3 py-1 rounded text-xs inline-block mb-3">Design</div>
                      <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4">SaaS Products</h3>
                <p className="text-gray-600 mb-4">
                  We offer scalable SaaS products that streamline operations, enhance user
                  experience, and provide efficient solutions tailored to your business needs.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">R</span>
                  </div>
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-bold">JS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Outstaffing Card */}
            <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg overflow-hidden reveal-up opacity-0 translate-y-12 transition-all duration-700">
              <div className="h-32 bg-gradient-to-br from-blue-50 to-purple-50 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-gray-900 mb-1">
                    Outstaffing of IT specialists and project teams
                  </h3>
                  <p className="text-gray-600 text-xs mb-2">
                    We select specialists and connect them to projects in 48 hours.
                  </p>
                </div>
                <div className="flex space-x-1 justify-center">
                  <div className="w-8 h-8 bg-orange-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                  <div className="w-8 h-8 bg-green-300 rounded-full"></div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Custom AI Solutions</h3>
                <p className="text-gray-600 text-sm">
                  We provide bespoke AI systems tailored to your business needs, enhancing efficiency,
                  performance, and driving continuous innovation.
                </p>
                <div className="mt-4 bg-gray-800 rounded-lg p-3">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="bg-white rounded p-1">
                      <div className="w-full h-4 bg-red-200 rounded mb-1"></div>
                      <div className="w-full h-1 bg-gray-200 rounded"></div>
                    </div>
                    <div className="bg-white rounded p-1">
                      <div className="w-full h-4 bg-blue-200 rounded mb-1"></div>
                      <div className="w-full h-1 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Web Application Card */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden reveal-up opacity-0 translate-y-12 transition-all duration-700">
              <div className="h-64 bg-gradient-to-br from-yellow-50 to-orange-50 p-6">
                <div className="bg-white rounded-lg p-4 h-full">
                  <div className="grid grid-cols-3 gap-2 h-full">
                    <div className="space-y-2">
                      <div className="bg-gray-100 rounded p-2">
                        <div className="w-full h-3 bg-purple-200 rounded mb-1"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </div>
                      <div className="bg-gray-100 rounded p-2">
                        <div className="w-full h-3 bg-green-200 rounded mb-1"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 rounded p-2">
                        <div className="w-full h-3 bg-blue-200 rounded mb-1"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </div>
                      <div className="bg-gray-100 rounded p-2">
                        <div className="w-full h-3 bg-pink-200 rounded mb-1"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-gray-100 rounded p-2">
                        <div className="w-full h-3 bg-yellow-200 rounded mb-1"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </div>
                      <div className="bg-gray-100 rounded p-2">
                        <div className="w-full h-3 bg-indigo-200 rounded mb-1"></div>
                        <div className="w-3/4 h-1 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Web Application</h3>
                <p className="text-gray-600 mb-4">
                  We develop custom web applications designed to deliver seamless
                  functionality, improve user engagement, and drive business growth through
                  intuitive, responsive design.
                </p>
              </div>
            </div>

            {/* Designing Card */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg overflow-hidden reveal-up opacity-0 translate-y-12 transition-all duration-700">
              <div className="grid lg:grid-cols-2 h-full">
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="font-bold text-xl text-gray-900 mb-4">Designing</h3>
                  <p className="text-gray-600 mb-6">
                    We provide expert design services that ensure your digital platforms are visually
                    appealing, user-centric, and aligned with your brand's goals for optimal customer
                    interaction.
                  </p>
                </div>
                <div className="h-64 lg:h-full bg-gradient-to-br from-gray-50 to-blue-50 p-6">
                  <div className="bg-white rounded-lg p-4 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <div className="w-12 h-12 bg-blue-500 rounded"></div>
                      </div>
                      <div className="text-sm text-gray-600">Design Interface</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Application Card */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden reveal-up opacity-0 translate-y-12 transition-all duration-700">
              <div className="h-48 bg-gradient-to-br from-green-50 to-teal-50 p-6">
                <div className="bg-white rounded-lg p-4 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-20 bg-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="text-white text-xs">📱</div>
                    </div>
                    <div className="text-sm text-gray-600">Mobile Interface</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Mobile Application</h3>
                <p className="text-gray-600 mb-4">
                  We create mobile applications that provide seamless user experiences,
                  leveraging device capabilities to deliver engaging and interactive solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
           {/* Mission Statement Section */}
      <section className="relative w-full flex flex-col items-center justify-start overflow-visible reveal-up opacity-0 translate-y-12 transition-all duration-700" style={{ padding: '96px 0 192px', height: 'min-content', gap: '0px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          {/* Decorative shapes */}
          <div className="absolute top-16 left-8 lg:left-24 w-20 h-20 lg:w-32 lg:h-32 animate-float-slow">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 50 Q 35 20, 50 25 T 80 50 Q 65 80, 50 75 T 20 50 Z" fill="#1a1a1a"/>
            </svg>
          </div>
          <div className="absolute top-4 right-8 lg:right-16 w-24 h-24 lg:w-40 lg:h-40 animate-float-medium">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 50 Q 40 15, 55 20 T 85 45 Q 75 85, 60 80 T 30 50 Z" fill="#1a1a1a"/>
            </svg>
          </div>
          
          <div className="text-center relative z-10 max-w-6xl mx-auto py-12">
            <div className="mb-10 flex justify-center">
              <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 50 Q 40 20, 55 25 T 80 50 Q 70 80, 55 75 T 30 50 Z" fill="#1a1a1a"/>
              </svg>
            </div>
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight px-4">
              We craft AI solutions today that empower your business for tomorrow and beyond.
            </h2>
          </div>
        </div>
      </section>

      {/* Products Section - Building Digital Excellence with Isaii */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Building Digital Excellence with Isaii.
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Discover the innovative marketing strategies that set Isaii-Ai&nbsp; apart, driving success in the digital landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards with images (same images as Products page) */}
            {[
              {
                title: 'Isaii-Daillo',
                subtitle: 'Telephony AI',
                image: 'https://framerusercontent.com/images/nUyYMvoY4UXXPS7H1sUU2NlZYk.jpg?scale-down-to=1024'
              },
              {
                title: 'Isaii Whispher',
                subtitle: 'Voice AI that can be integrated wherever he want',
                image: 'https://framerusercontent.com/images/fq3HOUsRRP2u0Lcppvq43g.png'
              },
              {
                title: 'Isaii Assit',
                subtitle: 'Chatbot that can be integrated to their website in 1 click',
                image: 'https://framerusercontent.com/images/SugX8Csm6hUFMJwDS1pwfOwIoXk.png'
              },
              {
                title: 'Isaii WhatsApp',
                subtitle: 'Coming Soon',
                image: 'https://framerusercontent.com/images/t91I5eij1mhMdwAqGQn15ZM9I3U.png'
              },
              {
                title: 'Isaii Instagram',
                subtitle: 'Coming Soon',
                image: 'https://framerusercontent.com/images/0ImJTakP624MeStH5usjuO7qL5c.png'
              },
              {
                title: 'Isaii Direct',
                subtitle: 'Coming Soon',
                image: 'https://framerusercontent.com/images/RbW5KtbEhj1REbz8OYj1D9Cy8.png'
              },
              {
                title: 'Bill Buddy',
                subtitle: 'Ai integrated self billing system',
                image: 'https://framerusercontent.com/images/keIZef0rznBr8S7SrzE19b2UYCY.png'
              },
              {
                title: 'Direkt',
                subtitle: 'Ai integrated product selling solution',
                image: 'https://framerusercontent.com/images/RbW5KtbEhj1REbz8OYj1D9Cy8.png'
              },
              {
                title: 'Isaii Commerce',
                subtitle: 'Ai intergrate E-commerce solution',
                image: 'https://framerusercontent.com/images/nC1Al5zumZz1FPsYvAuyblIC2s.png'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div
                  className="h-48 w-full overflow-hidden bg-gray-100 cursor-pointer group"
                  onClick={() => setCurrentPage('contact')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { setCurrentPage('contact'); } }}
                >
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* FAQ Section - Explore Our FAQs */}
        <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Explore Our FAQs</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Find quick answers to commonly asked questions about Isaii-AI.<br />
              Have a question not listed?
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Trial Period?</h3>
              <p className="text-gray-600">
                We offer a risk-free trial period to allow you to experience the benefits of our AI solutions firsthand.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Performance Guarantees?</h3>
              <p className="text-gray-600">
                We deliver performance benchmarks and provide ongoing optimization to ensure your AI systems operate at their best.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Customer Support?</h3>
              <p className="text-gray-600">
                Dedicated 24/7 support is available through email, chat, and phone to assist with any questions or technical issues.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Customization Options?</h3>
              <p className="text-gray-600">
                Our AI systems are fully customizable to align with your business goals, workflows, and branding requirements.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Data Security?</h3>
              <p className="text-gray-600">
                We implement robust security measures, including encryption and compliance with GDPR and other data protection standards.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Updates and Maintenance?</h3>
              <p className="text-gray-600">
                Regular updates are included to keep your AI solutions cutting-edge, along with maintenance to ensure smooth operation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );

  const Footer = () => (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-8 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left: Brand and Copyright */}
        <div className="flex-1">
          <h1 className="text-6xl font-semibold text-gray-400 mb-8">ISAAI-AI</h1>
          <p className="mt-8 text-lg">Copyright © 2024 – Isaii-AI</p>
        </div>
        {/* Right: Newsletter & Social */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <form className="flex items-center border-b border-gray-700 pb-2">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-transparent outline-none text-gray-300 flex-1 py-2 px-0"
              />
              <button type="submit" className="ml-4 text-gray-300">
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="3"/><path d="M17.5 6.5h.01"/>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 0 0-4 0"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
        
      case 'products':
        return <ProductsPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  useRevealOnScroll(currentPage); // Reinitialize reveals when page changes

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-1">
        {renderCurrentPage()}
      </div>
      <Footer />
    </div>
  );
};

export default App;