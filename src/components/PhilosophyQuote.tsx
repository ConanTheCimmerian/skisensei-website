import { motion } from "motion/react";

export function PhilosophyQuote() {
  return (
    <section className="py-16 bg-slate-950">
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
              Narciarstwo to dla mnie coś więcej niż sport — to droga rozwoju, równowagi i samodoskonalenia.
            </p>
            <p>
              Połączenie pasji do gór, precyzji ruchu i ciągłego dążenia do perfekcji.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
