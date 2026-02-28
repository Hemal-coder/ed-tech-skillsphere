export type View = 'dashboard' | 'mentor' | 'projects' | 'test' | 'career';

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  image: string;
}

export interface SkillTest {
  id: string;
  title: string;
  questions: number;
  duration: string;
  category: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
