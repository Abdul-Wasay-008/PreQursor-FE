import { useEffect } from 'react';
import HomeNavBar from './components/HomeNavBar';
import HeroSection from './components/HeroSection';
import Games from './components/Games';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import EnrolledMatches from './pages/EnrolledMatches';
import MatchHistory from './pages/MatchHistory';
import PQHub from './pages/PQHub';
import ProtectedRoutes from './utils/ProtectedRoute';
import RewardsSystem from './pages/RewardsSystem';
import FooterLanding from './components/FooterLanding';
import TermsAndConditions from './pages/Terms&Conditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import PaymentMethod from './pages/PaymentMethod';
import PaymentStatus from './pages/PaymentStatus';
import Wallet from './pages/Wallet';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// carousel Setup (for small devices only)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// AOS Setup
import AOS from "aos";
import 'aos/dist/aos.css';

// Routing Setup
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// HomePage Component to group all homepage sections
const HomePage = () => {
  return (
    <div>
      <HomeNavBar />
      <HeroSection />
      <Games />
      <HowItWorks />
      <About />
      <Contact />
      <FooterLanding />
    </div>
  );
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
      {/* Toast controller */}
      <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/rewards-system" element={<RewardsSystem />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/paymentmethod" element={<PaymentMethod />} />
          <Route path="/payment/status" element={<PaymentStatus />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/dashboard" element={
              <>
                <Dashboard />
                <Footer />
              </>
            } />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/enrolled-matches" element={<EnrolledMatches />} />
            <Route path="/match-history" element={<MatchHistory />} />
            <Route path="/pqhub" element={<PQHub />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
