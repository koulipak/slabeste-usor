# Slăbește Ușor (slabeste-usor.ro)

Bibliotecă de diete de slăbit + calculatoare gratuite, optimizată pentru SEO. Scop: trafic organic mare din Google → venit din reclame (AdSense) și, mai târziu, affiliate. Limba site-ului și a comunicării: **română**.

**Poziționare cheie:** site **neutru**, de tip bibliotecă. Prezentăm dietele factual (cum funcționează, ce mănânci/eviți, avantaje/dezavantaje, contraindicații) și lăsăm utilizatorul să decidă. NU promovăm o dietă anume, nu vindem programe-minune, nu facem promisiuni medicale.

## Stack

- **Astro 6.4** ca generator de site **static** (SSG). Node >= 22.12.
- **Fără backend, fără bază de date.** Dietele sunt fișiere Markdown în `src/content/diete/`, validate la build cu Zod (`src/content.config.ts`).
- Calculatoarele = **JavaScript client-side** care importă formulele pure din `src/lib/calc.ts` (aceeași sursă de adevăr ca textul generat la build). Datele introduse NU părăsesc browserul — punct de vânzare pe privacy.
- `@astrojs/sitemap` pentru sitemap.xml. Filtrarea pe homepage = JS vanilla peste data-attributes.
- Hosting țintă: Cloudflare Pages / Netlify (gratuit, static).

### Comenzi

```bash
cd /d/code/diete-slabit
npm run dev      # server local, http://localhost:4321/
npm run build    # generează dist/ — rulează asta ca să validezi că totul compilează
```

## Arhitectura conținutului

Taxonomie pe 2 axe (vezi `src/data/taxonomie.ts`). Slug-urile sunt **stabile** — indexate de Google, nu le schimba fără motiv.

- **categorie** (obligatoriu, enum, abordarea dietei): low-carb, bogate-in-proteine, post-intermitent, pe-plante, echilibrate, structurate.
- **caracteristici** (opțional, array — traversează categoriile): slabire-rapida, slabire-sustinuta, fara-numarat-calorii, fara-gluten, fara-lactate, vegetarian, buget-redus, usor-de-tinut. O dietă apare astfel pe pagina ei de categorie ȘI pe paginile de caracteristică → mai multe pagini indexabile dintr-un singur fișier, fără conținut duplicat.

Pagini generate: `/`, `/dieta/{slug}/`, `/categorie/{slug}/`, `/caracteristica/{slug}/`, `/calculatoare/`, `/calculator-calorii/`, `/calculator-imc/`, `/greutate-ideala/`, plus paginile legale.

## Calculatoare

- Formulele stau în `src/lib/calc.ts` (funcții pure, importate și în frontmatter, și în `<script>`-ul client). Nu duplica formula în pagină.
  - **Calorii/TDEE** (`/calculator-calorii/`): Mifflin-St Jeor BMR × factor activitate (1.2–1.9).
  - **IMC** (`/calculator-imc/`): kg/m², praguri OMS (`CATEGORII_IMC`).
  - **Greutate ideală** (`/greutate-ideala/`): interval din IMC 18.5–24.9 + formule Devine/Robinson.
  - **Macronutrienți** (`/calculator-macronutrienti/`): împarte caloriile pe P/C/G după profil (`PROFILURI_MACRO`).
  - **Apă** (`/calculator-apa/`): ~35 ml/kg + supliment pentru mișcare (`aportApa`).
  - **Calorii arse** (`/calculator-calorii-arse/`): MET × kg × ore (`ACTIVITATI`, `caloriiArse`).
- Fiecare tool are URL = exact cuvântul-cheie țintă, plus un bloc FAQ (`src/components/Faq.astro`) pentru featured snippets. Hub-ul tuturor: `/calculatoare/`.

## Reguli de conținut (IMPORTANT)

- **Ton neutru, factual.** Descriem dieta, nu o recomandăm. Fără superlative („cea mai bună dietă”), fără promisiuni de rezultate garantate.
- **YMYL / sănătate.** Dieta e categorie sensibilă pentru Google (E-E-A-T) și AdSense. De aceea: disclaimer medical în footer pe FIECARE pagină (`Base.astro`) + pagină dedicată `/disclaimer-medical/`, plus câmpul `contraindicatii` pe fiecare dietă.
- **Text original.** Descrierile se scriu cu cuvintele noastre, pe baza principiilor general cunoscute ale dietei. Nu se copiază text din alte site-uri.
- **Formule standard, verificabile** (Mifflin-St Jeor, praguri OMS). Nu inventa praguri.

## Convenții pentru fișierele de dietă (.md)

Schema completă: `src/content.config.ts`. Câmpuri cheie: `titlu`, `descriere` (max 170 caractere — meta description), `categorie`, `caracteristici[]`, `cuvinteCheie[]`, `dificultate` (usoara/moderata/stricta), `durataTipica`, `principiu` (rezumat scurt, folosit ca lead și pe carduri), `alimentePermise[]`, `alimenteEvitate[]`, `avantaje[]`, `dezavantaje[]`, `contraindicatii[]`, `meniuExemplu` (array {masa, descriere}), `faq` (array {intrebare, raspuns}), `publicat` (dată).

### ⚠️ Capcană YAML — ghilimele drepte
În **frontmatter** (între `---`), NU folosi ghilimele drepte `"` în interiorul unui string ghilimelat — închid stringul prematur. Folosește ghilimele românești curbe `„ ”` pentru citate/accente în interiorul valorilor. În **corpul Markdown** (după al doilea `---`), ghilimelele drepte sunt OK.

## Monetizare

- **AdSense**: aplici DUPĂ ce ai ~15-20 diete + cele 3 calculatoare + paginile legale (toate există deja: despre, contact, confidentialitate, termeni, disclaimer-medical). Înlocuiește înainte placeholderele: `site` în `astro.config.mjs`, e-mailul de contact, datele din politici.
- **Affiliate** (fază ulterioară): cântare, blendere, cărți, aplicații de tracking. Suplimentele = sensibile YMYL, de evitat la început. Disclosure obligatoriu.

## Roadmap (faze viitoare — NU acum)

- Tool nou rămas de făcut: dată-țintă de slăbit (în cât timp atingi o greutate, pe baza deficitului).
- **Search**: Pagefind (indexare la build, 100% static, gratuit).
- Articole blog long-tail („keto vs paleo”, „cum slăbesc 5 kg”).
- Rafinare design/template-uri — abia DUPĂ ce baza de conținut e completă (decizia utilizatorului).

## Stil

- Răspunsuri și conținut în **română**.
- Textul dietelor: clar, neutru, util. Fără umplutură, fără îndemnuri de marketing.
