import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import ForgotPassword from './pages/ForgotPassword';
import Signup from './pages/Signup';
import Home from './pages/Home';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/users/Dashboard';
import Analytics from './pages/users/Analytics';
import Profile from './pages/users/Profile';
import Settings from './pages/users/Settings';
import Assets from './pages/users/Assets';
import { AppProvider } from './contexts/AppContext';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/auth/login" element={<Signin />} />
              <Route path="/auth/register" element={<Signup />} />
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />
              <Route path="*" element={<NotFound />} />

              {/* Protected/User Dashboard Routes */}
              <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/assets" element={<Assets />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
