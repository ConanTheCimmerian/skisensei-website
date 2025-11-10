import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";

export function Pricing() {
  const pricingOptions = [
    {
      name: "Lekcje Pojedyncze",
      description: "1-2 lekcje",
      price: "800",
      unit: "NOK/h",
      features: [
        "45 minut intensywnego treningu",
        "Indywidualne podejście",
        "Analiza techniki",
        "Wskazówki eksperta",
        "Dodatkowa osoba +300 NOK/h",
      ],
    },
    {
      name: "Seria Lekcji",
      description: "3 i więcej lekcji",
      price: "750",
      unit: "NOK/h",
      features: [
        "Wszystko z lekcji pojedynczych",
        "Progresja i rozwój umiejętności",
        "Plan treningowy",
        "Rabat -50 NOK/h",
        "Dodatkowa osoba +300 NOK/h",
      ],
      popular: true,
    },
    {
      name: "Pakiet 12 Lekcji",
      description: "Indywidualny plan rozwoju",
      price: "700",
      unit: "NOK/h",
      features: [
        "Wszystko z serii lekcji",
        "Dedykowany program treningowy",
        "Monitorowanie postępów",
        "Rabat -100 NOK/h",
      ],
    },
    {
      name: "Pakiet 24 Lekcje",
      description: "Sezonowy trening profesjonalny",
      price: "650",
      unit: "NOK/h",
      features: [
        "Wszystko z pakietu 12 lekcji",
        "Kompleksowy rozwój techniki",
        "Priorytetowe terminy",
        "Najlepszy rabat -150 NOK/h",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-white">Oferta</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Jedna lekcja to 45 minut intensywnego treningu dostosowanego do Twoich potrzeb
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 ${
                option.popular
                  ? "border-blue-500 shadow-lg shadow-blue-500/20"
                  : "border-slate-700"
              }`}
            >
              {option.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Popularne
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl text-white mb-2">{option.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{option.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl text-white">{option.price}</span>
                  <span className="text-slate-400">{option.unit}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300">
                    <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-3 rounded-lg transition-all ${
                  option.popular
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-slate-700 hover:bg-slate-600 text-white"
                }`}
              >
                Zarezerwuj
              </button>
            </motion.div>
          ))}
        </div>

        {/* Weekend Full Day Booking */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-500/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC04Yy0xLjEgMC0yIC45LTIgMnY4YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMnYtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                <h3 className="text-3xl text-white">Weekend Full Day Booking</h3>
              </div>
              
              <p className="text-slate-300 mb-6 text-lg">
                Cały dzień z instruktorem, wliczając dojazd instruktora do wybranego ośrodka i wsparcie organizacyjne "know-how"
              </p>

              <div className="bg-slate-900/70 rounded-lg p-4 mb-8 border border-slate-700">
                <p className="text-slate-300 text-sm mb-2">
                  <span className="text-blue-400">3×3×3 =</span> 3 lekcje / 3×45min każda / w grupach 3-osobowych
                </p>
                <p className="text-slate-400 text-xs">
                  * Ceny startowe dla tego formatu. Dla grup większych lub innych zleceń wycena indywidualna. W przypadku noclegów (2 dni / 3 dni) opcja wieczornej wideoanalizy <span className="text-green-400">gratis</span>.
                </p>
              </div>

              {/* Pricing Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="text-slate-400 text-sm mb-2">1 dzień</div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-slate-400 text-lg">od</span>
                    <span className="text-4xl text-white">9 975</span>
                    <span className="text-slate-400">NOK</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Dojazd wliczony
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Grupa 3-osobowa
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border-2 border-blue-500 relative hover:border-blue-400 transition-colors">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">Popularne</span>
                  </div>
                  <div className="text-slate-400 text-sm mb-2">2 dni</div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-slate-400 text-lg">od</span>
                    <span className="text-4xl text-white">18 620</span>
                    <span className="text-slate-400">NOK</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Dojazd wliczony
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Grupa 3-osobowa
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Oszczędzasz 1 330 NOK
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors">
                  <div className="text-slate-400 text-sm mb-2">3 dni</div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-slate-400 text-lg">od</span>
                    <span className="text-4xl text-white">23 940</span>
                    <span className="text-slate-400">NOK</span>
                  </div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Dojazd wliczony
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Grupa 3-osobowa
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-blue-400" />
                      Oszczędzasz 5 985 NOK
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                <h4 className="text-white mb-3">Co obejmuje pakiet?</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>Elastyczne podziały godzinowe</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>Ceny zależne od ilości osób</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>Indywidualny plan treningowy</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Check className="w-5 h-5 text-blue-400" />
                    <span>Wycena dostosowana do grupy</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105"
              >
                Zapytaj o ofertę
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}