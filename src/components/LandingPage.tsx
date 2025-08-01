import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export const LandingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to CarRental</h1>
        <p className="text-xl text-gray-600">Quick and easy car rentals with digital license verification</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">New Customer?</h2>
          <p className="mb-4">Sign up and verify your driver's license digitally</p>
          <Button variant="default" className="w-full mb-2">
            Sign Up
          </Button>
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Existing Customer?</h2>
          <p className="mb-4">Log in to your account to rent a car</p>
          <Button variant="default" className="w-full">
            Login
          </Button>
        </Card>
      </div>
    </div>
  );
};
