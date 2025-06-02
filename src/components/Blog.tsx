
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Scroll, Zap, Trophy } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Mastering AWS Lambda: The Serverless Warrior's Guide",
      excerpt: "Dive into the mystical realm of serverless architecture. Learn advanced Lambda patterns, cold start optimization, and how to build scalable microservices that automatically adapt to your quest's demands.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AWS",
      difficulty: "Epic",
      xpReward: "500 XP",
      featured: true,
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Integration Spellbook: Workato Automation Mastery",
      excerpt: "Unlock the secrets of complex integration workflows. Master the art of data transformation, error handling, and building robust automation recipes that connect multiple realms seamlessly.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Integration",
      difficulty: "Legendary",
      xpReward: "750 XP",
      featured: false,
      icon: "🔮",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Docker Containerization: Building Your Digital Fortress",
      excerpt: "Learn the ancient art of containerization. Discover how to package your applications into portable containers, orchestrate them with Docker Compose, and deploy them across multiple environments.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "DevOps",
      difficulty: "Rare",
      xpReward: "400 XP",
      featured: false,
      icon: "🏰",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "React Hooks Mastery: Advanced Component Alchemy",
      excerpt: "Transform your React components with advanced hook patterns. Explore custom hooks, performance optimization techniques, and state management strategies for complex user interfaces.",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "React",
      difficulty: "Epic",
      xpReward: "450 XP",
      featured: false,
      icon: "⚛️",
      color: "from-cyan-500 to-blue-500"
    }
  ];

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
              📚 Knowledge Scrolls
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Ancient wisdom and modern techniques from epic coding adventures
          </p>

          {/* Blog Stats */}
          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <div className="bg-black/30 backdrop-blur-sm border border-cyan-400/30 rounded-lg px-4 py-2">
              <div className="text-cyan-400 font-bold text-sm">Scrolls Published</div>
              <div className="text-xl font-bold text-white">12+</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-purple-400/30 rounded-lg px-4 py-2">
              <div className="text-purple-400 font-bold text-sm">Knowledge XP</div>
              <div className="text-xl font-bold text-white">8,500</div>
            </div>
            <div className="bg-black/30 backdrop-blur-sm border border-green-400/30 rounded-lg px-4 py-2">
              <div className="text-green-400 font-bold text-sm">Readers Helped</div>
              <div className="text-xl font-bold text-white">500+</div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className={`overflow-hidden hover:shadow-lg transition-all duration-300 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 backdrop-blur-sm ${post.featured ? 'border-l-4 border-l-purple-500' : ''} relative group`}>
              {/* Floating XP indicator */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-3 py-1">
                  <span className="text-green-400 text-xs font-bold">+{post.xpReward}</span>
                </div>
              </div>

              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge className={`bg-gradient-to-r ${post.color} text-white border-0`}>
                        {post.icon} {post.category}
                      </Badge>
                      <Badge className={`bg-gradient-to-r from-slate-600 to-slate-700 text-white border-0`}>
                        {getDifficultyEmoji(post.difficulty)} {post.difficulty}
                      </Badge>
                      {post.featured && (
                        <Badge variant="outline" className="border-orange-300 text-orange-400">
                          🌟 Featured
                        </Badge>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors cursor-pointer group-hover:text-cyan-300">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-cyan-400" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-purple-400" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-2">
                        <Trophy size={16} className="text-yellow-400" />
                        Earn {post.xpReward}
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white group/btn">
                      <Scroll size={16} className="mr-2" />
                      <span className="relative z-10">Read Scroll</span>
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                  
                  <div className={`md:w-48 md:h-32 bg-gradient-to-br ${post.color}/20 rounded-lg flex items-center justify-center border border-slate-600/30 relative overflow-hidden`}>
                    <span className="text-4xl relative z-10">{post.icon}</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    {/* Floating particles */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"></div>
                    <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-pulse delay-700"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 relative overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              <Zap size={20} />
              Explore All Scrolls
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
        </div>

        {/* Writing Stats Achievement */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">📖 Writing Achievements</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 flex items-center gap-3">
              <div className="text-3xl">📝</div>
              <div className="text-left">
                <div className="text-blue-400 font-bold">Knowledge Keeper</div>
                <div className="text-xs text-slate-300">Shared technical wisdom</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 flex items-center gap-3">
              <div className="text-3xl">🎯</div>
              <div className="text-left">
                <div className="text-purple-400 font-bold">Tutorial Master</div>
                <div className="text-xs text-slate-300">Clear learning paths</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 flex items-center gap-3">
              <div className="text-3xl">🌟</div>
              <div className="text-left">
                <div className="text-green-400 font-bold">Community Helper</div>
                <div className="text-xs text-slate-300">Helping fellow developers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
