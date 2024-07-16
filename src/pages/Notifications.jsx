import React from 'react';
import { Bell, Settings, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Notifications = () => {
  const notifications = [
    { id: 1, title: "New message", description: "You have a new message from John Doe", time: "2 hours ago" },
    { id: 2, title: "Task completed", description: "Your task 'Complete project proposal' has been marked as done", time: "Yesterday" },
    { id: 3, title: "Reminder", description: "Don't forget about your meeting at 3 PM", time: "1 day ago" },
    // Add more notifications as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]">
        {notifications.map((notification) => (
          <Card key={notification.id} className="mb-4">
            <CardContent className="flex items-start p-4">
              <Bell className="h-5 w-5 mr-4 mt-1 text-blue-500" />
              <div className="flex-grow">
                <h3 className="font-semibold">{notification.title}</h3>
                <p className="text-sm text-gray-600">{notification.description}</p>
                <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
    </div>
  );
};

export default Notifications;