import { motion } from "motion/react";
import { Play, Camera } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { defaultPortfolioImages } from "../data/defaultPortfolio";

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

  const categories = [
    { id: "all" as Category, label: "Wszystko" },
    { id: "freeride" as Category, label: "Freeride" },
    { id: "skitouring" as Category, label: "Skitouring" },
    { id: "carving" as Category, label: "Carving" },
    { id: "norwegia" as Category, label: "Norwegia" },
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
    <section id="media-gallery" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Galeria
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Zdjęcia z moich narciarskich przygód w norweskich górach
          </p>
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