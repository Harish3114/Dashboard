import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SecurityDomain } from '../types';
import StatusBadge from './StatusBadge';

interface SecurityDomainItemProps {
  domain: SecurityDomain;
  onToggleExpand: (domainId: string) => void;
}

const SecurityDomainItem: React.FC<SecurityDomainItemProps> = ({ domain, onToggleExpand }) => {
  return (
    <div className="border-l-4 border-purple-500 mb-6 rounded-r-lg overflow-hidden">
      <div className="bg-navy-light">
        <div className="flex items-center justify-between p-4">
          <h3 className="text-xl font-medium">{domain.name}</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <StatusBadge status={domain.vulnerabilityStatus} />
              <span className="text-sm">Vulnerability</span>
            </div>
            <div className="flex items-center space-x-2">
              <StatusBadge status={domain.socStatus} />
              <span className="text-sm">SOC</span>
            </div>
            <div className="flex items-center space-x-2">
              <StatusBadge status={domain.hardeningStatus} />
              <span className="text-sm">Hardening</span>
            </div>
            <button 
              onClick={() => onToggleExpand(domain.id)}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle details"
            >
              <ChevronRight 
                size={24} 
                className={`transform transition-transform duration-200 ${domain.isExpanded ? 'rotate-90' : ''}`} 
              />
            </button>
          </div>
        </div>
      </div>
      {domain.isExpanded && domain.description && (
        <div className="bg-navy-dark p-6 border-t border-gray-700">
          <div className="flex items-start">
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 bg-blue-900 px-3 py-1 rounded-md">
                <span className="text-sm font-medium">Top 5</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-900 px-3 py-1 rounded-md">
                <span className="text-sm font-medium">Enabler</span>
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-300 leading-relaxed">{domain.description}</p>
        </div>
      )}
    </div>
  );
};

export default SecurityDomainItem;