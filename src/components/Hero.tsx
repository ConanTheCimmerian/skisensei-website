import { motion } from "motion/react";
import { ChevronDown, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { api } from "../utils/api";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Domyślne ustawienia YouTube video
const DEFAULT_YOUTUBE_VIDEO_ID = "bxorxvJnoDc"; // Poprzedni film YouTube
const DEFAULT_VIDEO_START_TIME = 0; // Start od początku
const DEFAULT_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

export function Hero() {
  const [youtubeVideoId, setYoutubeVideoId] = useState(DEFAULT_YOUTUBE_VIDEO_ID);
  const [videoStartTime, setVideoStartTime] = useState(DEFAULT_VIDEO_START_TIME);
  const [fallbackImage, setFallbackImage] = useState(DEFAULT_FALLBACK_IMAGE);
  const [subtitle, setSubtitle] = useState("POL-SKI Instructor Narciarstwa Zjazdowego • Level 3 + ISIA STAMP");
  const [caption, setCaption] = useState("Precision. Patience. Power.");
  const [useYouTube, setUseYouTube] = useState(true);
  const [currentCaptionIndex, setCurrentCaptionIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);

  // Rotating captions - wartości z narciarstwa i karate
  const rotatingCaptions = [
    "Precision. Patience. Power.",
    "Discipline. Focus. Excellence.",
    "Balance. Control. Harmony.",
    "Technique. Spirit. Passion.",
    "Respect. Dedication. Progress.",
    "Mind. Body. Mountain.",
    "Keep Going. Keep Growing.",
    "Mountains Are My Dojo.",
    "From White Belt to Black Slope.",
    "From White Slope to Black Belt.",
    "Respect the Mountain. Conquer Yourself.",
    "Every Turn. Every Edge.",
    "Flow. Grace. Speed.",
    "Master Your Movement.",
    "Feel the Snow. Read the Mountain.",
    "Perfection Through Repetition.",
    "The Way of the Ski.",
    "Train Like a Sensei.",
    "Embrace the Journey.",
    "Carve Your Skill With Me",
  ];

  useEffect(() => {
    loadData();
  }, []);

  // Rotating captions effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCaptionIndex((prev) => (prev + 1) % rotatingCaptions.length);
    }, 3000); // Zmiana co 3 sekundy
    return () => clearInterval(interval);
  }, [rotatingCaptions.length]);

  const loadData = async () => {
    try {
      const [heroData, texts] = await Promise.all([
        api.getHeroVideo(),
        api.getTexts(),
      ]);
      
      console.log("✅ Hero - Załadowane dane video z CMS:", heroData);
      console.log("✅ Hero - Załadowane teksty z CMS:", texts);
      
      if (heroData && heroData.youtubeVideoId) {
        setYoutubeVideoId(heroData.youtubeVideoId);
        console.log("🎥 Hero - Używam YouTube ID z CMS:", heroData.youtubeVideoId);
      } else {
        console.log("⚠️ Hero - Brak YouTube ID w CMS, używam domyślnego");
      }

      if (heroData && heroData.fallbackImage) {
        setFallbackImage(heroData.fallbackImage);
      }

      if (heroData && heroData.caption) {
        setCaption(heroData.caption);
      }

      if (heroData && heroData.videoStartTime !== undefined) {
        setVideoStartTime(heroData.videoStartTime);
      }
      
      if (texts && texts.heroSubtitle) {
        setSubtitle(texts.heroSubtitle);
      }
    } catch (error) {
      console.error("❌ Hero - Błąd podczas ładowania danych:", error);
    }
  };

  // Buduj YouTube embed URL
  const getYouTubeEmbedUrl = () => {
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      controls: '0',
      showinfo: '0',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      enablejsapi: '1',
      playlist: youtubeVideoId, // Wymagane dla loop
      start: videoStartTime.toString(),
    });
    return `https://www.youtube.com/embed/${youtubeVideoId}?${params.toString()}`;
  };

  const videoRef = useRef<HTMLIFrameElement>(null);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* YouTube Video Background */}
      {useYouTube ? (
        <div className="absolute inset-0 w-full h-full">
          {/* iframe musi być większy żeby pokryć cały ekran bez czarnych pasków */}
          <div className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2">
            <iframe
              ref={videoRef}
              src={getYouTubeEmbedUrl()}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full pointer-events-none"
              title="Ski Sensei Background Video"
              onError={() => setVideoError(true)}
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80 pointer-events-none"></div>
        </div>
      ) : (
        /* Fallback Image */
        <div className="absolute inset-0">
          <ImageWithFallback
            src={fallbackImage}
            alt="Ski Sensei Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-between pt-32 md:pt-40 pb-20 text-center px-4 z-10">
        {/* Top Section - Logo, Subtitle and Rotating Caption */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-5xl"
        >
          <div className="mb-8">
            <div className="flex items-center justify-center gap-6 mb-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight font-[Kaushan_Script]">
                SKI SENSEI
              </h1>
              <ImageWithFallback 
                src="https://www.dropbox.com/scl/fi/0imdusx115il3cbv7g4wa/1000063591.png?rlkey=i7yu0qmsz2vcfbttxv4o5oddd&st=z9vjdvv9&raw=1"
                alt="SkiSensei Logo"
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain"
              />
            </div>
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-slate-200 tracking-wide mb-6">
              {subtitle}
            </p>
            {/* Static Karate Spirit line */}
            <p className="text-base md:text-lg text-slate-400 mb-3 tracking-wide">
              In Spirit of Karate
            </p>
            {/* Rotating Caption */}
            <motion.p
              key={currentCaptionIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl text-slate-300 italic"
            >
              {rotatingCaptions[currentCaptionIndex]}
            </motion.p>
          </div>
        </motion.div>

        {/* Bottom Section - Buttons */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-white text-slate-950 hover:bg-slate-100 rounded-full transition-all transform hover:scale-105"
            >
              Poznaj Mnie
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white rounded-full transition-all border border-white/20"
            >
              Zarezerwuj Lekcję
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}