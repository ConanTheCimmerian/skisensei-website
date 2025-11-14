import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getPricingText } from "../translations/pricing";

export function Pricing() {
  const { language } = useLanguage();
  const t = getPricingText(language);
  
  const pricingOptions = [
    {
      name: t.option1Name,
      description: t.option1Desc,
      price: "800",
      unit: "NOK/h",
      features: [
        t.option1Feature1,
        t.option1Feature2,
        t.option1Feature3,
        t.option1Feature4,
        t.option1Feature5,
      ],
    },
    {
      name: t.option2Name,
      description: t.option2Desc,
      price: "750",
      unit: "NOK/h",
      features: [
        t.option2Feature1,
        t.option2Feature2,
        t.option2Feature3,
        t.option2Feature4,
        t.option2Feature5,
      ],
      popular: true,
    },
    {
      name: t.option3Name,
      description: t.option3Desc,
      price: "700",
      unit: "NOK/h",
      features: [
        t.option3Feature1,
        t.option3Feature2,
        t.option3Feature3,
        t.option3Feature4,
      ],
    },
    {
      name: t.option4Name,
      description: t.option4Desc,
      price: "650",
      unit: "NOK/h",
      features: [
        t.option4Feature1,
        t.option4Feature2,
        t.option4Feature3,
        t.option4Feature4,
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
          <h2 className="text-5xl mb-4 text-white">{t.title}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t.subtitle}
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
                    {t.popular}
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
                {t.bookLesson}
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
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                <h3 className="text-3xl text-white">{t.weekendTitle}</h3>
              </div>
              
              <p className="text-slate-200 mb-4 text-lg leading-relaxed">
                {t.weekendDesc1}
              </p>
              
              <p className="text-slate-200 mb-8 text-lg leading-relaxed">
                {t.weekendDesc2}
              </p>

              <div className="bg-slate-900/50 rounded-xl p-6 mb-6">
                <h4 className="text-white mb-4 text-xl">{t.packageTitle}</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{t.packageFeature1}</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{t.packageFeature2}</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{t.packageFeature3}</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{t.packageFeature4}</span>
                  </div>
                  <div className="flex items-start gap-3 text-slate-300">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>{t.packageFeature5}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-5 mb-6">
                <p className="text-slate-200 leading-relaxed">
                  {t.idealFor}
                </p>
              </div>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105 text-lg"
              >
                {t.askForOffer}
              </button>

              {/* Separator with decorative line */}
              <div className="my-10 flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
              </div>

              {/* Exclusive Premium Section */}
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <h4 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                    {t.exclusiveTitle}
                  </h4>
                  <p className="text-slate-300 text-lg italic">
                    {t.exclusiveSubtitle}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 space-y-4">
                  <p className="text-slate-200 leading-relaxed">
                    {t.exclusiveDesc1}
                  </p>
                  <p className="text-slate-200 leading-relaxed">
                    {t.exclusiveDesc2}
                  </p>
                  <p className="text-slate-200 leading-relaxed">
                    {t.exclusiveDesc3}
                  </p>
                </div>

                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white rounded-lg transition-all transform hover:scale-105 text-lg shadow-lg shadow-purple-500/30"
                >
                  {t.exclusiveCTA}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}