import { motion } from "motion/react";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InstagramFeed() {
  // Placeholder Instagram posts - replace with your actual content
  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1698288737415-785ea89bad9e?w=600",
      likes: 324,
      comments: 18,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1577496106583-a0eeee8e6d8f?w=600",
      likes: 567,
      comments: 32,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1611596485841-6f1469c651ec?w=600",
      likes: 412,
      comments: 24,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1685694590593-a0fe68b8d9b4?w=600",
      likes: 689,
      comments: 45,
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1554190907-8bce2d9036c1?w=600",
      likes: 523,
      comments: 28,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1535957951857-aac81990a590?w=600",
      likes: 789,
      comments: 56,
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600",
      likes: 445,
      comments: 19,
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=600",
      likes: 891,
      comments: 67,
    },
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-10 h-10 text-pink-500" />
            <h2 className="text-4xl md:text-5xl text-white">
              Śledź Moje Przygody
            </h2>
          </div>
          <p className="text-xl text-slate-300 mb-6">
            Codzienne relacje ze stoków
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all transform hover:scale-105"
          >
            @SkiSensei
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <ImageWithFallback
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-6 h-6" fill="currentColor" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="w-6 h-6" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}