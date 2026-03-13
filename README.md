# Little Planets 🌍

Jeu de fusion de planètes inspiré du Suika/Watermelon Game.

## Structure des fichiers

```
/
├── index.html              # Page principale
├── vercel.json             # Config Vercel
├── planet1.png             # Images des planètes (1-11)
├── ...
├── planet11.png
├── background-2.png        # Fond du jeu
├── shake.png               # Icône secouer
├── shake2.png              # Icône secouer (mode daily)
├── maskable_icon.png       # Icône PWA
└── assets/
    ├── index-44yboNJa.js           # App Vue.js compilée
    ├── index-x7J-NHwR.css          # Styles
    ├── workbox-window.prod.es5-prqDwDSL.js  # Service worker
    └── SunnyspellsRegular-MV9ze-QJfOhPXi.otf  # Police

```

## Déploiement sur Vercel

### Option 1 — Via l'interface Vercel (recommandé)

1. Zippe ce dossier
2. Va sur [vercel.com](https://vercel.com) → **Add New Project**
3. Clique **"Upload"** (si tu n'utilises pas Git)
4. Dépose le zip → **Deploy**

### Option 2 — Via GitHub

1. Crée un repo GitHub et push ce dossier
2. Sur Vercel → **Import Git Repository**
3. Sélectionne le repo → **Deploy**
   - Framework Preset : **Other**
   - Build Command : *(laisser vide)*
   - Output Directory : *(laisser vide / `.`)*

### Option 3 — Via CLI Vercel

```bash
npm i -g vercel
cd little-planets-vercel
vercel --prod
```

## Notes

- Le jeu est 100% statique, aucun serveur backend requis
- `shake2.png` est une copie de `shake.png` (l'original n'était pas récupérable)
- Si le leaderboard en ligne ne fonctionne pas, c'est normal : il dépendait d'une API externe
