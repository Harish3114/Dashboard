import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronDown, Shield, AlertTriangle, CheckCircle, Clock, Star } from 'lucide-react';
import { useState } from 'react';

export const SecurityAnalysis = () => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const assessmentResults = [
    {
      id: 'human-layer',
      category: 'Human Layer',
      vulnerability: 'critical',
      soc: 'warning',
      hardening: 'secure',
      description: 'User awareness and training assessment',
      detailedContent: {
        topRated: 'Top 5',
        enabler: 'Enabler',
        description: 'Pinochle AI is not your average cybersecurity firm—we defy convention and dare to tread where others fear. Our elite operatives embark on deep infiltrations into the darkest corners of the web, preemptively identifying potential threats before they strike. We lead the charge on the offensive, striking fear into the hearts of cyber adversaries and neutralizing threats. Our globally stationed cybersecurity insurgents respond swiftly and decisively to emerging threats, ensuring unparalleled protection for your digital assets.'
      }
    },
    {
      id: 'perimeter-security',
      category: 'Perimeter Security',
      vulnerability: 'critical',
      soc: 'warning',
      hardening: 'secure',
      description: 'Network boundary protection analysis',
      detailedContent: {
        topRated: 'Top 3',
        enabler: 'Security Gateway',
        description: 'Advanced perimeter security controls including firewall configurations, intrusion detection systems, and network access controls. Our comprehensive approach ensures that your network boundaries are fortified against external threats while maintaining optimal performance for legitimate traffic.'
      }
    },
    {
      id: 'network-security',
      category: 'Network Security',
      vulnerability: 'warning',
      soc: 'warning',
      hardening: 'secure',
      description: 'Internal network security evaluation',
      detailedContent: {
        topRated: 'Top 7',
        enabler: 'Network Monitor',
        description: 'Internal network segmentation, traffic monitoring, and access controls are evaluated to ensure secure communications between systems. Our analysis covers VLAN configurations, network monitoring tools, and data flow security protocols.'
      }
    },
    {
      id: 'endpoint-security',
      category: 'Endpoint Security',
      vulnerability: 'warning',
      soc: 'warning',
      hardening: 'secure',
      description: 'Device and endpoint protection review',
      detailedContent: {
        topRated: 'Top 4',
        enabler: 'Device Guardian',
        description: 'Comprehensive endpoint protection including antivirus, anti-malware, device encryption, and endpoint detection and response (EDR) capabilities. Our assessment covers all connected devices and their security posture.'
      }
    },
    {
      id: 'application-security',
      category: 'Application Security',
      vulnerability: 'secure',
      soc: 'warning',
      hardening: 'secure',
      description: 'Software and application security audit',
      detailedContent: {
        topRated: 'Top 2',
        enabler: 'App Shield',
        description: 'Application security testing, code review, and vulnerability assessments ensure that your software applications are secure from development through deployment. We analyze both custom applications and third-party software.'
      }
    }
  ];

  const overallStats = {
    correct: 65,
    incorrect: 20,
    dontKnow: 15
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'secure':
        return <CheckCircle className="h-4 w-4 text-green-400" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-400" />;
      case 'critical':
        return <Shield className="h-4 w-4 text-red-400" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'secure':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'warning':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'critical':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Knowledge Assessment Results</h1>
          <p className="text-gray-400">Detailed security analysis by category</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
          >
            All Questions
          </Button>
          <Button 
            variant="outline" 
            className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
          >
            Vulnerability
          </Button>
          <Button 
            variant="outline" 
            className="border-orange-500 text-orange-400 hover:bg-orange-500/10"
          >
            SOC
          </Button>
          <Button 
            variant="outline" 
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
          >
            Hardening
          </Button>
        </div>
      </div>

      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-green-500/10 border-green-500/20">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">{overallStats.correct}%</div>
            <div className="text-sm text-green-300">Correct</div>
          </CardContent>
        </Card>
        <Card className="bg-red-500/10 border-red-500/20">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">{overallStats.incorrect}%</div>
            <div className="text-sm text-red-300">Incorrect</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-500/10 border-gray-500/20">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-gray-400 mb-2">{overallStats.dontKnow}%</div>
            <div className="text-sm text-gray-300">Don't Know</div>
          </CardContent>
        </Card>
      </div>

      {/* Assessment Categories */}
      <div className="space-y-4">
        {assessmentResults.map((result) => (
          <Collapsible 
            key={result.id} 
            open={openSections[result.id]} 
            onOpenChange={() => toggleSection(result.id)}
          >
            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-400/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-lg font-semibold text-white">{result.category}</h3>
                      <div className="h-4 w-px bg-purple-500/30" />
                      <p className="text-sm text-gray-400">{result.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.vulnerability)}
                      <Badge className={getStatusColor(result.vulnerability)}>
                        Vulnerability
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.soc)}
                      <Badge className={getStatusColor(result.soc)}>
                        SOC
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {getStatusIcon(result.hardening)}
                      <Badge className={getStatusColor(result.hardening)}>
                        Hardening
                      </Badge>
                    </div>
                    
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-purple-400 hover:text-purple-300"
                      >
                        {openSections[result.id] ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                </div>

                <CollapsibleContent className="mt-4">
                  <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full">
                        <Star className="h-4 w-4 text-blue-400" />
                        <span className="text-sm text-blue-400">{result.detailedContent.topRated}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-full">
                        <span className="text-sm text-purple-400">{result.detailedContent.enabler}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {result.detailedContent.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-purple-500/20">
                      <Button 
                        onClick={() => navigate('/chat')}
                        className="bg-purple-600 hover:bg-purple-700 text-sm"
                        size="sm"
                      >
                        Get AI Analysis
                      </Button>
                    </div>
                  </div>
                </CollapsibleContent>
              </CardContent>
            </Card>
          </Collapsible>
        ))}
      </div>

      {/* Recommendations */}
      <Card className="bg-slate-800/50 border-purple-500/20">
        <CardHeader>
          <CardTitle className="text-white">Security Recommendations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-red-400 mb-3">Critical Actions Required</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Implement comprehensive security awareness training</li>
                <li>• Strengthen perimeter security controls</li>
                <li>• Review and update incident response procedures</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-400 mb-3">Improvement Areas</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Enhance network segmentation</li>
                <li>• Deploy additional endpoint protection</li>
                <li>• Improve SOC monitoring capabilities</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-4 border-t border-purple-500/20">
            <Button 
              onClick={() => navigate('/chat')}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Get Detailed Analysis from AI Assistant
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
