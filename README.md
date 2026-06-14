# Slăbește Ușor (slabeste-usor.ro)

Bibliotecă statică de diete de slăbit și calculatoare gratuite (calorii/TDEE, IMC, greutate ideală), construită cu [Astro](https://astro.build/). Optimizată pentru SEO și monetizare prin AdSense.

## Dezvoltare

```bash
npm install
npm run dev      # http://localhost:4321/
npm run build    # generează dist/ (site static)
npm run preview  # previzualizează build-ul
```

## Structură

- `src/content/diete/*.md` — fișierele de dietă (conținutul).
- `src/data/taxonomie.ts` — categoriile și caracteristicile de filtrare.
- `src/lib/calc.ts` — formulele calculatoarelor (sursă unică, folosită și de pagini, și de scripturile client).
- `src/pages/` — paginile (homepage, dietă, taxonomie, calculatoare, pagini legale).

## Înainte de lansare

1. Schimbă `site` în `astro.config.mjs` cu domeniul real.
2. Înlocuiește e-mailul de contact și datele din paginile legale (`contact`, `confidentialitate`, `termeni`).
3. Adaugă suficient conținut (≈15-20 diete) înainte de a aplica la AdSense.

Detalii de arhitectură și reguli de conținut: vezi [CLAUDE.md](./CLAUDE.md).
