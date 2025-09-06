import { useLocation, useNavigate } from "react-router-dom";
import { 
  Home, 
  MessageCircle, 
  Kanban, 
  Users, 
  BarChart3, 
  LogOut,
  Settings 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { path: "/dashboard", label: "Dashboard", icon: Home },
    { path: "/chat", label: "Chat", icon: MessageCircle },
    { path: "/kanban", label: "Projects", icon: Kanban },
    { path: "/team", label: "Team", icon: Users },
    { path: "/analytics", label: "Analytics", icon: BarChart3 },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <nav className="w-64 bg-card border-r border-border h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
          SynergySphere
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Team Collaboration Hub</p>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 p-4 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`nav-item w-full text-left ${isActive ? "nav-item-active" : ""}`}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* User Profile & Settings */}
      <div className="p-4 border-t border-border space-y-2">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted">
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">Product Manager</p>
          </div>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start gap-3"
        >
          <Settings size={16} />
          Settings
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive"
        >
          <LogOut size={16} />
          Sign Out
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;