
import React from 'react';
import { HelpCircle, Map, Building, ClipboardCheck, RotateCcw, Puzzle } from 'lucide-react';

const ValueProposition = () => {
  const valueProps = [
    {
      icon: HelpCircle,
      title: "Why We Exist",
      description: "We believe in a digital world where security is tailored, proactive, and integrated. Our approach ensures your organization is compliant and prepared for future challenges, providing peace of mind.",
      color: "from-neon-blue to-cyan-400"
    },
    {
      icon: Map,
      title: "Strategic Roadmap & Business Continuity",
      description: "We develop tailored strategies to identify and address security gaps, ensuring a robust security posture and uninterrupted business functionality.",
      color: "from-neon-green to-emerald-400"
    },
    {
      icon: Building,
      title: "Business Resilience", 
      description: "We strengthen your operations against cyber disruptions, ensuring continuity, minimizing downtime, and protecting your reputation.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ClipboardCheck,
      title: "Compliance Assurance",
      description: "Expert guidance to ensure your business meets and exceeds industry standards and regulations such as NIST, PCI/DSS, DPIA, HIPAA & ISO 27001.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: RotateCcw,
      title: "Continuous Improvement & Risk Mitigation",
      description: "Ongoing monitoring and adaptive strategies to stay ahead of evolving cyber threats, identifying vulnerabilities before exploitation.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Puzzle,
      title: "Integrated Solutions",
      description: "A holistic approach to cybersecurity, integrating our solutions seamlessly with your existing systems to enhance efficiency and performance.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="value-proposition" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-neon-green/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="cyber-text">Our Value Proposition</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full"></div>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
              Discover how we transform cybersecurity challenges into competitive advantages for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => {
              const IconComponent = prop.icon;
              return (
                <div key={index} className="glass-morphism rounded-2xl p-8 group hover:scale-105 transition-all duration-500 cyber-glow">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${prop.color} rounded-xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-500`}>
                      <IconComponent className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                      {prop.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {prop.description}
                  </p>
                  
                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue/20 to-neon-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto cyber-glow">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Security?</h3>
              <p className="text-slate-300 text-lg mb-6">
                Let us show you how our value-driven approach can elevate your cybersecurity posture and business resilience.
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-neon-blue to-neon-green text-slate-950 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/30"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;