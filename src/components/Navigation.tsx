import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

// Przełączanie języka przez Google Translate
function translatePage(lang: string) {
  const tryTranslate = () => {
    const select = document.querySelector(
      "#google_translate_element select"
    ) as HTMLSelectElement | null;

    if (!select) {
      console.log("Google Translate nie jest jeszcze gotowy.");
      return;
    }

    for (let i = 0; i < select.options.length; i++) {
      const option = select.options[i];
      if (option.value.indexOf(lang) === 0) {
        select.selectedIndex = i;
        select.dispatchEvent(new Event("change"));
        break;
      }
    }
  };

  // jeśli google jeszcze się nie zainicjalizował – spróbuj po chwili
  if (!(window as any).google || !(window as any).google.translate) {
    setTimeout(tryTranslate, 700);
  } else {
    tryTranslate();
  }
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 backdrop-blur-sm shadow-lg"
          : "bg-slate-950/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* LEWA STRONA: logo + flagi */}
          <div className="flex items-center gap-3 text-white">
            <span className="text-2xl tracking-tight font-[Kaushan_Script]">
              SKI SENSEI
            </span>

            {/* Flagi na MOBILE – zawsze widoczne obok logo */}
            <div className="flex md:hidden items-center gap-2 ml-2">
              <img
                src="https://flagcdn.com/w20/pl.png"
                alt="Polski"
                onClick={() => translatePage("pl")}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="English"
                onClick={() => translatePage("en")}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
              <img
                src="https://flagcdn.com/w20/no.png"
                alt="Norsk"
                onClick={() => translatePage("no")}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            </div>

            {/* Flagi na DESKTOP – obok logo jak wcześniej */}
            <div className="hidden md:flex items-center gap-2 ml-2">
              <img
                src="https://flagcdn.com/w20/pl.png"
                alt="Polski"
                onClick={() => translatePage("pl")}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="English"
                onClick={() => translatePage("en")}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
              <img
                src="https://flagcdn.com/w20/no.png"
                alt="Norsk"
                onClick={() => translatePage("no")}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              O mnie
            </button>
            <button
              onClick={() => scrollToSection("availability")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Dostępność
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Oferta
            </button>
            <button
              onClick={() => scrollToSection("media-gallery")}
              className="text-slate-300 hover:text-white transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              Kontakt
            </button>
          </div>

          {/* PRZYCISK MOBILE MENU */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* MOBILE MENU – już BEZ flag (są w headerze) */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-slate-700 pt-4">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              O mnie
            </button>
            <button
              onClick={() => scrollToSection("availability")}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              Dostępność
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              Oferta
            </button>
            <button
              onClick={() => scrollToSection("media-gallery")}
              className="block w-full text-left text-slate-300 hover:text-white transition-colors py-2"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              Kontakt
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
