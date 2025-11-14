import { Language } from '../contexts/LanguageContext';

export const navigationTranslations = {
  pl: {
    about: 'O mnie',
    firstTime: 'FAQ',
    availability: 'Dostępność',
    offer: 'Oferta',
    gallery: 'Galeria',
    contact: 'Kontakt',
  },
  en: {
    about: 'About',
    firstTime: 'FAQ',
    availability: 'Availability',
    offer: 'Offer',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  no: {
    about: 'Om meg',
    firstTime: 'FAQ',
    availability: 'Tilgjengelighet',
    offer: 'Tilbud',
    gallery: 'Galleri',
    contact: 'Kontakt',
  },
};

export function getNavigationText(language: Language) {
  return navigationTranslations[language];
}