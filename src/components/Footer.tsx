
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {/* <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors p-2">
              <Github size={24} />
            </a> */}
            <a href="https://www.linkedin.com/in/vishwaa-vs-a11b15190/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors p-2">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vishwaa.vishwaa2@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors p-2">
              <Mail size={24} />
            </a>
          </div>
          
          <div className="text-slate-400 text-sm flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> by Vishwaa V S © 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
