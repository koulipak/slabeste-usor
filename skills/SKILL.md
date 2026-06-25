---
name: articol-slabeste-usor
description: Generează un articol de blog pe nișa nutriție/slăbit pentru slabeste-usor.ro, scris ca să treacă de standardele AdSense (conținut original, util, cu autoritate) și să nu sune ca text AI generic. Folosește când vrei să creezi un articol nou pentru site.
---

# Generare articol slabeste-usor.ro

## Scopul
Produci articole care arată ca scrise de un om competent care chiar înțelege subiectul,
NU ca text AI care repetă aceleași clișee ("bea apă, mănâncă legume, dormi 8 ore").
Google a respins site-ul pentru "conținut cu valoare scăzută" — fiecare articol trebuie
să justifice de ce există și să aducă ceva ce cititorul nu găsește în primele 5 rezultate.

## Reguli obligatorii de calitate (asta face diferența la AdSense)

1. **Lungime minimă: 1000 de cuvinte reale.** Sub atât, nu publica.

2. **Unghi propriu în primul paragraf.** Nu începe cu "Slăbitul este o provocare pentru
   mulți oameni." Începe cu o afirmație specifică, un mit demontat, o cifră concretă sau
   o întrebare reală pe care o pune cititorul. Primele 2 fraze decid dacă omul rămâne.

3. **Specificitate, nu generalități.** În loc de "mănâncă proteine", scrie "30g de proteine
   la micul dejun (3 ouă sau 200g iaurt grecesc) reduc pofta de dulce până la prânz."
   Cifre, exemple, cantități, alimente concrete disponibile în România.

4. **Context românesc.** Folosește alimente și prețuri reale din România (fasole, linte,
   brânză de vaci, iaurt, telemea), nu "kale" și "quinoa" la fiecare frază.

5. **Demontează cel puțin un mit** legat de subiect. Asta arată gândire, nu copy-paste.

6. **Fără ton de robot.** Evită: "Este important să rețineți că...", "În concluzie...",
   "Acest articol vă va ajuta să...", liste cu bullet-uri identice peste tot.
   Variază lungimea frazelor. Scrie cum vorbește un om care știe subiectul.

7. **Disclaimer scurt la final** pentru orice articol care atinge sănătatea: o frază care
   spune că informația e educativă și că pentru probleme medicale se consultă un specialist.

## Structura articolului

```
H1: Titlul (o singură dată, sus)

[Intro 2-3 paragrafe — unghi propriu, fără clișee, spune ce câștigă cititorul]

H2: [Prima secțiune — de obicei "de ce" / mecanismul]
[2-4 paragrafe]

H2: [A doua secțiune — partea practică / cum se aplică]
[2-4 paragrafe, cu exemple concrete și cifre]

H2: [A treia secțiune — greșeli frecvente / mituri / capcane]
[2-3 paragrafe]

H2: Întrebări frecvente
[3-4 întrebări scurte cu răspunsuri de 2-3 fraze — bun pentru SEO și pentru
featured snippets în Google]

[Paragraf de încheiere — fără "În concluzie", doar o închidere naturală]

[Disclaimer de o frază]
```

## Format de output
- HTML curat, gata de pus în site (taguri h1, h2, h3, p, ul/li unde e cazul).
- Title tag și meta description sugerate sus, în comentariu HTML.
- Fără CSS inline — moștenește stilul site-ului.

## Checklist înainte de a livra articolul
- [ ] Peste 1000 de cuvinte?
- [ ] Intro fără clișee, cu unghi propriu?
- [ ] Cel puțin un mit demontat?
- [ ] Cifre și exemple concrete (nu generalități)?
- [ ] Context românesc (alimente reale)?
- [ ] Secțiune de Întrebări frecvente?
- [ ] Disclaimer la final?
- [ ] Sună a om, nu a AI? (Recitește intro cu ochi critic.)

## Cum mă folosești în Claude Code
Spune-mi titlul din lista de 18 (sau alt titlu) și eu generez articolul complet
respectând tot ce e mai sus. Exemplu:
"Generează articolul: Rezistența la insulină explicată pe înțelesul tuturor"
