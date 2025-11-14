import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLanguage, Language } from "../contexts/LanguageContext";
import { getNavigationText } from "../translations/navigation";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = getNavigationText(language);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-white">
            <span className="text-2xl tracking-tight font-[Kaushan_Script]">SKI SENSEI</span>
            {/* Language Flags */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => changeLanguage('pl')}
                className={`text-2xl transition-all hover:scale-110 ${
                  language === 'pl' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'
                }`}
                aria-label="Polski"
                title="Polski"
              >
                🇵🇱
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`text-2xl transition-all hover:scale-110 ${
                  language === 'en' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'
                }`}
                aria-label="English"
                title="English"
              >
                🇬🇧
              </button>
              <button
                onClick={() => changeLanguage('no')}
                className={`text-2xl transition-all hover:scale-110 ${
                  language === 'no' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'
                }`}
                aria-label="Norsk"
                title="Norsk"
              >
                🇳🇴
              </button>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t.offer}
            </button>
            <button
              onClick={() => scrollToSection("availability")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t.availability}
            </button>
            <button
              onClick={() => scrollToSection("first-time")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t.firstTime}
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              {t.gallery}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              {t.contact}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-700/50 pt-4 bg-slate-950/90 backdrop-blur-md -mx-4 px-4 rounded-b-lg shadow-xl">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              {t.offer}
            </button>
            <button
              onClick={() => scrollToSection("availability")}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              {t.availability}
            </button>
            <button
              onClick={() => scrollToSection("first-time")}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              {t.firstTime}
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              {t.gallery}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              {t.contact}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}