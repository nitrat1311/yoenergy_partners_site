export interface SectionContent {
  title?: string;
  subtitle?: string;
  points?: string[];
  text?: string;
  highlight?: boolean;
}

export interface RankDetails {
  title: string;
  requirements: string[];
  rewards: string[];
}

export interface NavItem {
  label: string;
  id: string;
}