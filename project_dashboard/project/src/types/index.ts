export interface SecurityDomain {
  id: string;
  name: string;
  vulnerabilityStatus: 'good' | 'warning' | 'critical';
  socStatus: 'good' | 'warning' | 'critical';
  hardeningStatus: 'good' | 'warning' | 'critical';
  description?: string;
  isExpanded?: boolean;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
}

export interface StatsSummary {
  correctPercentage: number;
  incorrectPercentage: number;
  unknownPercentage: number;
}