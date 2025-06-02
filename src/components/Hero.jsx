import React from 'react';
import { Shield, ArrowRight, CheckCircle, Sparkles, Play, Fingerprint, BarChart2, Activity, AlertCircle, TrendingUp, Cpu, Zap } from 'lucide-react'; // Added Zap for new design

const Hero = () => {
  // Function to smoothly scroll to a section on the page
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

 
  const features = [
    'ISO 27001 Certified Experts',
    '15+ Years Experience',
    '24/7 Security Monitoring'
  ];

 
  const stats = [
    { number: '500+', label: 'Clients Protected', icon: BarChart2, color: 'blue' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Activity, color: 'emerald' },
    { number: '24/7', label: 'Threat Monitoring', icon: AlertCircle, color: 'red' }
  ];

  return (
    <section id="home" className="relative min-h-screen bg-gray-950 text-white pt-20 md:pt-24 overflow-hidden font-sans flex items-center justify-center">
     
      <div className="absolute inset-0 z-0 opacity-30" style={{
        background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
      }}></div>

      
      <div className="absolute inset-0 z-0 opacity-5" style={{
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent 0 2px, rgba(255,255,255,0.02) 2px 4px),
          repeating-linear-gradient(-45deg, transparent 0 2px, rgba(255,255,255,0.02) 2px 4px)
        `,
        backgroundSize: '40px 40px',
      }}></div>

      
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
      
        <div className="absolute top-1/4 left-1/4 w-px h-24 bg-blue-500 shadow-blue-500/50 animate-pulse-line" style={{ transform: 'rotate(45deg)' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-px h-20 bg-emerald-500 shadow-emerald-500/50 animate-pulse-line animation-delay-1000" style={{ transform: 'rotate(-30deg)' }}></div>
      </div>

      
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         
          <div className="space-y-8 lg:pr-8">
           
            <div className="inline-flex items-center space-x-2 text-sm font-semibold text-blue-400 bg-blue-900/40 px-3 py-1 rounded-full border border-blue-700 animate-fade-in">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Leading Digital Protection</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight animate-fade-in delay-200">
                Interactive Defence <span className="text-blue-500">Proactive</span>
                <span className="block">Security</span>
              </h1>

             
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-medium animate-fade-in delay-300">
                Proactive cybersecurity solutions designed to safeguard your
                business from evolving threats, ensuring <span className="text-blue-400 font-semibold">uninterrupted operations</span> and peace of mind.
              </p>
            </div>

            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in delay-500">
              <button
                onClick={() => scrollToSection('#contact')}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300 transform hover:-translate-y-1 border border-blue-500"
              >
                <span>REQUEST A DEMO</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('#services')}
                className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 text-blue-400 font-bold px-8 py-4 rounded-lg text-lg shadow-lg hover:shadow-xl border border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>EXPLORE SERVICES</span>
              </button>
            </div>


            <div className="pt-8 animate-fade-in delay-700">
              <ul className="space-y-3 text-gray-200 text-md">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        
          <div className="relative flex justify-center items-center lg:justify-end animate-fade-in delay-800">
           
            <div className="relative w-full max-w-xl bg-gray-850 rounded-2xl shadow-2xl p-6 border border-blue-700 overflow-hidden transform rotate-3 lg:rotate-0 transition-transform duration-500 ease-in-out hover:rotate-0">
             
              <div className="flex items-center justify-between pb-4 border-b border-gray-700 mb-4">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="text-gray-400 text-sm font-mono flex items-center space-x-1">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span>threat-intel.io</span>
                </div>
                <Cpu className="w-5 h-5 text-blue-400 animate-pulse" /> 
              </div>

              
              <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 border border-blue-600">
                <img
                  src="assets/kev.jpeg"
                  alt="Cybersecurity professional working on advanced security systems"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x450/333333/E0E0E0?text=Image+Not+Found'; }}
                />
               
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-blue-600/80 hover:bg-blue-700/90 p-4 rounded-full text-white shadow-lg transform hover:scale-110 transition-transform">
                        <Play className="w-6 h-6" />
                    </button>
                </div>
              </div>

              {/* Dashboard Widgets/Overlays - arranged in a grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-4 flex items-center space-x-4 shadow-md border border-gray-700">
                    <div className={`bg-${stat.color}-600 p-3 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}


                <div className="col-span-1 sm:col-span-2 bg-blue-900/50 rounded-lg p-4 flex items-center justify-center space-x-3 shadow-md border border-blue-700 animate-pulse-slow">
                  <Shield className="w-6 h-6 text-blue-300" />
                  <span className="text-lg font-semibold text-blue-200">System <span className="text-emerald-400">Active</span> | <span className="text-gray-100">{stats.find(s => s.label === 'Uptime Guarantee')?.number}</span> {stats.find(s => s.label === 'Uptime Guarantee')?.label}</span>
                </div>


                <div className="col-span-1 sm:col-span-2 bg-gray-900 rounded-lg p-4 flex items-center justify-between shadow-md border border-gray-700">
                    <div className="flex items-center space-x-3">
                        <AlertCircle className="w-6 h-6 text-red-500" />
                        <span className="text-lg font-semibold text-gray-100">Threat Activity:</span>
                    </div>
                    <div className="text-xl font-bold text-red-400">0 Alerts</div>
                </div>
              </div>

             
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/5 rounded-full blur-xl -z-10 transform translate-x-1/2 translate-y-1/2"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/5 rounded-full blur-xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
