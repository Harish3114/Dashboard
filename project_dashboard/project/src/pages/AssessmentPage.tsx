import React from 'react';
import TabNavigation from '../components/TabNavigation';
import ChartCard from '../components/ChartCard';
import { unpatchedAssetsData, criticalIncidentsData, weakPointsData, weakAppsData } from '../data/mockData';

const AssessmentPage: React.FC = () => {
  return (
    <div>
      <TabNavigation activeTab="summary" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard 
          title="Unpatched Assets since 30 Days" 
          chartData={unpatchedAssetsData} 
          chartType="pie" 
        />
        
        <ChartCard 
          title="Unresolved Critical SOC Incident" 
          chartData={criticalIncidentsData} 
          chartType="bar" 
        />
        
        <ChartCard 
          title="Weak Points (EMP & Machines)" 
          chartData={weakPointsData} 
          chartType="doughnut" 
        />
        
        <ChartCard 
          title="Weak (Apps & Softwares)" 
          chartData={weakAppsData} 
          chartType="bar" 
        />
      </div>
    </div>
  );
};

export default AssessmentPage;