
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './landing_page/home/Homepage';
import SignUp from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFoundPage from './landing_page/NotFoundPage';
import ProductPage from './landing_page/products/ProductPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <main className="lp-main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

reportWebVitals();
