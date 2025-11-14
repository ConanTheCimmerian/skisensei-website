import { motion } from "motion/react";
import { Youtube, Camera, Film, Instagram as InstagramIcon, Users, Handshake, Facebook } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getPortfolioText } from "../translations/portfolio";

export function Portfolio() {
  const { language } = useLanguage();
  const t = getPortfolioText(language);
  
  return (
    <section id="gallery" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            {t.title}
          </h2>
          <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
            <p>
              {t.paragraph1}
            </p>
            <p>
              {t.paragraph2}
            </p>
            <p className="text-xl text-white">
              {t.paragraph3}
            </p>
          </div>
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
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-slate-700/50">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Camera className="w-8 h-8 text-blue-400" />
              <Film className="w-8 h-8 text-blue-400" />
            </div>
            <p className="text-xl text-center text-white mb-4">
              {t.creationTitle}
            </p>
            <p className="text-slate-300 text-center leading-relaxed mb-6">
              {t.creationSubtitle}
            </p>
            
            {/* Video Production Services */}
            <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-6 mb-6">
              <p className="text-blue-200 text-center leading-relaxed">
                <span className="text-white font-semibold">{t.videoProductionTitle}</span> {t.videoProductionText}
              </p>
              <p className="text-slate-400 text-center text-sm mt-3">
                {t.videoProductionDetails}
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-6"></div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-6 h-6 text-blue-400" />
              <Handshake className="w-6 h-6 text-blue-400" />
            </div>
            <p className="text-slate-300 text-center leading-relaxed">
              {t.brandCollabText} <span className="text-white">{t.brandCollabHighlight}</span> {t.brandCollabText2}{" "}
              <span className="text-blue-400">{t.brandCollabTypes}</span>{t.brandCollabEnd}
            </p>
            
            {/* Partners & Affiliates */}
            <div className="mt-6 pt-6 border-t border-slate-700/50">
              <p className="text-slate-400 text-center mb-4">
                {t.partnersTitle}
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
                    {" "}{t.insta360Description}
                  </p>
                  <p className="text-slate-400 text-sm text-center mt-2">
                    {t.affiliateCode} <span className="text-white font-mono">INREVW0</span>
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
                    {" "}{t.modernHousesDescription}
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-sm text-center mt-4 leading-relaxed">
                {t.supportMessage}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}