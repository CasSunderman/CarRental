import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { AuthContext } from '../App';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, logout } = React.useContext(AuthContext);

  const isActive = (path: string) => location.pathname === path;
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home */}
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              className="text-xl font-bold"
              onClick={() => navigate('/')}
            >
              CarRental
            </Button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <Button 
                  variant={isActive('/') ? 'default' : 'ghost'}
                  onClick={() => navigate('/')}
                >
                  Home
                </Button>
                <Button 
                  variant={isActive('/login') ? 'default' : 'ghost'}
                  onClick={() => navigate('/login')}
                >
                  Login
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant={isActive('/dashboard') ? 'default' : 'ghost'}
                  onClick={() => navigate('/dashboard')}
                >
                  Dashboard
                </Button>
                <Button 
                  variant={isActive('/browse') ? 'default' : 'ghost'}
                  onClick={() => navigate('/browse')}
                >
                  Browse Cars
                </Button>
                <Button 
                  variant={isActive('/history') ? 'default' : 'ghost'}
                  onClick={() => navigate('/history')}
                >
                  Rentals
                </Button>
                <Button 
                  variant={isActive('/profile') ? 'default' : 'ghost'}
                  onClick={() => navigate('/profile')}
                >
                  Profile
                </Button>
                <Button 
                  variant="outline"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              className="inline-flex items-center justify-center p-2"
              onClick={() => {/* Add mobile menu toggle logic */}}
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu Icon */}
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
