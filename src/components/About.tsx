
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, Trophy, Shield, Sword, Zap, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const gamepadVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      rotate: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  const floatingAnimation = {
    y: -5,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🎮 Character Profile
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Discover the player behind the code - stats, achievements, and progression
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-600/20 to-purple-600/20 p-8 mb-8 relative overflow-hidden border border-cyan-500/30">
              {/* Gaming HUD overlay */}
              <motion.div 
                className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-cyan-400/30"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-cyan-400 text-xs font-bold">PLAYER ID</div>
                <div className="text-white text-sm">#SE2022</div>
              </motion.div>
              
              <motion.div 
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-green-400/30"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="text-green-400 text-xs font-bold">STATUS</div>
                <div className="text-white text-sm flex items-center gap-1">
                  ONLINE
                </div>
              </motion.div>

              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <div className="relative">
                  <motion.div 
                    className="text-8xl"
                    variants={gamepadVariants}
                  >
                    🧙‍♂️
                  </motion.div>
                  {/* Character level ring */}
                  <motion.div 
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full border-2 border-white"
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    animate={floatingAnimation}
                  >
                    85
                  </motion.div>
                </div>
              </div>
              
              {/* Floating UI elements */}
              <motion.div 
                className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-2 border border-purple-400/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2">
                  <Trophy className="text-yellow-400" size={16} />
                  <span className="text-white text-xs">15 Achievements</span>
                </div>
              </motion.div>
              
              {/* Particle effects */}
              <motion.div 
                className="absolute top-8 right-8 w-2 h-2 bg-cyan-400 rounded-full opacity-60"
                animate={{ scale: [1, 1.2], opacity: [0.6, 1] }}
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              />
              <motion.div 
                className="absolute bottom-12 left-8 w-1 h-1 bg-purple-400 rounded-full opacity-80"
                animate={{ scale: [1, 1.5], opacity: [0.8, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.5, repeatType: "reverse" }}
              />
              <motion.div 
                className="absolute top-1/2 right-12 w-1.5 h-1.5 bg-green-400 rounded-full opacity-50"
                animate={{ scale: [1, 1.3], opacity: [0.5, 1] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1, repeatType: "reverse" }}
              />
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Gamepad2 className="text-cyan-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Player Biography</h3>
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                Elite Coder
              </Badge>
            </motion.div>
            
            <motion.div 
              className="space-y-4 mb-8"
              variants={containerVariants}
            >
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4"
                variants={itemVariants}
                whileHover={{ scale: 1.02, borderColor: "#06b6d4" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sword className="text-cyan-400" size={16} />
                  <span className="text-cyan-400 font-semibold text-sm">ORIGIN STORY</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Started the coding journey in 2022 as an intern, wielding the power of backend systems and bulk operations. 
                  Through epic quests and challenging boss battles, evolved into a full-stack warrior capable of conquering 
                  complex integration dungeons and cloud infrastructures.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-4"
                variants={itemVariants}
                whileHover={{ scale: 1.02, borderColor: "#a855f7" }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-purple-400" size={16} />
                  <span className="text-purple-400 font-semibold text-sm">SPECIAL ABILITIES</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Master of automation spells and integration magic. Known for crafting legendary billing systems, 
                  summoning AWS services, and creating seamless workflows that connect different realms of technology. 
                  Specializes in turning complex business logic into elegant, scalable solutions.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="text-cyan-600" size={20} />
                      <div className="text-2xl font-bold text-cyan-600">3+</div>
                    </div>
                    <div className="text-sm text-slate-600">Years Experience</div>
                    <div className="text-xs text-cyan-600">98,500 Total XP</div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="text-purple-600" size={20} />
                      <div className="text-2xl font-bold text-purple-600">25+</div>
                    </div>
                    <div className="text-sm text-slate-600">Quests Completed</div>
                    <div className="text-xs text-purple-600">Epic Projects</div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Achievement badges */}
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Trophy className="text-yellow-400" size={16} />
                Recent Achievements
              </h4>
              <div className="flex flex-wrap gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 text-yellow-300">
                    🏆 AWS Master
                  </Badge>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 text-green-300">
                    ⚡ Integration Wizard
                  </Badge>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 text-blue-300">
                    🛡️ System Guardian
                  </Badge>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
