import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { YouTubePlayerWithVolume } from "./YouTubePlayerWithVolume";
import { Target, Heart, BookOpen, Repeat, Compass, Mountain, Award } from "lucide-react";

const defaultKarateImages = [
  "https://www.dropbox.com/scl/fi/txz4h36lcxbftzjyw4dvr/20220918_123451.jpg?rlkey=buvbz0mo5jgesbkw4wyz09kj6&st=4b1ysio7&raw=1",
  "https://www.dropbox.com/scl/fi/r8er7pkjnlcw65bmz8j70/VideoCapture_20230910-194444.jpg?rlkey=u96c9mgj3vri1swrf2h3lk50n&st=pp6dz17s&raw=1",
  "https://www.dropbox.com/scl/fi/kx1juuf1gp34n14idqum8/VideoCapture_20240912-201550.jpg?rlkey=g05bwwc8rhcpujr2vrvc183ch&st=d8siaj88&raw=1",
  "https://www.dropbox.com/scl/fi/bewjse9oz9od1yqt4wkiq/VID_20211016_111449_3.png?rlkey=il41jjjpz18kwyxu83gwtw00m&st=s9g0leh5&raw=1",
  "https://www.dropbox.com/scl/fi/9cc2osaxhi5lbrc8hdvp4/received_708125837105287.jpeg?rlkey=xjq81tbyza2bbzbjf3l0dxplr&st=pjgnnlu1&raw=1",
  "https://www.dropbox.com/scl/fi/v9yzcnhikgq1ovne5vh29/KARATE-FULL-PAKE.jpg?rlkey=slsxmhjd8cgkp6ubcda28kt67&st=lotjvpaj&raw=1",
  "https://www.dropbox.com/scl/fi/33o375jo79s0w3ahwwyiu/20250912_070706-1.jpg?rlkey=tcbbfbp4dr8m7v0t9dbdtqel0&st=bjsm7wex&raw=1",
];

const defaultStyleImages = [
  "https://www.dropbox.com/scl/fi/j7j67lkya973o9932q8f8/20240324_092241.jpg?rlkey=3qmtleo423ex4o1z34mppqksq&st=e8mo6rao&raw=1",
  "https://www.dropbox.com/scl/fi/oh55u82f1n1h4to1mrppk/20240325_134109.jpg?rlkey=yofwshg11d09ilh56g5gb9wyw&st=5ngf9imb&raw=1",
  "https://www.dropbox.com/scl/fi/y4k89h06atq7i2wjde9lh/Snapshot_22.JPG?rlkey=eolyv3cd9f2i3ho5luurvd8kr&st=odgkz72y&raw=1",
  "https://www.dropbox.com/scl/fi/mg9vlntdh26pw2rnu4ruv/20240327_102507-0.jpg?rlkey=46hxeokcwg77lfd8ewsg1hgkj&st=04h89la4&raw=1",
  "https://www.dropbox.com/scl/fi/d39nr0x17dssuqwldj3m9/20240327_115007.jpg?rlkey=cmnx6snvfizvwz22rctkixvzk&st=jd825vnk&raw=1",
  "https://www.dropbox.com/scl/fi/oppulazlr4wxb157tfb8a/Snapshot_251.JPG?rlkey=m715jaxwnfupfy4gygs2mvan5&st=150hp374&raw=1",
  "https://www.dropbox.com/scl/fi/hzye0ulyky8w2r64c4xki/Snapshot_105.JPG?rlkey=rlcgb1iqaggbt3rz89x2e69lf&st=2upqxpbp&raw=1",
  "https://www.dropbox.com/scl/fi/pg2ksjj3vd5oyflfcbip4/Snapshot_76.JPG?rlkey=xc83ucqyfqsgp1mcnh6y18v0f&st=jkop28df&raw=1",
  "https://www.dropbox.com/scl/fi/pztsn1cgbvh3caa55iz9v/DJI_0378.JPG?rlkey=19xa3ym0rh29j4r62g01jlt5m&st=n1rqsz4o&raw=1",
  "https://www.dropbox.com/scl/fi/oh1gpwm6aj5xp5e2rdx3x/20250510_153614.jpg?rlkey=3dtamgw1dlk6jrjfy3v4lrl6g&st=mtm8hwyk&raw=1",
  "https://www.dropbox.com/scl/fi/ta7cfq6zlzfe42z9knfo0/20250418_111912.jpg?rlkey=fnobnjvm97x0u5zk6lb18ldp4&st=lt5xvxlk&raw=1",
  "https://www.dropbox.com/scl/fi/mtk3n5wfrph3cjlv7mu2k/20250105_113307.jpg?rlkey=ncbb5nrsxuxsh8rvn0fvrtqeh&st=fharbncw&raw=1",
  "https://www.dropbox.com/scl/fi/meuikleejabp72cw66bxb/20240421_143722-1.jpg?rlkey=5rxzs8eooblly8w3wg4br6kr0&st=uraq3bk0&raw=1",
  "https://www.dropbox.com/scl/fi/t1hbfplr3vecyxny6tjxk/20240421_140756.jpg?rlkey=38cyvxiodg4rsmbtytnlw5zf2&st=sqq0zhc6&raw=1",
  "https://www.dropbox.com/scl/fi/s1tq0riozbwdrdr3csde5/20240325_104310.jpg?rlkey=w26i77ogtn2wmf4knmkip8nba&st=rp6tr0re&raw=1",
  "https://www.dropbox.com/scl/fi/19lpsbtb3cjxuj4qe35db/20230326_094930-1.jpg?rlkey=fgw53kr90i0cyzo6w0uae4kkw&st=ak80mj6a&raw=1",
];

