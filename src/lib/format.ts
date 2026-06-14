// Helperi de formatare folosiți în tot site-ul.

const ETICHETE_DIFICULTATE: Record<string, string> = {
  usoara: "Ușoară",
  moderata: "Moderată",
  stricta: "Strictă",
};
export const dificultateText = (d: string) => ETICHETE_DIFICULTATE[d] ?? d;
