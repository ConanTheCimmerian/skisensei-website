import { Language } from '../contexts/LanguageContext';

export const philosophyQuoteTranslations = {
  pl: {
    mainQuote: "Narciarstwo to dla mnie coś więcej niż sport — to droga rozwoju, równowagi i samodoskonalenia.",
    subQuote: "Połączenie pasji do gór, precyzji ruchu i ciągłego dążenia do perfekcji.",
  },
  en: {
    mainQuote: "Skiing is more than a sport for me — it's a path of growth, balance, and self-improvement.",
    subQuote: "A combination of passion for the mountains, precision of movement, and continuous pursuit of perfection.",
  },
  no: {
    mainQuote: "Skiing er mer enn en sport for meg — det er en vei til vekst, balanse og selvforbedring.",
    subQuote: "En kombinasjon av lidenskap for fjellene, presisjonsbeveelse og kontinuerlig søken etter perfeksjon.",
  },
};

export function getPhilosophyQuoteText(language: Language) {
  return philosophyQuoteTranslations[language];
}
