import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { AuthContext } from '../App';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = React.useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVerifyingLicense, setIsVerifyingLicense] = useState(false);

  const handleLogin = () => {
    // Set verifying state
    setIsVerifyingLicense(true);
    
    // Redirect to SSI verification
    const ssiVerificationUrl = "https://oauth.ssi.ver.id/authorization/request" +
      "?code_challenge=3WOZ70YTSNfKzOp7bWHQbO20Yh9CoijUTR0e4vaQNB0" +
      "&code_challenge_method=S256" +
      "&client_id=01c0a76b-2e20-41bd-9679-b155ef19749b" +
      "&redirect_uri=localhost:3000/dashboard" +
      "&response_type=code" +
      "&state=6rGRPY6ta9yfrZg9k4WZ_KFsRxy_AH9KQnBjcrnSOZE" +
      "&scope=disclosure";

    // Redirect to the SSI verification URL
    window.location.href = ssiVerificationUrl;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Login to CarRental</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <Button 
            className="w-full" 
            onClick={handleLogin}
            disabled={isVerifyingLicense || !email || !password}
          >
            {isVerifyingLicense ? 'Verifying License...' : 'Login & Verify License'}
          </Button>
          
          <div className="text-center mt-4">
            <Button
              variant="link"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </div>
          
          {isVerifyingLicense && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                Please open your mobile driver's license app to verify your credentials...
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
