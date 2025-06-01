import React, { useState } from 'react';
import { Mail, Phone, Globe, Send, MapPin, Clock, Building2 } from 'lucide-react'; // Added Building2 for company info
import { Button } from '@/components/ui/button'; // Assuming Button is a shadcn/ui component or similar

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API endpoint)
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "cyberinteractivelimited@gmail.com",
      link: "mailto:cyberinteractivelimited@gmail.com",
      color: "from-neon-blue to-cyan-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+254 701 213 240",
      subtitle: "Kelvin Saitoti",
      link: "tel:+254701213240",
      color: "from-neon-green to-emerald-400"
    },
    {
      icon: Globe,
      title: "Visit Our Website",
      value: "cyberinterative.com",
      link: "https://cyberinterative.com",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-950 via-slate-950 to-slate-950 relative overflow-hidden">
      {/* Background elements for visual interest */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(to right, #334155 1px, transparent 1px),
            linear-gradient(to bottom, #334155 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}></div>
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get In <span className="text-blue-500">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
              Ready to secure your digital future? Connect with our cybersecurity experts today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12"> {/* Reduced gap */}
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700 shadow-xl"> {/* Reduced padding and rounded-xl */}
                <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3> {/* Reduced mb */}

                <div className="space-y-4"> {/* Reduced space-y */}
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center p-3 bg-slate-800/40 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group" // Reduced padding and rounded-lg
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-105 transition-transform duration-300`}> {/* Reduced size and rounded-lg */}
                          <IconComponent className="w-6 h-6 text-white" strokeWidth={2} /> {/* Reduced icon size */}
                        </div>
                        <div>
                          <div className="text-slate-400 text-sm font-medium">{info.title}</div>
                          <div className="text-white font-semibold text-base">{info.value}</div> {/* Reduced text size */}
                          {info.subtitle && <div className="text-slate-400 text-xs">{info.subtitle}</div>} {/* Reduced text size */}
                        </div>
                      </a>
                    );
                  })}
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-slate-700/50"> {/* Reduced mt and pt */}
                  <div className="flex items-center mb-3"> {/* Reduced mb */}
                    <MapPin className="w-4 h-4 text-blue-400 mr-2" /> {/* Reduced icon size and mr */}
                    <span className="text-slate-300 text-sm">Based in Kenya, Serving Globally</span> {/* Reduced text size */}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-emerald-400 mr-2" /> {/* Reduced icon size and mr */}
                    <span className="text-slate-300 text-sm">24/7 Security Monitoring</span> {/* Reduced text size */}
                  </div>
                  <div className="flex items-center mt-3"> {/* Added company info */}
                    <Building2 className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-slate-300 text-sm">Cyber Interactive Limited</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700 shadow-xl"> {/* Reduced padding and rounded-xl */}
              <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3> {/* Reduced mb */}

              <form onSubmit={handleSubmit} className="space-y-5"> {/* Reduced space-y */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"> {/* Reduced gap */}
                  <div>
                    <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300" // Reduced padding and rounded-lg
                      placeholder="Kevin Saitoti"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300" // Reduced padding and rounded-lg
                      placeholder="kevinsaitoti@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-slate-300 text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300" // Reduced padding and rounded-lg
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3} // Reduced rows
                    className="w-full px-3 py-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none" // Reduced padding and rounded-lg
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-3.5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 group" // Reduced padding and rounded-lg
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 max-w-4xl mx-auto border border-gray-700 shadow-xl"> {/* Reduced padding and rounded-xl */}
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-slate-300 text-lg mb-6">
                Don't wait for a cyber attack to secure your business. Contact us today for a free consultation
                and discover how we can protect your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+254701213240"
                  className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 inline-block text-lg" // Reduced padding and rounded-lg
                >
                  Call Now: +254 701 213 240
                </a>
                <a
                  href="mailto:cyberinteractivelimited@gmail.com"
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 font-bold px-6 py-3 rounded-lg transition-all duration-300 inline-block text-lg" // Reduced padding and rounded-lg
                >
                  Email Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
