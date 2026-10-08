// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Features from "./components/Features/Features";
// import HowItWorks from "./components/HowItWorks/HowItWorks";
// import Solutions from "./components/Solutions/Solutions";
// import Integrations from "./components/Integrations/Integrations";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Pricing from "./components/Pricing/Pricing";
// import FAQ from "./components/FAQ/FAQ";
// import CTA from "./components/CTA/CTA";
// import Footer from "./components/Footer/Footer";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Features />
//       <HowItWorks />
//       <Solutions />
//       <Integrations />
//       <Testimonials />
//       <Pricing />
//       <FAQ />
//       <CTA />
//       <Footer />
//     </>
//   );
// }

// export default App;



import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FeaturesPage from "./pages/Features";
import SolutionsPage from "./pages/Solutions";
import PricingPage from "./pages/Pricing";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/solutions" element={<SolutionsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;