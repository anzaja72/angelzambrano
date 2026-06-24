export interface Solution {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  fullDetails: string;
  features: string[];
  cognitiveStack: string[];
  legalTechCompliance: string;
}

export interface Certificate {
  title: string;
  institution: string;
  date: string;
  category: 'AI' | 'Product' | 'Project' | 'Law' | 'Other';
  credentialUrl?: string;
  id: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  institution: string;
  description: string;
}
