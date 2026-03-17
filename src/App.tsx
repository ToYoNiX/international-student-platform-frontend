import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
// Pages
import { Dashboard } from './pages/Dashboard';
import { Academics } from './pages/Academics';
import { Schedule } from './pages/Schedule';
import { SubmitRequest } from './pages/SubmitRequest';
import { MyRequests } from './pages/MyRequests';
import { Announcements } from './pages/Announcements';
import { Notifications } from './pages/Notifications';
import { StudentServices } from './pages/StudentServices';
import { Chat } from './pages/Chat';
import { Profile } from './pages/Profile';
import { Settings } from './pages/Settings';
import { ProfileProvider } from './contexts/ProfileContext';
import { RequestsProvider } from './contexts/RequestsContext';
import { LanguageProvider, Language, useLanguage } from './contexts/LanguageContext';

export type PageType =
| 'dashboard'
| 'academics'
| 'schedule'
| 'submit-request'
| 'my-requests'
| 'announcements'
| 'notifications'
| 'services'
| 'chat'
| 'profile'
| 'settings';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');
  const [darkMode, setDarkMode] = useState(false);
  const { language, dispatch: languageDispatch } = useLanguage();

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLanguage = (lang: Language) => {
    languageDispatch({ type: 'SET_LANGUAGE', payload: lang });
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  // Load dark mode from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode !== darkMode) {
      setDarkMode(savedDarkMode);
      document.documentElement.classList.toggle('dark', savedDarkMode);
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigate} darkMode={darkMode} />;
      case 'academics':
        return <Academics />;
      case 'schedule':
        return <Schedule />;
      case 'submit-request':
        return <SubmitRequest onNavigate={handleNavigate} />;
      case 'my-requests':
        return <MyRequests />;
      case 'announcements':
        return <Announcements />;
      case 'notifications':
        return <Notifications />;
      case 'services':
        return <StudentServices onNavigate={handleNavigate} />;

      case 'chat':
        return <Chat />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onNavigate={handleNavigate} darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-dark-bg' : 'bg-surface-100'}`}>
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onToggleLanguage={toggleLanguage}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />
      <main className="flex-grow flex flex-col relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex-grow flex flex-col w-full">
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <ProfileProvider>
        <RequestsProvider>
          <AppContent />
        </RequestsProvider>
      </ProfileProvider>
    </LanguageProvider>
  );
}
