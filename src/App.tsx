import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (showResumeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showResumeModal]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 selection:bg-blue-600/10 selection:text-blue-700 antialiased">
      {/* All primary sections will be hidden when printing, displaying only the resume page */}
      <div className="print:hidden flex flex-col min-h-screen">
        <Navbar onOpenResume={() => setShowResumeModal(true)} />
        
        <main className="flex-grow">
          <Home onOpenResume={() => setShowResumeModal(true)} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Interactive Resume View */}
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </div>
  );
}
