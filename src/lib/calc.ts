// Formule pure pentru calculatoare. Sunt importate ATÂT în frontmatter (pentru text
// explicativ generat la build) CÂT ȘI în scripturile client-side (calcul interactiv) —
// o singură sursă de adevăr, fără duplicare.
//
// NB: toate formulele sunt estimări standard, informative. Nu înlocuiesc evaluarea medicală.

export type Sex = "barbat" | "femeie";

// --- BMR: Mifflin-St Jeor (cel mai folosit estimator modern) ---
// barbat:  10·kg + 6.25·cm − 5·varsta + 5
// femeie:  10·kg + 6.25·cm − 5·varsta − 161
export function bmrMifflin(sex: Sex, kg: number, cm: number, varsta: number): number {
  const baza = 10 * kg + 6.25 * cm - 5 * varsta;
  return sex === "barbat" ? baza + 5 : baza - 161;
}

// --- Factori de activitate pentru TDEE (cheltuiala calorică totală zilnică) ---
export interface NivelActivitate {
  slug: string;
  nume: string;
  factor: number;
  exemplu: string;
}
export const NIVELURI_ACTIVITATE: NivelActivitate[] = [
  { slug: "sedentar", nume: "Sedentar", factor: 1.2, exemplu: "birou, fără mișcare" },
  { slug: "usor", nume: "Ușor activ", factor: 1.375, exemplu: "sport ușor 1–3 zile/săpt." },
  { slug: "moderat", nume: "Moderat activ", factor: 1.55, exemplu: "sport 3–5 zile/săpt." },
  { slug: "intens", nume: "Foarte activ", factor: 1.725, exemplu: "sport intens 6–7 zile/săpt." },
  { slug: "extrem", nume: "Extrem de activ", factor: 1.9, exemplu: "muncă fizică + antrenamente" },
];

export const tdee = (bmr: number, factor: number): number => bmr * factor;

// --- IMC (indice de masă corporală) = kg / m² ---
export function imc(kg: number, cm: number): number {
  const m = cm / 100;
  return kg / (m * m);
}

export interface CategorieIMC {
  eticheta: string;
  min: number; // limita inferioară (inclusiv); -Infinity pentru prima
  culoare: string;
}
// Pragurile OMS pentru adulți.
export const CATEGORII_IMC: CategorieIMC[] = [
  { eticheta: "Subponderal", min: -Infinity, culoare: "#3b82f6" },
  { eticheta: "Greutate normală", min: 18.5, culoare: "#16a34a" },
  { eticheta: "Supraponderal", min: 25, culoare: "#f59e0b" },
  { eticheta: "Obezitate gradul I", min: 30, culoare: "#f97316" },
  { eticheta: "Obezitate gradul II", min: 35, culoare: "#ef4444" },
  { eticheta: "Obezitate gradul III", min: 40, culoare: "#b91c1c" },
];

export function categorieImc(valoare: number): CategorieIMC {
  let rezultat = CATEGORII_IMC[0];
  for (const c of CATEGORII_IMC) {
    if (valoare >= c.min) rezultat = c;
  }
  return rezultat;
}

// --- Greutate ideală ---
// Intervalul „sănătos" derivat din IMC normal (18.5–24.9) pentru o înălțime dată.
export function intervalGreutateSanatoasa(cm: number): { min: number; max: number } {
  const m = cm / 100;
  return { min: 18.5 * m * m, max: 24.9 * m * m };
}

// Formule clasice (folosesc înălțimea peste 152.4 cm / 5 ft).
// Devine:   B 50 + 2.3·(inch peste 5ft) ; F 45.5 + 2.3·(...)
// Robinson: B 52 + 1.9·(...)           ; F 49 + 1.7·(...)
function inchPeste5ft(cm: number): number {
  const inch = cm / 2.54;
  return Math.max(0, inch - 60);
}
export function greutateDevine(sex: Sex, cm: number): number {
  const k = inchPeste5ft(cm);
  return sex === "barbat" ? 50 + 2.3 * k : 45.5 + 2.3 * k;
}
export function greutateRobinson(sex: Sex, cm: number): number {
  const k = inchPeste5ft(cm);
  return sex === "barbat" ? 52 + 1.9 * k : 49 + 1.7 * k;
}

