import React from 'react';
import { Users, Headphones, GraduationCap, Settings, CheckCircle } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: Users,
      title: "Consulting and Advisory Services",
      color: "from-neon-blue to-cyan-400",
      services: [
        { name: "Project management (PMP Methodology)", price: "$1,500/day" },
        { name: "IT Security and Systems Audit", price: "$5,000/audit" },
        { name: "Gap analysis and Risk Profiling", price: "$3,000/assessment" },
        { name: "IT Strategic planning and policy development", price: "$4,000/plan" },
        { name: "Business Continuity Management", price: "$6,000/project" },
        { name: "Data Protection Impact Assessment (DPIA)", price: "$2,500/DPIA" }
      ]
    },
    {
      icon: Headphones,
      title: "Managed Security Services",
      color: "from-neon-green to-emerald-400",
      services: [
        { 
          name: "Proactive Monitoring and Management of security systems to detect and respond to threats in real-time", 
          price: "$1,000/month" 
        }
      ]
    },
    {
      icon: GraduationCap,
      title: "Training and Awareness Programs",
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "Cybersecurity Training", price: "$800/session" },
        { name: "Data Protection Training", price: "$700/session" },
        { name: "IT Governance, Risk and Compliance (GRC) Training", price: "$900/session" }
      ]
    },
    {
      icon: Settings,
      title: "Customized Cybersecurity Solutions",
      color: "from-orange-500 to-red-500",
      services: [
        { name: "Security Operations Center (SOC)", price: "Custom Quote" },
        { name: "Network and Application Protection", price: "Custom Quote" },
        { name: "Customer Identity and Access Management", price: "Custom Quote" },
        { name: "Privileged Access Management (PAM)", price: "Custom Quote" },
        { name: "Database Activity Monitoring (DAM)", price: "Custom Quote" },
        { name: "4th Generation Data Loss Prevention (DLP)", price: "Custom Quote" },
        { name: "Financial Crime Risk Management (FCRM)", price: "Custom Quote" },
        { name: "Operational Technology (OT) Security", price: "Custom Quote" },
        { name: "Email Security", price: "Custom Quote" },
        { name: "Cyber Intelligence and Brand Monitoring", price: "Custom Quote" },
        { name: "Compromise Assessment", price: "Custom Quote" },
        { name: "Enterprise Archiving Solution", price: "Custom Quote" }
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="cyber-text">Our Services</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full"></div>
            <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions tailored to meet your organization's unique needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-10">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="glass-morphism rounded-2xl p-5 cyber-glow group hover:scale-102 transition-all duration-500">
                  <div className="flex items-center mb-5">
                    <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-500`}>
                      <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">{category.title}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-start justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-neon-blue/50 transition-all duration-300">
                        <div className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-neon-green mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 flex-1 text-sm leading-relaxed">{service.name}</span>
                        </div>
                        <div className="text-neon-blue font-bold ml-3 whitespace-nowrap text-right text-sm">
                          {service.price}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <div className="glass-morphism rounded-xl p-6 max-w-3xl mx-auto cyber-glow">
              <h3 className="text-xl font-bold text-white mb-3">Tailored Solutions for Every Need</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our solutions are customized to meet the unique requirements of each client. 
                Contact us today to discuss how we can secure your digital future.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-5 bg-gradient-to-r from-neon-blue to-neon-green text-slate-950 font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/30"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
