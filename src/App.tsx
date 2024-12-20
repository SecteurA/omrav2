import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const TravelTipsPage = React.lazy(() => import('./pages/TravelTipsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const BookingPage = React.lazy(() => import('./pages/BookingPage'));
const RamadanOmrahPage = React.lazy(() => import('./pages/RamadanOmrahPage'));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/travel-tips" element={<TravelTipsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/ramadan-omrah" element={<RamadanOmrahPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;