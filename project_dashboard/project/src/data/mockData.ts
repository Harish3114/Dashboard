import { SecurityDomain, ChatMessage, ChartData, StatsSummary } from '../types';

export const securityDomains: SecurityDomain[] = [
  {
    id: 'human-layer',
    name: 'Human Layer',
    vulnerabilityStatus: 'critical',
    socStatus: 'warning',
    hardeningStatus: 'good',
    description: 'Pinochle.AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.',
    isExpanded: false
  },
  {
    id: 'perimeter-security',
    name: 'Perimeter Security',
    vulnerabilityStatus: 'critical',
    socStatus: 'warning',
    hardeningStatus: 'good',
    description: 'Our perimeter security solutions create a fortified boundary around your digital estate. We deploy advanced firewalls, intrusion detection systems, and traffic analysis tools to detect and prevent unauthorized access. Our security perimeter acts as your first line of defense against external threats.',
    isExpanded: false
  },
  {
    id: 'network-security',
    name: 'Network Security',
    vulnerabilityStatus: 'warning',
    socStatus: 'warning',
    hardeningStatus: 'good',
    description: 'We implement comprehensive network security measures to protect your internal communications. This includes network segmentation, encrypted data transmission, and continuous monitoring for suspicious activities or anomalies that could indicate a breach.',
    isExpanded: false
  },
  {
    id: 'endpoint-security',
    name: 'Endpoint Security',
    vulnerabilityStatus: 'warning',
    socStatus: 'warning',
    hardeningStatus: 'good',
    description: 'Every device connecting to your network is a potential entry point for threats. Our endpoint security solutions protect all devices with advanced anti-malware, device control policies, and behavior monitoring to prevent and detect security incidents at the device level.',
    isExpanded: false
  },
  {
    id: 'application-security',
    name: 'Application Security',
    vulnerabilityStatus: 'good',
    socStatus: 'warning',
    hardeningStatus: 'good',
    description: 'We secure your applications throughout their lifecycle. From secure development practices to runtime protection, we ensure your applications are resilient against the OWASP Top 10 vulnerabilities and other application-specific threats.',
    isExpanded: false
  }
];

export const chatMessages: ChatMessage[] = [
  {
    id: '1',
    text: 'Hello! How can I assist you with your cybersecurity needs today?',
    sender: 'assistant',
    timestamp: new Date('2025-06-04T13:10:00')
  },
  {
    id: '2',
    text: 'Hi there, can you help me understand our current cybersecurity posture?',
    sender: 'user',
    timestamp: new Date('2025-06-04T13:11:00')
  },
  {
    id: '3',
    text: 'Of course! I have a comprehensive overview of your cybersecurity framework. Would you like a summary or details on a specific area?',
    sender: 'assistant',
    timestamp: new Date('2025-06-04T13:12:00')
  },
  {
    id: '4',
    text: 'Start with a summary, please.',
    sender: 'user',
    timestamp: new Date('2025-06-04T13:13:00')
  },
  {
    id: '5',
    text: 'Sure! Based on the latest assessments:\n• Threat Protection: 85% secure. Your systems have good protection against known threats.\n• Access Control: 70% secure. There are some areas of improvement in user access control.\n• Data Protection: 90% secure. Data encryption and backup procedures are well in place.\n• Incident Response: 75% secure. There are gaps in your incident response plan. Would you like detailed feedback on any specific area?',
    sender: 'assistant',
    timestamp: new Date('2025-06-04T13:14:00')
  }
];

export const unpatchedAssetsData: ChartData = {
  labels: ['Windows', 'Linux', 'Other OS'],
  datasets: [
    {
      label: 'Unpatched Assets',
      data: [35, 25, 40],
      backgroundColor: ['#ff6384', '#4bc0c0', '#ffcd56']
    }
  ]
};

export const criticalIncidentsData: ChartData = {
  labels: ['Firewall', 'Windows', 'O365'],
  datasets: [
    {
      label: 'Unresolved Critical SOC Incidents',
      data: [12, 19, 15],
      backgroundColor: ['#4bc0c0', '#ff6384', '#ffcd56']
    }
  ]
};

export const weakPointsData: ChartData = {
  labels: ['Patch', 'SOC', 'VAPT'],
  datasets: [
    {
      label: 'Weak Points (EMP & Machines)',
      data: [40, 30, 30],
      backgroundColor: ['#ff6384', '#ffcd56', '#4bc0c0'],
      borderWidth: 0
    }
  ]
};

export const weakAppsData: ChartData = {
  labels: ['HR Management', 'CRM', 'Websites'],
  datasets: [
    {
      label: 'Vulnerability',
      data: [5, 4, 10],
      backgroundColor: ['#4bc0c0', '#4bc0c0', '#4bc0c0']
    },
    {
      label: 'SOC',
      data: [10, 2, 3],
      backgroundColor: ['#ff6384', '#ff6384', '#ff6384']
    }
  ]
};

export const statsSummary: StatsSummary = {
  correctPercentage: 65,
  incorrectPercentage: 20,
  unknownPercentage: 15
};