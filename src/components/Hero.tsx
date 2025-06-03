import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Gamepad2, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openResume = () => {
    // Replace this URL with your actual resume link
    window.open('https://drive.google.com/file/d/1T5J-ffecAfoTmSzA-XLVv0Uze1n7vNZu/view?usp=sharing', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-green-300 rounded-full opacity-70 animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-pink-300 rounded-full opacity-50 animate-pulse delay-700"></div>
        <div className="absolute bottom-60 left-1/2 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse delay-300"></div>
        <div className="absolute top-32 right-1/2 w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-60 animate-pulse delay-1200"></div>
      </div>
      
      {/* Game UI Overlay */}
      <div className="absolute top-4 left-4 text-white">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30">
          <div className="flex items-center gap-2 mb-1">
            <Gamepad2 className="text-cyan-400 animate-pulse" size={16} />
            <span className="text-xs font-bold animate-pulse">PLAYER</span>
          </div>
          <div className="text-xl font-bold text-cyan-400 animate-pulse">Level 85</div>
          <div className="text-xs text-green-400 animate-pulse">Software Engineer</div>
        </div>
      </div>

      {/* Health/Mana Bars */}
      <div className="absolute top-4 right-4 text-white">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/30 hover:border-cyan-400/60 transition-colors">
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs">Skills</span>
            </div>
            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-500 to-red-400 w-4/5 animate-pulse"></div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs">Experience</span>
            </div>
            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 w-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            {/* Game Character Avatar with Level Ring */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-6">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 p-1 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <Gamepad2 className="text-cyan-400 w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12" />
                </div>
              </div>
              {/* Level indicator */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full border-2 border-white">
                85
              </div>
              {/* Achievement badges */}
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 bg-gradient-to-r from-green-400 to-emerald-500 p-1 rounded-full">
                <Trophy className="text-white w-3 h-3 sm:w-4 sm:h-4" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Vishwaa V S
            </span>
          </h1>

          <div className="flex justify-center items-center gap-3 mb-6 flex-wrap">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-4 py-2 hover:border-purple-400/60 hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="text-purple-300 font-semibold">🎮 Software Engineer</span>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-3 py-2 hover:border-green-400/60 hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="text-green-300 font-semibold">⚡ 3+ Years XP</span>
            </div>
          </div>
          
          <p className="text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            🎯 <strong>Quest:</strong> Building scalable backend systems and crafting seamless integrations. 
            Specializing in full-stack development with cloud technologies and automation platforms. Ready to join your party!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('about')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 shadow-lg shadow-cyan-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                🚀 Start Quest
                <Zap className="group-hover:animate-pulse" size={16} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={openResume}
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3"
            >
              📋 Character Sheet
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in mb-16">
            {/* <a href="https://github.com/vishwaa14" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 p-2 hover:scale-110 hover:rotate-12">
              <Github size={24} />
            </a> */}
            <a href="https://www.linkedin.com/in/vishwaa-vs-a11b15190/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 p-2 hover:scale-110 hover:rotate-12">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vishwaa.vishwaa2@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 p-2 hover:scale-110 hover:rotate-12">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="bg-black/30 backdrop-blur-sm rounded-full p-2 border border-cyan-400/30">
          <ArrowDown className="text-cyan-300" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
