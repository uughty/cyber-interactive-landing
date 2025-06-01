
import React from 'react';
import { Shield, Lightbulb, Users, Target, Zap, Lock } from 'lucide-react';

const Philosophy = () => {
  const philosophyCards = [
    {
      icon: Shield,
      title: "Interactive Defense",
      color: "from-neon-blue to-cyan-400",
      items: [
        {
          title: "Engagement",
          description: "We actively engage with our clients, understanding their unique challenges and integrating our solutions seamlessly."
        },
        {
          title: "Customization", 
          description: "We tailor our defense strategies to fit the specific needs of each client, fortifying every aspect of their digital infrastructure."
        },
        {
          title: "Collaboration",
          description: "We build strong partnerships, leveraging our expertise and the client's unique insights to create robust defense frameworks."
        }
      ]
    },
    {
      icon: Lightbulb,
      title: "Proactive Security",
      color: "from-neon-green to-emerald-400",
      items: [
        {
          title: "Prevention",
          description: "Our measures anticipate and mitigate threats before they impact, preventing breaches rather than reacting to them."
        },
        {
          title: "Innovation",
          description: "We invest in cutting-edge technologies and continuously update methodologies to stay at the forefront of cybersecurity."
        },
        {
          title: "Future-Proofing",
          description: "We go beyond current compliance, building security frameworks that adapt and scale with business growth."
        }
      ]
    }
  ];

  const coreBeliefs = [
    {
      icon: Lock,
      title: "Tailored Security",
      description: "Every solution is customized for maximum protection."
    },
    {
      icon: Zap,
      title: "Integrated Strategy", 
      description: "Security is an integral part of business strategy, enhancing operations."
    },
    {
      icon: Target,
      title: "Peace of Mind",
      description: "We provide comprehensive solutions to protect against today's threats and prepare for tomorrow's."
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="cyber-text">Our Philosophy</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full"></div>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
              Our approach to cybersecurity is built on two fundamental pillars that guide everything we do.
            </p>
          </div>

          {/* Main Philosophy Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {philosophyCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <div key={index} className="glass-morphism rounded-3xl p-8 cyber-glow group hover:scale-105 transition-all duration-500">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${card.color} rounded-2xl flex items-center justify-center mr-6 group-hover:rotate-12 transition-transform duration-500`}>
                      <IconComponent className="w-8 h-8 text-slate-950" strokeWidth={2} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{card.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {card.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border-l-4 border-gradient-to-b from-neon-blue to-neon-green pl-6 py-2">
                        <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                        <p className="text-slate-300 leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Core Beliefs */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Core Beliefs and Practices</h3>
            <div className="w-16 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreBeliefs.map((belief, index) => {
              const IconComponent = belief.icon;
              return (
                <div key={index} className="glass-morphism rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-500 cyber-glow">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-neon-blue via-purple-500 to-neon-green rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      <IconComponent className="w-10 h-10 text-slate-950" strokeWidth={2} />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{belief.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{belief.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;