// Rotunjire prietenoasă pentru afișare.
export const rotunjit = (n: number, zecimale = 0): number => {
  const f = 10 ** zecimale;
  return Math.round(n * f) / f;
};

// --- Macronutrienți ---
// Împarte un total caloric pe proteine / carbohidrați / grăsimi.
// 1 g proteine = 4 kcal, 1 g carbohidrați = 4 kcal, 1 g grăsimi = 9 kcal.
export interface ProfilMacro {
  slug: string;
  nume: string;
  descriere: string;
  proteine: number; // procent din calorii
  carbo: number;
  grasimi: number;
}
export const PROFILURI_MACRO: ProfilMacro[] = [
  { slug: "echilibrat", nume: "Echilibrat", descriere: "30% proteine · 40% carbo · 30% grăsimi", proteine: 30, carbo: 40, grasimi: 30 },
  { slug: "low-carb", nume: "Low-carb", descriere: "40% proteine · 20% carbo · 40% grăsimi", proteine: 40, carbo: 20, grasimi: 40 },
  { slug: "bogat-proteine", nume: "Bogat în proteine", descriere: "40% proteine · 35% carbo · 25% grăsimi", proteine: 40, carbo: 35, grasimi: 25 },
  { slug: "keto", nume: "Keto", descriere: "25% proteine · 5% carbo · 70% grăsimi", proteine: 25, carbo: 5, grasimi: 70 },
];

export interface RezultatMacro {
  proteineG: number;
  carboG: number;
  grasimiG: number;
}
export function macronutrienti(calorii: number, profil: ProfilMacro): RezultatMacro {
  return {
    proteineG: (calorii * profil.proteine) / 100 / 4,
    carboG: (calorii * profil.carbo) / 100 / 4,
    grasimiG: (calorii * profil.grasimi) / 100 / 9,
  };
}

// --- Aport de apă ---
// Estimare uzuală: ~35 ml pe kg de greutate, plus un supliment pentru efort fizic.
export function aportApa(kg: number, minuteSport = 0): number {
  const baza = kg * 35; // ml
  const sport = minuteSport * 12; // ~12 ml / minut de mișcare
  return baza + sport; // ml/zi
}

// --- Calorii arse pe activitate (MET) ---
// kcal = MET × greutate(kg) × durată(ore). Valori MET orientative.
export interface Activitate {
  slug: string;
  nume: string;
  met: number;
}
export const ACTIVITATI: Activitate[] = [
  { slug: "mers-lejer", nume: "Mers lejer", met: 3.0 },
  { slug: "mers-alert", nume: "Mers alert", met: 4.3 },
  { slug: "alergare", nume: "Alergare (8 km/h)", met: 8.3 },
  { slug: "ciclism", nume: "Ciclism (moderat)", met: 7.5 },
  { slug: "inot", nume: "Înot", met: 7.0 },
  { slug: "aerobic", nume: "Aerobic / fitness", met: 6.5 },
  { slug: "forta", nume: "Antrenament de forță", met: 5.0 },
  { slug: "yoga", nume: "Yoga", met: 3.0 },
  { slug: "dans", nume: "Dans", met: 5.5 },
  { slug: "fotbal", nume: "Fotbal", met: 7.0 },
  { slug: "tenis", nume: "Tenis", met: 7.3 },
  { slug: "curatenie", nume: "Curățenie în casă", met: 3.3 },
];
export function caloriiArse(met: number, kg: number, minute: number): number {
  return met * kg * (minute / 60);
}
