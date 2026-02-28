import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Briefcase, 
  ClipboardCheck, 
  Compass, 
  LogOut,
  GraduationCap
} from 'lucide-react';
import { cn } from '../lib/utils';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'mentor', label: 'AI Mentor', icon: MessageSquare },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'test', label: 'Skill Test', icon: ClipboardCheck },
    { id: 'career', label: 'Career Guidance', icon: Compass },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-slate-200 flex flex-col sticky top-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <GraduationCap size={24} />
        </div>
        <h1 className="text-xl font-display font-bold text-slate-900 tracking-tight">SkillSphere</h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as View)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              currentView === item.id 
                ? "bg-primary text-white shadow-md shadow-primary/20" 
                : "text-slate-600 hover:bg-slate-50 hover:text-primary"
            )}
          >
            <item.icon size={20} className={cn(
              "transition-colors",
              currentView === item.id ? "text-white" : "text-slate-400 group-hover:text-primary"
            )} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 mt-auto">
        <div className="bg-slate-50 rounded-2xl p-4 mb-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Pro Plan</p>
          <p className="text-sm text-slate-700 font-medium mb-3">Unlock all advanced skill tests & projects.</p>
          <button className="w-full py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
            Upgrade Now
          </button>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-500 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
