# Martial Minds - Praxis für Psychotherapie

Moderna, jednostrana web aplikacija za Martial Minds praksu za psihoterapiju.

## 🚀 Tehnologije

- **React 19.2** - Najnovija verzija React biblioteke
- **Vite 7.1** - Ultra brzi build tool
- **TypeScript 5.9** - Type-safe development
- **Tailwind CSS 3.4** - Moderna CSS framework

## 📋 Karakteristike

- ✅ **Single-Page Application** - Brza navigacija bez ponovnog učitavanja stranice
- ✅ **Responsive Design** - Savršeno izgleda na svim uređajima (desktop, tablet, mobile)
- ✅ **Modern UI/UX** - Elegantan i profesionalan dizajn
- ✅ **Smooth Scrolling** - Glatka animirana navigacija između sekcija
- ✅ **Optimizovane Slike** - Sve slike su optimizovane za brzo učitavanje
- ✅ **SEO Optimizovano** - Meta tagovi i semantički HTML

## 📂 Struktura Projekta

```
martial-minds-site/
├── public/                    # Statički resursi (slike)
│   ├── logo.jpeg             # Logo Martial Minds
│   ├── me 1.jpeg             # Slika 1
│   ├── me 2.jpeg             # Slika 2
│   ├── me 3.jpeg             # Slika 3
│   ├── birkman.webp          # Birkman logo
│   └── fresh minds.jpeg      # Fresh Minds logo
├── src/
│   ├── components/           # React komponente
│   │   ├── Navigation.tsx   # Navigacioni meni
│   │   ├── Hero.tsx         # Hero sekcija
│   │   ├── Introduction.tsx # Uvod
│   │   ├── Services.tsx     # Ponude
│   │   ├── ServiceDetails.tsx # Detalji ponuda
│   │   ├── About.tsx        # O meni
│   │   ├── Pricing.tsx      # Cenovnik
│   │   ├── Contact.tsx      # Kontakt
│   │   └── Footer.tsx       # Footer
│   ├── App.tsx              # Glavna komponenta
│   ├── main.tsx             # Entry point
│   └── index.css            # Globalni stilovi
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind konfiguracija
├── vite.config.ts           # Vite konfiguracija
└── tsconfig.json            # TypeScript konfiguracija
```

## 🛠️ Instalacija i Pokretanje

### Preduslov
- Node.js (verzija 18 ili novija)
- npm ili yarn

### Instalacija

```bash
cd martial-minds-site
npm install
```

### Development Server

```bash
npm run dev
```

Website će biti dostupan na: `http://localhost:5173`

### Build za Production

```bash
npm run build
```

Build fajlovi će biti u `dist/` folderu.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Sekcije Stranice

1. **Hero** - Uvodni deo sa logom i naslovom
2. **Einführung** - Uvod o Martial Minds praksi
3. **Angebote** - Ponude i metode (7 različitih ponuda)
   - Birkman Persönlichkeitstest
   - EMDR – Traumatherapie
   - Verhaltenstherapie
   - Paartherapie
   - Psychologisches Birthchart Reading
   - Primärprävention in Unternehmen
   - Betriebliche Gesundheitsförderung / Executive Coaching
4. **Über mich** - O Azri Mujcinovic
5. **Kosten** - Cenovnik svih usluga
6. **Kontakt** - Kontakt informacije

## 🎨 Color Palette

- **Primary**: `#1a1a2e` - Tamno plava
- **Secondary**: `#16213e` - Tamno plava (nijansa)
- **Accent**: `#c8a96a` - Zlatna
- **Light**: `#f8f9fa` - Svetlo siva

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📝 Napomene

- Sav tekst je identičan tekstu iz originalnog dokumenta
- Sve slike su integrisane (3 lične slike, logo, Birkman logo, Fresh Minds logo)
- Website je potpuno funkcionalan i spreman za deployment
- Email adresa u Contact sekciji je placeholder: `kontakt@martial-minds.de`

## 🚀 Deployment

Website može biti deployovan na:
- **Vercel** (preporučeno za Vite projekte)
- **Netlify**
- **GitHub Pages**
- Bilo koji static hosting

### Vercel Deployment

```bash
npm install -g vercel
vercel
```

## 📄 Licenca

© 2025 Martial Minds. Sva prava zadržana.

## 👤 Kontakt

Azra Mujcinovic, M.Sc.
Heilpraktikerin für Psychotherapie
Tel: 0175 1427016
Email: kontakt@martial-minds.de
