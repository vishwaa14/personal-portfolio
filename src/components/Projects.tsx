
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Trophy, Star, Zap, Target } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Epic E-Commerce Quest",
      description: "A legendary marketplace where heroes can trade magical items and equipment. Features real-time inventory, guild systems, and epic payment processing.",
      icon: "🏪",
      iconComponent: Trophy,
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      theme: "from-cyan-500 to-blue-600",
      difficulty: "Legendary",
      xpReward: "2,500 XP",
      completionRate: 98,
      status: "Completed"
    },
    {
      title: "Task Management Dungeon",
      description: "A mystical realm for managing quests and party coordination. Complete with real-time collaboration spells and advanced analytics magic.",
      icon: "🗂️",
      iconComponent: Target,
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      theme: "from-purple-500 to-indigo-600",
      difficulty: "Epic",
      xpReward: "1,800 XP",
      completionRate: 95,
      status: "Completed"
    },
    {
      title: "Weather Crystal Ball",
      description: "A magical weather forecasting orb with beautiful atmospheric visualizations, historical climate scrolls, and customizable region widgets.",
      icon: "🔮",
      iconComponent: Star,
      technologies: ["React", "TypeScript", "API Integration", "Charts"],
      liveUrl: "#",
      githubUrl: "#",
      theme: "from-emerald-500 to-teal-600",
      difficulty: "Rare",
      xpReward: "1,200 XP",
      completionRate: 92,
      status: "Completed"
    },
    {
      title: "Portfolio Fortress",
      description: "A mighty stronghold showcasing heroic achievements, legendary projects, and mystical blog posts with enchanted animations.",
      icon: "🏰",
      iconComponent: Zap,
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
      liveUrl: "#",
      githubUrl: "#",
      theme: "from-pink-500 to-violet-600",
      difficulty: "Epic",
      xpReward: "2,100 XP",
      completionRate: 100,
      status: "Completed"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Legendary": return "from-yellow-400 to-orange-500";
      case "Epic": return "from-purple-400 to-pink-500";
      case "Rare": return "from-blue-400 to-cyan-500";
      default: return "from-green-400 to-emerald-500";
    }
  };

  const getDifficultyEmoji = (difficulty: string) => {
    switch (difficulty) {
      case "Legendary": return "👑";
      case "Epic": return "💎";
      case "Rare": return "💙";
      default: return "💚";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              🎮 Quest Log
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Epic adventures completed in the realm of code and creativity
          </p>

          {/* Stats Dashboard */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <div className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-4 py-2">
              <div className="text-cyan-400 font-bold text-sm">Quests Completed</div>
              <div className="text-xl font-bold text-white">25+</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-purple-400/30 rounded-lg px-4 py-2">
              <div className="text-purple-400 font-bold text-sm">Total XP Earned</div>
              <div className="text-xl font-bold text-white">47,500</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-green-400/30 rounded-lg px-4 py-2">
              <div className="text-green-400 font-bold text-sm">Success Rate</div>
              <div className="text-xl font-bold text-white">96%</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm group overflow-hidden relative">
              {/* Difficulty Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className={`bg-gradient-to-r ${getDifficultyColor(project.difficulty)} text-white border-0 text-xs`}>
                  {getDifficultyEmoji(project.difficulty)} {project.difficulty}
                </Badge>
              </div>

              {/* Status Indicator */}
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-1 bg-green-500/20 backdrop-blur-sm rounded-full px-2 py-1 border border-green-400/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-bold">{project.status}</span>
                </div>
              </div>

              <div className={`aspect-video bg-gradient-to-br ${project.theme}/20 flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                <span className="text-6xl relative z-10">{project.icon}</span>
                <project.iconComponent className={`absolute bottom-4 right-4 text-white/60 group-hover:text-white transition-colors`} size={24} />
                
                {/* Floating XP particles */}
                <div className="absolute top-2 left-8 text-yellow-400 text-xs font-bold opacity-60 animate-pulse">
                  +{project.xpReward}
                </div>
                <div className="absolute bottom-2 right-8 w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-40 animate-pulse delay-500"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                  <div className="text-right">
                    <div className="text-xs text-yellow-400 font-bold">{project.xpReward}</div>
                    <div className="text-xs text-slate-400">Reward</div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                {/* Completion Progress */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-400">Completion Rate</span>
                    <span className="text-xs text-green-400 font-bold">{project.completionRate}%</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-300"
                      style={{ width: `${project.completionRate}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-slate-700/50 text-cyan-200 border-slate-600 hover:bg-slate-600/50 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button size="sm" className={`bg-gradient-to-r ${project.theme} hover:opacity-90 text-white relative overflow-hidden group/btn`}>
                    <span className="relative z-10 flex items-center gap-2">
                      <ExternalLink size={16} />
                      Launch Quest
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </Button>
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white">
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Showcase */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">🏅 Project Achievements</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-4 flex items-center gap-3">
              <div className="text-3xl">🏆</div>
              <div className="text-left">
                <div className="text-yellow-400 font-bold">Perfect Score</div>
                <div className="text-xs text-slate-300">100% completion rate</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 flex items-center gap-3">
              <div className="text-3xl">⚡</div>
              <div className="text-left">
                <div className="text-purple-400 font-bold">Speed Runner</div>
                <div className="text-xs text-slate-300">Delivered ahead of schedule</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 flex items-center gap-3">
              <div className="text-3xl">💎</div>
              <div className="text-left">
                <div className="text-blue-400 font-bold">Quality Master</div>
                <div className="text-xs text-slate-300">Zero critical bugs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
