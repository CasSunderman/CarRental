import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  licenseExpiry: string;
  licenseVerified: boolean;
}

export const ProfileSettings = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    licenseNumber: 'DL123456789',
    licenseExpiry: '2027-12-31',
    licenseVerified: true
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save the changes to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <Input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({...profile, email: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            {isEditing ? (
              <Button onClick={handleSave} className="w-full">Save Changes</Button>
            ) : (
              <Button onClick={() => setIsEditing(true)} variant="outline" className="w-full">
                Edit Profile
              </Button>
            )}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Driver's License Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">License Number</label>
              <Input
                type="text"
                value={profile.licenseNumber}
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Expiry Date</label>
              <Input
                type="text"
                value={profile.licenseExpiry}
                disabled
              />
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${profile.licenseVerified ? 'bg-green-500' : 'bg-red-500'}`}></span>
                <span className={profile.licenseVerified ? 'text-green-700' : 'text-red-700'}>
                  {profile.licenseVerified ? 'License Verified' : 'License Not Verified'}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {profile.licenseVerified 
                  ? "Your digital driver's license has been verified and is up to date."
                  : "Please verify your digital driver's license to rent cars."}
              </p>
            </div>
            <Button 
              variant="outline" 
              className="w-full"
              disabled={profile.licenseVerified}
            >
              {profile.licenseVerified ? 'License Up to Date' : 'Verify License'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
    );
}
