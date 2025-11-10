# 📖 Instrukcja CMS - SkiSensei.com

## 🔐 Logowanie do Panelu Administracyjnego

1. Kliknij ikonę kłódki w prawym dolnym rogu strony
2. Wprowadź hasło: `skisensei2025`
3. Panel CMS otworzy się na pełnym ekranie

---

## 🖼️ Jak dodać zdjęcia do Hero Slider

### Opcja 1: Google Drive (Zalecane)

1. **Wgraj zdjęcie na Google Drive**
2. **Kliknij prawym przyciskiem** → "Udostępnij"
3. **Zmień uprawnienia** na "Każdy, kto ma link"
4. **Skopiuj link** (będzie wyglądał tak: `https://drive.google.com/file/d/ABC123XYZ456/view?usp=sharing`)
5. **Wklej link w pole "URL zdjęcia"** w CMS - system automatycznie go przekonwertuje!

### Opcja 2: Dropbox

1. Wgraj zdjęcie na Dropbox
2. Kliknij "Udostępnij" i skopiuj link
3. **Dodaj `?raw=1` na końcu linku**
   - Przykład: `https://www.dropbox.com/s/abc123/image.jpg?raw=1`
4. Wklej w pole "URL zdjęcia"

### Opcja 3: Unsplash lub inne

1. Znajdź zdjęcie na Unsplash.com
2. Kliknij prawym przyciskiem → "Kopiuj adres obrazu"
3. Wklej bezpośredni link do zdjęcia w pole "URL zdjęcia"

---

## ✅ Weryfikacja zdjęcia

Po wklejeniu linku:
- **Podgląd pokaże się automatycznie** pod polem URL
- Jeśli widzisz **czerwony komunikat błędu**, sprawdź:
  - ✓ Czy plik jest publiczny (Google Drive: "Każdy kto ma link")
  - ✓ Czy link jest prawidłowy
  - ✓ Czy to faktycznie plik graficzny (.jpg, .png, .webp)

---

## 💾 Zapisywanie zmian

1. Po edycji kliknij **"Zapisz"**
2. Odśwież stronę główną (F5), aby zobaczyć zmiany
3. Jeśli zmiany nie są widoczne:
   - Otwórz konsolę przeglądarki (F12)
   - Sprawdź komunikaty w zakładce "Console"
   - Szukaj komunikatów zaczynających się od ✅ lub ❌

---

## 🎬 Dodawanie filmów tła (Carving/Powder)

1. Przejdź do zakładki **"Filmy"** w CMS
2. Wklej link do filmu:
   - **Google Drive**: Użyj tego samego formatu co dla zdjęć
   - **Dropbox**: Dodaj `?raw=1` na końcu
3. Kliknij **"Zapisz"**
4. Odśwież stronę

---

## 📝 Edycja tekstów

W zakładce **"Teksty"** możesz edytować:
- Podtytuł w Hero (pod "SKI SENSEI")
- Główny tekst w sekcji "Kim jestem"
- Cytat w sekcji "Kim jestem"

---

## 📸 Galeria Mediów (Portfolio)

1. Przejdź do zakładki **"Portfolio"**
2. Kliknij **"Dodaj"**, aby dodać nowy element
3. Wybierz typ:
   - **Film**: Wklej link YouTube/Vimeo
   - **Zdjęcie**: Wklej link do zdjęcia
4. Wybierz kategorię:
   - Freeride
   - Skitouring
   - Carving
   - Lekcje
5. Dodaj tytuł i miniaturkę
6. Kliknij **"Zapisz"**

---

## 🐛 Debugowanie

### Zdjęcie się nie wyświetla?

1. Otwórz konsolę przeglądarki (F12)
2. Przejdź do zakładki "Console"
3. Szukaj komunikatów:
   - ✅ = Wszystko OK
   - ⚠️ = Ostrzeżenie
   - ❌ = Błąd

### Sprawdź:
- Czy dane zostały zapisane: Komunikat "💾 Zapisuję hero slides"
- Czy dane zostały załadowane: Komunikat "✅ Hero - Załadowane slajdy z CMS"
- Czy są błędy ładowania obrazu

---

## 📧 Wiadomości z formularza kontaktowego

W zakładce **"Wiadomości"** znajdziesz wszystkie wiadomości wysłane przez formularz kontaktowy:
- Imię i email osoby
- Treść wiadomości
- Data i godzina wysłania
- Możliwość usunięcia wiadomości

---

## 🔒 Bezpieczeństwo

- **Nigdy nie udostępniaj hasła do CMS** osobom trzecim
- Panel CMS jest dostępny tylko lokalnie po zalogowaniu
- Wiadomości z formularza są bezpiecznie przechowywane w Supabase

---

## 💡 Wskazówki

- **Jakość zdjęć**: Używaj zdjęć w wysokiej rozdzielczości (min. 1920x1080px)
- **Rozmiar plików**: Staraj się, aby zdjęcia nie były większe niż 5MB
- **Proporcje**: Zdjęcia w Hero najlepiej wyglądają w formacie landscape (16:9)
- **Google Drive limit**: Jeśli film/zdjęcie ma dużo odsłon, Google może tymczasowo zablokować dostęp

---

## 🆘 Potrzebujesz pomocy?

Jeśli coś nie działa:
1. Sprawdź konsolę przeglądarki (F12)
2. Zrób zrzut ekranu błędu
3. Skontaktuj się z deweloperem strony

---

**Wersja:** 1.0  
**Ostatnia aktualizacja:** Listopad 2025
