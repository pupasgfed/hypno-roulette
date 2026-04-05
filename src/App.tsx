import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CreatorShowcase from './components/CreatorShowcase';
import Home from './pages/Home';
import SimpleRoulette from './pages/SimpleRoulette';
import SessionGenerator from './pages/SessionGenerator';
import ChooseYourAdventure from './pages/ChooseYourAdventure';

function App() {
  return (
    <BrowserRouter basename="/hypno-roulette">
      <div className="flex flex-col min-h-screen bg-brand-dark">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roulette" element={<SimpleRoulette />} />
            <Route path="/session" element={<SessionGenerator />} />
            <Route path="/adventure" element={<ChooseYourAdventure />} />
          </Routes>
        </main>
        <CreatorShowcase />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
