import { CustomPieChart } from '@/components/charts/PieChart';
import { CustomBarChart } from '@/components/charts/BarChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, AlertTriangle, Shield, Activity } from 'lucide-react';

export const KnowledgeAssessment = () => {
  const navigate = useNavigate();

  const assetData = [
    { name: 'Windows', value: 45, color: '#ef4444' },
    { name: 'Linux', value: 35, color: '#22c55e' },
    { name: 'Other OS', value: 20, color: '#f59e0b' }
  ];

  const incidentData = [
    { name: 'Firewall', value: 25, color: '#22c55e' },
    { name: 'Windows', value: 40, color: '#ef4444' },
    { name: 'O365', value: 35, color: '#f59e0b' }
  ];

  const weakPointsData = [
    { name: 'Patch', value: 30, color: '#ef4444' },
    { name: 'SOC', value: 25, color: '#f59e0b' },
    { name: 'VAPT', value: 45, color: '#22c55e' }
  ];

  const appsData = [
    { name: 'HR Management', vulnerability: 5, soc: 10 },
    { name: 'CRM', vulnerability: 2, soc: 4 },
    { name: 'Websites', vulnerability: 3, soc: 10 }
  ];

  const summaryStats = [
    { title: 'Security Score', value: '78%', icon: Shield, color: 'text-green-400' },
    { title: 'Active Threats', value: '12', icon: AlertTriangle, color: 'text-red-400' },
    { title: 'Assets Monitored', value: '156', icon: Activity, color: 'text-blue-400' },
    { title: 'Compliance Rate', value: '94%', icon: TrendingUp, color: 'text-purple-400' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Knowledge Assessment Results</h1>
          <p className="text-gray-400">Comprehensive security overview and metrics</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
          >
            Summary
          </Button>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => navigate('/chat')}
          >
            CyberKarma GPT
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryStats.map((stat, index) => (
          <Card key={index} className="bg-slate-800/50 border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomPieChart 
          data={assetData} 
          title="Unpatched Assets since 30 Days" 
        />
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-lg font-semibold text-white mb-4">Unresolved Critical SOC Incident</h3>
          <div className="grid grid-cols-3 gap-4 h-[300px] items-end">
            {incidentData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className="w-16 rounded-t-lg mb-2"
                  style={{ 
                    backgroundColor: item.color,
                    height: `${(item.value / 40) * 200}px`,
                    minHeight: '40px'
                  }}
                />
                <p className="text-sm text-gray-300 text-center">{item.name}</p>
                <p className="text-xs text-gray-500">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CustomPieChart 
          data={weakPointsData} 
          title="Weak Points (EMP & Machines)" 
        />
        <CustomBarChart 
          data={appsData} 
          title="Weak (Apps & Softwares)" 
        />
      </div>

      {/* Action Items */}
      <Card className="bg-slate-800/50 border-purple-500/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-white">Recommended Actions</CardTitle>
            <Button 
              onClick={() => navigate('/analysis')}
              className="bg-purple-600 hover:bg-purple-700"
            >
              View Detailed Analysis
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
              <h4 className="font-semibold text-red-400 mb-2">Critical Priority</h4>
              <p className="text-sm text-gray-300">Patch 45 Windows systems immediately</p>
            </div>
            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <h4 className="font-semibold text-yellow-400 mb-2">Medium Priority</h4>
              <p className="text-sm text-gray-300">Review SOC incident response times</p>
            </div>
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <h4 className="font-semibold text-green-400 mb-2">Low Priority</h4>
              <p className="text-sm text-gray-300">Update security documentation</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
