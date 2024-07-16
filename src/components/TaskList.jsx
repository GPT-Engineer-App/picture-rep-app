import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

const TaskList = () => {
  const tasks = [
    { id: 1, title: "Complete project proposal", category: "Work", completed: false },
    { id: 2, title: "Buy groceries", category: "Shopping", completed: true },
    { id: 3, title: "Go for a run", category: "Health", completed: false },
    { id: 4, title: "Call mom", category: "Personal", completed: false },
  ];

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
          <Checkbox checked={task.completed} />
          <div className="flex-grow">
            <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
              {task.title}
            </p>
          </div>
          <Badge>{task.category}</Badge>
        </div>
      ))}
    </div>
  );
};

export default TaskList;