import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SLUGURI_CATEGORII, SLUGURI_CARACTERISTICI } from "./data/taxonomie";

// O întrebare-răspuns din FAQ. Folosit pentru afișare ȘI pentru JSON-LD FAQPage
// (ajută la „featured snippets" în Google).
const faqItem = z.object({
  intrebare: z.string(),
  raspuns: z.string(),
});

// O masă din meniul-exemplu. Date neutre, informative — nu un plan personalizat.
const masa = z.object({
  masa: z.string(), // "Breakfast", "Lunch", "Dinner", "Snack"
  descriere: z.string(),
});

const dietSchema = ({ image }: { image: () => z.ZodType }) =>
  z.object({
    // --- Identity & SEO ---
    titlu: z.string(),
    descriere: z.string().max(170),
    imagine: image().optional(),
    imagineAlt: z.string().optional(),

    // --- Taxonomy / filtering ---
    categorie: z.enum(SLUGURI_CATEGORII),
    caracteristici: z.array(z.enum(SLUGURI_CARACTERISTICI)).default([]),
    cuvinteCheie: z.array(z.string()).default([]),
    dificultate: z.enum(["usoara", "moderata", "stricta"]).default("moderata"),
    durataTipica: z.string().optional(),

    // --- Factual / informative data ---
    principiu: z.string(),
    alimentePermise: z.array(z.string()).min(1),
    alimenteEvitate: z.array(z.string()).default([]),
    avantaje: z.array(z.string()).default([]),
    dezavantaje: z.array(z.string()).default([]),
    contraindicatii: z.array(z.string()).default([]),
    meniuExemplu: z.array(masa).default([]),
    faq: z.array(faqItem).default([]),

    // --- Editorial meta ---
    autor: z.string().default("Slăbește Ușor"),
    publicat: z.coerce.date(),
    actualizat: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  });

const diete = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/diete" }),
  schema: dietSchema,
});

const dieteEn = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/diete-en" }),
  schema: dietSchema,
});

export const collections = { diete, dieteEn };
