import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">TaskMaster</h1>
          <img src="/placeholder.svg" alt="TaskMaster Logo" className="mx-auto object-cover w-32 h-32 mb-4" />
        </div>
        <form className="mt-8 space-y-6">
          <Input type="email" placeholder="Email" required className="w-full" />
          <Input type="password" placeholder="Password" required className="w-full" />
          <Button className="w-full bg-red-600 hover:bg-red-700">Get Started</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;