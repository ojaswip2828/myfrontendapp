import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  MessageCircle, 
  Calendar, 
  Clock, 
  TrendingUp, 
  CheckCircle2,
  AlertCircle,
  Users
} from "lucide-react";

const Dashboard = () => {
  const recentActivity = [
    {
      id: 1,
      user: "Sarah Chen",
      action: "completed task",
      target: "Design System Update",
      time: "2 minutes ago",
      avatar: "SC"
    },
    {
      id: 2,
      user: "Mike Johnson",
      action: "commented on",
      target: "Q4 Planning",
      time: "15 minutes ago", 
      avatar: "MJ"
    },
    {
      id: 3,
      user: "Emma Davis",
      action: "created project",
      target: "Mobile App Redesign",
      time: "1 hour ago",
      avatar: "ED"
    }
  ];

  const quickStats = [
    {
      title: "Active Projects",
      value: "12",
      change: "+2 this week",
      icon: TrendingUp,
      color: "text-success"
    },
    {
      title: "Completed Tasks",
      value: "156",
      change: "+23 today",
      icon: CheckCircle2,
      color: "text-primary"
    },
    {
      title: "Team Members",
      value: "8",
      change: "2 online now",
      icon: Users,
      color: "text-accent"
    },
    {
      title: "Pending Reviews",
      value: "4",
      change: "2 urgent",
      icon: AlertCircle,
      color: "text-warning"
    }
  ];

  const upcomingTasks = [
    { id: 1, title: "Review design mockups", due: "Today 3:00 PM", priority: "high" },
    { id: 2, title: "Team standup meeting", due: "Tomorrow 9:00 AM", priority: "medium" },
    { id: 3, title: "Client presentation prep", due: "Friday 2:00 PM", priority: "high" },
    { id: 4, title: "Code review", due: "Next week", priority: "low" }
  ];

  return (
    <div className="flex h-screen bg-background">
      <Navigation />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Good morning, John! 👋</h1>
              <p className="text-muted-foreground">
                Here's what's happening with your team today.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule
              </Button>
              <Button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                New Project
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="card-interactive">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                        <p className="text-2xl font-bold mb-1">{stat.value}</p>
                        <p className={`text-xs ${stat.color}`}>{stat.change}</p>
                      </div>
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Activity */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Latest updates from your team members
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                        {activity.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span>{" "}
                        <span className="text-muted-foreground">{activity.action}</span>{" "}
                        <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
                
                <Button variant="ghost" className="w-full">
                  View all activity
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Your schedule for today and tomorrow</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingTasks.map((task) => (
                  <div key={task.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{task.title}</p>
                      <p className="text-xs text-muted-foreground">{task.due}</p>
                      <Badge 
                        variant={task.priority === "high" ? "destructive" : 
                                task.priority === "medium" ? "default" : "secondary"}
                        className="mt-1"
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Project Progress */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Active Projects Progress</CardTitle>
              <CardDescription>Track completion status of your current projects</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: "Website Redesign", progress: 85, team: 4, deadline: "2 days left" },
                  { name: "Mobile App", progress: 60, team: 6, deadline: "1 week left" },
                  { name: "Brand Guidelines", progress: 40, team: 2, deadline: "3 weeks left" }
                ].map((project, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{project.name}</h4>
                      <span className="text-sm text-muted-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {project.team} members
                      </span>
                      <span className="text-muted-foreground">{project.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;