import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

export const UserDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <Button variant="outline">Logout</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">License Status</h2>
          <div className="flex items-center space-x-2 text-green-600">
            <span className="w-3 h-3 bg-green-600 rounded-full"></span>
            <span>Verified</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">Your driver's license has been verified</p>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <Button className="w-full" variant="outline">Browse Cars</Button>
            <Button className="w-full" variant="outline">View Rentals</Button>
            <Button className="w-full" variant="outline">Contact Support</Button>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Active Rentals</h2>
          <div className="text-center py-8 text-gray-500">
            <p>No active rentals</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
