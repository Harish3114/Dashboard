import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="p-2">
      <div className="border border-purple-500 rounded-lg p-4 bg-navy">
        <button 
          onClick={() => navigate('/security-analysis')}
          className="flex items-center space-x-2 bg-purple-900 hover:bg-purple-800 text-white py-2 px-4 rounded-md transition-colors duration-200"
        >
          <span className="font-semibold">Knowledge Assessment Results</span>
          <ChevronDown size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;