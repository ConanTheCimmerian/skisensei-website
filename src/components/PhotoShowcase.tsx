import { motion } from "motion/react";
import { useState } from "react";
import Masonry from "react-responsive-masonry";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Category = "all" | "carving" | "freeriding" | "touring";

export function PhotoShowcase() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  // Placeholder photos - replace with your actual photos
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1698288737415-785ea89bad9e?w=800",
      category: "carving",
      alt: "Carving on groomed slopes",
    },
    {
      src: "https://images.unsplash.com/photo-1577496106583-a0eeee8e6d8f?w=800",
      category: "freeriding",
      alt: "Powder skiing",
    },
    {
      src: "https://images.unsplash.com/photo-1611596485841-6f1469c651ec?w=800",
      category: "touring",
      alt: "Ski touring adventure",
    },
    {
      src: "https://images.unsplash.com/photo-1685694590593-a0fe68b8d9b4?w=800",
      category: "carving",
      alt: "Alpine skiing action",
    },
    {
      src: "https://images.unsplash.com/photo-1554190907-8bce2d9036c1?w=800",
      category: "touring",
      alt: "Mountain landscape skiing",
    },
    {
      src: "https://images.unsplash.com/photo-1535957951857-aac81990a590?w=800",
      category: "freeriding",
      alt: "Off-piste skiing",
    },
    {
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
      category: "carving",
      alt: "Perfect carving technique",
    },
    {
      src: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=800",
      category: "freeriding",
      alt: "Deep powder run",
    },
    {
      src: "https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?w=800",
      category: "touring",
      alt: "Backcountry skiing",
    },
  ];

  const filteredPhotos = activeCategory === "all" 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

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
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Galeria
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Chwile uchwycone na górze
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {(["all", "carving", "freeriding", "touring"] as Category[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-all ${
                  activeCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {category === "all" ? "Wszystkie" : category === "carving" ? "Carving" : category === "freeriding" ? "Freeride" : "Ski touring"}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <Masonry columnsCount={3} gutter="1rem">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white capitalize">{photo.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </div>
    </section>
  );
}