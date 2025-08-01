import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';

interface VerificationStep {
  id: number;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'error';
}

export const LicenseVerification = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [verificationSteps, setVerificationSteps] = useState<VerificationStep[]>([
    {
      id: 1,
      title: 'Open Mobile Driver\'s License App',
      description: 'Launch your mobile driver\'s license application on your phone',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Scan QR Code',
      description: 'Use your phone\'s camera to scan the QR code displayed below',
      status: 'pending'
    },
    {
      id: 3,
      title: 'Verify Identity',
      description: 'Confirm your identity using biometric authentication in your mobile app',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Share License Data',
      description: 'Approve the sharing of your license information',
      status: 'pending'
    }
  ]);

  const startVerification = () => {
    setVerificationSteps(steps => 
      steps.map((step, index) => ({
        ...step,
        status: index === 0 ? 'in-progress' : 'pending'
      }))
    );
    setCurrentStep(0);
  };

  const getStatusColor = (status: VerificationStep['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'in-progress':
        return 'text-blue-600 bg-blue-100';
      case 'error':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">License Verification</h1>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Verify Your Driver's License</h2>
        <p className="text-gray-600 mb-6">
          Follow these steps to verify your mobile driver's license. Make sure you have your
          mobile driver's license app installed and ready.
        </p>
        <Button 
          onClick={startVerification}
          disabled={currentStep > 0}
          className="w-full md:w-auto"
        >
          Start Verification
        </Button>
      </Card>

      <div className="space-y-4">
        {verificationSteps.map((step, index) => (
          <Card 
            key={step.id}
            className={`p-6 ${currentStep === index ? 'ring-2 ring-blue-500' : ''}`}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(step.status)}`}>
                {step.status === 'completed' ? '✓' : step.id}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {step.status === 'in-progress' && (
                  <div className="mt-4">
                    <Button
                      onClick={() => {
                        setVerificationSteps(steps =>
                          steps.map((s, i) => ({
                            ...s,
                            status: i === index ? 'completed' : 
                                    i === index + 1 ? 'in-progress' : s.status
                          }))
                        );
                        setCurrentStep(index + 1);
                      }}
                      className="w-full md:w-auto"
                    >
                      Complete Step
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
