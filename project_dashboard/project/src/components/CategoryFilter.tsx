import React from 'react';
import { ShieldAlert, AlertCircle, Shield } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="flex justify-center space-x-2 mb-6">
      <button
        className={`px-4 py-2 rounded-lg flex items-center ${
          activeCategory === 'all' ? 'bg-gray-700' : 'bg-navy-light hover:bg-gray-800'
        }`}
        onClick={() => setActiveCategory('all')}
      >
        <span>All Questions</span>
      </button>
      <button
        className={`px-4 py-2 rounded-lg flex items-center ${
          activeCategory === 'vulnerability' ? 'bg-purple-900' : 'bg-navy-light hover:bg-gray-800'
        }`}
        onClick={() => setActiveCategory('vulnerability')}
      >
        <ShieldAlert size={18} className="mr-2 text-purple-500" />
        <span>Vulnerability</span>
      </button>
      <button
        className={`px-4 py-2 rounded-lg flex items-center ${
          activeCategory === 'soc' ? 'bg-orange-900' : 'bg-navy-light hover:bg-gray-800'
        }`}
        onClick={() => setActiveCategory('soc')}
      >
        <AlertCircle size={18} className="mr-2 text-orange-500" />
        <span>SOC</span>
      </button>
      <button
        className={`px-4 py-2 rounded-lg flex items-center ${
          activeCategory === 'hardening' ? 'bg-blue-900' : 'bg-navy-light hover:bg-gray-800'
        }`}
        onClick={() => setActiveCategory('hardening')}
      >
        <Shield size={18} className="mr-2 text-blue-500" />
        <span>Hardening</span>
      </button>
    </div>
  );
};

export default CategoryFilter;