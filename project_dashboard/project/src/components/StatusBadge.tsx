import React from 'react';

interface StatusBadgeProps {
  status: 'good' | 'warning' | 'critical';
  label?: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'good':
        return 'bg-green-600';
      case 'warning':
        return 'bg-yellow-500';
      case 'critical':
        return 'bg-red-600';
      default:
        return 'bg-gray-600';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'good':
        return '✓';
      case 'warning':
        return '⚠';
      case 'critical':
        return '✗';
      default:
        return '?';
    }
  };

  return (
    <div className={`inline-flex items-center rounded-md py-1 px-3 ${getStatusColor()}`}>
      <span className="mr-1">{getStatusIcon()}</span>
      {label && <span>{label}</span>}
    </div>
  );
};

export default StatusBadge;