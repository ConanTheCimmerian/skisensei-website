import { motion } from "motion/react";
import { Play, Camera, Film, Youtube, Instagram as InstagramIcon, Facebook, Users, Handshake } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { defaultPortfolioImages } from "../data/defaultPortfolio";
import { useLanguage } from "../contexts/LanguageContext";
import { getMediaGalleryText } from "../translations/mediaGallery";
import { getPortfolioText } from "../translations/portfolio";

type Category = "all" | "freeride" | "skitouring" | "carving" | "norwegia";

interface MediaItem {
  id: string;
  title: string;
  category: Category;
  type: "video" | "photo";
  thumbnail: string;
  videoUrl?: string;
}

export function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    loadMediaItems();
  }, []);

  const loadMediaItems = async () => {
    try {
      const data = await api.getPortfolio();
      if (data && Array.isArray(data) && data.length > 0) {
        setMediaItems(data);
      } else {
        // Użyj domyślnych zdjęć jeśli portfolio jest puste
        setMediaItems(defaultPortfolioImages);
      }
    } catch (error) {
      console.error("Error loading media items:", error);
      // W przypadku błędu również użyj domyślnych zdjęć
      setMediaItems(defaultPortfolioImages);
    }
  };

  const { language } = useLanguage();
  const text = getMediaGalleryText(language);
  const portfolioText = getPortfolioText(language);

  const categories = [
    { id: "all" as Category, label: text.allVideos },
    { id: "freeride" as Category, label: text.freeride },
    { id: "skitouring" as Category, label: text.skitouring },
    { id: "carving" as Category, label: text.carving },
    { id: "norwegia" as Category, label: text.norway },
  ];

  const filteredItems = activeCategory === "all" 
    ? mediaItems 
    : mediaItems.filter(item => item.category === activeCategory);

  const openVideo = (videoUrl: string) => {
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      window.open(videoUrl, '_blank');
    } else {
      setSelectedVideo(videoUrl);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            {text.title}
          </h2>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
            {text.subtitle}
          </p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a
              href="https://www.youtube.com/@TheSkiSensei"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg shadow-red-600/20"
            >
              <Youtube className="w-5 h-5" />
              <span>YouTube</span>
            </a>
            <a
              href="https://instagram.com/skisensei"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all transform hover:scale-105 shadow-lg shadow-purple-600/20"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@skisensei"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-black hover:bg-gray-900 text-white rounded-full transition-all transform hover:scale-105 shadow-lg shadow-black/20"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span>TikTok</span>
            </a>
            <a
              href="https://facebook.com/SkiwithmeNorway"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full transition-all transform hover:scale-105 shadow-lg shadow-blue-700/20"
            >
              <Facebook className="w-5 h-5" />
              <span>Facebook</span>
            </a>
          </div>
        </motion.div>

        {/* Creator Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-700/50">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Camera className="w-8 h-8 text-blue-400" />
              <Film className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-xl text-center text-white mb-4">
              {portfolioText.creationTitle}
            </p>
            <p className="text-slate-300 text-center leading-relaxed mb-6">
              {portfolioText.creationSubtitle}
            </p>
            
            {/* Video Production Services */}
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-6 mb-6">
              <p className="text-blue-200 text-center leading-relaxed">
                <span className="text-white font-semibold">{portfolioText.videoProductionTitle}</span> {portfolioText.videoProductionText}
              </p>
              <p className="text-slate-400 text-center text-sm mt-3">
                {portfolioText.videoProductionDetails}
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-blue-400" />
              <Handshake className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-slate-300 text-center leading-relaxed">
              {portfolioText.brandCollabText} <span className="text-white">{portfolioText.brandCollabHighlight}</span> {portfolioText.brandCollabText2}{" "}
              <span className="text-blue-400">{portfolioText.brandCollabTypes}</span>{portfolioText.brandCollabEnd}
            </p>
            
            {/* Partners & Affiliates */}
            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-slate-400 text-center mb-4">
                {portfolioText.partnersTitle}
              </p>
              <div className="space-y-3">
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-slate-300 text-center">
                    <a 
                      href="https://www.insta360.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Insta360.com
                    </a>
                    {" "}{portfolioText.insta360Description}
                  </p>
                  <p className="text-slate-400 text-sm text-center mt-2">
                    {portfolioText.affiliateCode} <span className="text-white font-mono">INREVW0</span>
                  </p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/30">
                  <p className="text-slate-300 text-center">
                    <a 
                      href="https://www.modern-houses.eu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Modern-houses.eu
                    </a>
                    {" "}{portfolioText.modernHousesDescription}
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-sm text-center mt-4 leading-relaxed">
                {portfolioText.supportMessage}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
                onClick={() => item.type === "video" && item.videoUrl ? openVideo(item.videoUrl) : null}
              >
                <ImageWithFallback
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600/80 backdrop-blur-sm flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-blue-500">
                    {item.type === "video" ? (
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    ) : (
                      <Camera className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>

                {/* Title & Category */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block px-2 py-1 bg-blue-600/80 backdrop-blur-sm rounded text-xs text-white mb-2">
                    {item.category}
                  </span>
                  <p className="text-white">{item.title}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-slate-400 text-lg">
                Brak materiałów w tej kategorii. Dodaj je przez panel CMS.
              </p>
            </div>
          )}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all"
            >
              <span className="text-white text-2xl">×</span>
            </button>
            <div className="w-full max-w-6xl aspect-video">
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}