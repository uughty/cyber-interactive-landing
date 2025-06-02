import React from 'react';

const Clients = () => {
 const clients = [
  { name: "Bloomberg Philanthropies", logo: "assets/bloo.jpg", url: "https://www.bloomberg.org/" },
  { name: "Maisha Bora Sacco Society Ltd", logo: "assets/maisha.jpg", url: "https://maishaborasacco.com/" },
  { name: "Sika Building Trust", logo: "assets/sika.png", url: "https://kenya.sika.com/" },
  { name: "Knowledge Hub Institute", logo: "assets/Knowledge.png", url: "https://knowledgehub.co.ke/" },
  { name: "Cyber Shujaa", logo: "assets/cybershujaa.webp", url: "https://cybershujaa.co.ke/" },
  { name: "NCBA", logo: "assets/ncba.png", url: "https://ncbagroup.com/" },
  { name: "Chuna DT Sacco Ltd", logo: "assets/chuna.png", url: "https://chunasacco.co.ke/" },
  { name: "Institute of Pension Management", logo: "assets/pension.jpg", url: "https://ipm.ac.ke/" },
  { name: "Nafasi Sacco", logo: "assets/nafasi.png", url: "https://nafasisacco.com/" },
  { name: "Ukoaji Sacco", logo: "assets/uokoaji.jpg", url: "https://ukoajisacco.com/" },
  { name: "Utabibu", logo: "assets/utabibu.png", url: "https://utabibusacco.com/" },
  { name: "KMA Sacco", logo: "assets/kms.png", url: "https://kmasacco.com/" },
  { name: "Pivot Assets", logo: "assets/pivot.png", url: "https://pivotassets.co.ke/" },
  { name: "Finnet", logo: "assets/Finnet.png", url: "https://www.finnet.co.ke/" },
  { name: "Sentinel Africa", logo: "assets/sa.png", url: "https://sentinelafrica.com/" }
];


  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden font-inter">
      <style>
        {`
        /* Import Inter font from Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .font-inter {
            font-family: 'Inter', sans-serif;
        }

        .bg-neon-blue { background-color: #00F0FF; } /* A bright cyan-blue */
        .bg-neon-green { background-color: #39FF14; } /* A bright lime-green */
        .text-neon-blue { color: #00F0FF; }
        .text-neon-green { color: #39FF14; }

     
        .bg-cyber-grid {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 40px 40px;
            animation: grid-pan 60s linear infinite;
        }

        @keyframes grid-pan {
            0% { background-position: 0 0; }
            100% { background-position: -400px -400px; }
        }

       
        .glass-morphism {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
        }

        
        .cyber-text {
            background: linear-gradient(90deg, #00F0FF, #39FF14);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }

        

        .cyber-glow {
            animation: cyber-glow-animation 4s ease-in-out infinite alternate;
        }

        /* Floating blur animation for background elements */
        @keyframes float-blur {
            0%, 100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.05;
            }
            33% {
                transform: translate(20px, 15px) scale(1.05);
                opacity: 0.1;
            }
            66% {
                transform: translate(-15px, -20px) scale(0.98);
                opacity: 0.07;
            }
        }

        .animate-float-blur {
            animation: float-blur 25s ease-in-out infinite alternate;
        }

        /* Fade in and slide up animation for content */
        @keyframes fade-in-slide-up {
            0% {
                opacity: 0;
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-fade-in-slide-up {
            animation: fade-in-slide-up 0.8s ease-out forwards;
        }

        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1100 { animation-delay: 1.1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1300 { animation-delay: 1.3s; }
        .delay-1400 { animation-delay: 1.4s; }
        .delay-1500 { animation-delay: 1.5s; }
        `}
      </style>

      
      <div className="absolute inset-0">
        
        <div className="absolute inset-0 bg-cyber-grid opacity-5"></div>
     
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-float-blur delay-200"></div>
        <div className="absolute bottom-0 right-1/2 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl animate-float-blur delay-700"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-blue/3 rounded-full blur-3xl animate-float-blur delay-1200"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-green/3 rounded-full blur-3xl animate-float-blur delay-1700"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="cyber-text">Our Trusted Clients</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-green mx-auto rounded-full"></div>
            <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">
              Trusted by leading organizations across various industries to secure their digital infrastructure.
            </p>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className={`glass-morphism rounded-xl p-6 h-24 flex items-center justify-center text-center group hover:scale-105 transition-all duration-500 cyber-glow animate-fade-in-slide-up delay-${100 + index * 50}`}
                // Removed inline style animationDelay as it's now handled by the className
              >
                <div className="relative">
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="h-12 mx-auto mb-2 object-contain"
                    // Fallback image in case the main logo fails to load
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/100x48/334155/F8FAFC?text=${client.name.split(' ').map(n => n[0]).join('')}`; }}
                  />
                  <div className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors duration-300">
                    {client.name}
                  </div>
                  {/* Simulated logo placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-green/20 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Testimonial Style Section */}
          <div className="mt-16 animate-fade-in-slide-up delay-1000">
            <div className="glass-morphism rounded-3xl p-8 max-w-4xl mx-auto cyber-glow">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Join Our Growing Family</h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  From startups to enterprise organizations, we've helped businesses across Kenya and beyond 
                  achieve their cybersecurity goals. Our clients trust us to protect their most valuable digital assets.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold cyber-text mb-2">50+</div>
                    <div className="text-slate-400">Organizations Protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold cyber-text mb-2">100%</div>
                    <div className="text-slate-400">Client Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold cyber-text mb-2">15+</div>
                    <div className="text-slate-400">Industries Served</div>
                  </div>
                </div>

                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-8 bg-gradient-to-r from-neon-blue to-neon-green text-slate-950 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/30"
                >
                  Become Our Next Success Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
