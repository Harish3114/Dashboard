export interface SecurityMetric {
  id: string;
  name: string;
  score: number;
  status: 'secure' | 'warning' | 'critical';
  category: string;
}

export interface AssessmentResult {
  id: string;
  category: string;
  vulnerabilities: number;
  soc: number;
  hardening: number;
  status: 'secure' | 'warning' | 'critical';
}

export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export interface AssetData {
  windows: number;
  linux: number;
  otherOS: number;
}

export interface IncidentData {
  firewall: number;
  windows: number;
  o365: number;
}
