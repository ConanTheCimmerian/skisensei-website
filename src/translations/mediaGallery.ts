import { Language } from '../contexts/LanguageContext';

export const mediaGalleryTranslations = {
  pl: {
    title: "Galeria",
    subtitle: "Narciarstwo to nie tylko nauczanie, ale też inspiracja. Tworzę autorskie treści wideo — zarówno na YouTube, jak i Instagramie — łącząc profesjonalne ujęcia z autentyczną narracją. To setki godzin materiału z norweskich gór: carving, skitury, przygody w śniegu i codzienność instruktora.",
    loading: "Ładowanie zdjęć...",
    allVideos: "Wszystko",
    freeride: "Freeride",
    skitouring: "Skitouring",
    carving: "Carving",
    norway: "Norwegia",
  },
  en: {
    title: "Gallery",
    subtitle: "Skiing is not just teaching, but also inspiration. I create original video content — both on YouTube and Instagram — combining professional shots with authentic narrative. Hundreds of hours of footage from Norwegian mountains: carving, ski touring, snow adventures and instructor's daily life.",
    loading: "Loading photos...",
    allVideos: "All",
    freeride: "Freeride",
    skitouring: "Skitouring",
    carving: "Carving",
    norway: "Norway",
  },
  no: {
    title: "Galleri",
    subtitle: "Skiløping er ikke bare undervisning, men også inspirasjon. Jeg lager originalt videoinnhold — både på YouTube og Instagram — som kombinerer profesjonelle opptak med autentisk fortelling. Hundrevis av timer med opptak fra norske fjell: carving, skitur, snøeventyr og instruktørens daglige liv.",
    loading: "Laster bilder...",
    allVideos: "Alle",
    freeride: "Freeride",
    skitouring: "Skitouring",
    carving: "Carving",
    norway: "Norge",
  },
};

export function getMediaGalleryText(language: Language) {
  return mediaGalleryTranslations[language];
}