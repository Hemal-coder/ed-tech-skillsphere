import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  ExternalLink, 
  Github, 
  Star, 
  Clock, 
  BarChart3,
  Code2
} from 'lucide-react';
import { Project } from '../types';
import { cn } from '../lib/utils';

const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern E-commerce Dashboard',
    description: 'Build a fully responsive e-commerce dashboard with real-time data visualization and inventory management.',
    difficulty: 'Intermediate',
    category: 'Frontend',
    image: 'https://picsum.photos/seed/dashboard/800/600'
  },
  {
    id: '2',
    title: 'AI Chat Application',
    description: 'Integrate Gemini API to create a smart chatbot with context awareness and markdown support.',
    difficulty: 'Advanced',
    category: 'Fullstack',
    image: 'https://picsum.photos/seed/ai-chat/800/600'
  },
  {
    id: '3',
    title: 'Weather Forecast App',
    description: 'Use OpenWeather API to fetch and display weather data with dynamic background themes based on conditions.',
    difficulty: 'Beginner',
    category: 'Frontend',
    image: 'https://picsum.photos/seed/weather/800/600'
  },
  {
    id: '4',
    title: 'Task Management System',
    description: 'Create a drag-and-drop task board with user authentication and persistent storage using SQLite.',
    difficulty: 'Intermediate',
    category: 'Fullstack',
    image: 'https://picsum.photos/seed/tasks/800/600'
  },
  {
    id: '5',
    title: 'Portfolio Website Template',
    description: 'A clean, professional portfolio template with smooth scroll animations and contact form integration.',
    difficulty: 'Beginner',
    category: 'Design',
    image: 'https://picsum.photos/seed/portfolio/800/600'
  },
  {
    id: '6',
    title: 'Crypto Tracker Pro',
    description: 'Real-time cryptocurrency price tracker with interactive charts and price alert notifications.',
    difficulty: 'Advanced',
    category: 'Frontend',
    image: 'https://picsum.photos/seed/crypto/800/600'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Frontend', 'Fullstack', 'Design', 'Backend'];

  const filteredProjects = MOCK_PROJECTS.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || 
                         p.description.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Hands-on Projects</h2>
          <p className="text-slate-500 mt-1">Apply your skills to real-world scenarios and build your portfolio.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 transition-all w-full md:w-64"
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-primary transition-colors">
            <Filter size={20} />
          </button>
        </div>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all",
              filter === cat 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "bg-white text-slate-600 border border-slate-200 hover:border-primary/30 hover:text-primary"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className={cn(
                  "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm",
                  project.difficulty === 'Beginner' ? "bg-emerald-500 text-white" :
                  project.difficulty === 'Intermediate' ? "bg-amber-500 text-white" :
                  "bg-rose-500 text-white"
                )}>
                  {project.difficulty}
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div className="flex gap-3">
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/40 transition-colors">
                    <Github size={18} />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/40 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-primary">
                  <Code2 size={16} />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{project.category}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
              
              <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span className="text-xs font-medium">12h</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BarChart3 size={14} />
                    <span className="text-xs font-medium">4.8/5</span>
                  </div>
                </div>
                <button className="text-primary font-bold text-sm flex items-center gap-1 group/btn">
                  View Details <Star size={14} className="group-hover/btn:fill-primary transition-all" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
