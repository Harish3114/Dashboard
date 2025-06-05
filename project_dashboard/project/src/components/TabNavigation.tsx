import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, MessageCircle } from 'lucide-react';

interface TabNavigationProps {
  activeTab: 'summary' | 'cyberkarma';
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mb-8 border-b border-gray-700">
      <div className="flex">
        <button
          onClick={() => navigate('/')}
          className={`flex items-center px-6 py-3 ${
            activeTab === 'summary'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <BookOpen size={20} className="mr-2" />
          <span>Summary</span>
        </button>
        <button
          onClick={() => navigate('/cyberkarma-gpt')}
          className={`flex items-center px-6 py-3 ${
            activeTab === 'cyberkarma'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-400 hover:text-gray-300'
          }`}
        >
          <MessageCircle size={20} className="mr-2" />
          <span>CyberKarma GPT</span>
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;