import { Language } from '../contexts/LanguageContext';

export const videoBackgroundsTranslations = {
  pl: {
    // Carving section
    carvingLabel: "Carving",
    carvingTitle1: "Precyzja.",
    carvingTitle2: "Technika.",
    carvingTitle3: "Harmonia.",
    carvingP1: "Carving to harmonia ciała i umysłu. Każdy skręt to efekt precyzji, równowagi i kontroli nad siłami działającymi na nartę.",
    carvingP2: "To taniec z grawitacją — gdzie każdy detal ma znaczenie. Perfekcja ruchu, osiągana dzięki odpowiednim ćwiczeniom, tysiącom powtórzeń skrętów i szczegółową analizą biomechaniki oraz fizyki w narciarstwie.",
    carvingQuote: "\"Ski Sensei - Carve your skill.\"",
    
    // Freeride section
    freerideLabel: "Freeride",
    freerideTitle1: "Emocje.",
    freerideTitle2: "Lekkość.",
    freerideTitle3: "Adrenalina.",
    freerideP1: "Freeride to wolność, ale też świadoma decyzja. To odwaga przełamywania granic i szacunek do góry w jednym.",
    freerideP2: "Od głębokiego",
    freerideP2Highlight: "norweskiego puchu",
    freerideP2Rest: "po zmienne tereny — nauczę Cię adaptować technikę do każdej sytuacji.",
    freerideQuote: "\"Beyond limits. Beyond fear.\"",
  },
  en: {
    // Carving section
    carvingLabel: "Carving",
    carvingTitle1: "Precision.",
    carvingTitle2: "Technique.",
    carvingTitle3: "Harmony.",
    carvingP1: "Carving is the harmony of body and mind. Every turn is the result of precision, balance and control over the forces acting on the ski.",
    carvingP2: "It's a dance with gravity — where every detail matters. Perfection of movement, achieved through proper exercises, thousands of turn repetitions and detailed analysis of biomechanics and physics in skiing.",
    carvingQuote: "\"SkiSensei - Carve your skill.\"",
    
    // Freeride section
    freerideLabel: "Freeride",
    freerideTitle1: "Emotions.",
    freerideTitle2: "Lightness.",
    freerideTitle3: "Adrenaline.",
    freerideP1: "Freeride is freedom, but also a conscious decision. It's the courage to push boundaries and respect for the mountain in one.",
    freerideP2: "From deep",
    freerideP2Highlight: "Norwegian powder",
    freerideP2Rest: "to varied terrain — I'll teach you to adapt your technique to any situation.",
    freerideQuote: "\"Beyond limits. Beyond fear.\"",
  },
  no: {
    // Carving section
    carvingLabel: "Carving",
    carvingTitle1: "Presisjon.",
    carvingTitle2: "Teknikk.",
    carvingTitle3: "Harmoni.",
    carvingP1: "Carving er harmoni mellom kropp og sinn. Hver sving er resultatet av presisjon, balanse og kontroll over kreftene som virker på skiene.",
    carvingP2: "Det er en dans med tyngdekraften — hvor hver detalj betyr noe. Perfeksjon i bevegelse, oppnådd gjennom riktige øvelser, tusenvis av svingrepetitioner og detaljert analyse av biomekanikk og fysikk i skikjøring.",
    carvingQuote: "\"Ski Sensei - Carve your skill.\"",
    
    // Freeride section
    freerideLabel: "Freeride",
    freerideTitle1: "Følelser.",
    freerideTitle2: "Letthet.",
    freerideTitle3: "Adrenalin.",
    freerideP1: "Freeride er frihet, men også en bevisst beslutning. Det er motet til å presse grenser og respekt for fjellet i ett.",
    freerideP2: "Fra dyp",
    freerideP2Highlight: "norsk pudder",
    freerideP2Rest: "til variert terreng — jeg lærer deg å tilpasse teknikken til enhver situasjon.",
    freerideQuote: "\"Beyond limits. Beyond fear.\"",
  },
};

export function getVideoBackgroundsText(language: Language) {
  return videoBackgroundsTranslations[language];
}