# Little Planets 🪐

Suika-style game with planets — deployable on Vercel.

## Structure

```
little-planets-vercel/
├── public/
│   ├── index.html          # Main HTML file
│   ├── assets/
│   │   ├── index-44yboNJa.js     # Main app bundle
│   │   ├── index-x7J-NHwR.css    # Styles
│   │   ├── workbox-window.prod.es5-prqDwDSL.js  # Service worker
│   │   └── SunnyspellsRegular-MV9ze-QJfOhPXi.otf  # Custom font
│   ├── planet1.png ... planet11.png   # Planet images
│   ├── background-2.png
│   ├── maskable_icon.png
│   └── shake.png
├── api/
│   └── daily-mod.js        # Serverless function for daily mode
├── vercel.json             # Vercel configuration
└── package.json
```

## Deploy on Vercel

1. Push this folder to a GitHub repository
2. Connect it to Vercel
3. Set **Root Directory** to `/` (root)
4. **Framework Preset**: Other
5. **Output Directory**: `public`
6. Deploy!

Or use Vercel CLI:
```bash
npm i -g vercel
vercel --prod
```