const defaultPortraitImages = [
  "https://www.dropbox.com/scl/fi/xdcb41nn8hpzzo6759g61/20250511_113215.jpg?rlkey=w0vevtjb6xv1f34xpti6r2smj&st=yy858dub&raw=1",
  "https://www.dropbox.com/scl/fi/ukw9kyl2w3zxqrufx8xq9/VideoCapture_20240325-202547.jpg?rlkey=3qshphbrmuqicmzuros8jw3rx&st=wilv09a9&raw=1",
  "https://www.dropbox.com/scl/fi/761eq8eixxijvrtuvgeka/20220415_161544-0.jpg?rlkey=ids3hha2xd8i7g8iwqaxnswjv&st=giyrfkqr&raw=1",
  "https://www.dropbox.com/scl/fi/35x88mrl36oxyv016292m/VID_20240325_144437_00_048_2024-04-12_15-31-37_screenshot.jpg?rlkey=hq92hqeox9bop8chitgdtd6wc&st=prrp3fk1&raw=1",
  "https://www.dropbox.com/scl/fi/23rbdg9dakb7a0srzat0b/20250313_105133.jpg?rlkey=bsl6c9nz9v5hqwvzfq24k1uny&st=hto8c1ma&raw=1",
  "https://www.dropbox.com/scl/fi/jg7xou4ohpln9dbesmfq3/VideoCapture_20250402-113118.jpg?rlkey=eky2f8xrtgd8xlj4jlt7vteif&st=wfaz98pp&raw=1",
  "https://www.dropbox.com/scl/fi/kso95skz0pdvckx3rtpmo/sande4.jpg?rlkey=h3jsjlwnowrwwzayw5egvaqko&st=1jwqurxf&raw=1",
];

function KarateBackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [karateImages, setKarateImages] = useState(defaultKarateImages);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const images = await api.getKarateImages();
      if (images && images.length > 0) {
        setKarateImages(images);
      }
    } catch (error) {
      console.error("Error loading karate images:", error);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % karateImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [karateImages.length]);

  return (
    <div className="absolute inset-0 rounded-3xl overflow-hidden">
      {karateImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <ImageWithFallback
            src={image}
            alt={`Karate training ${index + 1}`}
            className="w-full h-full object-cover"
            style={{
              objectPosition: index === 3 ? 'center 30%' : index === 5 ? 'center 55%' : index === 6 ? 'center 30%' : 'center center'
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[1px]"></div>
    </div>
  );
}

function StyleBackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [styleImages] = useState(defaultStyleImages);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % styleImages.length);
    }, 5000); // 5 sekund na zdjęcie
    return () => clearInterval(timer);
  }, [styleImages.length]);

  return (
    <div className="absolute inset-0 rounded-3xl overflow-hidden">
      {styleImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Skiing style ${index + 1}`}
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center center'
            }}
          />
        </div>
      ))}
      {/* Lighter overlay - 50% */}
      <div className="absolute inset-0 bg-slate-900/50"></div>
    </div>
  );
}

function PortraitBackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [portraitImages] = useState(defaultPortraitImages);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portraitImages.length);
    }, 6000); // 6 sekund na zdjęcie - wolniej dla lepszego oglądu
    return () => clearInterval(timer);
  }, [portraitImages.length]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl">
      {portraitImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Dawid Kowalczyk ${index + 1}`}
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center center'
            }}
          />
        </div>
      ))}
      {/* Jaśniejsza nakładka dla lepszej widoczności zdjęć - 45% */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/45 via-slate-900/50 to-slate-900/55"></div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Przedstawienie + Rebranding - wspólne tło */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col justify-between">
            {/* Background Portrait Slider */}
            <PortraitBackgroundSlider />
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16 w-full">
              {/* Sekcja Przedstawienie - góra */}
              <div className="text-center">
                <p className="text-lg text-slate-200 leading-relaxed max-w-4xl mx-auto">
                  Witaj, to ja - <span className="text-white">Dawid Kowalczyk</span>, pasjonat gór i narciarstwa. 
                  W latach 2009-2013 student i członek sekcji narciarskiej oraz sekcji karate{" "}
                  <span className="text-blue-300">AZS Politechnika Krakowska</span>. Obie te pasje aktywnie rozwijam.
                </p>
              </div>
            </div>

            {/* Sekcja Rebranding - dół */}
            <div className="relative z-10 px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16">
              <div className="text-center">
                <p className="text-base text-slate-200 leading-relaxed max-w-4xl mx-auto">
                  <span className="text-blue-300">SkiSensei</span> to marka, która autentyczniej oddaje to, kim jestem jako instruktor i twórca. Wcześniej <span className="text-slate-100">Skiwithme</span>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dlaczego "Sensei" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-16 lg:p-20 rounded-3xl border border-slate-700/50 overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
            {/* Background Slideshow */}
            <KarateBackgroundSlider />
            
            {/* Content */}
            <div className="relative z-10 w-full">
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-white mb-8 text-center">
                Dlaczego „Sensei"
              </h3>

              <div className="space-y-5 text-base md:text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
                <p>
                  Od wielu lat trenuję karate i choć wciąż jestem w drodze do tytułu Sensei to znajomi na stoku zaczęli tak mnie nazywać i choć nie czułem się na to gotowy to po prostu się przyjęło.
                </p>
                <p>
                  To właśnie karate ukształtowało mnie jako człowieka i instruktora: nauczyło{" "}
                  <span className="text-blue-400">cierpliwości, dyscypliny, skupienia i dążenia do perfekcji</span>.
                </p>
                <p className="text-lg md:text-xl text-white italic text-center pt-4">
                  Dziś uważam, że duch i filozofia karate idealnie oddają mój styl nauczania na stoku.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Jak uczę */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <h3 className="text-3xl md:text-4xl text-white mb-6 text-center">
            Jak uczę
          </h3>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            Narciarstwo to dla mnie sztuka ruchu, równowagi i świadomości ciała.
            Symetryczny rozwój 4 głównych umiejętności narciarskich: równowaga, nacisk, krawędziowanie, rotacja i kontrrotacja.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
            >
              <Target className="w-10 h-10 text-blue-400 mb-4" />
              <h4 className="text-white mb-2">Precyzyjna analiza ruchu</h4>
              <p className="text-slate-400 text-sm">
                Każdy szczegół ma znaczenie
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
            >
              <Heart className="w-10 h-10 text-blue-400 mb-4" />
              <h4 className="text-white mb-2">Cierpliwość i spokój</h4>
              <p className="text-slate-400 text-sm">
                Bez stresu, z pełnym zrozumieniem
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
            >
              <BookOpen className="w-10 h-10 text-blue-400 mb-4" />
              <h4 className="text-white mb-2">Biomechanika skrętu</h4>
              <p className="text-slate-400 text-sm">
                Pełne zrozumienie ruchu
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
            >
              <Repeat className="w-10 h-10 text-blue-400 mb-4" />
              <h4 className="text-white mb-2">Perfekcyjna demonstracja techniki</h4>
              <p className="text-slate-400 text-sm">
                Nauka przez wzór i poprawne powtórzenia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
            >
              <Compass className="w-10 h-10 text-blue-400 mb-4" />
              <h4 className="text-white mb-2">Równowaga i koordynacja</h4>
              <p className="text-slate-400 text-sm">
                Budowanie świadomości ciała
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
            >
              <Mountain className="w-10 h-10 text-blue-400 mb-4" />
              <h4 className="text-white mb-2">Odwaga przekraczania granic</h4>
              <p className="text-slate-400 text-sm">
                W bezpiecznym środowisku
              </p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            Uczę wszechstronnych <span className="text-white">technik carvingowych i freeridowych</span>, 
            które rozwijają umiejętności w każdych warunkach — zawsze w{" "}
            <span className="text-white">bezpiecznym, kontrolowanym środowisku ośrodka narciarskiego</span>.
          </motion.p>
        </motion.div>

        {/* Case Study: Rozwój Nelly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-800/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-blue-500/20">
            <h3 className="text-3xl md:text-4xl text-white mb-4 text-center">
              Case Study: Rozwój Nelly w 24 lekcjach
            </h3>
            <p className="text-center text-lg text-slate-300 mb-2 max-w-3xl mx-auto leading-relaxed">
              Zobacz jak wygląda realny progress z moimi lekcjami — <span className="text-white">od pierwszych skrętów do pewnych zjazdów 
              i ćwiczeń koordynacyjno-równoważnych na czarnych trasach</span>. 
            </p>
            <p className="text-center text-slate-300 mb-2 max-w-3xl mx-auto leading-relaxed">
              <span className="text-blue-400">24 lekcje rozłożone w 3 miesiącach sezonu</span> przyniosły super podstawy 
              i głębokie zrozumienie technik narciarskich.
            </p>
            <p className="text-center text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Świetna perspektywa na przyszłość — niezależnie od tego, czy będzie to robić z radości, jaką jej to sprawia, 
              czy z chęci rywalizacji sportowej.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Film 1: Początek */}
              <YouTubePlayerWithVolume 
                videoId="s5dxDefPI9I"
                title="Początek"
                subtitle="Lekcje 1-8"
                delay={0.1}
              />

              {/* Film 2: Rozwój */}
              <YouTubePlayerWithVolume 
                videoId="IPCgJMJc3fI"
                title="Rozwój"
                subtitle="Lekcje 9-16"
                delay={0.2}
              />

              {/* Film 3: Pewność i prędkość */}
              <YouTubePlayerWithVolume 
                videoId="HJUAbj4nK5M"
                title="Pewność i prędkość"
                subtitle="Lekcje 17-24 • Czarne trasy"
                delay={0.3}
              />
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-white mb-2">2010</div>
            <div className="text-slate-400">Start nauczania</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-white mb-2">5</div>
            <div className="text-slate-400">Lat intensywnego rozwoju</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-white mb-2">ISIA</div>
            <div className="text-slate-400">Level 3 Certified</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-white mb-2">∞</div>
            <div className="text-slate-400">Pasji i zaangażowania</div>
          </div>
        </motion.div>

        {/* Moja droga */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-800/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-blue-500/20">
            <h3 className="text-3xl md:text-4xl text-white mb-6 text-center">
              Moja droga
            </h3>
            
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              {/* Narciarstwo */}
              <div>
                <h4 className="text-xl text-white mb-3">
                  <Award className="w-6 h-6 inline-block mr-2 text-blue-400" />
                  Narciarstwo
                </h4>
                <div className="space-y-4">
                  <p>
                    Kontakt z nartami mam od małego — wyrosłem w <span className="text-white">Beskidzie Wyspowym</span>, 
                    gdzie śnieg i stoki były naturalnym środowiskiem.
                  </p>
                  <p>
                    W 2009 roku dołączyłem do <span className="text-blue-400">sekcji narciarskiej AZS Politechniki Krakowskiej</span>, 
                    gdzie przez 4 lata (2009-2013) intensywnie rozwijałem swoje umiejętności. To tam zrodziła się moja pasja 
                    do nauczania — zacząłem od <span className="text-white">2010 roku</span>, początkowo dorywczo, 
                    z czasem coraz bardziej świadomie i profesjonalnie.
                  </p>
                  <p>
                    Ostatnie pięć lat to jednak prawdziwa <span className="text-blue-400">eksplozja pasji i rozwoju</span>. 
                    Poświęciłem temu każdą wolną chwilę: kolejne kursy, dziesiątki godzin treningów, 
                    doskonalenie techniki i zdobycie kwalifikacji{" "}
                    <span className="text-white">Pol-Ski Instructor (poziom międzynarodowy ISIA, Level 3)</span>{" "}
                    z uprawnieniami do nauczania po angielsku.
                  </p>
                  <p>
                    Nie zatrzymuję się — uczestniczę w webinarach, szkoleniach i kursach (m.in. lawinowym), 
                    by w przyszłości dojść do najwyższego poziomu instruktora zawodowego{" "}
                    <span className="text-white italic">(Level 4 – Maestro de Ski)</span>.
                  </p>
                </div>
              </div>

              {/* Karate */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xl text-white mb-3">
                  <Target className="w-6 h-6 inline-block mr-2 text-blue-400" />
                  Karate
                </h4>
                <div className="space-y-4">
                  <p>
                    W 2010 roku, równolegle z nauczaniem narciarstwa, zacząłem też rekreacyjnie trenować karate 
                    w <span className="text-blue-400">sekcji AZS Politechniki Krakowskiej</span>. 
                    Od tamtej pory trenuję regularnie i <span className="text-white">wciąż jestem w drodze do tytułu Sensei</span> — 
                    aktualnie z brązowym pasem, coraz bliżej czarnego.
                  </p>
                  <p>
                    To właśnie karate ukształtowało mnie jako człowieka i instruktora: nauczyło{" "}
                    <span className="text-blue-400">cierpliwości, dyscypliny, skupienia i dążenia do perfekcji</span>. 
                    Te wartości naturalnie przenoszę na stok narciarski.
                  </p>
                </div>
              </div>

              {/* Akrobatyka */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xl text-white mb-3">
                  <Compass className="w-6 h-6 inline-block mr-2 text-blue-400" />
                  Akrobatyka
                </h4>
                <div className="space-y-4">
                  <p>
                    Przez 2 lata trenowałem też rekreacyjnie <span className="text-white">akrobatykę w Krakowie</span> w{" "}
                    <span className="text-blue-400">Stowarzyszeniu Instruktorów Niezależnych</span> na terenie sali Kraków Korona.
                  </p>
                  <p>
                    Ten trening był niezwykle cennym doświadczeniem — <span className="text-blue-400">świadomość ciała w przestrzeni, 
                    równowaga, koordynacja i kontrola ruchu</span> to umiejętności, które bezpośrednio przekładają się na 
                    narciarstwo i nauczanie. Rozumienie biomechaniki ruchu z tej perspektywy daje mi dodatkowe narzędzia 
                    w pracy z kursantami.
                  </p>
                </div>
              </div>

              {/* Wykształcenie inżynierskie */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xl text-white mb-3">
                  <BookOpen className="w-6 h-6 inline-block mr-2 text-blue-400" />
                  Wykształcenie
                </h4>
                <div className="space-y-4">
                  <p>
                    Jestem <span className="text-white">magistrem inżynierem elektrotechniki</span> z{" "}
                    <span className="text-white">Politechniki Krakowskiej</span>.
                  </p>
                  <p>
                    To wykształcenie również pomaga mi w rozumieniu fizyki narciarstwa — od{" "}
                    <span className="text-blue-400">sprzętu, poprzez biomechanikę, po siły działające na narciarza</span>. 
                    Potrafię nie tylko pokazać, jak coś zrobić, ale też wyjaśnić <span className="text-white">dlaczego</span> tak działa.
                  </p>
                </div>
              </div>

              {/* Podsumowanie */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xl text-white text-center italic">
                  To całe doświadczenie sprawia, że wystarczy mi kilka sekund, 
                  aby dostrzec czego potrzebujesz w swoim rozwoju.
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">ISIA Level 3</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">Pol-Ski Instructor</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">English Teaching</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">Kurs Lawinowy</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">Mgr Inż. Elektrotechniki</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">Karate - Brązowy Pas</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Styl i podejście */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden"
        >
          {/* Background Slider */}
          <StyleBackgroundSlider />

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl text-white mb-8 text-center">
              Styl i podejście
            </h3>
            
            <div className="text-center mb-10">
              <p className="text-2xl md:text-3xl text-white italic mb-2">
                "Rób to, co kochasz, a nie przepracujesz ani jednego dnia."
              </p>
              <div className="h-px w-64 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-6"></div>
            </div>

            <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
              <p className="text-center">
                <span className="text-white">Bez stresu, bez presji</span> — za to z pełnym skupieniem, 
                energią i radością z postępu.
              </p>
              <p>
                Każdy kursant to dla mnie indywidualna historia i wspólna droga do lepszego zrozumienia narciarstwa. 
                Wierzę, że każdy może osiągnąć harmonię ruchu, jeśli zrozumie, jak działa jego ciało i umysł na śniegu.
              </p>
              <p>
                Dla jednych celem może być <span className="text-blue-400">mistrzostwo</span>, 
                dla innych idealna forma <span className="text-blue-400">sportu rekreacyjnego i zdrowego aktywnego 
                spędzania czasu</span>, krok po kroku, z pełnym szacunkiem do procesu i samego siebie.
              </p>
              <p className="text-xl text-white text-center pt-4 italic">
                Jestem tutaj dla wszystkich.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}