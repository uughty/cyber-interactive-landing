
import React from 'react';
import { Users, Target, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="cyber-text">Who We Are</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="glass-morphism rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Our Mission</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                 Cyber Interactive is more than just a cybersecurity provider. We believe in a world where businesses can thrive without fear of cyber threats. Our purpose is to empower organizations to achieve cybersecurity excellence. 
                </p>
              </div>

              <div className="glass-morphism rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-100">Our Vision</h3>
                </div>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Our team of certified experts provides proactive security strategies and advisory services, acting as trusted partners in safeguarding our clients' digital assets. We are passionate about empowering organizations to thrive securely in the digital world.
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="glass-morphism rounded-3xl p-8 cyber-glow">
                <div className="relative">
                  {/* Center Shield */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                      <Shield className="relative w-32 h-32 text-blue-500 animate-float" strokeWidth={1} />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="grid grid-cols-2 gap-8">
                    <div className="glass-morphism rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold cyber-text mb-2">15+</div>
                      <div className="text-slate-400 text-sm">Years of Excellence</div>
                    </div>
                    <div className="glass-morphism rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold cyber-text mb-2">50+</div>
                      <div className="text-slate-400 text-sm">Clients Protected</div>
                    </div>
                    <div className="glass-morphism rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold cyber-text mb-2">24/7</div>
                      <div className="text-slate-400 text-sm">Monitoring</div>
                    </div>
                    <div className="glass-morphism rounded-xl p-6 text-center">
                      <div className="text-3xl font-bold cyber-text mb-2">100%</div>
                      <div className="text-slate-400 text-sm">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;