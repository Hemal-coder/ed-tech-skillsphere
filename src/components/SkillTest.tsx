import React, { useState } from 'react';
import { 
  ClipboardCheck, 
  Clock, 
  HelpCircle, 
  Trophy, 
  ArrowRight, 
  CheckCircle2,
  AlertCircle,
  Play
} from 'lucide-react';
import { SkillTest as SkillTestType } from '../types';
import { cn } from '../lib/utils';

const MOCK_TESTS: SkillTestType[] = [
  { id: '1', title: 'React Fundamentals', questions: 20, duration: '30m', category: 'Frontend' },
  { id: '2', title: 'Advanced JavaScript', questions: 25, duration: '45m', category: 'Frontend' },
  { id: '3', title: 'UI/UX Principles', questions: 15, duration: '20m', category: 'Design' },
  { id: '4', title: 'Node.js & Express', questions: 20, duration: '35m', category: 'Backend' },
  { id: '5', title: 'Database Design', questions: 18, duration: '30m', category: 'Backend' },
  { id: '6', title: 'Python for Data Science', questions: 30, duration: '60m', category: 'Data Science' },
];

export default function SkillTest() {
  const [activeTest, setActiveTest] = useState<SkillTestType | null>(null);
  const [isStarted, setIsStarted] = useState(false);

  const renderTestList = () => (
    <div className="space-y-8">
      <header>
        <h2 className="text-3xl font-display font-bold text-slate-900 tracking-tight">Skill Assessments</h2>
        <p className="text-slate-500 mt-1">Validate your knowledge and earn badges for your profile.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_TESTS.map((test) => (
          <div key={test.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
              <ClipboardCheck size={24} />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{test.category}</span>
            </div>
            <h3 className="text-xl font-display font-bold text-slate-900 mb-4">{test.title}</h3>
            
            <div className="flex items-center gap-6 text-slate-500 text-sm mb-6">
              <div className="flex items-center gap-1.5">
                <HelpCircle size={16} />
                <span>{test.questions} Qs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={16} />
                <span>{test.duration}</span>
              </div>
            </div>

            <button 
              onClick={() => setActiveTest(test)}
              className="w-full py-3 bg-slate-50 text-slate-900 rounded-xl font-bold text-sm hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
            >
              Take Test <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Trophy className="text-amber-400" size={32} />
            <h3 className="text-2xl font-display font-bold">SkillSphere Leaderboard</h3>
          </div>
          <p className="text-slate-400 max-w-md">Compete with learners worldwide. Top 10% get exclusive access to premium projects and direct mentorship.</p>
        </div>
        <button className="px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
          View Leaderboard
        </button>
      </div>
    </div>
  );

  const renderTestIntro = () => (
    <div className="max-w-2xl mx-auto space-y-8 py-12">
      <button 
        onClick={() => setActiveTest(null)}
        className="text-slate-400 hover:text-primary font-bold text-sm flex items-center gap-2"
      >
        <ArrowRight className="rotate-180" size={16} /> Back to Assessments
      </button>

      <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl text-center space-y-8">
        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto">
          <ClipboardCheck size={40} />
        </div>
        
        <div>
          <h2 className="text-4xl font-display font-bold text-slate-900 mb-2">{activeTest?.title}</h2>
          <p className="text-slate-500">Assessment for {activeTest?.category} skills</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Questions</p>
            <p className="text-xl font-display font-bold text-slate-900">{activeTest?.questions}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Time Limit</p>
            <p className="text-xl font-display font-bold text-slate-900">{activeTest?.duration}</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Passing Score</p>
            <p className="text-xl font-display font-bold text-slate-900">80%</p>
          </div>
        </div>

        <div className="space-y-4 text-left bg-amber-50 p-6 rounded-2xl border border-amber-100">
          <div className="flex items-center gap-2 text-amber-700 font-bold mb-2">
            <AlertCircle size={18} />
            <span>Important Instructions</span>
          </div>
          <ul className="space-y-2 text-sm text-amber-800/80">
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-1 shrink-0" />
              <span>You cannot pause the test once it starts.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-1 shrink-0" />
              <span>Switching tabs or minimizing the window will auto-submit the test.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 size={14} className="mt-1 shrink-0" />
              <span>Ensure a stable internet connection for the duration of the test.</span>
            </li>
          </ul>
        </div>

        <button 
          onClick={() => setIsStarted(true)}
          className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
        >
          <Play size={24} /> Start Assessment
        </button>
      </div>
    </div>
  );

  const renderTestEnvironment = () => (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-white rounded-3xl border border-slate-100 shadow-2xl overflow-hidden">
      <header className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-900 text-white">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <ClipboardCheck size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold">{activeTest?.title}</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Question 1 of {activeTest?.questions}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl">
            <Clock size={18} className="text-primary" />
            <span className="font-mono font-bold text-lg">29:45</span>
          </div>
          <button 
            onClick={() => {
              setIsStarted(false);
              setActiveTest(null);
            }}
            className="px-6 py-2 bg-rose-500 hover:bg-rose-600 rounded-xl font-bold text-sm transition-colors"
          >
            Submit Test
          </button>
        </div>
      </header>

      <div className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-slate-900 leading-tight">
              Which of the following is the correct way to pass a prop named "user" to a component called "Profile"?
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {[
                '<Profile user={user} />',
                '<Profile prop="user" />',
                '<Profile {user} />',
                '<Profile user:user />'
              ].map((option, i) => (
                <button 
                  key={i}
                  className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-left font-medium text-slate-700 hover:border-primary hover:bg-primary/5 transition-all flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-full border-2 border-slate-300 flex items-center justify-center text-xs font-bold group-hover:border-primary group-hover:text-primary transition-colors">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <code>{option}</code>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-12 border-t border-slate-100">
            <button className="px-8 py-3 text-slate-400 font-bold hover:text-slate-600 transition-colors">
              Previous Question
            </button>
            <button className="px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 flex items-center gap-2">
              Next Question <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (isStarted) return renderTestEnvironment();
  if (activeTest) return renderTestIntro();
  return renderTestList();
}
