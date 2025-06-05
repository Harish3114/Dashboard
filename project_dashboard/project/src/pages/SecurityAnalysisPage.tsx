import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { securityDomains } from '../data/mockData';
import { SecurityDomain } from '../types';
import SecurityDomainItem from '../components/SecurityDomainItem';
import StatisticCard from '../components/StatisticCard';
import CategoryFilter from '../components/CategoryFilter';

const SecurityAnalysisPage: React.FC = () => {
  const [domains, setDomains] = useState<SecurityDomain[]>(securityDomains);
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const handleToggleExpand = (domainId: string) => {
    setDomains(
      domains.map(domain => 
        domain.id === domainId 
          ? { ...domain, isExpanded: !domain.isExpanded } 
          : domain
      )
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
          >
            <ArrowLeft size={24} className="mr-2" />
            <span>Back to Summary</span>
          </button>
          <h1 className="text-xl font-semibold">
            Knowledge Assessment Results
          </h1>
        </div>
        <div className="flex space-x-4">
          <StatisticCard percentage={65} label="Correct" type="correct" />
          <StatisticCard percentage={20} label="Incorrect" type="incorrect" />
          <StatisticCard percentage={15} label="Don't know" type="unknown" />
        </div>
      </div>

      <CategoryFilter 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      <div className="mt-6">
        {domains.map(domain => (
          <SecurityDomainItem 
            key={domain.id} 
            domain={domain} 
            onToggleExpand={handleToggleExpand} 
          />
        ))}
      </div>
    </div>
  );
};

export default SecurityAnalysisPage;