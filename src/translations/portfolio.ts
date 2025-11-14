import { Language } from '../contexts/LanguageContext';

export const portfolioTranslations = {
  pl: {
    title: "Media i inspiracja",
    paragraph1: "Narciarstwo to nie tylko nauczanie, ale też inspiracja.",
    paragraph2: "Tworzę autorskie treści wideo — zarówno na YouTube, jak i Instagramie — łącząc profesjonalne ujęcia z autentyczną narracją.",
    paragraph3: "To setki godzin materiału z norweskich gór: carving, skitury, przygody w śniegu i codzienność instruktora.",
    
    // Content creation section
    creationTitle: "Wszystko tworzę sam",
    creationSubtitle: "Ujęcia, montaż, drony, Insta360, storytelling. Każde wideo to opowieść o precyzji, emocjach i podróży po górskim świecie.",
    
    // Video production services
    videoProductionTitle: "🎬 Zlecenia filmowe:",
    videoProductionText: "Jeśli podoba Ci się mój styl i chciałbyś zlecić mi wykonanie filmu, to jest taka możliwość! Specjalizuję się w narciarstwie, ale nagrywam i edytuję również inny content — praktycznie w każdych warunkach, czy to na stoku, czy w dzikich górach.",
    videoProductionDetails: "Szczegóły w ofercie i cenniku (wkrótce dostępne)",
    
    // Brand collaboration section
    brandCollabText: "Dzięki temu projektowi powstała",
    brandCollabHighlight: "przestrzeń, w której spotykają się pasja, estetyka i autentyczność",
    brandCollabText2: "— otwarta nie tylko dla uczniów, ale też dla",
    brandCollabTypes: "marek, sponsorów i partnerów",
    brandCollabEnd: ", którzy podzielają ten sposób patrzenia na narciarstwo.",
    
    // Partners & Affiliates
    partnersTitle: "Współpracuję z:",
    insta360Description: "— sprzęt, którym nagrywam większość contentu",
    affiliateCode: "Kod afiliacyjny:",
    modernHousesDescription: "— domki mobilne tiny house i konstrukcje metalowo-drewniane",
    supportMessage: "Zakup u tych producentów zapewni mi wsparcie do rozwoju narciarskiego 🙏",
  },
  en: {
    title: "Media and inspiration",
    paragraph1: "Skiing is not just teaching, but also inspiration.",
    paragraph2: "I create original video content — both on YouTube and Instagram — combining professional shots with authentic narrative.",
    paragraph3: "Hundreds of hours of footage from Norwegian mountains: carving, ski touring, snow adventures and instructor's daily life.",
    
    // Content creation section
    creationTitle: "I create everything myself",
    creationSubtitle: "Shooting, editing, drones, Insta360, storytelling. Every video is a story about precision, emotions and journey through the mountain world.",
    
    // Video production services
    videoProductionTitle: "🎬 Video commissions:",
    videoProductionText: "If you like my style and would like to commission a video, it's possible! I specialize in skiing, but I also shoot and edit other content — in virtually any conditions, whether on the slopes or in wild mountains.",
    videoProductionDetails: "Details in offer and price list (coming soon)",
    
    // Brand collaboration section
    brandCollabText: "This project has created",
    brandCollabHighlight: "a space where passion, aesthetics and authenticity meet",
    brandCollabText2: "— open not only to students, but also to",
    brandCollabTypes: "brands, sponsors and partners",
    brandCollabEnd: " who share this way of looking at skiing.",
    
    // Partners & Affiliates
    partnersTitle: "I collaborate with:",
    insta360Description: "— equipment I use to record most of my content",
    affiliateCode: "Affiliate code:",
    modernHousesDescription: "— mobile tiny houses and metal-wood constructions",
    supportMessage: "Purchasing from these manufacturers will provide me with support for skiing development 🙏",
  },
  no: {
    title: "Media og inspirasjon",
    paragraph1: "Skiing er ikke bare undervisning, men også inspirasjon.",
    paragraph2: "Jeg lager originalt videoinnhold — både på YouTube og Instagram — som kombinerer profesjonelle opptak med autentisk fortelling.",
    paragraph3: "Hundrevis av timer med opptak fra norske fjell: carving, skiturer, snøeventyr og instruktørens daglige liv.",
    
    // Content creation section
    creationTitle: "Jeg lager alt selv",
    creationSubtitle: "Filming, redigering, droner, Insta360, historiefortelling. Hver video er en historie om presisjon, følelser og reise gjennom fjellverdenen.",
    
    // Video production services
    videoProductionTitle: "🎬 Videooppdrag:",
    videoProductionText: "Hvis du liker stilen min og vil bestille en video, er det mulig! Jeg spesialiserer meg i skiing, men jeg filmer og redigerer også annet innhold — praktisk talt under alle forhold, enten det er på bakken eller i ville fjell.",
    videoProductionDetails: "Detaljer i tilbud og prisliste (kommer snart)",
    
    // Brand collaboration section
    brandCollabText: "Dette prosjektet har skapt",
    brandCollabHighlight: "et rom der lidenskap, estetikk og autentisitet møtes",
    brandCollabText2: "— åpen ikke bare for studenter, men også for",
    brandCollabTypes: "merker, sponsorer og partnere",
    brandCollabEnd: " som deler denne måten å se på skiing.",
    
    // Partners & Affiliates
    partnersTitle: "Jeg samarbeider med:",
    insta360Description: "— utstyr jeg bruker til å spille inn mest av innholdet mitt",
    affiliateCode: "Tilknyttet kode:",
    modernHousesDescription: "— mobile tiny hus og metall-tre konstruksjoner",
    supportMessage: "Kjøp fra disse produsentene vil gi meg støtte til skikjøring utvikling 🙏",
  },
};

export function getPortfolioText(language: Language) {
  return portfolioTranslations[language];
}
