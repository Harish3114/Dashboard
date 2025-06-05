import React from 'react';
import { CheckCircle, XCircle, HelpCircle } from 'lucide-react';

interface StatisticCardProps {
  percentage: number;
  label: string;
  type: 'correct' | 'incorrect' | 'unknown';
}

const StatisticCard: React.FC<StatisticCardProps> = ({ percentage, label, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'correct':
        return <CheckCircle className="text-green-500\" size={20} />;
      case 'incorrect':
        return <XCircle className="text-red-500" size={20} />;
      case 'unknown':
        return <HelpCircle className="text-purple-500" size={20} />;
      default:
        return null;
    }
  };

  const getColor = () => {
    switch (type) {
      case 'correct':
        return 'text-green-500';
      case 'incorrect':
        return 'text-red-500';
      case 'unknown':
        return 'text-purple-500';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="flex items-center bg-navy-light rounded-lg p-3">
      {getIcon()}
      <div className="ml-3">
        <span className={`text-2xl font-bold ${getColor()}`}>{percentage}%</span>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
};

export default StatisticCard;