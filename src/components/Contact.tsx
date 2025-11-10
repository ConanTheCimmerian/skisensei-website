import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { api } from "../utils/api";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "individual",
    numberOfPeople: "1",
    experienceLevel: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setSending(true);
    setSuccess(false);
    
try {
  const res = await fetch("https://skisensei.eu/api/sendEmail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const result = await res.json().catch(() => ({}));

  if (res.ok && (result.success || !result.error)) {
    setSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceType: "individual",
      numberOfPeople: "1",
      experienceLevel: "",
      message: "",
    });
  } else {
    console.error("Błąd:", result.error);
    alert("❌ Nie udało się wysłać wiadomości. Spróbuj ponownie.");
  }
} catch (error) {
  console.error("Błąd sieci:", error);
  alert("❌ Brak połączenia z serwerem. Spróbuj ponownie później.");
} finally {
  setSending(false);
}

  };

  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Zarezerwuj Lekcję
          </h2>
          <p className="text-xl text-slate-300">
            Gotowy/a podnieść swoje umiejętności narciarskie? Skontaktuj się aby umówić lekcję
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl text-white mb-6">Skontaktuj się</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <p className="text-slate-300">Email</p>
                    <a href="mailto:info.skiwithme@gmail.com" className="text-white hover:text-blue-400">
                      info.skiwithme@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <p className="text-slate-300">Telefon / WhatsApp</p>
                    <a href="tel:+4748511023" className="text-white hover:text-blue-400">
                      +47 485 11 023
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <p className="text-slate-300">Lokalizacja</p>
                    <p className="text-white">Oslo, Norwegia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700">
              <h4 className="text-white mb-3">Czego możesz się spodziewać</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Instrukcja dostosowana do Twojego poziomu</li>
                <li>• Analiza wideo i feedback</li>
                <li>• Podejście stawiające bezpieczeństwo na pierwszym miejscu</li>
                <li>• Dostępne lekcje grupowe lub indywidualne</li>
                <li>• Wszystkie tereny i warunki</li>
                <li>• Filozofia karate w nauczaniu narciarstwa</li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="Twoje Imię"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
                <Input
                  type="email"
                  placeholder="Twój Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>
              
              <Input
                type="tel"
                placeholder="Telefon / WhatsApp (opcjonalnie)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />

              <div className="space-y-3">
                <Label className="text-white">Czego szukasz?</Label>
                <RadioGroup
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  className="space-y-2"
                >
                  <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="text-slate-200 cursor-pointer flex-1">
                      Lekcje narciarskie
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online" className="text-slate-200 cursor-pointer flex-1">
                      Spotkanie online / Wideoanaliza
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <RadioGroupItem value="fullday" id="fullday" />
                    <Label htmlFor="fullday" className="text-slate-200 cursor-pointer flex-1">
                      Full Day Booking (rodzina/firma)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <RadioGroupItem value="video" id="video" />
                    <Label htmlFor="video" className="text-slate-200 cursor-pointer flex-1">
                      Nagrywanie i edycja filmów
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                    <RadioGroupItem value="custom" id="custom" />
                    <Label htmlFor="custom" className="text-slate-200 cursor-pointer flex-1">
                      Inne (dzień skrojony pod klienta)
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">Liczba osób</Label>
                  <Input
                    type="number"
                    min="1"
                    placeholder="Ile osób?"
                    value={formData.numberOfPeople}
                    onChange={(e) => setFormData({ ...formData, numberOfPeople: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Poziom zaawansowania</Label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Wybierz poziom</option>
                    <option value="beginner">Początkujący</option>
                    <option value="intermediate">Średniozaawansowany</option>
                    <option value="advanced">Zaawansowany</option>
                    <option value="expert">Expert</option>
                    <option value="mixed">Mieszany (grupa)</option>
                  </select>
                </div>
              </div>

              <div>
                <Label className="text-white mb-2 block">
                  Szczegóły 
                  {formData.serviceType === 'video' && ' - Nagrywanie i edycja'}
                  {formData.serviceType === 'fullday' && ' - Full Day Booking'}
                  {formData.serviceType === 'custom' && ' - Dzień skrojony pod klienta'}
                  {formData.serviceType === 'online' && ' - Spotkanie online / Wideoanaliza'}
                  {formData.serviceType === 'individual' && ' - Cele i preferencje'}
                </Label>
                <Textarea
                  placeholder={
                    formData.serviceType === 'online'
                      ? "Np. 'Chcę przeanalizować moją technikę carvingu, mam nagranie z Tryvann. Dostępny/a: poniedziałki i środy 18:00-20:00, preferuję Zoom...'"
                      : formData.serviceType === 'video' 
                      ? "Np. 'Chcę 60-sekundowy Instagram reel z carvingu na Tryvann, dynamiczny edit z muzyką. Dostępny/a: sobota 15.02, cały dzień...'"
                      : formData.serviceType === 'fullday'
                      ? "Np. 'Grupa 6 osób (mix poziomów), preferujemy freeride z elementami bezpieczeństwa, chcemy nagranie + edit. Dostępni: weekendy luty/marzec...'"
                      : formData.serviceType === 'custom'
                      ? "Np. 'Szukam freeride skiturowego z nagraniem analitycznym, 2 osoby zaawansowane, Hemsedal. Lub lekcje grupowe weekend 4 osoby podobny poziom. Dostępni: 20-25 lutego...'"
                      : "Np. 'Mam 35 lat, dobra kondycja, jeżdżę od 5 lat. Chcę poprawić carving. Dostępny/a: wtorki 10:00-14:00 lub weekendy luty/marzec. Ewentualnie weekend 20-21.02 z grupą 4 znajomych...'"
                  }
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 gap-2"
                disabled={sending}
              >
                {sending ? "Wysyłanie..." : "Wyślij Zapytanie"}
                <Send className="w-4 h-4" />
              </Button>
              
              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
                >
                  <p className="text-green-400 text-center">
                    ✅ Dziękuję! Wiadomość została wysłana. Odpowiem najszybciej jak to możliwe!
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-24 pt-12 border-t border-slate-800"
      >
        <p className="text-slate-400">
          © 2025 SkiSensei. Wszelkie prawa zastrzeżone.
        </p>
      </motion.div>
    </section>
  );
}