// Taxonomia site-ului: abordări de dietă și caracteristici de filtrare.
// Slug-urile sunt folosite în URL-uri și în filtrare; păstrează-le STABILE (sunt indexate de Google).

export interface Categorie {
  slug: string;
  nume: string;
  numeSingular: string;
  descriere: string; // folosit pe pagina de categorie (text original, bun pentru SEO)
}

// Caracteristicile traversează categoriile (o dietă poate fi simultan „low-carb",
// „fără numărat calorii" ȘI „vegetariană"). Fiecare = pagină proprie, intenție de căutare proprie.
export interface Caracteristica {
  slug: string;
  nume: string;
  descriere: string;
}

export const CATEGORII: Categorie[] = [
  {
    slug: "low-carb",
    nume: "Diete low-carb",
    numeSingular: "Dietă low-carb",
    descriere:
      "Diete care reduc carbohidrații (pâine, paste, zahăr) în favoarea proteinelor și grăsimilor — keto, Atkins, low-carb clasic. Corpul folosește mai mult grăsimea ca sursă de energie.",
  },
  {
    slug: "bogate-in-proteine",
    nume: "Diete bogate în proteine",
    numeSingular: "Dietă bogată în proteine",
    descriere:
      "Diete construite în jurul unui aport mare de proteine, care susțin sațietatea și masa musculară în timpul slăbirii — cum este dieta Dukan.",
  },
  {
    slug: "post-intermitent",
    nume: "Post intermitent",
    numeSingular: "Protocol de post intermitent",
    descriere:
      "Nu schimbă ce mănânci, ci CÂND mănânci. Alternează ferestre de alimentație cu perioade de post — 16:8, 5:2 sau OMAD (o masă pe zi).",
  },
  {
    slug: "pe-plante",
    nume: "Diete pe bază de plante",
    numeSingular: "Dietă pe bază de plante",
    descriere:
      "Diete vegetariene și vegane, axate pe legume, fructe, leguminoase și cereale integrale, cu reducerea sau eliminarea produselor de origine animală.",
  },
  {
    slug: "echilibrate",
    nume: "Diete echilibrate",
    numeSingular: "Dietă echilibrată",
    descriere:
      "Modele alimentare moderate, fără excluderi drastice, recomandate pe termen lung — dieta mediteraneană, DASH, flexitariană. Accent pe alimente integrale și echilibru.",
  },
  {
    slug: "structurate",
    nume: "Diete structurate",
    numeSingular: "Dietă structurată",
    descriere:
      "Diete cu reguli precise pe zile sau pe combinații de alimente — dieta Rina, dieta disociată. Fiecare zi sau masă urmează un tipar fix.",
  },
];

export const CARACTERISTICI: Caracteristica[] = [
  {
    slug: "slabire-rapida",
    nume: "Slăbire rapidă",
    descriere:
      "Diete care promit rezultate vizibile în câteva săptămâni. Atenție: ritmul rapid e mai greu de menținut și poate fi mai restrictiv.",
  },
  {
    slug: "slabire-sustinuta",
    nume: "Slăbire susținută",
    descriere:
      "Abordări gândite pentru ritm lent și constant, mai ușor de păstrat pe termen lung, cu risc mai mic de efect yo-yo.",
  },
  {
    slug: "fara-numarat-calorii",
    nume: "Fără numărat calorii",
    descriere:
      "Diete care funcționează prin reguli simple (ce mănânci, când mănânci), fără să fie nevoie să cântărești și să socotești fiecare masă.",
  },
  {
    slug: "fara-gluten",
    nume: "Fără gluten",
    descriere:
      "Modele alimentare compatibile cu evitarea glutenului, potrivite și pentru persoanele cu sensibilitate sau celiachie (cu confirmarea medicului).",
  },
  {
    slug: "fara-lactate",
    nume: "Fără lactate",
    descriere: "Diete care pot fi ținute fără produse lactate, utile pentru intoleranța la lactoză.",
  },
  {
    slug: "vegetarian",
    nume: "Vegetarian",
    descriere: "Diete care exclud carnea și se pot ține pe bază de legume, leguminoase, ouă și lactate.",
  },
  {
    slug: "buget-redus",
    nume: "Buget redus",
    descriere:
      "Diete care nu cer alimente scumpe sau suplimente speciale — se țin cu ingrediente accesibile.",
  },
  {
    slug: "usor-de-tinut",
    nume: "Ușor de ținut",
    descriere:
      "Diete cu reguli simple și flexibile, fără excluderi greu de respectat — potrivite pentru începători.",
  },
];

// Helperi pentru căutare rapidă după slug.
export const getCategorie = (slug: string) => CATEGORII.find((c) => c.slug === slug);
export const getCaracteristica = (slug: string) => CARACTERISTICI.find((c) => c.slug === slug);

export const SLUGURI_CATEGORII = CATEGORII.map((c) => c.slug) as [string, ...string[]];
export const SLUGURI_CARACTERISTICI = CARACTERISTICI.map((c) => c.slug) as [string, ...string[]];
