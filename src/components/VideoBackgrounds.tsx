import { motion } from "motion/react";
import { X, Youtube, Instagram as InstagramIcon, Facebook } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getVideoBackgroundsText } from "../translations/videoBackgrounds";

export function VideoBackgrounds() {
  const { language } = useLanguage();
  const t = getVideoBackgroundsText(language);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const carvingVideoRef = useRef<HTMLVideoElement>(null);
  const powderVideoRef = useRef<HTMLVideoElement>(null);

  // Ensure videos are muted on mount
  useEffect(() => {
    if (carvingVideoRef.current) {
      carvingVideoRef.current.volume = 0;
      carvingVideoRef.current.muted = true;
    }
    if (powderVideoRef.current) {
      powderVideoRef.current.volume = 0;
      powderVideoRef.current.muted = true;
    }
  }, []);

  const openVideo = (videoType: string) => {
    setPlayingVideo(videoType);
  };

  const closeVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <section id="videos" className="bg-slate-950">
      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all z-10"
            aria-label="Close video"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="w-full max-w-6xl aspect-video">
            <div className="text-center text-white text-xl">
              {playingVideo === "carving" ? "Carving Video" : "Freeride Video"}
              <p className="text-slate-400 text-sm mt-2">Dodaj swój film tutaj poprzez panel CMS</p>
            </div>
          </div>
        </div>
      )}

      {/* Social Media Section */}
      <div className="pt-8 pb-12 bg-slate-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
        </div>
      </div>

      {/* Carving Video Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900">
          <video
            className="w-full h-full object-cover opacity-90"
            autoPlay
            loop
            muted
            playsInline
            ref={carvingVideoRef}
          >
            <source src="https://www.dropbox.com/scl/fi/v08xmfvaf7cu2iiyt5qwz/Untitled-18-2.mp4?rlkey=2t1vxlwcnoluw80lxzw16bdn0&st=kbtte5yg&raw=1" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="-mt-[8vh] md:mt-0"
              >
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30 text-blue-300 text-sm mb-4">
                    {t.carvingLabel}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-3 leading-tight">
                  {t.carvingTitle1}<br />{t.carvingTitle2}<br />{t.carvingTitle3}
                </h2>
                <div className="space-y-4 text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
                  <p>
                    {t.carvingP1}
                  </p>
                </div>
                <div className="mt-[20vh] md:mt-20 space-y-4 text-lg md:text-xl text-slate-200 leading-relaxed">
                  <p className="text-slate-300">
                    {t.carvingP2}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-2xl md:text-3xl text-white italic">
                    {t.carvingQuote}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Powder/Freeride Video Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950">
          <video
            className="w-full h-full object-cover opacity-90"
            autoPlay
            loop
            muted
            playsInline
            ref={powderVideoRef}
          >
            <source src="https://www.dropbox.com/scl/fi/nnuk2zjaysqn3pmjqxyeh/Untitled-18.mp4?rlkey=q39x89ldpvlm0paohtnarz5a2&st=xj8j79me&raw=1" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/50"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl ml-auto text-right">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-6 flex justify-end">
                  <span className="inline-block px-4 py-2 bg-slate-600/20 backdrop-blur-sm rounded-full border border-slate-400/30 text-slate-300 text-sm mb-4">
                    {t.freerideLabel}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                  {t.freerideTitle1}<br />{t.freerideTitle2}<br />{t.freerideTitle3}
                </h2>
                <div className="space-y-4 text-lg md:text-xl text-slate-200 leading-relaxed">
                  <p>
                    {t.freerideP1}
                  </p>
                  <p className="text-slate-300">
                    {t.freerideP2} <span className="text-white italic">{t.freerideP2Highlight}</span> {t.freerideP2Rest}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-2xl md:text-3xl text-white italic">
                    {t.freerideQuote}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}