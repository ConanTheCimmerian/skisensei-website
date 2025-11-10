import { motion } from "motion/react";
import { Play } from "lucide-react";

export function VideoGallery() {
  // Placeholder YouTube video IDs - replace with your actual video IDs
  const videos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Epic Powder Day - Freeriding",
      thumbnail: "https://images.unsplash.com/photo-1577496106583-a0eeee8e6d8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2klMjBmcmVlcmlkaW5nJTIwcG93ZGVyfGVufDF8fHx8MTc2MjY3NzU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Carving Technique Breakdown",
      thumbnail: "https://images.unsplash.com/photo-1685694590593-a0fe68b8d9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lpbmclMjBhY3Rpb24lMjBzbm93fGVufDF8fHx8MTc2MjY3NzU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Ski Touring in the Alps",
      thumbnail: "https://images.unsplash.com/photo-1611596485841-6f1469c651ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2klMjB0b3VyaW5nJTIwbW91bnRhaW58ZW58MXx8fHwxNzYyNjc3NTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Advanced Turns Tutorial",
      thumbnail: "https://images.unsplash.com/photo-1554190907-8bce2d9036c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHNraWluZyUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NjI2Nzc1OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Backcountry Safety Tips",
      thumbnail: "https://images.unsplash.com/photo-1535957951857-aac81990a590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2klMjBpbnN0cnVjdG9yJTIwbW91bnRhaW58ZW58MXx8fHwxNzYyNjc3NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Season Highlights Compilation",
      thumbnail: "https://images.unsplash.com/photo-1698288737415-785ea89bad9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbHBpbmUlMjBza2lpbmclMjBjYXJ2aW5nfGVufDF8fHx8MTc2MjY3NzU5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="videos" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Moje Osiągnięcia na Filmie
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Bogate portfolio filmów z moich narciarskich przygód. Od techniki carvingu po dzikie freeride'owe zjazdy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer"
              onClick={() => window.open(`https://youtube.com/watch?v=${video.id}`, '_blank')}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-blue-500">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full transition-all transform hover:scale-105"
          >
            Zobacz Pełny Kanał YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
}