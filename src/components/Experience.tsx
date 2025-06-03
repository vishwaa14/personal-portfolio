import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Sword, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Chargebee",
      period: "April 2024 - Present",
      level: "80-85",
      description: "Leading epic raids on high-volume billing platforms and AWS infrastructure. Mastering complex integration spells with CRM and billing systems while crafting automation workflows.",
      technologies: ["Node.js", "AWS", "React.js", "Spring Boot", "Docker", "Next.js", "Workato", "Java"],
      achievements: [
        "🏆 Developed custom invoice logic and subscription handling using AWS",
        "⚡ Built scalable, production-grade systems for eCommerce checkout and payment experiences",
        "🎯 Integrated Hubspot CRM and billing systems for end-to-end deal-to-subscription automation",
        "🚀 Built and deployed advanced automation workflows to streamline invoicing and subscription operations",
        "💎 Contributed to Tax Adapter Service and 3DS enablement for payment Gateways"
      ],
      icon: Trophy,
      color: "from-yellow-400 to-orange-500",
      xpGained: "35,000 XP"
    },
    {
      title: "Associate Software Engineer",
      company: "Chargebee",
      period: "August 2022 - April 2024",
      level: "50-79",
      description: "Conquered data extraction dungeons and enhanced system reliability. Specialized in Stripe pipeline optimization and custom migration script crafting for large-scale financial data processing.",
      technologies: ["Stripe API", "Node.js", "Database Migration", "React.js", "Data Processing", "Java"],
      achievements: [
        "🛡️ Improved Stripe extraction pipeline reliability",
        "🚀 Enhanced CB Bulk Import tool with API functionality",
        "✨ Implemented custom checkout setup flows",
        "💎 Performed targeted database-level interventions",
        "🎯 Fixed critical bugs and improved system performance"
      ],
      icon: Sword,
      color: "from-purple-400 to-pink-500",
      xpGained: "25,000 XP"
    },
    {
      title: "Associate Software Engineer Intern",
      company: "Chargebee",
      period: "February 2022 - August 2022",
      level: "1-49",
      description: "Started the coding adventure by contributing to backend system stabilization and merchant platform upgrades. Learned the ancient arts of configuration management and system maintenance.",
      technologies: ["Backend Development", "Platform Upgrades", "Configuration Management"],
      achievements: [
        "✨ Contributed to bulk operations system development",
        "🎨 Upgraded merchant websites to newer platform version",
        "📈 Replaced environment toggles with Site Settings",
        "🏆 Enhanced functionality and maintainability"
      ],
      icon: Zap,
      color: "from-blue-400 to-cyan-500",
      xpGained: "15,000 XP"
    }
  ];

  const education = {
    degree: "B.Tech in Information Technology",
    institution: "Sri Venkateswara College of Engineering",
    location: "Chennai",
    year: "2022",
    grade: "8.846 CGPA",
    icon: Shield,
    color: "from-emerald-400 to-teal-500"
  };

  const awards = [
    {
      title: "Trailblazer Award",
      company: "Chargebee",
      description: "Recognized for precision and grace in execution, demonstrating outstanding teamwork and dedication while delivering exceptional project results.",
      icon: "👑",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const getTotalXP = () => {
    return experiences.reduce((total, exp) => {
      return total + parseInt(exp.xpGained.replace(/[^\d]/g, ''));
    }, 0);
  };

  const timelineVariants = {
    hidden: { 
      height: 0,
      opacity: 0
    },
    visible: {
      height: "100%",
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const timelineItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.8
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.3,
        ease: "easeOut"
      }
    })
  };

  const timelineDotVariants = {
    hidden: { 
      scale: 0,
      rotate: -180,
      x: -30
    },
    visible: (index: number) => ({
      scale: 1,
      rotate: 0,
      x: -30,
      transition: {
        duration: 0.5,
        delay: index * 0.3,
        type: "spring",
        stiffness: 200
      }
    })
  };

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.8 + index * 0.1
      }
    })
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ⚔️ Adventure Log
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
            Epic career journey and legendary achievements across the coding realms
          </p>

          {/* Career Stats */}
          <motion.div 
            className="flex justify-center gap-2 md:gap-4 mt-8 flex-wrap"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-3 md:px-4 py-2"
              whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
            >
              <div className="text-cyan-400 font-bold text-xs md:text-sm">Total Career XP</div>
              <div className="text-lg md:text-xl font-bold text-white">{getTotalXP().toLocaleString()}</div>
            </motion.div>
            <motion.div 
              className="bg-black/30 backdrop-blur-sm border border-purple-400/30 rounded-lg px-3 md:px-4 py-2"
              whileHover={{ scale: 1.05, borderColor: "#a855f7" }}
            >
              <div className="text-purple-400 font-bold text-xs md:text-sm">Years Active</div>
              <div className="text-lg md:text-xl font-bold text-white">3+</div>
            </motion.div>
            <motion.div 
              className="bg-black/30 backdrop-blur-sm border border-green-400/30 rounded-lg px-3 md:px-4 py-2"
              whileHover={{ scale: 1.05, borderColor: "#22c55e" }}
            >
              <div className="text-green-400 font-bold text-xs md:text-sm">Companies Served</div>
              <div className="text-lg md:text-xl font-bold text-white">1</div>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated Timeline line - hidden on mobile, visible on md+ */}
            <motion.div 
              className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 hidden md:block"
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            />
            
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className={`relative flex items-center mb-8 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                custom={index}
                variants={timelineItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Timeline dot - positioned for mobile and desktop */}
                <motion.div 
                  className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-slate-800 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center"
                  custom={index}
                  variants={timelineDotVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(6, 182, 212, 0.6)"
                  }}
                >
                  <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center`}>
                    <exp.icon className="text-white" size={16} />
                  </div>
                </motion.div>
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-16 md:pl-0`}>
                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 backdrop-blur-sm">
                      <CardContent className="p-4 md:p-6">
                        {/* Level and XP */}
                        <div className="flex justify-between items-center mb-3">
                          <Badge className={`bg-gradient-to-r ${exp.color} text-white border-0 text-xs md:text-sm`}>
                            Level {exp.level}
                          </Badge>
                          <motion.div 
                            className="text-right"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + index * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <div className="text-green-400 font-bold text-xs md:text-sm">+{exp.xpGained}</div>
                            <div className="text-xs text-slate-400">Experience Gained</div>
                          </motion.div>
                        </div>
                        
                        <div className="text-xs md:text-sm text-cyan-400 font-semibold mb-2">{exp.period}</div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="text-purple-300 font-medium mb-4 text-sm md:text-base">{exp.company}</div>
                        <p className="text-slate-300 mb-4 leading-relaxed text-sm md:text-base">{exp.description}</p>
                        
                        {/* Animated Achievements */}
                        <div className="mb-4">
                          <h4 className="text-white font-semibold mb-2 text-xs md:text-sm">🏆 Key Achievements:</h4>
                          <div className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <motion.div 
                                key={achIndex} 
                                className="text-xs md:text-sm text-slate-300 flex items-start gap-2"
                                custom={achIndex}
                                variants={achievementVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                              >
                                <div className="w-1 h-1 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="leading-relaxed">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Technologies */}
                        <motion.div 
                          className="flex flex-wrap gap-1 md:gap-2"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.div
                              key={techIndex}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: 1.3 + techIndex * 0.05, duration: 0.2 }}
                              viewport={{ once: true }}
                              whileHover={{ scale: 1.1 }}
                            >
                              <Badge 
                                variant="outline" 
                                className="border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors text-xs"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Education Timeline Item */}
            <motion.div 
              className="relative flex items-center mb-8 md:mb-12 md:flex-row-reverse"
              variants={timelineItemVariants}
              custom={experiences.length}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div 
                className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 md:w-16 md:h-16 bg-slate-800 rounded-full border-4 border-white shadow-lg z-10 flex items-center justify-center"
                custom={experiences.length}
                variants={timelineDotVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 25px rgba(16, 185, 129, 0.6)"
                }}
              >
                <div className={`w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r ${education.color} rounded-full flex items-center justify-center`}>
                  <education.icon className="text-white" size={16} />
                </div>
              </motion.div>
              
              <div className="w-full md:w-1/2 pl-16 md:pl-0 md:pl-12">
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 backdrop-blur-sm">
                    <CardContent className="p-4 md:p-6">
                      <div className="flex justify-between items-center mb-3">
                        <Badge className={`bg-gradient-to-r ${education.color} text-white border-0 text-xs md:text-sm`}>
                          🎓 Education
                        </Badge>
                        <motion.div 
                          className="text-right"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.5, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-green-400 font-bold text-xs md:text-sm">{education.grade}</div>
                          <div className="text-xs text-slate-400">Final Score</div>
                        </motion.div>
                      </div>
                      
                      <div className="text-xs md:text-sm text-cyan-400 font-semibold mb-2">{education.year}</div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">{education.degree}</h3>
                      <div className="text-purple-300 font-medium mb-4 text-sm md:text-base">{education.institution} • {education.location}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Recognition & Awards */}
        <motion.div 
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-8">🎖️ Recognition & Awards</h3>
          <div className="max-w-2xl mx-auto">
            {awards.map((award, index) => (
              <motion.div 
                key={index} 
                className={`bg-gradient-to-r ${award.color}/10 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4 md:p-6 mb-4`}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(234, 179, 8, 0.2)"
                }}
              >
                <div className="flex items-center justify-center gap-4 mb-3">
                  <motion.span 
                    className="text-3xl md:text-4xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: index * 0.5 }}
                  >
                    {award.icon}
                  </motion.span>
                  <div className="text-center">
                    <div className="text-yellow-400 font-bold text-lg md:text-xl">{award.title}</div>
                    <div className="text-xs md:text-sm text-purple-300">{award.company}</div>
                  </div>
                </div>
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
