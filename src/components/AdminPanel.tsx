import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Save, Plus, Trash2, X, Lock, Unlock } from "lucide-react";
import { api } from "../utils/api";

export function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hero Slides
  const [heroSlides, setHeroSlides] = useState<any[]>([]);
  
  // Hero Video
  const [heroVideo, setHeroVideo] = useState<any>({});
  
  // Karate Images
  const [karateImages, setKarateImages] = useState<any[]>([]);
  
  // Portfolio
  const [portfolio, setPortfolio] = useState<any[]>([]);
  
  // Pricing
  const [pricing, setPricing] = useState<any[]>([]);
  
  // Texts
  const [texts, setTexts] = useState<any>({});
  
  // Messages
  const [messages, setMessages] = useState<any[]>([]);

  // Videos
  const [videos, setVideos] = useState<any>({});

  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
    }
  }, [isAuthenticated]);

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [slides, video, images, portfolioData, pricingData, textsData, messagesData, videosData] = await Promise.all([
        api.getHeroSlides(),
        api.getHeroVideo(),
        api.getKarateImages(),
        api.getPortfolio(),
        api.getPricing(),
        api.getTexts(),
        api.getMessages(),
        api.getVideos(),
      ]);

      setHeroSlides(slides.length > 0 ? slides : getDefaultHeroSlides());
      setHeroVideo(Object.keys(video).length > 0 ? video : getDefaultHeroVideo());
      setKarateImages(images.length > 0 ? images : getDefaultKarateImages());
      setPortfolio(portfolioData.length > 0 ? portfolioData : []);
      setPricing(pricingData.length > 0 ? pricingData : getDefaultPricing());
      setTexts(Object.keys(textsData).length > 0 ? textsData : getDefaultTexts());
      setMessages(messagesData);
      setVideos(Object.keys(videosData).length > 0 ? videosData : getDefaultVideos());
    } catch (error) {
      console.error("Error loading data:", error);
      alert("Błąd podczas ładowania danych");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    if (password === "skisensei2025") {
      setIsAuthenticated(true);
    } else {
      alert("Nieprawidłowe hasło");
    }
  };

  const saveHeroSlides = async () => {
    try {
      console.log("💾 Zapisuję hero slides:", heroSlides);
      await api.saveHeroSlides(heroSlides);
      alert("✅ Hero slides zapisane pomyślnie! Odśwież stronę, aby zobaczyć zmiany.");
    } catch (error) {
      console.error("❌ Błąd podczas zapisywania:", error);
      alert("❌ Błąd podczas zapisywania. Sprawdź konsolę przeglądarki (F12).");
    }
  };

  const saveHeroVideo = async () => {
    try {
      console.log("💾 Zapisuję hero video:", heroVideo);
      await api.saveHeroVideo(heroVideo);
      alert("✅ Hero video zapisane pomyślnie! Odśwież stronę, aby zobaczyć zmiany.");
    } catch (error) {
      console.error("❌ Błąd podczas zapisywania:", error);
      alert("❌ Błąd podczas zapisywania. Sprawdź konsolę przeglądarki (F12).");
    }
  };

  const saveKarateImages = async () => {
    try {
      await api.saveKarateImages(karateImages);
      alert("Zdjęcia karate zapisane!");
    } catch (error) {
      alert("Błąd podczas zapisywania");
    }
  };

  const savePortfolio = async () => {
    try {
      await api.savePortfolio(portfolio);
      alert("Portfolio zapisane!");
    } catch (error) {
      alert("Błąd podczas zapisywania");
    }
  };

  const savePricing = async () => {
    try {
      await api.savePricing(pricing);
      alert("Cennik zapisany!");
    } catch (error) {
      alert("Błąd podczas zapisywania");
    }
  };

  const saveTexts = async () => {
    try {
      await api.saveTexts(texts);
      alert("Teksty zapisane!");
    } catch (error) {
      alert("Błąd podczas zapisywania");
    }
  };

  const saveVideos = async () => {
    try {
      await api.saveVideos(videos);
      alert("Filmy zapisane!");
    } catch (error) {
      alert("Błąd podczas zapisywania");
    }
  };

  const deleteMessage = async (id: string) => {
    if (!confirm("Czy na pewno chcesz usunąć tę wiadomość?")) return;
    try {
      await api.deleteMessage(id);
      setMessages(messages.filter(m => m.id !== id));
      alert("Wiadomość usunięta!");
    } catch (error) {
      alert("Błąd podczas usuwania");
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center"
        aria-label="Open Admin Panel"
      >
        <Lock className="w-5 h-5" />
      </button>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Admin Panel
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Hasło"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
            <Button onClick={handleLogin} className="w-full">
              <Unlock className="w-4 h-4 mr-2" />
              Zaloguj
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 overflow-y-auto">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl text-white mb-2">Panel Administracyjny</h1>
            <p className="text-sm text-slate-400">
              💡 <a href="/CMS_INSTRUKCJA.md" target="_blank" className="underline hover:text-white">
                Przeczytaj instrukcję obsługi CMS
              </a>
            </p>
          </div>
          <Button onClick={() => setIsOpen(false)} variant="outline">
            <X className="w-4 h-4 mr-2" />
            Zamknij
          </Button>
        </div>

        {loading ? (
          <div className="text-white text-center py-12">Ładowanie...</div>
        ) : (
          <Tabs defaultValue="hero" className="w-full">
            <TabsList className="grid w-full grid-cols-7 mb-6">
              <TabsTrigger value="hero">Hero</TabsTrigger>
              <TabsTrigger value="karate">Karate</TabsTrigger>
              <TabsTrigger value="texts">Teksty</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="pricing">Cennik</TabsTrigger>
              <TabsTrigger value="videos">Filmy</TabsTrigger>
              <TabsTrigger value="messages">Wiadomości</TabsTrigger>
            </TabsList>

            <TabsContent value="hero">
              <HeroSlidesEditor slides={heroSlides} setSlides={setHeroSlides} onSave={saveHeroSlides} />
              <HeroVideoEditor video={heroVideo} setVideo={setHeroVideo} onSave={saveHeroVideo} />
            </TabsContent>

            <TabsContent value="karate">
              <KarateImagesEditor images={karateImages} setImages={setKarateImages} onSave={saveKarateImages} />
            </TabsContent>

            <TabsContent value="texts">
              <TextsEditor texts={texts} setTexts={setTexts} onSave={saveTexts} />
            </TabsContent>

            <TabsContent value="portfolio">
              <PortfolioEditor portfolio={portfolio} setPortfolio={setPortfolio} onSave={savePortfolio} />
            </TabsContent>

            <TabsContent value="pricing">
              <PricingEditor pricing={pricing} setPricing={setPricing} onSave={savePricing} />
            </TabsContent>

            <TabsContent value="videos">
              <VideosEditor videos={videos} setVideos={setVideos} onSave={saveVideos} />
            </TabsContent>

            <TabsContent value="messages">
              <MessagesViewer messages={messages} onDelete={deleteMessage} />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}

// Hero Slides Editor
function HeroSlidesEditor({ slides, setSlides, onSave }: any) {
  const convertGoogleDriveUrl = (url: string) => {
    // Convert Google Drive share link to direct download link
    const match = url.match(/\/file\/d\/([^\/]+)/);
    if (match) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
    return url;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Hero Slides (Główny Slider)
          <Button onClick={onSave}>
            <Save className="w-4 h-4 mr-2" />
            Zapisz
          </Button>
        </CardTitle>
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-900">
          <p className="font-semibold mb-1">💡 Jak dodać zdjęcia:</p>
          <ul className="list-disc ml-5 space-y-1 text-xs">
            <li><strong>Google Drive:</strong> Wklej link (automatycznie skonwertuje się)</li>
            <li><strong>Dropbox:</strong> Dodaj <code className="bg-blue-100 px-1">?raw=1</code> na końcu linku</li>
            <li><strong>Unsplash/Inne:</strong> Wklej bezpośredni link do zdjęcia</li>
          </ul>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {slides.map((slide: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg space-y-3">
            <h4 className="font-semibold">Slide {index + 1}</h4>
            <div className="space-y-2">
              <Input
                placeholder="URL zdjęcia (wklej link z Google Drive, Dropbox, lub Unsplash)"
                value={slide.src}
                onChange={(e) => {
                  const newSlides = [...slides];
                  const url = e.target.value;
                  // Auto-convert Google Drive links
                  newSlides[index].src = convertGoogleDriveUrl(url);
                  setSlides(newSlides);
                }}
              />
              {slide.src && slide.src.includes('drive.google.com') && !slide.src.includes('uc?export=download') && (
                <p className="text-xs text-amber-600">
                  ⚠️ Link Google Drive zostanie automatycznie przekonwertowany po zapisaniu
                </p>
              )}
            </div>
            {slide.src && (
              <div className="mt-2">
                <p className="text-xs text-slate-500 mb-2">Podgląd:</p>
                <img 
                  src={slide.src} 
                  alt="Preview" 
                  className="w-full h-40 object-cover rounded border"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden p-4 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
                  ⚠️ Nie można załadować obrazu. Sprawdź czy:
                  <ul className="list-disc ml-5 mt-1 text-xs">
                    <li>Link jest publiczny (Google Drive: "Każdy kto ma link")</li>
                    <li>Format linku jest prawidłowy</li>
                    <li>Plik to faktycznie obraz (jpg, png, webp)</li>
                  </ul>
                </div>
              </div>
            )}
            <Input
              placeholder="Alt text (np. 'Carving w Alpach')"
              value={slide.alt}
              onChange={(e) => {
                const newSlides = [...slides];
                newSlides[index].alt = e.target.value;
                setSlides(newSlides);
              }}
            />
            <Input
              placeholder="Caption (np. 'Precision. Patience. Power.')"
              value={slide.caption}
              onChange={(e) => {
                const newSlides = [...slides];
                newSlides[index].caption = e.target.value;
                setSlides(newSlides);
              }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Hero Video Editor
function HeroVideoEditor({ video, setVideo, onSave }: any) {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          🎥 Hero Video (YouTube w tle)
          <Button onClick={onSave}>
            <Save className="w-4 h-4 mr-2" />
            Zapisz
          </Button>
        </CardTitle>
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-blue-900">
          <p className="font-semibold mb-1">💡 Jak dodać YouTube filmik:</p>
          <ul className="list-disc ml-5 space-y-1 text-xs">
            <li><strong>YouTube ID:</strong> Skopiuj ID z linku YouTube (np. dla https://www.youtube.com/watch?v=<strong>bxorxvJnoDc</strong> wpisz: <code className="bg-blue-100 px-1">bxorxvJnoDc</code>)</li>
            <li><strong>Start Time:</strong> Jeśli film ma zaczynać się od konkretnej sekundy (np. &t=44s), wpisz 44</li>
            <li>Film będzie się odtwarzał w pętli, wyciszony, bez kontrolek</li>
          </ul>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-semibold mb-2 block">YouTube Video ID</label>
          <Input
            placeholder="bxorxvJnoDc"
            value={video.youtubeVideoId || ""}
            onChange={(e) => setVideo({ ...video, youtubeVideoId: e.target.value })}
          />
          {video.youtubeVideoId && (
            <p className="text-xs text-green-600 mt-1">✅ YouTube video: https://www.youtube.com/watch?v={video.youtubeVideoId}</p>
          )}
        </div>
        <div>
          <label className="text-sm font-semibold mb-2 block">Start Time (sekundy)</label>
          <Input
            type="number"
            placeholder="44"
            value={video.videoStartTime || ""}
            onChange={(e) => setVideo({ ...video, videoStartTime: parseInt(e.target.value) || 0 })}
          />
          <p className="text-xs text-slate-500 mt-1">Film zacznie się od tej sekundy (0 = od początku)</p>
        </div>
        <div>
          <label className="text-sm font-semibold mb-2 block">Fallback Image (jeśli video nie załaduje się)</label>
          <Input
            placeholder="URL zdjęcia zastępczego (opcjonalne)"
            value={video.fallbackImage || ""}
            onChange={(e) => setVideo({ ...video, fallbackImage: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-semibold mb-2 block">Caption (tekst wyświetlany w Hero)</label>
          <Input
            placeholder="Precision. Patience. Power."
            value={video.caption || ""}
            onChange={(e) => setVideo({ ...video, caption: e.target.value })}
          />
        </div>
      </CardContent>
    </Card>
  );
}

// Karate Images Editor
function KarateImagesEditor({ images, setImages, onSave }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Zdjęcia Karate (Tło "Dlaczego Sensei")
          <Button onClick={onSave}>
            <Save className="w-4 h-4 mr-2" />
            Zapisz
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {images.map((img: string, index: number) => (
          <div key={index} className="p-4 border rounded-lg">
            <h4 className="font-semibold mb-2">Zdjęcie {index + 1}</h4>
            <Input
              placeholder="URL zdjęcia"
              value={img}
              onChange={(e) => {
                const newImages = [...images];
                newImages[index] = e.target.value;
                setImages(newImages);
              }}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Texts Editor
function TextsEditor({ texts, setTexts, onSave }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Teksty na Stronie
          <Button onClick={onSave}>
            <Save className="w-4 h-4 mr-2" />
            Zapisz
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-semibold mb-2 block">Hero - Podtytuł</label>
          <Input
            value={texts.heroSubtitle || ""}
            onChange={(e) => setTexts({ ...texts, heroSubtitle: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-semibold mb-2 block">Kim jestem - Główny tekst</label>
          <Textarea
            value={texts.aboutMain || ""}
            onChange={(e) => setTexts({ ...texts, aboutMain: e.target.value })}
            rows={4}
          />
        </div>
        <div>
          <label className="text-sm font-semibold mb-2 block">Kim jestem - Cytat</label>
          <Textarea
            value={texts.aboutQuote || ""}
            onChange={(e) => setTexts({ ...texts, aboutQuote: e.target.value })}
            rows={2}
          />
        </div>
      </CardContent>
    </Card>
  );
}

// Portfolio Editor
function PortfolioEditor({ portfolio, setPortfolio, onSave }: any) {
  const addItem = () => {
    setPortfolio([...portfolio, { 
      id: Date.now().toString(),
      type: "video",
      category: "freeride",
      title: "",
      thumbnail: "",
      videoUrl: ""
    }]);
  };

  const removeItem = (index: number) => {
    setPortfolio(portfolio.filter((_: any, i: number) => i !== index));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Galeria Mediów (Filmy/Zdjęcia)
          <div className="flex gap-2">
            <Button onClick={addItem} variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Dodaj
            </Button>
            <Button onClick={onSave}>
              <Save className="w-4 h-4 mr-2" />
              Zapisz
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {portfolio.map((item: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Element {index + 1}</h4>
              <Button onClick={() => removeItem(index)} variant="destructive" size="sm">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm mb-1 block">Typ</label>
                <select
                  value={item.type || "video"}
                  onChange={(e) => {
                    const newPortfolio = [...portfolio];
                    newPortfolio[index].type = e.target.value;
                    setPortfolio(newPortfolio);
                  }}
                  className="w-full p-2 border rounded"
                >
                  <option value="video">Film</option>
                  <option value="photo">Zdjęcie</option>
                </select>
              </div>
              
              <div>
                <label className="text-sm mb-1 block">Kategoria</label>
                <select
                  value={item.category || "freeride"}
                  onChange={(e) => {
                    const newPortfolio = [...portfolio];
                    newPortfolio[index].category = e.target.value;
                    setPortfolio(newPortfolio);
                  }}
                  className="w-full p-2 border rounded"
                >
                  <option value="freeride">Freeride</option>
                  <option value="skitouring">Skitouring</option>
                  <option value="carving">Carving</option>
                  <option value="norwegia">Norwegia</option>
                </select>
              </div>
            </div>

            <Input
              placeholder="Tytuł"
              value={item.title || ""}
              onChange={(e) => {
                const newPortfolio = [...portfolio];
                newPortfolio[index].title = e.target.value;
                setPortfolio(newPortfolio);
              }}
            />
            
            <Input
              placeholder="URL Miniaturki (Unsplash lub inne)"
              value={item.thumbnail || ""}
              onChange={(e) => {
                const newPortfolio = [...portfolio];
                newPortfolio[index].thumbnail = e.target.value;
                setPortfolio(newPortfolio);
              }}
            />
            
            {item.type === "video" && (
              <Input
                placeholder="URL Filmu (YouTube, Vimeo, lub bezpośredni link)"
                value={item.videoUrl || ""}
                onChange={(e) => {
                  const newPortfolio = [...portfolio];
                  newPortfolio[index].videoUrl = e.target.value;
                  setPortfolio(newPortfolio);
                }}
              />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Pricing Editor
function PricingEditor({ pricing, setPricing, onSave }: any) {
  const addItem = () => {
    setPricing([...pricing, { name: "", price: "", description: "", features: [] }]);
  };

  const removeItem = (index: number) => {
    setPricing(pricing.filter((_: any, i: number) => i !== index));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Cennik
          <div className="flex gap-2">
            <Button onClick={addItem} variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Dodaj
            </Button>
            <Button onClick={onSave}>
              <Save className="w-4 h-4 mr-2" />
              Zapisz
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {pricing.map((item: any, index: number) => (
          <div key={index} className="p-4 border rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <h4 className="font-semibold">Pakiet {index + 1}</h4>
              <Button onClick={() => removeItem(index)} variant="destructive" size="sm">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
            <Input
              placeholder="Nazwa"
              value={item.name}
              onChange={(e) => {
                const newPricing = [...pricing];
                newPricing[index].name = e.target.value;
                setPricing(newPricing);
              }}
            />
            <Input
              placeholder="Cena (np. 500 NOK)"
              value={item.price}
              onChange={(e) => {
                const newPricing = [...pricing];
                newPricing[index].price = e.target.value;
                setPricing(newPricing);
              }}
            />
            <Input
              placeholder="Opis"
              value={item.description}
              onChange={(e) => {
                const newPricing = [...pricing];
                newPricing[index].description = e.target.value;
                setPricing(newPricing);
              }}
            />
            <Textarea
              placeholder="Cechy (jedna linia = jedna cecha)"
              value={item.features?.join("\n") || ""}
              onChange={(e) => {
                const newPricing = [...pricing];
                newPricing[index].features = e.target.value.split("\n");
                setPricing(newPricing);
              }}
              rows={4}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

// Videos Editor
function VideosEditor({ videos, setVideos, onSave }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Background Videos
          <Button onClick={onSave}>
            <Save className="w-4 h-4 mr-2" />
            Zapisz
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-semibold mb-2 block">Carving Video URL</label>
          <Input
            placeholder="URL do filmu carving"
            value={videos.carving || ""}
            onChange={(e) => setVideos({ ...videos, carving: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-semibold mb-2 block">Powder Video URL</label>
          <Input
            placeholder="URL do filmu powder"
            value={videos.powder || ""}
            onChange={(e) => setVideos({ ...videos, powder: e.target.value })}
          />
        </div>
      </CardContent>
    </Card>
  );
}

// Messages Viewer
function MessagesViewer({ messages, onDelete }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wiadomości z Formularza ({messages.length})</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-slate-500">Brak wiadomości</p>
        ) : (
          messages.map((msg: any) => (
            <div key={msg.id} className="p-4 border rounded-lg space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{msg.name}</p>
                  <p className="text-sm text-slate-500">{msg.email}</p>
                  <p className="text-xs text-slate-400">{new Date(msg.timestamp).toLocaleString("pl-PL")}</p>
                </div>
                <Button onClick={() => onDelete(msg.id)} variant="destructive" size="sm">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm">{msg.message}</p>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

// Default data functions
function getDefaultHeroSlides() {
  return [
    {
      src: "https://images.unsplash.com/photo-1674675594777-cf843913865d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lpbmclMjBjYXJ2aW5nJTIwcGVyZmVjdCUyMHR1cm58ZW58MXx8fHwxNzYyNjgyMDUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Perfekcyjny carving",
      caption: "Precision. Patience. Power.",
    },
    {
      src: "https://images.unsplash.com/photo-1676048746226-113269dd8084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dkZXIlMjBza2lpbmclMjBkZWVwJTIwc25vd3xlbnwxfHx8fDE3NjI2ODIwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Głęboki powder",
      caption: "Where carving meets perfection.",
    },
    {
      src: "https://images.unsplash.com/photo-1711631139856-91482c2889c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lpbmclMjBtb3VudGFpbiUyMHN1bnNldHxlbnwxfHx8fDE3NjI2ODIwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Zachód słońca w górach",
      caption: "The journey never ends.",
    },
    {
      src: "https://images.unsplash.com/photo-1744852511245-6e9485606003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lpbmclMjBhY3Rpb24lMjBzcGVlZHxlbnwxfHx8fDE3NjI2ODIwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Akcja i prędkość",
      caption: "Balance. Rhythm. Flow.",
    },
    {
      src: "https://images.unsplash.com/photo-1673392108120-05fcdea2476b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lpbmclMjBtb3VudGFpbnMlMjBub3J3YXl8ZW58MXx8fHwxNzYyNjgyMDUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Norweskie góry",
      caption: "Norwegian mountains, endless possibilities.",
    },
    {
      src: "https://images.unsplash.com/photo-1673994841967-7ba4d765dcda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2lpbmclMjBiYWNrY291bnRyeSUyMHBvd2RlcnxlbnwxfHx8fDE3NjI2ODIwNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Backcountry",
      caption: "Beyond limits. Beyond fear.",
    },
  ];
}

function getDefaultHeroVideo() {
  return {
    videoUrl: "",
    fallbackImage: "",
    caption: "",
  };
}

function getDefaultKarateImages() {
  return [
    "https://images.unsplash.com/photo-1608583252022-09323426b8b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjB0cmFpbmluZyUyMGRvam98ZW58MXx8fHwxNzYyNjA3NDM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1541836567455-2d41eb6dd9b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrYXJhdGUlMjBicm93biUyMGJlbHR8ZW58MXx8fHwxNzYyNjkyMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1617480348565-d60644e43fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHByYWN0aWNlfGVufDF8fHx8MTc2MjY5MjM4MXww&ixlib=rb-4.1.0&q=80&w=1080",
  ];
}

function getDefaultPricing() {
  return [
    {
      name: "Lekcja Indywidualna",
      price: "600 NOK",
      description: "Jedna godzina indywidualnej instrukcji",
      features: ["1 godzina", "Analiza wideo", "Spersonalizowany feedback", "Wszystkie poziomy"],
    },
    {
      name: "Pakiet 5 Lekcji",
      price: "2800 NOK",
      description: "Pięć godzin indywidualnej instrukcji",
      features: ["5 godzin", "Analiza wideo", "Plan rozwoju", "Oszczędzasz 200 NOK"],
    },
    {
      name: "Lekcja Grupowa",
      price: "400 NOK/os",
      description: "Grupa 2-4 osób",
      features: ["1 godzina", "Max 4 osoby", "Wspólna zabawa", "Podobny poziom"],
    },
  ];
}

function getDefaultTexts() {
  return {
    heroSubtitle: "POL-SKI Instruktor Narciarstwa Zjazdowego — In The Spirit of Karate",
    aboutMain: "Połączenie pasji do gór, precyzji ruchu i ciągłego dążenia do perfekcji.",
    aboutQuote: "Narciarstwo to dla mnie coś więcej niż sport — to droga rozwoju, równowagi i samodoskonalenia.",
  };
}

function getDefaultVideos() {
  return {
    carving: "",
    powder: "",
  };
}