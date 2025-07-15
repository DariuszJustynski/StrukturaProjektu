# 📁 Kreator Struktury Plików

**app.js** to prosty skrypt Node.js do generowania struktury folderów i plików w systemie lokalnym na podstawie tekstowego drzewa katalogów. Program działa w trybie CLI i pozwala szybko rozpocząć nowy projekt lub dodać kolejne warstwy plików bez nadpisywania istniejących danych.

---

## ✨ Funkcje

- Tworzenie zagnieżdżonych katalogów i plików na podstawie tekstowego schematu
- Dwa tryby działania:
  - `1` – Tworzenie nowego projektu (nadpisuje pliki)
  - `2` – Dodawanie do istniejącej struktury nowych plików i katalogów (pomija istniejące pliki i katalogi)
- Intuicyjny interfejs w konsoli (CLI)
- Obsługa znaków tabulacji do określania głębokości folderów

---

## 🛠️ Wymagania

- Node.js (v14 lub nowszy)

---

## 📦 Instalacja

1. Sklonuj repozytorium:

   kod bash
   
   git clone https://github.com/twoja-nazwa-uzytkownika/TwojeRepozytorium.git
   
   cd TwojeRepozytorium

 3.  Uruchom skrypt:

    kod bash

    node app.js

📋 Sposób użycia

Po uruchomieniu skryptu:

Wybierz tryb:

1 – nadpisuje istniejące pliki

2 – zachowuje istniejące pliki i dodaje tylko nowe pliki

Wprowadź ścieżkę do katalogu głównego (np. C:/projekty)

Podaj nazwę folderu głównego projektu

Wklej strukturę folderów i plików, np.:


  newsletter-app/

	  public/
 
		  index.html
  
		  script.js
  
	  subscribers.json
 
	  server.js
 
	  package.json
 

Zakończ wklejanie wpisując END i zatwierdź Enter.

🧪 Przykład działania

📁 Kreator struktury projektu
====================================
Program tworzy strukturę katalogów i plików na podstawie schematu drzewa.
Dostępne tryby:
1 - Utwórz projekt od nowa (nadpisuje istniejące pliki)
2 - Dodaj warstwę (nie nadpisuje plików i katalogów, pomija istniejące)

Wybierz tryb (1 lub 2): 1
Podaj ścieżkę do folderu głównego projektu (np. C:/projekty): C:/projekty
Podaj nazwę folderu głównego projektu: test-app

🧱 Wklej strukturę drzewa katalogów i plików. Wpisz "END" aby zakończyć:

test-app/

	public/
 
		index.html
  
		style.css
  
	server.js
 
END

📂 Rezultat

C:/projekty/test-app/

├── public/

│   ├── index.html

│   └── style.css

├── server.js

⚠️ Uwaga

Struktura oparta jest na znakach tabulacji (\t) do określania poziomu zagnieżdżenia.

W nazwach plików oczekiwany jest znak kropki (.), aby odróżnić pliki od folderów.

📄 Licencja

MIT © 2025 [DARIUSZJUSTYNSKI]

