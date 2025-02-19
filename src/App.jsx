import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import ScrollProgress from './components/design/ScrollProgress';
import FloatingNav from './components/design/FloatingNav';
import ParticlesBackground from './components/common/ParticlesBackground';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-dark text-gray-100">
        <div className="fixed inset-0 z-0">
          <ParticlesBackground />
        </div>
        <div className="relative z-10">
          <ScrollProgress />
          <Navbar />
          <main className="pt-16">
            <AppRoutes />
          </main>
          <FloatingNav />
        </div>
      </div>
    </Router>
  );
}

export default App;
