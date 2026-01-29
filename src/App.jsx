import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const LearningPage = lazy(() => import('./pages/LearningPage'));
const WorkshopsPage = lazy(() => import('./pages/WorkshopsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const ElectronicsPage = lazy(() => import('./pages/ElectronicsPage'));
const NotFoundPage = lazy(() => import('./components/demo-404'));

// Minimal fallback loader
const PageLoader = () => (
  <div className="min-h-screen w-full flex items-center justify-center bg-black">
    <div className="w-8 h-8 border-4 border-gray-800 border-t-red-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="learning" element={<LearningPage />} />
            <Route path="workshops" element={<WorkshopsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="auth" element={<AuthPage />} />
            <Route path="electronics" element={<ElectronicsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
