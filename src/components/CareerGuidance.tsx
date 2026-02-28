import React, { useState } from 'react';
import { 
  Compass, 
  Sparkles, 
  Target, 
  Map, 
  ChevronRight, 
  Loader2,
  BrainCircuit,
  Rocket,
  Lightbulb
} from 'lucide-react';
import Markdown from 'react-markdown';
import { getCareerGuidance } from '../services/ai';
import { cn } from '../lib/utils';

export default function CareerGuidance() {
  const [profile, setProfile] = useState('');
  const [guidance, setGuidance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetGuidance = async () => {
    if (!profile.trim() || isLoading) return;
    setIsLoading(true);
    try {
      const result = await getCareerGuidance(profile);
      setGuidance(result || "I'm sorry, I couldn't generate guidance at this time.");
    } catch (error) {
      console.error("Career AI Error:", error);
      setGuidance("I encountered an error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderInput = () => (
    <div className="max-w-3xl mx-auto space-y-12 py-12">
      <header className="text-center space-y-4">
        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto shadow-xl shadow-primary/5">
          <Compass size={40} />
        </div>
        <h2 className="text-4xl font-display font-bold text-slate-900 tracking-tight">Personalized Career Roadmap</h2>
        <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
          Tell us about your interests, current skills, and dream job. Our AI will map out your path to success.
        </p>
      </header>

      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl space-y-8">
        <div className="space-y-4">
          <label className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Your Profile & Goals</label>
          <textarea 
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            placeholder="Example: I'm a college student interested in Frontend Development. I know basic HTML/CSS and want to become a Senior UI Engineer at a top tech company."
            className="w-full h-48 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-slate-800 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary/30 transition-all resize-none leading-relaxed"
          />
        </div>

        <button 
          onClick={handleGetGuidance}
          disabled={!profile.trim() || isLoading}
          className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={24} /> Generating Roadmap...
            </>
          ) : (
            <>
              <Sparkles size={24} /> Generate My Roadmap
            </>
          )}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          {[
            { icon: BrainCircuit, label: 'AI Analysis', desc: 'Deep dive into your skills' },
            { icon: Target, label: 'Goal Setting', desc: 'Clear milestones to reach' },
            { icon: Rocket, label: 'Fast Track', desc: 'Optimized learning path' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50/50 border border-slate-100">
              <item.icon size={24} className="text-primary mb-3" />
              <p className="text-sm font-bold text-slate-900 mb-1">{item.label}</p>
              <p className="text-[10px] text-slate-500 font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGuidance = () => (
    <div className="space-y-8 max-w-4xl mx-auto py-8">
      <div className="flex justify-between items-center">
        <button 
          onClick={() => setGuidance(null)}
          className="text-slate-400 hover:text-primary font-bold text-sm flex items-center gap-2"
        >
          <ChevronRight className="rotate-180" size={16} /> Edit Profile
        </button>
        <button className="px-6 py-2 bg-white border border-slate-200 rounded-xl text-slate-600 font-bold text-sm hover:bg-slate-50 transition-colors shadow-sm">
          Download PDF
        </button>
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden">
        <div className="bg-slate-900 p-10 text-white flex items-center justify-between">
          <div className="space-y-2">
            <h3 className="text-3xl font-display font-bold">Your Success Roadmap</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">AI Generated • Personalized for you</span>
            </div>
          </div>
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Map size={32} />
          </div>
        </div>
        
        <div className="p-12">
          <div className="markdown-body prose-lg prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-strong:text-slate-900">
            <Markdown>{guidance || ''}</Markdown>
          </div>
        </div>

        <div className="p-10 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
              <Lightbulb size={24} />
            </div>
            <div>
              <p className="font-bold text-slate-900">Next Step Suggested</p>
              <p className="text-sm text-slate-500">Start the "React Fundamentals" skill test to validate your current knowledge.</p>
            </div>
          </div>
          <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 flex items-center gap-2">
            Start Learning <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );

  return guidance ? renderGuidance() : renderInput();
}
