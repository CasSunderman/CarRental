import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';

interface Car {
  id: string;
  model: string;
  brand: string;
  year: number;
  price: number;
  type: string;
  image: string;
  available: boolean;
}

const sampleCars: Car[] = [
  {
    id: '1',
    model: 'Model 3',
    brand: 'Tesla',
    year: 2023,
    price: 75,
    type: 'Electric',
    image: 'https://placeholder.co/300x200',
    available: true
  },
  {
    id: '2',
    model: 'Mustang',
    brand: 'Ford',
    year: 2023,
    price: 85,
    type: 'Sport',
    image: 'https://placeholder.co/300x200',
    available: true
  },
  {
    id: '3',
    model: 'X5',
    brand: 'BMW',
    year: 2023,
    price: 95,
    type: 'SUV',
    image: 'https://placeholder.co/300x200',
    available: false
  }
];

export const CarBrowsing = () => {
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCars = sampleCars.filter(car => {
    const matchesType = filterType === 'all' || car.type.toLowerCase() === filterType.toLowerCase();
    const matchesSearch = car.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Browse Available Cars</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search cars..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-xs"
        />
        
        <div className="flex gap-2">
          <Button
            variant={filterType === 'all' ? 'default' : 'outline'}
            onClick={() => setFilterType('all')}
          >
            All
          </Button>
          <Button
            variant={filterType === 'electric' ? 'default' : 'outline'}
            onClick={() => setFilterType('electric')}
          >
            Electric
          </Button>
          <Button
            variant={filterType === 'sport' ? 'default' : 'outline'}
            onClick={() => setFilterType('sport')}
          >
            Sport
          </Button>
          <Button
            variant={filterType === 'suv' ? 'default' : 'outline'}
            onClick={() => setFilterType('suv')}
          >
            SUV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCars.map(car => (
          <Card key={car.id} className="overflow-hidden">
            <img
              src={car.image}
              alt={`${car.brand} ${car.model}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{car.brand} {car.model}</h3>
                  <p className="text-gray-600">{car.year}</p>
                </div>
                <span className="text-xl font-bold">${car.price}/day</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">Type: {car.type}</p>
              <Button 
                className="w-full"
                variant={car.available ? 'default' : 'outline'}
                disabled={!car.available}
              >
                {car.available ? 'Rent Now' : 'Currently Unavailable'}
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
