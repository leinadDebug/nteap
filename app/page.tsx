// File: pages/index.tsx

import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JoinCommunitySection from "./components/JoinCommunity";
import WhySection from "./components/WhySection";


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhySection />
      <JoinCommunitySection />
      <Footer />
    </div>
  );
}