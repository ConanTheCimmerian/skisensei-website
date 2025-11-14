import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { YouTubePlayerWithVolume } from "./YouTubePlayerWithVolume";
import { Target, Heart, BookOpen, Repeat, Compass, Mountain, Award } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { getAboutText } from "../translations/about";

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

function TeachingBackgroundSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const teachingImages = [
    "https://www.dropbox.com/scl/fi/qmu1kc53zia0aflf41l67/Zrzut-ekranu-2025-08-12-201247.png?rlkey=94h6dbslmx5hf0gmjtqaxotyl&raw=1",
    "https://www.dropbox.com/scl/fi/s6c8ywrog75z8vrpn9lpv/Snapshot_339.JPG?rlkey=kjqsjlhmtd4boczv5yd4rjuef&raw=1",
    "https://www.dropbox.com/scl/fi/ugllb9g32abv0so9ktrmk/Snapshot_337.JPG?rlkey=s8bhut7vercp8fq3otw3n7x0k&raw=1",
    "https://www.dropbox.com/scl/fi/csf7nipk86n3byrxl7irv/20240309_133331.jpg?rlkey=7svp4f4i69l80vwpvu62itxmu&raw=1",
    "https://www.dropbox.com/scl/fi/22lp0af7b6ta9npbfjwy1/Snapshot_12.JPG?rlkey=0ye0n61mpmcl1akq6udpvpmbg&raw=1",
    "https://www.dropbox.com/scl/fi/lht0v4rv57sr29wbkc549/Snapshot_336.JPG?rlkey=uuq22s4zm5i80nzfqn1i36xlz&raw=1",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teachingImages.length);
    }, 5000); // 5 sekund na zdjęcie
    return () => clearInterval(timer);
  }, [teachingImages.length]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl">
      {teachingImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Teaching moment ${index + 1}`}
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center center'
            }}
          />
        </div>
      ))}
      {/* Nakładka dla czytelności tekstu */}
      <div className="absolute inset-0 bg-slate-900/60"></div>
    </div>
  );
}

export function About() {
  const { language } = useLanguage();
  const aboutText = getAboutText(language);

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
                  {aboutText.introText} <span className="text-blue-300">{aboutText.introHighlight}</span>{aboutText.introText2}
                </p>
              </div>
            </div>

            {/* Sekcja Rebranding - dół */}
            <div className="relative z-10 px-8 md:px-12 lg:px-16 pb-8 md:pb-12 lg:pb-16">
              <div className="text-center">
                <p className="text-base text-slate-200 leading-relaxed max-w-4xl mx-auto">
                  <span className="text-blue-300">SkiSensei</span> {aboutText.rebrandingText} <span className="text-slate-100">{aboutText.rebrandingOld}</span>.
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
                {aboutText.whySenseiTitle}
              </h3>

              <div className="space-y-5 text-base md:text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
                <p>
                  {aboutText.whySenseiP1}
                </p>
                <p>
                  {aboutText.whySenseiP2}{" "}
                  <span className="text-blue-400">{aboutText.whySenseiHighlight}</span>.
                </p>
                <p className="text-lg md:text-xl text-white italic text-center pt-4">
                  {aboutText.whySenseiP3}
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
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden min-h-[800px] md:min-h-[900px] flex items-center">
            {/* Background Slider */}
            <TeachingBackgroundSlider />

            {/* Content */}
            <div className="relative z-10 w-full p-8 md:p-12 lg:p-16">
              <h3 className="text-3xl md:text-4xl text-white mb-6 text-center">
                {aboutText.howITeachTitle}
              </h3>
              <p className="text-lg text-slate-300 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
                {aboutText.howITeachSubtitle}
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
                  <h4 className="text-white mb-2">{aboutText.principle1Title}</h4>
                  <p className="text-slate-400 text-sm">
                    {aboutText.principle1Desc}
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
                  <h4 className="text-white mb-2">{aboutText.principle2Title}</h4>
                  <p className="text-slate-400 text-sm">
                    {aboutText.principle2Desc}
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
                  <h4 className="text-white mb-2">{aboutText.principle3Title_alt}</h4>
                  <p className="text-slate-400 text-sm">
                    {aboutText.principle3Desc_alt}
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
                  <h4 className="text-white mb-2">{aboutText.principle4Title_alt}</h4>
                  <p className="text-slate-400 text-sm">
                    {aboutText.principle4Desc_alt}
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
                  <h4 className="text-white mb-2">{aboutText.principle5Title_alt}</h4>
                  <p className="text-slate-400 text-sm">
                    {aboutText.principle5Desc_alt}
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
                  <h4 className="text-white mb-2">{aboutText.principle6Title_alt}</h4>
                  <p className="text-slate-400 text-sm">
                    {aboutText.principle6Desc_alt}
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
                {aboutText.howITeachSummary}
              </motion.p>
            </div>
          </div>
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
              {aboutText.nellyCaseTitle}
            </h3>
            <p className="text-center text-lg text-slate-300 mb-2 max-w-3xl mx-auto leading-relaxed">
              {aboutText.nellyCaseP1} <span className="text-white">{aboutText.nellyCaseP1Highlight}</span>. 
            </p>
            <p className="text-center text-slate-300 mb-2 max-w-3xl mx-auto leading-relaxed">
              <span className="text-blue-400">{aboutText.nellyCaseP2}</span> {aboutText.nellyCaseP2Rest}
            </p>
            <p className="text-center text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {aboutText.nellyCaseP3}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Film 1: Początek */}
              <YouTubePlayerWithVolume 
                videoId="s5dxDefPI9I"
                title={aboutText.nellyCaseVideo1Title}
                subtitle={aboutText.nellyCaseVideo1Subtitle}
                delay={0.1}
              />

              {/* Film 2: Rozwój */}
              <YouTubePlayerWithVolume 
                videoId="IPCgJMJc3fI"
                title={aboutText.nellyCaseVideo2Title}
                subtitle={aboutText.nellyCaseVideo2Subtitle}
                delay={0.2}
              />

              {/* Film 3: Pewność i prędkość */}
              <YouTubePlayerWithVolume 
                videoId="HJUAbj4nK5M"
                title={aboutText.nellyCaseVideo3Title}
                subtitle={aboutText.nellyCaseVideo3Subtitle}
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
            <div className="text-4xl md:text-5xl text-white mb-2">{aboutText.statsYear}</div>
            <div className="text-slate-400">{aboutText.statsYearDesc}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-white mb-2">{aboutText.statsYears}</div>
            <div className="text-slate-400">{aboutText.statsYearsDesc}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-white mb-2">{aboutText.statsISIA}</div>
            <div className="text-slate-400">{aboutText.statsISIADesc}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl text-white mb-2">{aboutText.statsPassion}</div>
            <div className="text-slate-400">{aboutText.statsPassionDesc}</div>
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
          <div className="relative bg-gradient-to-br from-blue-900/20 to-slate-800/20 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-blue-500/20">
            {/* Portrait Image - Right Top Corner */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-4 right-4 md:top-6 md:right-6 w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl shadow-blue-500/30 z-10"
            >
              <ImageWithFallback
                src="https://www.dropbox.com/scl/fi/1r0d1rpvvnq8829khf2hf/20250704_161857-2-1.png?rlkey=pysah1ikflu3ul017y7g5hzbt&st=53eshobn&raw=1"
                alt="Ski Sensei Portrait"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <h3 className="text-3xl md:text-4xl text-white mb-6 lg:pr-80">
              {aboutText.myJourneyTitle}
            </h3>
            
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              {/* Narciarstwo */}
              <div>
                <h4 className="text-xl text-white mb-3 lg:pr-80">
                  <Award className="w-6 h-6 inline-block mr-2 text-blue-400" />
                  {aboutText.journeySkiingTitle}
                </h4>
                <div className="space-y-4">
                  {/* Tylko P1 z paddingiem - obok zdjęcia */}
                  <div className="lg:pr-80">
                    <p className="whitespace-pre-line">{aboutText.journeySkiingP1}</p>
                  </div>
                  {/* P2 też jako jeden akapit z whitespace-pre-line */}
                  <p className="whitespace-pre-line">{aboutText.journeySkiingP2}</p>
                  {/* P3, P4 - pełna szerokość */}
                  <p>{aboutText.journeySkiingP3}</p>
                  <p>{aboutText.journeySkiingP4}</p>
                </div>
              </div>

              {/* Karate */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xl text-white mb-3">
                  <Target className="w-6 h-6 inline-block mr-2 text-blue-400" />
                  {aboutText.journeyKarateTitle}
                </h4>
                <div className="space-y-4">
                  <p>{aboutText.journeyKarateP1}</p>
                  <p>{aboutText.journeyKarateP2}</p>
                </div>
              </div>

              {/* Akrobatyka */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xl text-white mb-3">
                  <Compass className="w-6 h-6 inline-block mr-2 text-blue-400" />
                  {aboutText.journeyAcrobaticsTitle}
                </h4>
                <div className="space-y-4">
                  <p>{aboutText.journeyAcrobaticsP1}</p>
                  <p>{aboutText.journeyAcrobaticsP2}</p>
                </div>
              </div>

              {/* Wykształcenie inżynierskie */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xl text-white mb-3">
                  <BookOpen className="w-6 h-6 inline-block mr-2 text-blue-400" />
                  {aboutText.journeyEducationTitle}
                </h4>
                <div className="space-y-4">
                  <p>{aboutText.journeyEducationP1}</p>
                  <p>{aboutText.journeyEducationP2}</p>
                </div>
              </div>

              {/* Podsumowanie */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xl text-white text-center italic">
                  {aboutText.journeySummary}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">{aboutText.cert1}</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">{aboutText.cert2}</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">{aboutText.cert3}</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">{aboutText.cert4}</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">{aboutText.cert5}</span>
              </div>
              <div className="px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full border border-blue-400/30">
                <span className="text-blue-300">{aboutText.cert6}</span>
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
              {aboutText.styleTitle}
            </h3>
            
            <div className="text-center mb-10">
              <p className="text-2xl md:text-3xl text-white italic mb-2">
                {aboutText.styleQuote}
              </p>
              <div className="h-px w-64 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-6"></div>
            </div>

            <div className="space-y-5 text-lg text-slate-300 leading-relaxed">
              <p className="text-center">
                {aboutText.styleP1}
              </p>
              <p>
                {aboutText.styleP2}
              </p>
              <p>
                {aboutText.styleP3}
              </p>
              <p className="text-xl text-white text-center pt-4 italic">
                {aboutText.styleSummary}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}