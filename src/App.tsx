import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { PhilosophyQuote } from "./components/PhilosophyQuote";
import { About } from "./components/About";
import { VideoBackgrounds } from "./components/VideoBackgrounds";
import { Portfolio } from "./components/Portfolio";
import { MediaGallery } from "./components/MediaGallery";
import { Pricing } from "./components/Pricing";
import { Availability } from "./components/Availability";
import { Contact } from "./components/Contact";
// import { AdminPanel } from "./components/AdminPanel"; // Disabled - Supabase connection issue

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <PhilosophyQuote />
      <VideoBackgrounds />
      <About />
      <Portfolio />
      <Availability />
      <Pricing />
      <Contact />
      <MediaGallery />
      {/* <AdminPanel /> */} {/* Disabled - Supabase connection issue */}
    </div>
  );
}