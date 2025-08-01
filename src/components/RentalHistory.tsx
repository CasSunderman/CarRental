import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface RentalHistory {
  id: string;
  carModel: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'cancelled';
  totalCost: number;
}

const sampleRentals: RentalHistory[] = [
  {
    id: '1',
    carModel: 'Tesla Model 3',
    startDate: '2025-07-28',
    endDate: '2025-08-02',
    status: 'active',
    totalCost: 450
  },
  {
    id: '2',
    carModel: 'BMW X5',
    startDate: '2025-06-15',
    endDate: '2025-06-18',
    status: 'completed',
    totalCost: 285
  },
  {
    id: '3',
    carModel: 'Ford Mustang',
    startDate: '2025-05-01',
    endDate: '2025-05-03',
    status: 'cancelled',
    totalCost: 170
  }
];

export const RentalHistory = () => {
  const getStatusColor = (status: RentalHistory['status']) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-100';
      case 'completed':
        return 'text-blue-600 bg-blue-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Rental History</h1>

      <div className="space-y-4">
        {sampleRentals.map(rental => (
          <Card key={rental.id} className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold mb-2">{rental.carModel}</h3>
                <p className="text-gray-600">
                  {rental.startDate} - {rental.endDate}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm mt-2 ${getStatusColor(rental.status)}`}>
                  {rental.status.charAt(0).toUpperCase() + rental.status.slice(1)}
                </span>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">${rental.totalCost}</p>
                <Button variant="outline" className="mt-2">
                  View Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
