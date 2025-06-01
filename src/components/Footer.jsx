import React from 'react';
import { Shield, Mail, Phone, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Cybersecurity Consulting',
    'Risk Assessment',
    'Compliance Management',
    'Security Training',
    'Managed Security',
    'Incident Response'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'News & Insights',
    'Case Studies',
    'Partners'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-lg"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold gradient-text">Cyber Interactive</span>
                  <span className="text-sm text-gray-500">Interactive Defense, Proactive Security</span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Empowering organizations with comprehensive cybersecurity solutions. 
                We protect businesses from cyber threats with cutting-edge technology 
                and expert guidance.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <a 
                    href="mailto:cyberinteractivelimited@gmail.com" 
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    cyberinteractivelimited@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <a 
                    href="tel:+254701213240" 
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    +254 701 213 240
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <a 
                    href="https://cyberinterative.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    cyberinterative.com
                  </a>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <button
                      onClick={() => scrollToSection('#services')}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection('#about')}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-600 text-sm">
                © {currentYear} Cyber Interactive Limited. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
