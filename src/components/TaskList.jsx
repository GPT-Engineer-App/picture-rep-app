import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

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
        <Link to={`/task/${task.id}`} key={task.id} className="block">
          <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:bg-gray-50 transition-colors">
            <Checkbox checked={task.completed} />
            <div className="flex-grow">
              <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.title}
              </p>
            </div>
            <Badge>{task.category}</Badge>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TaskList;