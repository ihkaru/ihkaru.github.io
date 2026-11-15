export type ProjectCategory = 'systems' | 'ai' | 'enterprise' | 'education';

export type ProjectIconKey = 
  | 'bot' 
  | 'database' 
  | 'cpu' 
  | 'shield' 
  | 'key' 
  | 'graduation-cap' 
  | 'file-spreadsheet';

export interface ProjectMetric {
  label: string;
  value: string;
  description?: string;
}

export interface ArchitectureStep {
  step: string;
  title: string;
  detail: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  iconKey?: ProjectIconKey;
  subtitle: {
    id: string;
    en: string;
  };
  category: ProjectCategory;
  priority: number; // 1 = Aina, 2 = Cerdas, dst.
  featured: boolean;
  repoUrl: string;
  liveUrl?: string;
  techStack: string[];
  metrics: ProjectMetric[];
  highlights: {
    id: string[];
    en: string[];
  };
  problemStatement: {
    id: string;
    en: string;
  };
  architectureSolution: {
    id: string;
    en: string;
  };
  architectureFlow: ArchitectureStep[];
}

export type Locale = 'id' | 'en';
