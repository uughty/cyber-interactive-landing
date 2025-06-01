
import React from 'react';
import { Award, Users, Shield, Target, TrendingUp, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const certifications = [
    "CompTIA Pentest+",
    "CRTP (Certified Red Team Professional)",
    "CND (Certified Network Defender)",
    "CEH (Certified Ethical Hacker)",
    "ISO 27001 Lead Implementer",
    "OSCP (Offensive Security Certified Professional)"
  ];

  const advantages = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly skilled professionals with 15+ years of combined experience in strategy development and security assessment.",
      color: "from-neon-blue to-cyan-400"
    },
    {
      icon: Shield,
      title: "Proven Track Record",
      description: "100% client satisfaction rate with successful implementations across diverse industries and business sizes.",
      color: "from-neon-green to-emerald-400"
    },
    {
      icon: Target,
      title: "Tailored Approach",
      description: "We collaborate closely to understand your unique challenges and design cost-effective, engaging solutions.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Better ROI",
      description: "Our deployment models are designed with lower Total Cost of Ownership (TCO) and improved ROI in mind.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support to ensure your systems are always protected and operational.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Recognized expertise in cybersecurity with multiple industry certifications and proven methodologies.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="cyber-text">Why Choose Cyber Interactive?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full"></div>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
              We set ourselves apart by offering customized, interactive technology solutions backed by expertise and innovation.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="glass-morphism rounded-2xl p-8 cyber-glow">
                <h3 className="text-2xl font-bold text-white mb-6">Our Commitment to Excellence</h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    At Cyber Interactive, we set ourselves apart by offering customized, interactive technology solutions 
                    that are supported by knowledgeable professionals to safeguard your company while upholding compliance.
                  </p>
                  <p>
                    We collaborate closely with our clients to fully comprehend their particular problems and then design 
                    and implement cost-effective, engaging, and instructional strategies.
                  </p>
                  <p>
                    Our deployment models are made with a lower Total Cost of Ownership (TCO) and an improved ROI in mind, 
                    ensuring maximum value for your cybersecurity investment.
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div className="glass-morphism rounded-2xl p-8 cyber-glow">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Award className="w-8 h-8 text-neon-blue mr-3" />
                  Industry Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center p-3 bg-slate-800/30 rounded-lg border border-slate-700/50">
                      <div className="w-3 h-3 bg-gradient-to-r from-neon-blue to-neon-green rounded-full mr-3"></div>
                      <span className="text-slate-300 text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => {
                const IconComponent = advantage.icon;
                return (
                  <div key={index} className="glass-morphism rounded-2xl p-6 cyber-glow group hover:scale-105 transition-all duration-500">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500`}>
                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{advantage.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="glass-morphism rounded-xl p-6 text-center cyber-glow">
              <div className="text-4xl font-bold cyber-text mb-2">15+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="glass-morphism rounded-xl p-6 text-center cyber-glow">
              <div className="text-4xl font-bold cyber-text mb-2">50+</div>
              <div className="text-slate-300">Clients Served</div>
            </div>
            <div className="glass-morphism rounded-xl p-6 text-center cyber-glow">
              <div className="text-4xl font-bold cyber-text mb-2">100%</div>
              <div className="text-slate-300">Success Rate</div>
            </div>
            <div className="glass-morphism rounded-xl p-6 text-center cyber-glow">
              <div className="text-4xl font-bold cyber-text mb-2">24/7</div>
              <div className="text-slate-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
