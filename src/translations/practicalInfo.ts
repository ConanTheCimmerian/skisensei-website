import { Language } from '../contexts/LanguageContext';

export const practicalInfoTranslations = {
  pl: {
    title: 'FAQ - praktyczne informacje',
    subtitle: 'Wszystko, co musisz wiedzieć przed swoim pierwszym razem na nartach',
    
    // W jakim języku prowadzisz lekcje
    languageTitle: 'W jakim języku prowadzisz lekcje?',
    languageText1: 'Lekcje dostępne są po',
    languagePolish: 'polsku',
    languageEnglish: 'angielsku',
    languageNorwegian: 'norwesku (podstawowym)',
    languageText2: 'Posiadam uprawnienia',
    languageQual1: 'Pol-Ski Instruktor (SITN)',
    languageQual2: 'ISIA Stamp',
    languageText3: 'co potwierdza kwalifikacje do nauczania w języku angielskim.',
    languageText4: 'Zapraszam',
    languageAudience1: 'rodaków z Polski',
    languageAudience2: 'mieszkańców Norwegii',
    languageAudience3: 'turystów z całego świata',
    
    // Jak wygląda lekcja
    lessonTitle: 'Jak wygląda lekcja?',
    lessonDuration: 'Standardowa lekcja trwa',
    lesson45min: '45 minut',
    lessonBuffer: 'Zazwyczaj rezerwuję dodatkowe 15 minut buforu między zajęciami, jednak w szczycie sezonu punktualność jest kluczowa — proszę o szacunek do czasu wszystkich uczestników.',
    lessonLocation: 'Spotykamy się w',
    lessonHolmenkollen: 'Holmenkollen (przy kawiarni)',
    lessonOr: 'lub',
    lessonWyller: 'Wyller',
    lessonLocationEnd: '– w zależności poziomu lub planu na lekcje.',
    
    // Czy muszę mieć własny sprzęt
    equipmentTitle: 'Czy muszę mieć własny sprzęt?',
    equipmentText1: 'Nie musisz —',
    equipmentSkimore: 'wypożyczalnia Skimore',
    equipmentText2: 'jest na miejscu. Mają nawet ubrania. Jeśli to Twój pierwszy raz, daj znać wcześniej – pomogę dobrać narty, buty i zaplanujemy spokojne rozpoczęcie.',
    equipmentLink: 'Cennik karnetów i wypożyczalni Skimore Oslo',
    
    // Przed pierwszą lekcją
    beforeTitle: 'Przed pierwszą lekcją',
    beforePoint1: 'Zadbaj o',
    beforeSkis: 'dobrze przygotowane narty',
    beforePoint1b: '(nasmarowane, łatwo skręcające) oraz',
    beforeBoots: 'wygodne buty',
    beforePoint2: 'Nie martw się, jeśli jesteś początkujący —',
    beforeSlope: 'dobiorę odpowiednie nachylenie i tempo',
    beforePoint3: 'Warto też sprawdzić',
    beforeEquipment: 'dopasowanie sprzętu i ubioru',
    beforeTest: '(np. test przysiadu).',
    
    // Test przysiadu
    testTitle: 'TEST PRZYSIADU I MOBILNOŚCI STAWU SKOKOWEGO',
    testWhyTitle: 'Dlaczego to ważne?',
    testWhyText: 'Aby skutecznie kontrolować narty, piszczel musi swobodnie',
    testAttack: '„atakować" język buta',
    testWhyText2: '— bez tego trudno dociążyć przody nart i zachować kontrolę, a nauka staje się',
    testFrustrating: 'męcząca fizycznie i frustrująca',
    testWhyText3: 'ponieważ mimo ogromnych starań nie jesteśmy w stanie progresować.',
    
    testHowTitle: 'Jak to sprawdzić?',
    testHowIntro: 'Zrób prosty',
    testName: 'test kolano–ściana',
    testInstructions: 'Stań około',
    test10cm: '10 cm od ściany',
    testInstructions2: 'nie odrywając pięty, i spróbuj dotknąć kolanem ściany. Spróbuj najpierw',
    testWithout: 'bez buta',
    testAnd: 'a potem',
    testWith: 'w bucie narciarskim',
    
    testFailTitle: 'Jeśli się nie uda',
    testFailText: '— mobilność stawu skokowego jest ograniczona lub but jest',
    testBadFit: 'źle dobrany np. za duży lub jego flex „sztywność" jest zbyt duży',
    
    testSolutionShort: 'szybkim rozwiązaniem jest dopasować (stuningować) buty',
    testSolutionShort2: 'by uzyskać właściwy kąt pochylenia buta potrzebny w narciarstwie, a',
    testSolutionLong: 'rozwiązaniem długofalowym będą ćwiczenia na zwiększenie mobilności stawu skokowego',
  },
  en: {
    title: 'FAQ - practical information',
    subtitle: 'Everything you need to know before your first time on skis',
    
    // Languages
    languageTitle: 'What languages do you teach in?',
    languageText1: 'Lessons are available in',
    languagePolish: 'Polish',
    languageEnglish: 'English',
    languageNorwegian: 'Norwegian (basic)',
    languageText2: 'I hold',
    languageQual1: 'Pol-Ski Instructor (SITN)',
    languageQual2: 'ISIA Stamp',
    languageText3: 'certifications, which confirm my qualifications to teach in English.',
    languageText4: 'I welcome',
    languageAudience1: 'fellow Poles',
    languageAudience2: 'Norwegian residents',
    languageAudience3: 'tourists from around the world',
    
    // Lesson structure
    lessonTitle: 'What does a lesson look like?',
    lessonDuration: 'A standard lesson lasts',
    lesson45min: '45 minutes',
    lessonBuffer: 'I usually reserve an additional 15-minute buffer between lessons, but during peak season punctuality is crucial — please respect everyone\'s time.',
    lessonLocation: 'We meet at',
    lessonHolmenkollen: 'Holmenkollen (by the café)',
    lessonOr: 'or',
    lessonWyller: 'Wyller',
    lessonLocationEnd: '– depending on your level or lesson plan.',
    
    // Equipment
    equipmentTitle: 'Do I need my own equipment?',
    equipmentText1: 'No need —',
    equipmentSkimore: 'Skimore rental shop',
    equipmentText2: 'is on-site. They even have clothing. If it\'s your first time, let me know in advance – I\'ll help you choose skis, boots, and we\'ll plan a calm start.',
    equipmentLink: 'Skimore Oslo lift tickets and rental prices',
    
    // Before first lesson
    beforeTitle: 'Before your first lesson',
    beforePoint1: 'Make sure you have',
    beforeSkis: 'well-prepared skis',
    beforePoint1b: '(waxed, turning easily) and',
    beforeBoots: 'comfortable boots',
    beforePoint2: 'Don\'t worry if you\'re a beginner —',
    beforeSlope: 'I\'ll choose the right slope and pace',
    beforePoint3: 'It\'s also worth checking',
    beforeEquipment: 'equipment and clothing fit',
    beforeTest: '(e.g., squat test).',
    
    // Squat test
    testTitle: 'SQUAT AND ANKLE MOBILITY TEST',
    testWhyTitle: 'Why is this important?',
    testWhyText: 'To effectively control skis, your shin must freely',
    testAttack: '"attack" the boot tongue',
    testWhyText2: '— without this, it\'s difficult to load the front of the skis and maintain control, and learning becomes',
    testFrustrating: 'physically exhausting and frustrating',
    testWhyText3: 'because despite great effort, we are unable to progress.',
    
    testHowTitle: 'How to check?',
    testHowIntro: 'Do a simple',
    testName: 'knee-to-wall test',
    testInstructions: 'Stand about',
    test10cm: '10 cm from the wall',
    testInstructions2: 'without lifting your heel, and try to touch the wall with your knee. Try first',
    testWithout: 'without boots',
    testAnd: 'then',
    testWith: 'in ski boots',
    
    testFailTitle: 'If it doesn\'t work',
    testFailText: '— ankle mobility is limited or the boot is',
    testBadFit: 'poorly fitted, e.g., too big or its flex "stiffness" is too high',
    
    testSolutionShort: 'a quick solution is to tune the boots',
    testSolutionShort2: 'to get the proper forward lean angle needed for skiing, while',
    testSolutionLong: 'a long-term solution is exercises to increase ankle mobility',
  },
  no: {
    title: 'FAQ - praktisk informasjon',
    subtitle: 'Alt du trenger å vite før din første gang på ski',
    
    // Languages
    languageTitle: 'Hvilke språk underviser du på?',
    languageText1: 'Leksjoner er tilgjengelige på',
    languagePolish: 'polsk',
    languageEnglish: 'engelsk',
    languageNorwegian: 'norsk (grunnleggende)',
    languageText2: 'Jeg har',
    languageQual1: 'Pol-Ski Instruktør (SITN)',
    languageQual2: 'ISIA Stamp',
    languageText3: 'sertifiseringer, som bekrefter mine kvalifikasjoner til å undervise på engelsk.',
    languageText4: 'Jeg ønsker velkommen',
    languageAudience1: 'polakker',
    languageAudience2: 'norske innbyggere',
    languageAudience3: 'turister fra hele verden',
    
    // Lesson structure
    lessonTitle: 'Hvordan ser en leksjon ut?',
    lessonDuration: 'En standard leksjon varer',
    lesson45min: '45 minutter',
    lessonBuffer: 'Jeg reserverer vanligvis en ekstra 15-minutters buffer mellom leksjoner, men i høysesongen er punktlighet avgjørende — vennligst respekter alles tid.',
    lessonLocation: 'Vi møtes på',
    lessonHolmenkollen: 'Holmenkollen (ved kafeen)',
    lessonOr: 'eller',
    lessonWyller: 'Wyller',
    lessonLocationEnd: '– avhengig av nivå eller leksjonsplan.',
    
    // Equipment
    equipmentTitle: 'Trenger jeg mitt eget utstyr?',
    equipmentText1: 'Ikke nødvendig —',
    equipmentSkimore: 'Skimore utleie',
    equipmentText2: 'er på stedet. De har til og med klær. Hvis det er din første gang, gi beskjed på forhånd – jeg hjelper deg med å velge ski, støvler og vi planlegger en rolig start.',
    equipmentLink: 'Skimore Oslo heiskort og utleiepriser',
    
    // Before first lesson
    beforeTitle: 'Før din første leksjon',
    beforePoint1: 'Sørg for',
    beforeSkis: 'godt forberedte ski',
    beforePoint1b: '(smurt, lett å svinge) og',
    beforeBoots: 'komfortable støvler',
    beforePoint2: 'Ikke bekymre deg hvis du er nybegynner —',
    beforeSlope: 'jeg velger riktig bakke og tempo',
    beforePoint3: 'Det er også verdt å sjekke',
    beforeEquipment: 'utstyr og klespassform',
    beforeTest: '(f.eks. knebøy-test).',
    
    // Squat test
    testTitle: 'KNEBØY- OG ANKELBEVEGELIGHETSTEST',
    testWhyTitle: 'Hvorfor er dette viktig?',
    testWhyText: 'For å effektivt kontrollere ski, må leggen fritt',
    testAttack: '"angripe" støveltungen',
    testWhyText2: '— uten dette er det vanskelig å laste forsiden av skiene og opprettholde kontroll, og læring blir',
    testFrustrating: 'fysisk utmattende og frustrerende',
    testWhyText3: 'fordi vi til tross for store anstrengelser ikke klarer å progresere.',
    
    testHowTitle: 'Hvordan sjekke?',
    testHowIntro: 'Gjør en enkel',
    testName: 'kne-til-vegg test',
    testInstructions: 'Stå omtrent',
    test10cm: '10 cm fra veggen',
    testInstructions2: 'uten å løfte hælen, og prøv å berøre veggen med kneet. Prøv først',
    testWithout: 'uten støvler',
    testAnd: 'deretter',
    testWith: 'i skistøvler',
    
    testFailTitle: 'Hvis det ikke fungerer',
    testFailText: '— ankelbevegelse er begrenset eller støvelen er',
    testBadFit: 'dårlig tilpasset, f.eks. for stor eller dens flex "stivhet" er for høy',
    
    testSolutionShort: 'en rask løsning er å justere støvlene',
    testSolutionShort2: 'for å få riktig framoverhelningsvinkel som trengs for skiing, mens',
    testSolutionLong: 'en langsiktig løsning er øvelser for å øke ankelbevegelse',
  },
};

export function getPracticalInfoText(language: Language) {
  return practicalInfoTranslations[language];
}