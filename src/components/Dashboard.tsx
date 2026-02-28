import React from 'react';
import { 
  Trophy, 
  Clock, 
  BookOpen, 
  ArrowRight,
  TrendingUp,
  Star,
  MessageSquare
} from 'lucide-react';
import { View } from '../types';

interface DashboardProps {
  onNavigate: (view: View) => void;
}

export default function Dashboard({ onNavigate }: DashboardProps) {
  const stats = [
    { label: 'Courses Completed', value: '12', icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Skill Points', value: '2,450', icon: Star, color: 'bg-amber-500' },
    { label: 'Hours Learned', value: '48h', icon: Clock, color: 'bg-emerald-500' },
    { label: 'Rank', value: '#124', icon: Trophy, color: 'bg-purple-500' },
  ];

  const recentProjects = [
    { title: 'E-commerce UI Kit', category: 'Design', progress: 75 },
    { title: 'Weather App API', category: 'Development', progress: 40 },
    { title: 'Portfolio Website', category: 'Development', progress: 100 },
  ];

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-display font-bold text-slate-900">Welcome back, Alex! 👋</h2>
          <p className="text-slate-500 mt-1">You're on a 5-day learning streak. Keep it up!</p>
        </div>
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <img 
              key={i}
              src={`https://picsum.photos/seed/user${i}/100/100`}
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
              alt="User"
              referrerPolicy="no-referrer"
            />
          ))}
          <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">
            +12
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-current/20`}>
              <stat.icon size={24} />
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-display font-bold text-slate-900 mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Ready to level up?</h3>
              <p className="text-slate-600 mb-6 max-w-md">Our AI Mentor has analyzed your recent activity and suggests taking the "Advanced React Patterns" skill test.</p>
              <button 
                onClick={() => onNavigate('test')}
                className="px-6 py-3 bg-primary text-white rounded-xl font-semibold flex items-center gap-2 hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Start Skill Test <ArrowRight size={18} />
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute right-10 top-10 opacity-10">
              <TrendingUp size={120} />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-display font-bold text-slate-900">Recent Projects</h3>
              <button 
                onClick={() => onNavigate('projects')}
                className="text-primary font-semibold text-sm hover:underline"
              >
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recentProjects.map((project, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary">
                    <BookOpen size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900">{project.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-bold text-slate-500">{project.progress}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
            <h3 className="text-xl font-display font-bold mb-4">AI Career Path</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Based on your interest in Frontend Development and UI Design, we've mapped out a path to becoming a Senior Product Engineer.
            </p>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Master React & Next.js', status: 'In Progress' },
                { step: '02', title: 'Advanced Animation (Motion)', status: 'Locked' },
                { step: '03', title: 'System Design Patterns', status: 'Locked' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-xs font-bold group-hover:border-primary group-hover:text-primary transition-colors">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
            <button 
              onClick={() => onNavigate('career')}
              className="w-full mt-8 py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors"
            >
              View Full Roadmap
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-display font-bold text-slate-900 mb-4">Skill Mentor</h3>
            <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                <MessageSquare size={16} />
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                "Hi Alex! I noticed you're doing great with CSS. Want to try a project using Tailwind CSS today?"
              </p>
            </div>
            <button 
              onClick={() => onNavigate('mentor')}
              className="w-full py-2 text-primary font-bold text-sm hover:bg-primary/5 rounded-lg transition-colors"
            >
              Chat with Mentor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
