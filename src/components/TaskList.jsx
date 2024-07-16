import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from "@/components/ui/use-toast";

const fetchTasks = async () => {
  const response = await fetch('/api/tasks');
  if (!response.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
};

const updateTaskStatus = async ({ id, completed }) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed }),
  });
  if (!response.ok) {
    throw new Error('Failed to update task status');
  }
  return response.json();
};

const TaskList = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  });

  const updateTaskMutation = useMutation({
    mutationFn: updateTaskStatus,
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
      toast({
        title: "Task updated",
        description: "Task status has been updated successfully.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update task status. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleStatusChange = (id, completed) => {
    updateTaskMutation.mutate({ id, completed });
  };

  if (isLoading) return <div>Loading tasks...</div>;
  if (isError) return <div>Error loading tasks</div>;

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <Link to={`/task/${task.id}`} key={task.id} className="block">
          <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:bg-gray-50 transition-colors">
            <Checkbox
              checked={task.completed}
              onCheckedChange={(checked) => handleStatusChange(task.id, checked)}
              onClick={(e) => e.stopPropagation()}
            />
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