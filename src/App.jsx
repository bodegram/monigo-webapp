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
import NotFound from './pages/NotFound';
import ResetPassword from './pages/ResetPassword';
import Predictions from './pages/users/Assets';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import './App.css'


function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/auth/login" element={<Signin />} />
              <Route path="/auth/register" element={<Signup />} />
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />
              <Route path="/auth/reset-password" element={<ResetPassword />} />

              <Route path="*" element={<NotFound />} />

              {/* Protected/User Dashboard Routes */}
              <Route element={<DashboardLayout />}>
                <Route path="/app" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/predictions" element={<Predictions />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AppProvider>
      </PersistGate>
    </Provider>

  );
}

export default App;
