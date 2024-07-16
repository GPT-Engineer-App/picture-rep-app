import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-2">TaskMaster</h1>
      <p className="text-xl mb-8">Organize tasks efficiently</p>
      <img src="/placeholder.svg" alt="TaskMaster" className="mx-auto object-cover w-64 h-64 mb-8" />
      <Link to="/login">
        <Button className="bg-red-600 hover:bg-red-700">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Index;