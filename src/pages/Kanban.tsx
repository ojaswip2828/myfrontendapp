import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Plus, 
  MoreHorizontal, 
  Calendar, 
  MessageCircle, 
  Paperclip,
  Flag
} from "lucide-react";

const Kanban = () => {
  const [boards] = useState([
    {
      id: "todo",
      title: "To Do",
      color: "border-l-muted-foreground",
      tasks: [
        {
          id: 1,
          title: "Design new landing page",
          description: "Create wireframes and mockups for the updated homepage",
          priority: "high",
          assignees: ["SC", "MJ"],
          comments: 3,
          attachments: 2,
          dueDate: "Dec 15",
          tags: ["Design", "UI/UX"]
        },
        {
          id: 2,
          title: "Research competitor analysis",
          description: "Analyze top 5 competitors in our market segment",
          priority: "medium",
          assignees: ["ED"],
          comments: 1,
          attachments: 0,
          dueDate: "Dec 18",
          tags: ["Research", "Strategy"]
        }
      ]
    },
    {
      id: "inprogress",
      title: "In Progress",
      color: "border-l-primary",
      tasks: [
        {
          id: 3,
          title: "Implement user authentication",
          description: "Set up JWT-based auth with role management",
          priority: "high",
          assignees: ["MJ", "BW"],
          comments: 5,
          attachments: 1,
          dueDate: "Dec 12",
          tags: ["Development", "Backend"]
        },
        {
          id: 4,
          title: "Create design system",
          description: "Build reusable component library",
          priority: "medium",
          assignees: ["SC"],
          comments: 2,
          attachments: 4,
          dueDate: "Dec 20",
          tags: ["Design", "System"]
        }
      ]
    },
    {
      id: "review",
      title: "Review",
      color: "border-l-warning",
      tasks: [
        {
          id: 5,
          title: "Mobile app testing",
          description: "QA testing on iOS and Android devices",
          priority: "high",
          assignees: ["AB", "ED"],
          comments: 8,
          attachments: 0,
          dueDate: "Dec 10",
          tags: ["Testing", "Mobile"]
        }
      ]
    },
    {
      id: "done",
      title: "Done",
      color: "border-l-success",
      tasks: [
        {
          id: 6,
          title: "User research interviews",
          description: "Conducted 12 user interviews for product insights",
          priority: "medium",
          assignees: ["AB"],
          comments: 4,
          attachments: 3,
          dueDate: "Dec 5",
          tags: ["Research", "UX"]
        },
        {
          id: 7,
          title: "Database schema design",
          description: "Finalized database structure for v2.0",
          priority: "high",
          assignees: ["BW", "MJ"],
          comments: 6,
          attachments: 2,
          dueDate: "Dec 3",
          tags: ["Database", "Backend"]
        }
      ]
    }
  ]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-destructive";
      case "medium":
        return "text-warning";
      case "low":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  const TaskCard = ({ task }: { task: any }) => (
    <Card className="card-interactive cursor-pointer group mb-3">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {task.title}
          </h4>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 opacity-0 group-hover:opacity-100">
            <MoreHorizontal className="w-3 h-3" />
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {task.description}
        </p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {task.assignees.map((assignee: string) => (
                <Avatar key={assignee} className="w-6 h-6 border-2 border-background">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-xs bg-accent text-accent-foreground">
                    {assignee}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            
            <Flag className={`w-3 h-3 ${getPriorityColor(task.priority)}`} />
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span className="text-xs">{task.dueDate}</span>
            </div>
            
            {task.comments > 0 && (
              <div className="flex items-center gap-1">
                <MessageCircle className="w-3 h-3" />
                <span className="text-xs">{task.comments}</span>
              </div>
            )}
            
            {task.attachments > 0 && (
              <div className="flex items-center gap-1">
                <Paperclip className="w-3 h-3" />
                <span className="text-xs">{task.attachments}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="flex h-screen bg-background">
      <Navigation />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-1">Project Board</h1>
              <p className="text-muted-foreground">
                Manage tasks and track progress across your team
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Add Column
              </Button>
              <Button className="btn-primary">
                <Plus className="w-4 h-4 mr-2" />
                New Task
              </Button>
            </div>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-muted-foreground">
                    {boards.find(b => b.id === "todo")?.tasks.length || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">To Do</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {boards.find(b => b.id === "inprogress")?.tasks.length || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">In Progress</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">
                    {boards.find(b => b.id === "review")?.tasks.length || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Review</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">
                    {boards.find(b => b.id === "done")?.tasks.length || 0}
                  </div>
                  <div className="text-sm text-muted-foreground">Done</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Kanban Board */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {boards.map((board) => (
              <Card key={board.id} className={`border-l-4 ${board.color}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium">
                      {board.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {board.tasks.length}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {board.tasks.map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                    
                    <Button 
                      variant="ghost" 
                      className="w-full border-2 border-dashed border-muted-foreground/30 hover:border-primary/50 hover:bg-primary/5"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add Task
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kanban;