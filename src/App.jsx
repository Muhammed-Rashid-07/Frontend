import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import StudentDashboard from './pages/student/Dashboard';
import OrganizerDashboard from './pages/organizer/Dashboard';
import AdminDashboard from './pages/admin/Dashboard';
import EventDetails from './pages/EventDetails';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student/*" element={<StudentDashboard />} />
          <Route path="/organizer/*" element={<OrganizerDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;