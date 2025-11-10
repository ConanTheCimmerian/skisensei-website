import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Mountain, AlertCircle, ExternalLink } from "lucide-react";

export function Availability() {
  return (
    <section id="availability" className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Dostępność & Harmonogram
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Sprawdź kiedy możesz zarezerwować lekcję
          </p>
          <div className="max-w-2xl mx-auto bg-blue-900/30 border border-blue-700/50 rounded-lg p-4">
            <p className="text-slate-200">
              ⚠️ <span className="text-white font-semibold">Ważne:</span> Podane godziny to dostępność do <span className="text-blue-300 font-semibold">rezerwacji lekcji</span>. Jeśli nie mam zarezerwowanej lekcji, nie jestem na stoku. 
              <span className="block mt-2 text-slate-300">Rezerwuj poprzez formularz kontaktowy, WhatsApp (+47 485 11 023), email lub Facebook.</span>
            </p>
          </div>

          {/* Calendar Link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-6"
          >
            <a
              href="https://calendar.app.google/qDvueDmXXPNrgUP96"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-slate-800/50 hover:bg-slate-800/70 border border-slate-700 rounded-lg p-4 transition-all group"
            >
              <Calendar className="w-5 h-5 text-blue-400" />
              <div className="flex-1 text-left">
                <p className="text-white group-hover:text-blue-300 transition-colors">
                  Zobacz poglądowy kalendarz dostępności
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  ℹ️ Nie wszystkie lekcje są w nim wprowadzane - ostateczne potwierdzenie przez wiadomości
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
            </a>
          </motion.div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Locations and Schedule */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Oslo Vinterpark */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl text-white mb-2">Oslo Vinterpark</h3>
                  <p className="text-slate-400">Tryvannsveien 64, Oslo</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white">Poniedziałek, Środa & Piątek</p>
                    <p className="text-slate-300">10:00 - 17:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-slate-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-white">Wtorek & Czwartek</p>
                    <p className="text-slate-300">10:00 - 21:00</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Kongsberg Skisenter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl text-white mb-2">Kongsberg Skisenter</h3>
                  <p className="text-slate-400">lub inne stoki Skimore</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="text-slate-300">
                  Lokalizacja alternatywna dostępna gdy:
                </p>
                <ul className="space-y-2 text-slate-300 ml-2">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Pogoda w Oslo jest beznadziejna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>Zbiorę lekcję na cały dzień w innym ośrodku Skimore</span>
                  </li>
                </ul>
                <p className="text-xs text-slate-500 mt-3">
                  Skontaktuj się aby sprawdzić dostępność
                </p>
              </div>
            </motion.div>
          </div>

          {/* Weekends & Custom Days */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 backdrop-blur-sm border border-blue-800/30 rounded-xl p-8 mb-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <Calendar className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl text-white mb-2">Weekendy & Exclusive Ski Experience</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                <p className="text-blue-200 mb-2">
                  <span className="text-white font-semibold">🎿 Weekendy - Priorytet:</span>
                </p>
                <ul className="space-y-2 text-slate-300 ml-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><span className="text-white">Full Day Booking:</span> Zarezerwuj cały dzień dostosowany do Twoich potrzeb</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><span className="text-white">Wymarzony Dzień na Nartach:</span> Opisz swój wymarzony dzień na nartach i zapytaj o dostępny termin. Zaplanuję dla Ciebie niezapomniane przeżycia i uwiecznię je na rolce z aparatu.</span>
                  </li>
                </ul>
              </div>

              <div className="text-slate-400 text-sm">
                💡 Pakiety indywidualne są normalnie priorytetowane od <span className="text-slate-200">poniedziałku do piątku</span>
              </div>
            </div>
          </motion.div>

          {/* Backcountry / Off-Piste Warning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-amber-900/20 backdrop-blur-sm border border-amber-700/30 rounded-xl p-8"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl text-white mb-3 flex items-center gap-2">
                  <Mountain className="w-5 h-5" />
                  Wycieczki Pozatrasowe / Freeride
                </h4>
                <p className="text-slate-300 mb-3">
                  Ze względu na ekstremalne warunki pogodowe, aby zmaksymalizować szansę na najlepsze warunki, <span className="text-white font-semibold">ostateczna lokalizacja zostanie wybrana na kilka dni przed Twoim przyjazdem</span>.
                </p>
                <p className="text-slate-400">
                  Na bieżąco monitoruję sytuację pogodową oraz raporty lawinowe, aby zapewnić maksymalne bezpieczeństwo i najlepsze możliwe warunki do jazdy.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}