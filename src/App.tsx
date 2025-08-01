import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { UserDashboard } from './components/UserDashboard';
import { CarBrowsing } from './components/CarBrowsing';
import { RentalHistory } from './components/RentalHistory';
import { ProfileSettings } from './components/ProfileSettings';
import { LicenseVerification } from './components/LicenseVerification';
import { Navigation } from './components/Navigation';

// Simple auth context
export const AuthContext = React.createContext<{
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const authContext = {
    isAuthenticated,
    login: () => setIsAuthenticated(true),
    logout: () => setIsAuthenticated(false),
  };

  return (
    <AuthContext.Provider value={authContext}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <main className="pt-4">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              
              {/* Protected Routes */}
              <Route 
                path="/dashboard" 
                element={
                  <PrivateRoute>
                    <UserDashboard />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/browse" 
                element={
                  <PrivateRoute>
                    <CarBrowsing />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/history" 
                element={
                  <PrivateRoute>
                    <RentalHistory />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/profile" 
                element={
                  <PrivateRoute>
                    <ProfileSettings />
                  </PrivateRoute>
                } 
              />
              <Route 
                path="/verify-license" 
                element={
                  <PrivateRoute>
                    <LicenseVerification />
                  </PrivateRoute>
                } 
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthContext.Provider>
  );
};
