// Grupe de vârstă pentru filtrarea dietelor pe homepage.
// Slug-urile sunt stabile — folosite în data-attributes și sessionStorage.

export interface GrupaVarsta {
  slug: string;
  eticheta: string;    // text scurt pe buton
  descriere: string;   // subtext în modal
  icon: string;
}

export const GRUPE_VARSTA: GrupaVarsta[] = [
  {
    slug: "18-30",
    eticheta: "18–30 ani",
    descriere: "Tineri adulți — metabolism activ, toleranță mai mare la restricții",
    icon: "🏃",
  },
  {
    slug: "30-50",
    eticheta: "30–50 ani",
    descriere: "Adulți — echilibru între eficiență, sustenabilitate și sănătate",
    icon: "🧘",
  },
  {
    slug: "50plus",
    eticheta: "Peste 50 de ani",
    descriere: "Seniori — accent pe nutrienți esențiali, sănătate cardiovasculară și densitate osoasă",
    icon: "🌿",
  },
];

// Mapare slug dietă → grupe de vârstă recomandate.
// Sursă: principii generale de nutriție; nu înlocuiesc avizul medicului.
export const VARSTE_DIETE: Record<string, string[]> = {
  "deficit-caloric":       ["18-30", "30-50", "50plus"],
  "dieta-atkins":          ["18-30", "30-50"],
  "dieta-cambridge":       ["18-30", "30-50"],
  "dieta-carnivora":       ["18-30", "30-50"],
  "dieta-cu-oua":          ["18-30", "30-50"],
  "dieta-cu-proteine":     ["18-30", "30-50"],
  "dieta-dash":            ["30-50", "50plus"],
  "dieta-detox":           ["18-30", "30-50"],
  "dieta-disociata":       ["18-30", "30-50"],
  "dieta-dukan":           ["18-30", "30-50"],
  "dieta-flexitariana":    ["18-30", "30-50", "50plus"],
  "dieta-gm":              ["18-30"],
  "dieta-keto":            ["18-30", "30-50"],
  "dieta-low-carb":        ["18-30", "30-50"],
  "dieta-low-fodmap":      ["18-30", "30-50", "50plus"],
  "dieta-macrobiotica":    ["30-50", "50plus"],
  "dieta-mediteraneana":   ["30-50", "50plus"],
  "dieta-mind":            ["30-50", "50plus"],
  "dieta-montignac":       ["30-50"],
  "dieta-noom":            ["18-30", "30-50"],
  "dieta-okinawa":         ["30-50", "50plus"],
  "dieta-ornish":          ["30-50", "50plus"],
  "dieta-paleo":           ["18-30", "30-50"],
  "dieta-pegan":           ["18-30", "30-50"],
  "dieta-pescetariana":    ["18-30", "30-50", "50plus"],
  "dieta-planetara":       ["18-30", "30-50", "50plus"],
  "dieta-rina":            ["18-30", "30-50"],
  "dieta-scarsdale":       ["30-50"],
  "dieta-sirtfood":        ["18-30", "30-50"],
  "dieta-slimming-world":  ["18-30", "30-50", "50plus"],
  "dieta-sonoma":          ["30-50", "50plus"],
  "dieta-south-beach":     ["18-30", "30-50"],
  "dieta-supa-de-varza":   ["18-30"],
  "dieta-vegana":          ["18-30", "30-50"],
  "dieta-vegetariana":     ["18-30", "30-50", "50plus"],
  "dieta-volumetrics":     ["30-50", "50plus"],
  "dieta-weight-watchers": ["18-30", "30-50", "50plus"],
  "dieta-whole30":         ["18-30", "30-50"],
  "dieta-zone":            ["18-30", "30-50"],
  "keto-ciclica":          ["18-30", "30-50"],
  "omad":                  ["18-30", "30-50"],
  "post-5-2":              ["18-30", "30-50", "50plus"],
  "post-alternativ":       ["18-30", "30-50"],
  "post-intermitent-16-8": ["18-30", "30-50"],
  // diete adăugate ulterior
  "dieta-alcalina":        ["18-30", "30-50", "50plus"],
  "dieta-crudivore":       ["18-30", "30-50"],
  "dieta-fara-gluten":     ["18-30", "30-50", "50plus"],
  "dieta-pritikin":        ["30-50", "50plus"],
  "dieta-slow-carb":       ["18-30", "30-50"],
};
