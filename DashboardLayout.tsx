import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar';
import { 
  BarChart3, 
  MessageSquare, 
  Shield,
  ChevronRight
} from 'lucide-react';

export const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Knowledge Assessment",
      icon: BarChart3,
      path: "/",
      description: "Security metrics overview"
    },
    {
      title: "Security Analysis",
      icon: Shield,
      path: "/analysis",
      description: "Detailed security breakdown"
    },
    {
      title: "AI Assistant",
      icon: MessageSquare,
      path: "/chat",
      description: "CyberKarma GPT"
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Sidebar className="border-r border-purple-500/20">
          <SidebarHeader className="p-6">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-purple-400" />
              <div>
                <h2 className="text-lg font-semibold text-white">SecureDash</h2>
                <p className="text-sm text-gray-400">Cybersecurity Portal</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="px-4">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.path}>
                      <SidebarMenuButton 
                        onClick={() => navigate(item.path)}
                        isActive={location.pathname === item.path}
                        className="w-full justify-start gap-3 p-3 rounded-lg hover:bg-purple-800/30 data-[active=true]:bg-purple-700/50"
                      >
                        <item.icon className="h-5 w-5" />
                        <div className="flex flex-col items-start">
                          <span className="text-sm font-medium">{item.title}</span>
                          <span className="text-xs text-gray-400">{item.description}</span>
                        </div>
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="p-4 border-t border-purple-500/20">
            <div className="text-center text-sm text-gray-400">
              <p>SecureDash v1.0</p>
              <p>Cybersecurity Dashboard</p>
            </div>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="p-4 border-b border-purple-500/20 bg-slate-900/50">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="text-purple-400 hover:text-purple-300" />
              <h1 className="text-xl font-semibold text-white">
                Cybersecurity Dashboard
              </h1>
            </div>
          </header>
          
          <div className="flex-1 p-6 overflow-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
