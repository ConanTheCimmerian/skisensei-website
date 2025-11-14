import { motion } from "motion/react";
import { Clock, MapPin, Snowflake, ExternalLink, Compass, Globe, Brain } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getPracticalInfoText } from "../translations/practicalInfo";

export function PracticalInfo() {
  const { language } = useLanguage();
  const t = getPracticalInfoText(language);
  
  return (
    <section id="first-time" className="py-16 px-4 bg-slate-900/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <h3 className="text-3xl md:text-5xl bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent mb-3">
                {t.title}
              </h3>
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 rounded-full"></div>
            </motion.div>
            <p className="text-slate-400 mt-4 text-lg">
              {t.subtitle}
            </p>
          </div>

          <div className="space-y-4 md:space-y-8">
            {/* W jakim języku prowadzisz lekcje */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-slate-700/50"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <Globe className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white text-lg md:text-xl mb-2 md:mb-3">{t.languageTitle}</h4>
                  <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed mb-2 md:mb-3">
                    {t.languageText1} <span className="text-white">{t.languagePolish}</span>, <span className="text-white">{t.languageEnglish}</span> {t.languageText1.includes('i') ? 'i' : 'and'} <span className="text-white">{t.languageNorwegian}</span>.
                  </p>
                  <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed mb-2 md:mb-3">
                    {t.languageText2} <span className="text-blue-400">{t.languageQual1}</span> {language === 'pl' ? 'oraz' : language === 'no' ? 'og' : 'and'} <span className="text-blue-400">{t.languageQual2}</span>, {t.languageText3}
                  </p>
                  <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed">
                    {t.languageText4} <span className="text-white">{t.languageAudience1}</span>, <span className="text-white">{t.languageAudience2}</span> {language === 'pl' ? 'i' : language === 'no' ? 'og' : 'and'} <span className="text-white">{t.languageAudience3}</span>!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Jak wygląda lekcja */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/30 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-slate-700/50"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white text-lg md:text-xl mb-2 md:mb-3">{t.lessonTitle}</h4>
                  <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed mb-2">
                    {t.lessonDuration} <span className="text-white font-medium">{t.lesson45min}</span>. {t.lessonBuffer}
                  </p>
                  <div className="flex items-start gap-2 mt-2 md:mt-3">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0 mt-0.5 md:mt-1" />
                    <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed">
                      {t.lessonLocation} <span className="text-white">{t.lessonHolmenkollen}</span> {t.lessonOr}{" "}
                      <span className="text-white">{t.lessonWyller}</span> {t.lessonLocationEnd}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Czy muszę mieć własny sprzęt */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-800/30 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-slate-700/50"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <Snowflake className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white text-lg md:text-xl mb-2 md:mb-3">{t.equipmentTitle}</h4>
                  <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed mb-3 md:mb-4">
                    {t.equipmentText1} <span className="text-white">{t.equipmentSkimore}</span> {t.equipmentText2}
                  </p>
                  <a
                    href="https://oslo.skimore.no/priser"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm md:text-base"
                  >
                    <span>{t.equipmentLink}</span>
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Przed pierwszą lekcją */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-800/30 backdrop-blur-sm p-4 md:p-8 rounded-2xl border border-slate-700/50"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <Compass className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white text-lg md:text-xl mb-2 md:mb-3">{t.beforeTitle}</h4>
                  <ul className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed space-y-1.5 md:space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 md:mt-1">•</span>
                      <span>{t.beforePoint1} <span className="text-white">{t.beforeSkis}</span> {t.beforePoint1b} <span className="text-white">{t.beforeBoots}</span>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 md:mt-1">•</span>
                      <span>{t.beforePoint2} <span className="text-white">{t.beforeSlope}</span>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400 mt-0.5 md:mt-1">•</span>
                      <span>{t.beforePoint3} <span className="text-white">{t.beforeEquipment}</span> {t.beforeTest}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* TEST PRZYSIADU I MOBILNOŚCI STAWU SKOKOWEGO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-br from-blue-900/40 to-slate-800/30 backdrop-blur-sm p-4 md:p-8 rounded-2xl border-2 border-blue-500/50 shadow-lg shadow-blue-500/10"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <Brain className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white text-lg md:text-xl mb-3 md:mb-4 flex items-center gap-2">
                    {t.testTitle}
                  </h4>
                  
                  <div className="space-y-3 md:space-y-4">
                    {/* Dlaczego to ważne */}
                    <div>
                      <h5 className="text-blue-400 font-medium mb-1.5 md:mb-2 text-sm md:text-base">{t.testWhyTitle}</h5>
                      <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed">
                        {t.testWhyText} <span className="text-white font-medium">{t.testAttack}</span> {t.testWhyText2} <span className="text-white">{t.testFrustrating}</span> {t.testWhyText3}
                      </p>
                    </div>

                    {/* Jak to sprawdzić */}
                    <div>
                      <h5 className="text-blue-400 font-medium mb-1.5 md:mb-2 text-sm md:text-base">{t.testHowTitle}</h5>
                      <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed mb-2 md:mb-3">
                        {t.testHowIntro} <span className="text-white font-medium">{t.testName}</span>:
                      </p>
                      <div className="bg-slate-900/50 p-3 md:p-4 rounded-lg border border-slate-700/50 mb-2 md:mb-3">
                        <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed">
                          {t.testInstructions} <span className="text-white">{t.test10cm}</span>, {t.testInstructions2} <span className="text-white">{t.testWithout}</span>, {t.testAnd} <span className="text-white">{t.testWith}</span>.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5 md:mt-1">👉</span>
                        <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed">
                          <span className="text-white font-medium">{t.testFailTitle}</span> {t.testFailText} <span className="text-white">{t.testBadFit}</span>.
                        </p>
                      </div>
                    </div>

                    {/* Rozwiązanie */}
                    <div className="bg-slate-900/50 p-3 md:p-4 rounded-lg border border-blue-500/30">
                      <p className="text-slate-300 text-sm md:text-base leading-normal md:leading-relaxed">
                        {language === 'pl' ? 'W razie potrzeby' : language === 'no' ? 'Ved behov' : 'If needed'} <span className="text-blue-400 font-medium">{t.testSolutionShort}</span>, {t.testSolutionShort2} <span className="text-blue-400 font-medium">{t.testSolutionLong}</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}