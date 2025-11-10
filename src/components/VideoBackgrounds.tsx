import { motion } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";

export function VideoBackgrounds() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

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
                    Carving
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-3 leading-tight">
                  Precyzja.<br />Technika.<br />Harmonia.
                </h2>
                <div className="space-y-4 text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
                  <p>
                    Carving to harmonia ciała i umysłu. 
                    Każdy skręt to efekt precyzji, równowagi i kontroli nad siłami działającymi na nartę.
                  </p>
                </div>
                <div className="mt-[20vh] md:mt-20 space-y-4 text-lg md:text-xl text-slate-200 leading-relaxed">
                  <p className="text-slate-300">
                    To taniec z grawitacją — gdzie każdy detal ma znaczenie. 
                    Perfekcja ruchu, osiągana dzięki odpowiednim ćwiczeniom, tysiącom powtórzeń skrętów i szczegółową analizą biomechaniki oraz fizyki w narciarstwie.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-2xl md:text-3xl text-white italic">
                    "SkiSensei - Carve your skill."
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
                    Freeride
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                  Emocje.<br />Lekkość.<br />Adrenalina.
                </h2>
                <div className="space-y-4 text-lg md:text-xl text-slate-200 leading-relaxed">
                  <p>
                    Freeride to wolność, ale też świadoma decyzja. To odwaga przełamywania granic 
                    i szacunek do góry w jednym.
                  </p>
                  <p className="text-slate-300">
                    Od głębokiego <span className="text-white italic">norweskiego puchu</span> po zmienne tereny — 
                    nauczę Cię adaptować technikę do każdej sytuacji.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-2xl md:text-3xl text-white italic">
                    "Beyond limits. Beyond fear."
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