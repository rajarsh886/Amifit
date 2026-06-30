import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton"
import LandingPage from "./pages/LandingPage";
import Exercisecountercards from "./pages/CounterPage"
import Recommendation from "./pages/RecommendationPage"
import BMICalculatorPage from "./pages/BMICalculatorPage"
import BMRCalculatorPage from "./pages/BMRCalculatorPage"
import CalorieCalculatorPage from "./pages/CalorieCalculatorPage"
import ContactPage from './pages/ContactPage';
import "./index.css"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Counter" element={<Exercisecountercards />} />
            <Route path="/recommendation" element={<Recommendation />} />
            <Route path="/BMICalculatorPage" element={<BMICalculatorPage />} />
            <Route path="/BMRCalculatorPage" element={<BMRCalculatorPage />} />
            <Route path="/CalorieCalculatorPage" element={<CalorieCalculatorPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
