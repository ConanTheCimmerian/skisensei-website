import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { getPhilosophyQuoteText } from "../translations/philosophyQuote";

export function PhilosophyQuote() {
  const { language } = useLanguage();
  const t = getPhilosophyQuoteText(language);
  
  return (
    <section className="py-16 pb-8 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
            <p className="text-xl md:text-2xl text-white italic">
              {t.mainQuote}
            </p>
            <p>
              {t.subQuote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}