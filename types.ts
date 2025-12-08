import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface GeminiAnalysisResponse {
  analysis: string;
  strategies: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  type?: 'text' | 'form' | 'success'; // Extended for UI logic
  formSubmitted?: boolean;
}