
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, Zap, Shield, Sword } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Magic",
      skills: [
        { name: "React.js", level: 90, xp: "8,500 XP" },
        { name: "Next.js", level: 85, xp: "7,200 XP" },
        { name: "JavaScript", level: 88, xp: "7,800 XP" },
        { name: "Tailwind CSS", level: 82, xp: "6,900 XP" }
      ],
      color: "from-cyan-500 to-blue-500",
      icon: Gamepad2,
      emoji: "🎮",
      class: "Frontend Mage"
    },
    {
      title: "Backend Warfare",
      skills: [
        { name: "Node.js", level: 88, xp: "7,650 XP" },
        { name: "Java", level: 85, xp: "7,100 XP" },
        { name: "Spring Boot", level: 80, xp: "6,200 XP" },
        { name: "Salesforce Apex", level: 75, xp: "5,400 XP" },
        { name: "PostgreSQL", level: 78, xp: "5,950 XP" },
        { name: "MySQL", level: 76, xp: "5,600 XP" }
      ],
      color: "from-purple-500 to-indigo-500",
      icon: Sword,
      emoji: "⚔️",
      class: "Backend Warrior"
    },
    {
      title: "Cloud Arsenal",
      skills: [
        { name: "AWS", level: 85, xp: "7,300 XP" },
        { name: "Docker", level: 82, xp: "6,800 XP" },
        { name: "Serverless Framework", level: 78, xp: "5,900 XP" },
        { name: "Zoho Catalyst", level: 80, xp: "6,200 XP" },
        { name: "Git", level: 90, xp: "8,200 XP" }
      ],
      color: "from-emerald-500 to-teal-500",
      icon: Shield,
      emoji: "🛡️",
      class: "Cloud Paladin"
    },
    {
      title: "Integration Spells",
      skills: [
        { name: "Workato", level: 88, xp: "7,900 XP" },
        { name: "Zoho Flow", level: 85, xp: "7,200 XP" },
        { name: "HubSpot Workflows", level: 80, xp: "6,300 XP" },
        { name: "REST APIs", level: 90, xp: "8,400 XP" },
        { name: "Microsoft Graph API", level: 75, xp: "5,500 XP" },
        { name: "Axios", level: 85, xp: "7,100 XP" }
      ],
      color: "from-pink-500 to-violet-500",
      icon: Zap,
      emoji: "✨",
      class: "Integration Wizard"
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "from-yellow-400 to-orange-500"; // Legendary
    if (level >= 80) return "from-purple-400 to-pink-500"; // Epic
    if (level >= 75) return "from-blue-400 to-cyan-500"; // Rare
    return "from-green-400 to-emerald-500"; // Common
  };

  const getSkillRank = (level: number) => {
    if (level >= 85) return "Legendary";
    if (level >= 80) return "Epic";
    if (level >= 75) return "Rare";
    return "Common";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
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
              ⚡ Skill Tree
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Abilities unlocked through epic coding adventures and boss battles
          </p>
          
          {/* Player Stats */}
          <motion.div 
            className="flex justify-center gap-4 mt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-4 py-2"
              whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
            >
              <div className="text-cyan-400 font-bold">Total XP</div>
              <div className="text-2xl font-bold text-white">98,500</div>
            </motion.div>
            <motion.div 
              className="bg-black/30 backdrop-blur-sm border border-purple-400/30 rounded-lg px-4 py-2"
              whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
            >
              <div className="text-purple-400 font-bold">Skills Mastered</div>
              <div className="text-2xl font-bold text-white">21</div>
            </motion.div>
            <motion.div 
              className="bg-black/30 backdrop-blur-sm border border-green-400/30 rounded-lg px-4 py-2"
              whileHover={{ scale: 1.05, borderColor: "#22c55e" }}
            >
              <div className="text-green-400 font-bold">Class Level</div>
              <div className="text-2xl font-bold text-white">85</div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm group relative overflow-hidden">
                {/* Class badge */}
                <motion.div 
                  className="absolute top-3 right-3 z-10"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Badge className={`bg-gradient-to-r ${category.color} text-white border-0 text-xs`}>
                    {category.class}
                  </Badge>
                </motion.div>
                
                <CardContent className="p-6">
                  <motion.div 
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mb-4 flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <category.icon className="text-white relative z-10" size={24} />
                    <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <motion.span 
                      className="text-xl"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
                    >
                      {category.emoji}
                    </motion.span>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/50"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + skillIndex * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: "rgba(51, 65, 85, 0.6)",
                          borderColor: "#06b6d4"
                        }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-cyan-200">{skill.name}</span>
                          <Badge 
                            variant="secondary" 
                            className={`bg-gradient-to-r ${getSkillColor(skill.level)} text-white border-0 text-xs`}
                          >
                            {getSkillRank(skill.level)}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-slate-400">Level {skill.level}</span>
                          <span className="text-xs text-green-400">{skill.xp}</span>
                        </div>
                        <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                          <motion.div 
                            className={`h-2 rounded-full bg-gradient-to-r ${getSkillColor(skill.level)}`}
                            variants={skillBarVariants}
                            custom={skill.level}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">🏆 Recent Achievements</h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-lg px-4 py-2 flex items-center gap-2"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-2xl">🎯</span>
              <div className="text-left">
                <div className="text-yellow-400 font-bold text-sm">Integration Master</div>
                <div className="text-xs text-slate-300">Complex automation workflows</div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-lg px-4 py-2 flex items-center gap-2"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-2xl">🚀</span>
              <div className="text-left">
                <div className="text-purple-400 font-bold text-sm">Cloud Warrior</div>
                <div className="text-xs text-slate-300">AWS & serverless expertise</div>
              </div>
            </motion.div>
            <motion.div 
              className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-lg px-4 py-2 flex items-center gap-2"
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-2xl">🐛</span>
              <div className="text-left">
                <div className="text-green-400 font-bold text-sm">Bug Hunter</div>
                <div className="text-xs text-slate-300">System reliability expert</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
