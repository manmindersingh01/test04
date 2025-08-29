import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import BookingPage from './pages/BookingPage';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import './index.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Toaster position="top-right" richColors />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;