import React, { useState } from 'react';
import { ChevronRight, Rocket, Compass, Monitor, Phone, MessageSquare, MapPin, Menu, X } from 'lucide-react';

const IsaiiWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const HomePage = () => (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black rounded-3xl p-8 lg:p-16 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Innovate, Automate,
                <br />
                and Succeed with AI
              </h1>
              <p className="text-gray-300 text-lg lg:text-xl mb-8 leading-relaxed">
                Innovative AI technology designed to solve pressing challenges,
                providing businesses with strategic, actionable problem-solving
                tools.
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center transition-colors">
                Schedule a call
                <ChevronRight className="ml-2" size={20} />
              </button>
            </div>
            
            {/* Decorative 3D elements */}
            <div className="absolute top-8 right-8 opacity-20">
              <div className="w-24 h-24 bg-white rounded-full"></div>
            </div>
            <div className="absolute bottom-8 right-16 opacity-30">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
            </div>
            <div className="absolute bottom-16 right-32 opacity-25">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
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
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <Rocket className="text-gray-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Products</h3>
              <p className="text-gray-600">
                Explore our suite of advanced AI solutions crafted to optimize workflows, elevate
                user experiences, and foster innovation across diverse industries and platforms.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <Compass className="text-gray-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Design</h3>
              <p className="text-gray-600">
                Redefine digital experiences with our dynamic design expertise, crafted to
                engage users through visually compelling and purpose-driven creations.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
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
    </div>
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
              gradient: 'from-teal-400 to-cyan-500'
            },
            {
              title: 'Isaii Whispher',
              subtitle: 'Voice AI that can be integrated wherever he want',
              type: 'AI Custom Chat AGENT',
              gradient: 'from-purple-400 to-pink-500'
            },
            {
              title: 'Isaii Assit',
              subtitle: 'Chatbot that can be integrated to their website in 1 click',
              type: 'AI CustomVoice AGENT',
              gradient: 'from-blue-400 to-indigo-500'
            },
            {
              title: 'Product 4',
              subtitle: 'Coming Soon',
              type: 'AI AGENT',
              gradient: 'from-green-400 to-emerald-500'
            },
            {
              title: 'Product 5',
              subtitle: 'Coming Soon',
              type: 'AI AGENT',
              gradient: 'from-orange-400 to-red-500'
            },
            {
              title: 'Product 6',
              subtitle: 'Coming Soon',
              type: 'AI AGENT',
              gradient: 'from-pink-400 to-rose-500'
            }
          ].map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                <div className="bg-white rounded-xl p-6 m-6 w-full">
                  <div className="w-8 h-8 bg-black rounded-full mb-4 flex items-center justify-center">
                    <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                  </div>
                  <div className="text-purple-300 text-sm mb-2">AI</div>
                  <div className="font-bold text-xl mb-1">{product.type.split(' ')[1]}</div>
                  <div className="text-xs text-gray-500">{product.type}</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600">{product.subtitle}</p>
              </div>
            </div>
          ))}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-orange-100 to-yellow-100 p-6">
              <div className="bg-white rounded-lg p-4 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-200 rounded-lg mx-auto mb-4"></div>
                  <div className="text-sm text-gray-600">Design Mockup</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Designing</h3>
              <p className="text-gray-600 mb-6">
                We provide expert design services that ensure your digital platforms are visually appealing, user-centric,
                and aligned with your brand's goals for optimal customer interaction.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 p-6">
              <div className="bg-white rounded-lg p-4 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="flex space-x-2 justify-center mb-4">
                    <div className="w-8 h-8 bg-purple-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-blue-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-green-300 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600">Team Collaboration</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Outstaffing of IT specialists and project teams</h3>
              <p className="text-gray-600 mb-4">
                We select specialists and connect them to projects in 48 hours.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-64 bg-gradient-to-br from-green-100 to-emerald-100 p-6">
              <div className="bg-white rounded-lg p-4 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-200 rounded-lg mx-auto mb-4"></div>
                  <div className="text-sm text-gray-600">Web Application</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Web Application</h3>
              <p className="text-gray-600 mb-6">
                We develop custom web applications designed to deliver seamless functionality, improve user engagement,
                and drive business growth through intuitive, responsive design.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="h-64 bg-gradient-to-br from-blue-100 to-indigo-100 p-6">
              <div className="bg-white rounded-lg p-4 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-200 rounded-lg mx-auto mb-4"></div>
                  <div className="text-sm text-gray-600">SaaS Solution</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4">SaaS Products</h3>
              <p className="text-gray-600 mb-6">
                We offer scalable SaaS products that streamline operations, enhance user experience, and provide
                efficient solutions tailored to your business needs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden md:col-span-2">
            <div className="h-64 bg-gradient-to-br from-gray-100 to-slate-100 p-6">
              <div className="bg-white rounded-lg p-4 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg mx-auto mb-4"></div>
                  <div className="text-sm text-gray-600">AI Solutions</div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Custom AI Solutions</h3>
              <p className="text-gray-600">
                We provide bespoke AI systems tailored to your business needs, enhancing efficiency, performance,
                and driving continuous innovation.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
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
      console.log('Form submitted:', formData);
      // Handle form submission here
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
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="text-gray-600" size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Message us</h3>
              <p className="text-gray-600 mb-6">
                Message us using our online chat system for quick and efficient support.
              </p>
              <div className="text-sm text-gray-500">support@isaii.com</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Phone className="text-gray-600" size={24} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Let's have a chat – there's nothing quite like talking to another person.
              </p>
              <div className="text-sm text-gray-500">hr@isaii.in</div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {renderCurrentPage()}
    </div>
  );
};

export default IsaiiWebsite;