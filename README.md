# Five Signals — Stock Investment Portfolio Analysis

An editorial, interactive React + Vite website based on Kashvi Tribhuvan's finance project and the supplied visual references. Cream paper, navy panels, copper accents, bundled serif fonts, responsive layouts and original motion effects.

## Run locally

Use Node.js 22.12+ (Node 22 or 24 LTS recommended).

```bash
npm ci
npm run dev
```

Open the local address printed by Vite. This is a React application: do not double-click index.html to run the source.

```bash
npm test
npm run build
npm run preview
```

## Deploy to Vercel

1. Extract the ZIP and put the contents of `stock-portfolio-analysis` in your GitHub repository. `package.json`, `index.html`, `src`, `public`, `package-lock.json`, `vite.config.js` and `vercel.json` should be at the repository root. Do not upload node_modules or the ZIP itself.
2. In Vercel, create a new project and import that GitHub repository.
3. Use the Vite framework preset. Build command: `npm run build`. Output directory: `dist`. Install command: `npm ci`. Use Node.js 22.x or 24.x. No environment variables are required.
4. Deploy. Later pushes to the connected production branch are built and deployed by Vercel.

If you upload the enclosing folder too, set Vercel's Root Directory to `stock-portfolio-analysis`.

`vercel.json` includes the framework, build command and output directory. This is a static client-side app: there is no backend, database or API key to configure. The GitHub workflow checks the build and data tests; Vercel handles hosting.

## What's included

- Editorial hero with staggered text reveals, animated return number and interactive portfolio card.
- Sticky navigation with active sections and reading progress.
- Equal-weight ledger with return sorting, CSV export and direct links to the explorer.
- Animated diverging return bars and sector analysis panels.
- React stock explorer with search, selection and an interactive day-horizon slider.
- Accessible native controls, visible keyboard focus and reduced-motion support.
- Local fonts (license in `public/fonts/LICENSE.txt`); no external font service.

## Source map

- `src/App.jsx`: editorial page structure and static narrative.
- `src/components.jsx`: explorer, chart, ledger, export and motion behavior.
- `src/data.js`: holdings, arithmetic and CSV generation.
- `src/styles.css`: desktop/mobile layouts, typography and transitions.
- `tests/portfolio.test.js`: source reconciliation and compound-rate checks.

## Data and assumptions

The resume supplies investment, returns and net loss. The screenshots additionally specify equal 20% allocations. Each holding starts at INR 200,000; the five position changes sum to -23,240 and imply a closing value of 976,760. The exact portfolio return is -2.324%, displayed as -2.32%.

The source's date descriptions conflict slightly, so the page uses April 2025 and a nine-day observation window without claiming nine exchange trading sessions. Asian Paints is classified as paints and consumer goods, rather than FMCG.

The explorer's solid line is a constant-rate mathematical interpolation to the reported endpoint; it is not recorded daily closing prices. Its dashed line mechanically extends that rate to the selected horizon. It is not a forecast. Sector commentary identifies considered factors, not proven causal attribution.

This website is an academic simulation and includes no live market data. The resume's private contact details are not included.
