/* ── Slăbește Ușor — sistem traducere RO/EN ───────────────────────── */
(function () {
  'use strict';

  var DICT = {
    ro: {
      /* ── Nav ─────────────────────────────────────── */
      'nav.diete':        'Diete',
      'nav.calculatoare': 'Calculatoare',
      'nav.articole':     'Articole',
      'nav.vedete':       'Vedete',
      'nav.alimente':     'Alimente Sănătoase',
      'nav.despre':       'Despre',
      'nav.search':       'Caută dietă...',
      /* ── Pagina articole ─────────────────────────── */
      'art.bc':           'Articole',
      'art.h1':           'Articole',
      'art.intro':        'Ghiduri practice despre diete, deficit caloric și slăbit sănătos.',
      'art.citeste':      'Citește →',
      /* ── Intro ───────────────────────────────────── */
      'intro.sub':        'biblioteca ta de diete',
      'intro.click':      '▸ click pentru a continua',
      /* ── Homepage ────────────────────────────────── */
      'home.h1':          'Diete de slăbit',
      'home.lead':        'Compară dietele de slăbit fără să fii împins spre una anume. Vezi cum funcționează fiecare, ce mănânci și ce eviți, avantaje și dezavantaje — apoi decide singur ce ți se potrivește. Și calculează-ți gratuit caloriile, IMC-ul și greutatea ideală.',
      'home.filtru-tip':  'Tip de dietă',
      'home.filtru-car':  'Caracteristici',
      'home.filtru-dif':  'Dificultate',
      'home.filtru-var':  'Vârstă',
      'filter.toate':     'Toate',
      'diff.usoara':      'Ușoară',
      'diff.moderata':    'Moderată',
      'diff.stricta':     'Strictă',
      /* ── Categorii ───────────────────────────────── */
      'cat.low-carb':           'Low-Carb',
      'cat.bogate-in-proteine': 'Bogate în proteine',
      'cat.post-intermitent':   'Post intermitent',
      'cat.pe-plante':          'Pe bază de plante',
      'cat.echilibrate':        'Echilibrate',
      'cat.structurate':        'Structurate',
      /* ── Caracteristici ──────────────────────────── */
      'char.slabire-rapida':       'Slăbire rapidă',
      'char.slabire-sustinuta':    'Slăbire susținută',
      'char.fara-numarat-calorii': 'Fără numărat calorii',
      'char.fara-gluten':          'Fără gluten',
      'char.fara-lactate':         'Fără lactate',
      'char.vegetarian':           'Vegetarian',
      'char.buget-redus':          'Buget redus',
      'char.usor-de-tinut':        'Ușor de ținut',
      /* ── Modal vârstă ────────────────────────────── */
      'modal.bun-venit':  '👋 Bun venit!',
      'modal.titlu':      'Din ce grupă de vârstă faci parte?',
      'modal.sub':        'Îți arătăm dietele cele mai potrivite pentru tine.',
      'modal.skip':       'Arată toate dietele',
      'banner.schimba':   'Schimbă vârsta',
      'banner.vedete':    '⭐ Vezi cum au slăbit cele mai cunoscute vedete! ⭐',
      /* ── Grupe vârstă ────────────────────────────── */
      'var.sub30':    'Sub 30 de ani',
      'var.18-30':    'Sub 30 de ani',
      'var.30-50':    '30–50 de ani',
      'var.50plus':   'Peste 50 de ani',
      /* ── Breadcrumb ──────────────────────────────── */
      'bc.acasa':     'Acasă',
      'bc.calc':      'Calculatoare',
      /* ── Rezultate filtre ────────────────────────── */
      'res.diete':    'diete',
      'gol.text':     'Nicio dietă nu corespunde filtrelor selectate.',
      /* ── Diet card labels ────────────────────────── */
      'card.dificultate': 'Dificultate:',
      /* ── Categorii singular (badge pe carduri) ──────────────────── */
      'cat-sg.low-carb':           'Dietă low-carb',
      'cat-sg.bogate-in-proteine': 'Dietă bogată în proteine',
      'cat-sg.post-intermitent':   'Post intermitent',
      'cat-sg.pe-plante':          'Dietă pe bază de plante',
      'cat-sg.echilibrate':        'Dietă echilibrată',
      'cat-sg.structurate':        'Dietă structurată',
      /* ── Descrieri grupe vârstă (modal) ──────────────────────────── */
      'var-desc.18-30':   'Tineri adulți — metabolism activ, toleranță mai mare la restricții',
      'var-desc.30-50':   'Adulți — echilibru între eficiență, sustenabilitate și sănătate',
      'var-desc.50plus':  'Seniori — accent pe nutrienți esențiali, sănătate cardiovasculară și densitate osoasă',
      /* ── Banner vârstă activă ─────────────────────────────────────── */
      'banner.filtrat-pentru': 'Diete filtrate pentru grupa:',
      /* ── Magazine alimente ───────────────────────────────────────── */
      'alim.vegis.p':     'Magazin online specializat în alimente naturale, bio și ecologice — semințe, nuci, cereale integrale, superalimente, uleiuri presate la rece și produse fără aditivi. Ideal pentru dietele pe bază de plante, keto sau orice stil de viață sănătos.',
      'alim.vegis.cta':   'Vezi produse pe Vegis.ro →',
      'alim.nosugar.p':   'Magazin dedicat produselor fără zahăr și cu conținut scăzut de carbohidrați — ciocolată keto, paste fără carbohidrați, îndulcitori naturali, gustări fit și produse pentru dieta Dukan. Perfect pentru cei care urmează o dietă low-carb, keto sau care vor să reducă zahărul din alimentație.',
      'alim.nosugar.cta': 'Vezi produse pe NoSugarShop.ro →',
      'alim.scufita.p':   'Magazin online cu produse naturale Pronat — fructe uscate, nuci, semințe, cereale, plante aromatice și superalimente, fără aditivi sau conservanți. Ingrediente curate pentru rețete sănătoase, gustări nutritive și diete bazate pe alimente integrale.',
      'alim.scufita.cta': 'Vezi produse pe Scufița Roșie →',
      'alim.unicorn.p':   'Magazin cu produse naturale și organice — suplimente alimentare, pudre funcționale, adaptogeni, superalimente și produse pentru wellness. Potrivit pentru cei care vor să își completeze dieta cu ingrediente curate, fără E-uri și fără aditivi sintetici.',
      'alim.unicorn.cta': 'Vezi produse pe Unicorn Naturals →',
      'alim.parma.p':     'Magazin online cu produse alimentare de calitate — mezeluri, brânzeturi, conserve, condimente și specialități culinare. O sursă bună pentru ingrediente de calitate superioară, potrivite pentru o alimentație variată și echilibrată.',
      'alim.parma.cta':   'Vezi produse pe Parmashop.ro →',
      'alim.minunea.p':   'Magazin online cu plante medicinale, ceaiuri, tincturi, uleiuri esențiale și produse naturiste. Ideal pentru completarea unei diete sănătoase cu remedii tradiționale și suplimente din natură, fără chimicale.',
      'alim.minunea.cta': 'Vezi produse pe Minunea Naturii →',
      /* ── Titluri diete (dt.) ─────────────────────── */
      'dt.deficit-caloric':        'Dieta cu deficit caloric (numărat calorii)',
      'dt.dieta-alcalina':         'Dieta alcalină',
      'dt.dieta-atkins':           'Dieta Atkins',
      'dt.dieta-cambridge':        'Dieta Cambridge (înlocuitori de masă)',
      'dt.dieta-carnivora':        'Dieta carnivoră',
      'dt.dieta-crudivore':        'Dieta crudivore (raw food)',
      'dt.dieta-cu-oua':           'Dieta cu ouă',
      'dt.dieta-cu-proteine':      'Dieta bogată în proteine (high-protein)',
      'dt.dieta-dash':             'Dieta DASH',
      'dt.dieta-detox':            'Dieta detox (de detoxifiere)',
      'dt.dieta-disociata':        'Dieta disociată',
      'dt.dieta-dukan':            'Dieta Dukan',
      'dt.dieta-fara-gluten':      'Dieta fără gluten',
      'dt.dieta-flexitariana':     'Dieta flexitariană',
      'dt.dieta-gm':               'Dieta GM (General Motors)',
      'dt.dieta-keto':             'Dieta keto (ketogenică)',
      'dt.dieta-low-carb':         'Dieta low-carb',
      'dt.dieta-low-fodmap':       'Dieta low-FODMAP',
      'dt.dieta-macrobiotica':     'Dieta macrobiotică',
      'dt.dieta-mediteraneana':    'Dieta mediteraneană',
      'dt.dieta-mind':             'Dieta MIND',
      'dt.dieta-montignac':        'Dieta Montignac',
      'dt.dieta-nalep':            'Dieta Nalep',
      'dt.dieta-noom':             'Dieta Noom',
      'dt.dieta-okinawa':          'Dieta Okinawa',
      'dt.dieta-ornish':           'Dieta Ornish',
      'dt.dieta-paleo':            'Dieta paleo',
      'dt.dieta-pegan':            'Dieta Pegan',
      'dt.dieta-pescetariana':     'Dieta pescetariană',
      'dt.dieta-planetara':        'Dieta planetară (EAT-Lancet)',
      'dt.dieta-pritikin':         'Dieta Pritikin',
      'dt.dieta-rina':             'Dieta Rina (90 de zile)',
      'dt.dieta-scarsdale':        'Dieta Scarsdale',
      'dt.dieta-sirtfood':         'Dieta Sirtfood',
      'dt.dieta-slimming-world':   'Dieta Slimming World',
      'dt.dieta-slow-carb':        'Dieta Slow Carb',
      'dt.dieta-sonoma':           'Dieta Sonoma',
      'dt.dieta-south-beach':      'Dieta South Beach',
      'dt.dieta-supa-de-varza':    'Dieta cu supă de varză',
      'dt.dieta-vegana':           'Dieta vegană pentru slăbit',
      'dt.dieta-vegetariana':      'Dieta vegetariană pentru slăbit',
      'dt.dieta-volumetrics':      'Dieta Volumetrics',
      'dt.dieta-weight-watchers':  'Dieta Weight Watchers (sistemul cu puncte)',
      'dt.dieta-whole30':          'Dieta Whole30',
      'dt.dieta-zone':             'Dieta Zone (40-30-30)',
      'dt.keto-ciclica':           'Dieta keto ciclică (CKD)',
      'dt.omad':                   'OMAD (o masă pe zi)',
      'dt.post-5-2':               'Dieta 5:2 (postul intermitent 5:2)',
      'dt.post-alternativ':        'Postul alternativ (Alternate Day Fasting)',
      'dt.post-intermitent-16-8':  'Post intermitent 16/8',
      'dt.dieta-bogata-in-proteine': 'Dietă bogată în proteine',
      /* ── Principiu diete (dp.) ───────────────────── */
      'dp.deficit-caloric':       'Consumi mai puține calorii decât arzi, fără să interzici alimente — mecanismul comun al tuturor dietelor.',
      'dp.dieta-alcalina':        'Clasifică alimentele în acidifiante și alcalinizante și recomandă o dietă în care 70-80% din alimente sunt considerate alcaline.',
      'dp.dieta-atkins':          'Carbohidrați foarte puțini la început, reintroduși treptat în patru faze, cu accent pe proteine și grăsimi.',
      'dp.dieta-cambridge':       'Înlocuiești mesele cu produse formulate (shake-uri, supe, batoane), cu aport caloric foarte redus, pe etape.',
      'dp.dieta-carnivora':       'Doar produse de origine animală, fără carbohidrați; o formă extremă de low-carb.',
      'dp.dieta-crudivore':       'Toate alimentele sunt consumate crude sau preparate la maximum 42°C. Baza dietei: fructe, legume, nuci, semințe și germeni.',
      'dp.dieta-cu-oua':          'Ouăle ca aliment principal, cu multe proteine și foarte puțini carbohidrați, pe termen scurt.',
      'dp.dieta-cu-proteine':     'Aport crescut de proteine slabe pentru sațietate și masă musculară, cu mai puțini carbohidrați rafinați.',
      'dp.dieta-dash':            'Model echilibrat, sărac în sare și grăsimi saturate, bogat în legume, fructe și cereale integrale.',
      'dp.dieta-detox':           'Perioade scurte cu alimente lichide sau foarte restrânse, cu scopul declarat de „curățare" a organismului.',
      'dp.dieta-disociata':       'Nu combini proteinele cu carbohidrații la aceeași masă; alimentele se consumă „disociat".',
      'dp.dieta-dukan':           'Aport mare de proteine slabe, în patru faze, de la atac (doar proteine) la stabilizare.',
      'dp.dieta-fara-gluten':     'Eliminarea completă a glutenului — proteina din grâu, secară și orz — din alimentație.',
      'dp.dieta-flexitariana':    'Mâncare predominant vegetală, cu carne și pește ocazional — vegetarianism flexibil.',
      'dp.dieta-gm':              'Plan fix pe 7 zile, fiecare zi dedicată unui grup de alimente, cu accent pe fructe și legume.',
      'dp.dieta-keto':            'Foarte puțini carbohidrați și multe grăsimi, ca organismul să treacă pe arderea grăsimilor (cetoză).',
      'dp.dieta-low-carb':        'Reducerea moderată a carbohidraților, fără pragul strict al dietei keto, cu mai multe proteine și legume.',
      'dp.dieta-low-fodmap':      'Eliminarea temporară a carbohidraților fermentabili (FODMAP) care fermentează în intestin. Urmată de reintroducerea sistematică pentru identificarea alimentelor problematice.',
      'dp.dieta-macrobiotica':    'Alimentație bazată predominant pe cereale integrale și legume, cu echilibru yin-yang. Carnea, lactatele și zahărul sunt limitate sau excluse.',
      'dp.dieta-mediteraneana':   'Model alimentar echilibrat, bazat pe legume, pește, ulei de măsline și cereale integrale, fără excluderi drastice.',
      'dp.dieta-mind':            'Combinație de mediteraneană și DASH, axată pe alimente bune pentru creier și inimă.',
      'dp.dieta-montignac':       'Alegi carbohidrați cu indice glicemic scăzut și eviți combinarea lor cu grăsimi, fără a număra calorii.',
      'dp.dieta-nalep':           'Poți mânca aproape orice, cu o singură condiție: elimini complet sarea adăugată și zahărul. Fără să numeri calorii, fără interdicții drastice.',
      'dp.dieta-noom':            'Schimbarea obiceiurilor prin psihologie; alimentele se grupează pe culori după densitatea calorică, nimic nu e interzis.',
      'dp.dieta-okinawa':         'Alimentație tradițională japoneză: predominant legume, tofu, pește, orez și alge marine, cu porții mici și principiul hara hachi bu.',
      'dp.dieta-ornish':          'Predominant vegetariană și foarte săracă în grăsimi (sub ~10% din calorii), cu accent pe alimente integrale.',
      'dp.dieta-paleo':           'Alimente integrale, neprocesate, din presupusa dietă preistorică; fără cereale, lactate și zahăr rafinat.',
      'dp.dieta-pegan':           'Mix de paleo și vegan: 75% vegetale, puțină carne/pește de calitate, fără cereale rafinate, zahăr și lactate.',
      'dp.dieta-pescetariana':    'Alimentație predominant vegetală la care se adaugă pește și fructe de mare ca principale surse de proteină animală.',
      'dp.dieta-planetara':       'Model publicat de comisia EAT-Lancet: jumătate fructe și legume, restul cereale integrale, leguminoase, nuci și cantități mici de produse animale.',
      'dp.dieta-pritikin':        'Alimentație extrem de săracă în grăsimi (sub 10% din calorii) și bogată în carbohidrați complecși naturali. Programul include și exercițiu fizic zilnic.',
      'dp.dieta-rina':            'Zile rotative dedicate fiecare unui tip de aliment: proteine, amidon, carbohidrați, vitamine.',
      'dp.dieta-scarsdale':       'Meniu fix de 14 zile, bogat în proteine, sărac în carbohidrați și grăsimi, cu calorii reduse.',
      'dp.dieta-sirtfood':        'Accent pe alimente bogate în „sirtfoods", cu o fază inițială cu aport caloric foarte scăzut și sucuri verzi.',
      'dp.dieta-slimming-world':  'Alimente „libere" (legume, proteine slabe) la discreție, plus porții măsurate de alimente mai calorice, fără numărat calorii.',
      'dp.dieta-slow-carb':       'Evitarea carbohidraților rapizi 6 zile din 7, înlocuiți cu leguminoase. O zi pe săptămână — ziua liberă — se poate mânca orice.',
      'dp.dieta-sonoma':          'Alimentație inspirată din cultura Sonoma (California): porții controlate și 10 power foods bogate în nutrienți, fără numărare de calorii.',
      'dp.dieta-south-beach':     'Low-carb echilibrat: grăsimi bune și carbohidrați cu indice glicemic scăzut, în trei faze.',
      'dp.dieta-supa-de-varza':   'Plan fix de 7 zile: supă de varză la discreție plus un aliment permis diferit în fiecare zi.',
      'dp.dieta-vegana':          'Doar alimente vegetale, fără carne, pește, ouă sau lactate, cu accent pe leguminoase și cereale integrale.',
      'dp.dieta-vegetariana':     'Fără carne, cu accent pe legume, leguminoase și cereale integrale, sățioase și cu puține calorii.',
      'dp.dieta-volumetrics':     'Alegi alimente cu densitate calorică mică (multă apă și fibre), ca să mănânci mult și să te saturi cu puține calorii.',
      'dp.dieta-weight-watchers': 'Fiecare aliment are puncte după valoarea nutrițională; te încadrezi într-un buget zilnic, fără alimente interzise.',
      'dp.dieta-whole30':         '30 de zile fără zahăr, cereale, lactate, leguminoase și alcool, apoi reintroducere treptată.',
      'dp.dieta-zone':            'Fiecare masă respectă raportul 40% carbohidrați, 30% proteine, 30% grăsimi.',
      'dp.keto-ciclica':          'Alternezi mai multe zile keto cu una–două zile de încărcare cu carbohidrați, pentru a susține efortul fizic.',
      'dp.omad':                  'O singură masă pe zi, într-o fereastră scurtă, urmată de un post lung de circa 23 de ore.',
      'dp.post-5-2':              'Cinci zile de alimentație normală și două zile pe săptămână cu aport caloric foarte redus.',
      'dp.post-alternativ':       'Alternezi o zi de alimentație normală cu o zi de post sau de aport caloric foarte redus.',
      'dp.post-intermitent-16-8': 'Mănânci într-o fereastră de 8 ore și ții post 16 ore; contează CÂND mănânci, nu doar ce.',
      'dp.dieta-bogata-in-proteine': 'Aport crescut de proteine slabe pentru sațietate și masă musculară.',
      /* ── Pagina calculatoare ─────────────────────── */
      'calc.page.h1':         'Calculatoare de slăbit gratuite',
      'calc.page.lead':       'Unelte simple și rapide pentru obiectivele tale de greutate. Nu cer cont și nu trimit nimic — totul se calculează direct în browserul tău.',
      'calc.calorii.titlu':   'Calculator calorii (TDEE)',
      'calc.calorii.desc':    'Câte calorii arzi pe zi și de câte ai nevoie ca să slăbești, menții sau crești în greutate.',
      'calc.imc.titlu':       'Calculator IMC',
      'calc.imc.desc':        'Indicele de masă corporală și categoria în care te încadrezi, după pragurile OMS.',
      'calc.ideal.titlu':     'Greutate ideală',
      'calc.ideal.desc':      'Intervalul de greutate sănătoasă pentru înălțimea ta, plus formulele clasice.',
      'calc.macro.titlu':     'Calculator macronutrienți',
      'calc.macro.desc':      'Împarte caloriile pe proteine, carbohidrați și grăsimi, în funcție de profil.',
      'calc.apa.titlu':       'Calculator apă',
      'calc.apa.desc':        'Câtă apă să bei pe zi, în funcție de greutate și de cât te miști.',
      'calc.arse.titlu':      'Calorii arse',
      'calc.arse.desc':       'Câte calorii arzi la mers, alergare, ciclism, înot și alte activități.',
      /* ── Calculator calorii ──────────────────────── */
      'cc.bc':        'Calculator calorii',
      'cc.h1':        'Calculator calorii (TDEE)',
      'cc.lead':      'Află câte calorii arzi într-o zi și câte ar trebui să mănânci ca să slăbești, să menții sau să iei în greutate. Datele rămân în browserul tău — nu se trimit nicăieri.',
      'cc.sex':       'Sex',
      'cc.barbat':    'Bărbat',
      'cc.femeie':    'Femeie',
      'cc.varsta':    'Vârstă (ani)',
      'cc.inaltime':  'Înălțime (cm)',
      'cc.greutate':  'Greutate (kg)',
      'cc.activitate':'Nivel de activitate',
      'cc.btn':       'Calculează',
      'cc.kcal-zi':   'kcal/zi (menținere)',
      'cc.bmr':       'Metabolism de bază (BMR)',
      'cc.mentinere': 'Menținere (TDEE)',
      'cc.slab-usor': 'Slăbire ușoară (−300 kcal)',
      'cc.slab':      'Slăbire (−500 kcal, ~0,5 kg/săpt.)',
      'cc.surplus':   'Creștere în masă (+300 kcal)',
      'cc.nota':      'Estimare informativă. Nu coborî sub ~1200 kcal/zi (femei) / ~1500 kcal/zi (bărbați) fără îndrumarea unui specialist.',
      'cc.h2':        'Cum funcționează',
      'cc.p-html':    'Calculatorul estimează întâi <strong>metabolismul de bază (BMR)</strong> — caloriile pe care corpul le consumă în repaus complet — folosind ecuația Mifflin-St Jeor. Apoi îl înmulțește cu un <strong>factor de activitate</strong> ca să obțină <strong>TDEE</strong>, totalul ars într-o zi obișnuită. Ca să slăbești, mănânci sub TDEE; ca să iei în greutate, peste.',
      /* ── Calculator IMC ──────────────────────────── */
      'imc.bc':           'Calculator IMC',
      'imc.h1':           'Calculator IMC (indice de masă corporală)',
      'imc.lead':         'Calculează-ți indicele de masă corporală și vezi în ce categorie te încadrezi, după pragurile Organizației Mondiale a Sănătății. Datele rămân în browserul tău.',
      'imc.inaltime':     'Înălțime (cm)',
      'imc.greutate':     'Greutate (kg)',
      'imc.btn':          'Calculează',
      'imc.subponderal':  'Subponderal',
      'imc.normal':       'Greutate normală',
      'imc.supraponderal':'Supraponderal',
      'imc.obezitate':    'Obezitate',
      'imc.h2':           'Categoriile IMC (OMS)',
      /* ── Calculator greutate ideală ──────────────── */
      'gi.bc':            'Greutate ideală',
      'gi.h1':            'Calculator greutate ideală',
      'gi.lead':          'Află intervalul de greutate sănătoasă pentru înălțimea ta, plus estimările formulelor clasice. Greutatea ideală e un interval, nu o cifră fixă. Datele rămân în browserul tău.',
      'gi.sex':           'Sex',
      'gi.barbat':        'Bărbat',
      'gi.femeie':        'Femeie',
      'gi.inaltime':      'Înălțime (cm)',
      'gi.btn':           'Calculează',
      'gi.interval-sub':  'interval sănătos (kg)',
      'gi.imc-interval':  'Interval sănătos (IMC 18,5–24,9)',
      'gi.devine':        'Formula Devine',
      'gi.robinson':      'Formula Robinson',
      'gi.nota':          'Reper informativ. Greutatea potrivită pentru tine depinde și de masa musculară, constituție și starea de sănătate.',
      'gi.h2':            'Cum funcționează',
      'gi.p-html':        'Metoda principală derivă <strong>intervalul de greutate sănătoasă</strong> din IMC-ul normal (18,5–24,9) aplicat înălțimii tale. În plus, afișăm două <strong>formule clasice</strong> — Devine și Robinson — care dau o valoare orientativă unică în funcție de înălțime și sex. Diferențele dintre ele arată exact de ce „greutatea ideală" e un interval, nu o singură cifră.',
      /* ── Calculator macronutrienți ───────────────── */
      'macro.bc':         'Calculator macronutrienți',
      'macro.h1':         'Calculator macronutrienți',
      'macro.lead-html':  'Împarte-ți caloriile zilnice pe proteine, carbohidrați și grăsimi. Dacă nu-ți știi necesarul caloric, află-l întâi cu <a href="/calculator-calorii/">calculatorul de calorii</a>.',
      'macro.calorii':    'Calorii pe zi (kcal)',
      'macro.profil':     'Profil de macronutrienți',
      'macro.btn':        'Calculează',
      'macro.prot':       '🥩 Proteine',
      'macro.carb':       '🍞 Carbohidrați',
      'macro.gras':       '🥑 Grăsimi',
      'macro.nota':       'Valori orientative pe zi. 1 g proteine / carbohidrați = 4 kcal, 1 g grăsimi = 9 kcal.',
      'macro.h2':         'Cum funcționează',
      'macro.p-html':     'Calculatorul ia totalul tău de calorii și îl împarte pe cele trei categorii după procentele profilului ales, apoi transformă caloriile în grame. Profilul <strong>echilibrat</strong> merge pentru majoritatea oamenilor; <strong>low-carb</strong> și <strong>keto</strong> reduc carbohidrații; <strong>bogat în proteine</strong> susține masa musculară.',
      /* ── Calculator apă ──────────────────────────── */
      'apa.bc':           'Calculator apă',
      'apa.h1':           'Calculator aport de apă',
      'apa.lead':         'Estimează de câtă apă ai nevoie zilnic, în funcție de greutatea ta și de cât te miști. Datele rămân în browserul tău.',
      'apa.greutate':     'Greutate (kg)',
      'apa.sport':        'Minute de mișcare pe zi',
      'apa.btn':          'Calculează',
      'apa.litri-sub':    'litri pe zi',
      'apa.pahare':       'Pahare (250 ml)',
      'apa.ml':           'Mililitri',
      'apa.nota':         'Estimare orientativă. Necesarul crește pe căldură, la febră sau la efort intens. Ascultă-ți și senzația de sete.',
      'apa.h2':           'Cum funcționează',
      'apa.p-html':       'Calculatorul pornește de la aproximativ <strong>35 ml de apă per kilogram</strong> de greutate corporală și adaugă un supliment pentru minutele de mișcare. Rezultatul este o țintă orientativă — necesarul real depinde de temperatură, transpirație și starea de sănătate.',
      /* ── Calculator calorii arse ─────────────────── */
      'arse.bc':          'Calorii arse',
      'arse.h1':          'Calculator calorii arse',
      'arse.lead':        'Află câte calorii arzi la diferite activități, în funcție de greutatea ta și de cât durează. Datele rămân în browserul tău.',
      'arse.greutate':    'Greutate (kg)',
      'arse.activitate':  'Activitate',
      'arse.durata':      'Durată (minute)',
      'arse.btn':         'Calculează',
      'arse.kcal-sub':    'kcal arse',
      'arse.nota':        'Estimare pe baza echivalentului metabolic (MET). Valoarea reală variază cu intensitatea și condiția fizică.',
      'arse.h2':          'Cum funcționează',
      'arse.p-html':      'Calculatorul folosește formula <strong>MET × greutate × durată</strong>. MET (echivalentul metabolic) arată de câte ori o activitate consumă mai multă energie decât statul în repaus — de exemplu, alergarea are un MET mult mai mare decât mersul lejer.',
      /* ── Pagina despre ───────────────────────────── */
      'despre.h1':                'Despre Slăbește Ușor',
      'despre.bc':                'Despre',
      'despre.intro':             'Slăbește Ușor este o bibliotecă online care centralizează, într-un singur loc, informații despre cele mai cunoscute diete de slăbit și o serie de calculatoare gratuite. Scopul e simplu: să găsești rapid date clare și comparabile, ca să poți lua o decizie informată — ideal împreună cu un specialist.',
      'despre.h2-ce-gasesti':     'Ce găsești aici',
      'despre.p-ce-gasesti':      'Peste 50 de diete prezentate după aceeași structură — cum funcționează, ce mănânci, ce eviți, avantaje, dezavantaje și contraindicații — plus calculatoare pentru calorii, IMC, greutate ideală, macronutrienți, apă și calorii arse. La asta se adaugă articole practice despre slăbit sănătos. Totul gratuit, fără cont și fără să-ți cerem date personale.',
      'despre.h2-principii':      'Principiile noastre',
      'despre.p-principii-html':  'Prezentăm informațiile <strong>neutru și factual</strong>. Nu promovăm nicio dietă anume, nu vindem programe și nu facem promisiuni de rezultate garantate. Folosim formule standard, verificabile (de exemplu Mifflin-St Jeor pentru calorii sau pragurile OMS pentru IMC) și descriem fiecare abordare cu cuvintele noastre, pe baza principiilor general cunoscute. Datele pe care le introduci în calculatoare sunt prelucrate <strong>exclusiv în browserul tău</strong> și nu părăsesc dispozitivul.',
      'despre.h2-ce-nu':          'Ce nu facem',
      'despre.p-ce-nu':           'Nu îți spunem că există o „dietă perfectă" și nu împingem soluții-minune sau produse. Fiecare organism e diferit, iar ce funcționează pentru o persoană poate să nu funcționeze pentru alta. Rolul nostru e să-ți punem la dispoziție informația ordonată, nu să decidem în locul tău.',
      'despre.h2-sanatate':       'Sănătate și responsabilitate',
      'despre.p-sanatate-html':   'Dieta și sănătatea sunt subiecte serioase. Conținutul de pe acest site are scop <strong>pur informativ</strong> și nu înlocuiește consultul unui medic sau nutriționist. Înainte de a începe orice dietă — mai ales dacă ai o afecțiune medicală — discută cu un specialist. Vezi și <a href="/disclaimer-medical/">disclaimerul medical</a>.',
      'despre.p-contact-html':    'Ai o sugestie sau o corectură? <a href="/contact/">Scrie-ne</a>.',
      /* ── Pagina vedete ───────────────────────────── */
      'vedete.h1':        'Vedete care au slăbit',
      'vedete.lead':      'Cum au reușit personalitățile publice să slăbească — ce diete au urmat, ce obiceiuri au schimbat și câte kilograme au dat jos. Fără formule magice, doar schimbări reale de stil de viață.',
      'vedete.strategie': '🍽️ Strategia alimentară',
      'vedete.miscare':   '🏃 Mișcare',
      'vedete.disclaimer-html': '⚠️ Poveștile de mai sus sunt prezentate în scop informativ și documentar. Rezultatele individuale variază în funcție de organism, stare de sănătate și consistență. Înainte de a urma orice dietă, consultă un medic sau nutriționist. Vezi <a href="/disclaimer-medical/">disclaimerul medical</a>.',
      /* ── Pagina alimente sănătoase ───────────────── */
      'alim.h1':          'Alimente Sănătoase',
      'alim.lead':        'Magazine și produse pe care le recomand pentru un stil de viață sănătos. Găsești aici alimente bio, naturale și produse utile pentru dietele prezentate pe site.',
      'alim.disclaimer-html': 'ℹ️ <strong>Transparență:</strong> Unele linkuri de pe această pagină sunt linkuri de afiliere. Dacă cumperi prin ele, primesc un mic comision ce mă ajută să țin pagina activă, fără niciun cost suplimentar pentru tine. Recomand doar magazine și produse în care am încredere.',
      /* ── Dieta slug page ─────────────────────────── */
      'dieta.bc.acasa':     'Acasă',
      'dieta.stat.dif':     'dificultate',
      'dieta.stat.durata':  'durată tipică',
      'dieta.stat.tip':     'tip',
      'dieta.mananci':      '✓ Ce mănânci',
      'dieta.eviti':        '✕ Ce eviți',
      'dieta.mananci-eviti':'Ce mănânci și ce eviți',
      'dieta.meniu':        'Meniu-exemplu pe o zi',
      'dieta.avantaje-h2':  'Avantaje și dezavantaje',
      'dieta.avantaje':     'Avantaje',
      'dieta.dezavantaje':  'Dezavantaje',
      'dieta.contra-h2':    '⚠️ Cui nu i se recomandă',
      /* ── Footer / disclaimer ─────────────────────── */
      'footer.disclaimer-html': '⚕️ Informațiile de pe acest site au scop pur informativ și nu înlocuiesc sfatul unui medic sau nutriționist. Înainte de a începe orice dietă, consultă un specialist. Vezi <a href="/disclaimer-medical/">disclaimerul medical</a>.',
      'footer.link-despre':           'Despre',
      'footer.link-vedete':           'Vedete care au slăbit',
      'footer.link-contact':          'Contact',
      'footer.link-confidentialitate':'Confidențialitate',
      'footer.link-termeni':          'Termeni',
      'footer.link-disclaimer':       'Disclaimer medical',
      'footer.copyright':             '© 2026 Slăbește Ușor — bibliotecă de diete și unelte gratuite.',
    },

    en: {
      /* ── Nav ─────────────────────────────────────── */
      'nav.diete':        'Diets',
      'nav.calculatoare': 'Calculators',
      'nav.articole':     'Articles',
      'nav.vedete':       'Celebrities',
      'nav.alimente':     'Healthy Foods',
      'nav.despre':       'About',
      'nav.search':       'Search diet...',
      /* ── Articles page ───────────────────────────── */
      'art.bc':           'Articles',
      'art.h1':           'Articles',
      'art.intro':        'Practical guides about diets, calorie deficit and healthy weight loss.',
      'art.citeste':      'Read →',
      /* ── Intro ───────────────────────────────────── */
      'intro.sub':        'your diet library',
      'intro.click':      '▸ click to continue',
      /* ── Homepage ────────────────────────────────── */
      'home.h1':          'Weight loss diets',
      'home.lead':        'Compare weight loss diets without being pushed toward any particular one. See how each works, what you eat and avoid, pros and cons — then decide for yourself what suits you. And calculate your calories, BMI and ideal weight for free.',
      'home.filtru-tip':  'Diet type',
      'home.filtru-car':  'Characteristics',
      'home.filtru-dif':  'Difficulty',
      'home.filtru-var':  'Age',
      'filter.toate':     'All',
      'diff.usoara':      'Easy',
      'diff.moderata':    'Moderate',
      'diff.stricta':     'Strict',
      /* ── Categorii ───────────────────────────────── */
      'cat.low-carb':           'Low-Carb',
      'cat.bogate-in-proteine': 'High Protein',
      'cat.post-intermitent':   'Intermittent Fasting',
      'cat.pe-plante':          'Plant-Based',
      'cat.echilibrate':        'Balanced',
      'cat.structurate':        'Structured',
      /* ── Caracteristici ──────────────────────────── */
      'char.slabire-rapida':       'Fast weight loss',
      'char.slabire-sustinuta':    'Sustained weight loss',
      'char.fara-numarat-calorii': 'No calorie counting',
      'char.fara-gluten':          'Gluten-free',
      'char.fara-lactate':         'Dairy-free',
      'char.vegetarian':           'Vegetarian',
      'char.buget-redus':          'Budget-friendly',
      'char.usor-de-tinut':        'Easy to follow',
      /* ── Modal vârstă ────────────────────────────── */
      'modal.bun-venit':  '👋 Welcome!',
      'modal.titlu':      'What age group are you in?',
      'modal.sub':        'We\'ll show you the most suitable diets for you.',
      'modal.skip':       'Show all diets',
      'banner.schimba':   'Change age',
      'banner.vedete':    '⭐ See how the most famous celebrities lost weight! ⭐',
      /* ── Grupe vârstă ────────────────────────────── */
      'var.sub30':    'Under 30',
      'var.18-30':    'Under 30',
      'var.30-50':    '30–50 years',
      'var.50plus':   'Over 50',
      /* ── Breadcrumb ──────────────────────────────── */
      'bc.acasa':     'Home',
      'bc.calc':      'Calculators',
      /* ── Rezultate filtre ────────────────────────── */
      'res.diete':    'diets',
      'gol.text':     'No diet matches the selected filters.',
      /* ── Diet card labels ────────────────────────── */
      'card.dificultate': 'Difficulty:',
      /* ── Categorii singular (badge pe carduri) ──────────────────── */
      'cat-sg.low-carb':           'Low-Carb Diet',
      'cat-sg.bogate-in-proteine': 'High Protein Diet',
      'cat-sg.post-intermitent':   'Intermittent Fasting',
      'cat-sg.pe-plante':          'Plant-Based Diet',
      'cat-sg.echilibrate':        'Balanced Diet',
      'cat-sg.structurate':        'Structured Diet',
      /* ── Descrieri grupe vârstă (modal) ──────────────────────────── */
      'var-desc.18-30':   'Young adults — active metabolism, higher tolerance for restrictions',
      'var-desc.30-50':   'Adults — balance between efficiency, sustainability and health',
      'var-desc.50plus':  'Seniors — focus on essential nutrients, cardiovascular health and bone density',
      /* ── Banner vârstă activă ─────────────────────────────────────── */
      'banner.filtrat-pentru': 'Diets filtered for age group:',
      /* ── Magazine alimente ───────────────────────────────────────── */
      'alim.vegis.p':     'Online shop specialising in natural, organic and ecological foods — seeds, nuts, whole grains, superfoods, cold-pressed oils and additive-free products. Ideal for plant-based, keto or any healthy lifestyle diet.',
      'alim.vegis.cta':   'See products on Vegis.ro →',
      'alim.nosugar.p':   'A shop dedicated to sugar-free and low-carb products — keto chocolate, carb-free pasta, natural sweeteners, fit snacks and Dukan diet products. Perfect for those following a low-carb or keto diet, or who want to reduce sugar intake.',
      'alim.nosugar.cta': 'See products on NoSugarShop.ro →',
      'alim.scufita.p':   'Online shop with Pronat natural products — dried fruits, nuts, seeds, cereals, aromatic herbs and superfoods, without additives or preservatives. Clean ingredients for healthy recipes, nutritious snacks and whole-food diets.',
      'alim.scufita.cta': 'See products on Scufița Roșie →',
      'alim.unicorn.p':   'Shop with natural and organic products — food supplements, functional powders, adaptogens, superfoods and wellness products. Suitable for those who want to complement their diet with clean ingredients, free from artificial additives.',
      'alim.unicorn.cta': 'See products on Unicorn Naturals →',
      'alim.parma.p':     'Online shop with quality food products — cured meats, cheeses, preserves, spices and culinary specialties. A good source for premium ingredients, suitable for a varied and balanced diet.',
      'alim.parma.cta':   'See products on Parmashop.ro →',
      'alim.minunea.p':   'Online shop with medicinal plants, teas, tinctures, essential oils and natural health products. Ideal for complementing a healthy diet with traditional remedies and nature-based supplements, without chemicals.',
      'alim.minunea.cta': 'See products on Minunea Naturii →',
      /* ── Titluri diete EN (dt.) ──────────────────── */
      'dt.deficit-caloric':        'Calorie Deficit Diet',
      'dt.dieta-alcalina':         'Alkaline Diet',
      'dt.dieta-atkins':           'Atkins Diet',
      'dt.dieta-cambridge':        'Cambridge Diet (Meal Replacements)',
      'dt.dieta-carnivora':        'Carnivore Diet',
      'dt.dieta-crudivore':        'Raw Food Diet (Crudivore)',
      'dt.dieta-cu-oua':           'Egg Diet',
      'dt.dieta-cu-proteine':      'High-Protein Diet',
      'dt.dieta-dash':             'DASH Diet',
      'dt.dieta-detox':            'Detox Diet',
      'dt.dieta-disociata':        'Food Combining Diet',
      'dt.dieta-dukan':            'Dukan Diet',
      'dt.dieta-fara-gluten':      'Gluten-Free Diet',
      'dt.dieta-flexitariana':     'Flexitarian Diet',
      'dt.dieta-gm':               'GM Diet (General Motors)',
      'dt.dieta-keto':             'Ketogenic (Keto) Diet',
      'dt.dieta-low-carb':         'Low-Carb Diet',
      'dt.dieta-low-fodmap':       'Low-FODMAP Diet',
      'dt.dieta-macrobiotica':     'Macrobiotic Diet',
      'dt.dieta-mediteraneana':    'Mediterranean Diet',
      'dt.dieta-mind':             'MIND Diet',
      'dt.dieta-montignac':        'Montignac Diet',
      'dt.dieta-nalep':            'Nalep Diet',
      'dt.dieta-noom':             'Noom Diet',
      'dt.dieta-okinawa':          'Okinawa Diet',
      'dt.dieta-ornish':           'Ornish Diet',
      'dt.dieta-paleo':            'Paleo Diet',
      'dt.dieta-pegan':            'Pegan Diet',
      'dt.dieta-pescetariana':     'Pescatarian Diet',
      'dt.dieta-planetara':        'Planetary Diet (EAT-Lancet)',
      'dt.dieta-pritikin':         'Pritikin Diet',
      'dt.dieta-rina':             'Rina Diet (90 Days)',
      'dt.dieta-scarsdale':        'Scarsdale Diet',
      'dt.dieta-sirtfood':         'Sirtfood Diet',
      'dt.dieta-slimming-world':   'Slimming World Diet',
      'dt.dieta-slow-carb':        'Slow Carb Diet',
      'dt.dieta-sonoma':           'Sonoma Diet',
      'dt.dieta-south-beach':      'South Beach Diet',
      'dt.dieta-supa-de-varza':    'Cabbage Soup Diet',
      'dt.dieta-vegana':           'Vegan Diet for Weight Loss',
      'dt.dieta-vegetariana':      'Vegetarian Diet for Weight Loss',
      'dt.dieta-volumetrics':      'Volumetrics Diet',
      'dt.dieta-weight-watchers':  'Weight Watchers (Points System)',
      'dt.dieta-whole30':          'Whole30 Diet',
      'dt.dieta-zone':             'Zone Diet (40-30-30)',
      'dt.keto-ciclica':           'Cyclical Ketogenic Diet (CKD)',
      'dt.omad':                   'OMAD (One Meal a Day)',
      'dt.post-5-2':               '5:2 Diet (Intermittent Fasting 5:2)',
      'dt.post-alternativ':        'Alternate Day Fasting',
      'dt.post-intermitent-16-8':  '16/8 Intermittent Fasting',
      'dt.dieta-bogata-in-proteine': 'High-Protein Diet',
      /* ── Principiu diete EN (dp.) ────────────────── */
      'dp.deficit-caloric':       'You eat fewer calories than you burn — the common mechanism behind all diets — without banning any specific food.',
      'dp.dieta-alcalina':        'Foods are classified as acid-forming or alkaline, and the diet recommends that 70–80% of your intake comes from alkaline foods.',
      'dp.dieta-atkins':          'Very few carbs at first, then gradually reintroduced across four phases, with an emphasis on protein and fat.',
      'dp.dieta-cambridge':       'You replace meals with formulated products (shakes, soups, bars) at a very low calorie intake, progressing through stages.',
      'dp.dieta-carnivora':       'Only animal products, no carbohydrates at all — an extreme form of low-carb eating.',
      'dp.dieta-crudivore':       'All food is eaten raw or prepared below 42°C. The foundation: fruits, vegetables, nuts, seeds, and sprouts.',
      'dp.dieta-cu-oua':          'Eggs as the main food, with high protein and very few carbs — intended for short-term use.',
      'dp.dieta-cu-proteine':     'Higher lean protein intake for satiety and muscle preservation, with fewer refined carbohydrates.',
      'dp.dieta-dash':            'A balanced pattern, low in salt and saturated fat, rich in vegetables, fruits, and whole grains.',
      'dp.dieta-detox':           'Short periods of liquid-only or very restricted eating, with the stated goal of "cleansing" the body.',
      'dp.dieta-disociata':       'You don\'t combine proteins with carbs at the same meal — foods are eaten "dissociated".',
      'dp.dieta-dukan':           'High lean protein intake across four phases, from attack (protein only) to stabilization.',
      'dp.dieta-fara-gluten':     'Complete removal of gluten — the protein found in wheat, rye, and barley — from your diet.',
      'dp.dieta-flexitariana':    'Mostly plant-based eating with occasional meat and fish — flexible vegetarianism.',
      'dp.dieta-gm':              'A fixed 7-day plan, each day dedicated to a food group, with a focus on fruits and vegetables.',
      'dp.dieta-keto':            'Very few carbs and lots of fat, so the body switches to burning fat for fuel (ketosis).',
      'dp.dieta-low-carb':        'A moderate reduction in carbohydrates — less strict than keto — with more protein and vegetables.',
      'dp.dieta-low-fodmap':      'Temporary elimination of fermentable carbohydrates (FODMAPs) that ferment in the gut, followed by systematic reintroduction to identify trigger foods.',
      'dp.dieta-macrobiotica':    'Eating based mainly on whole grains and vegetables, with yin-yang balance. Meat, dairy and sugar are limited or excluded.',
      'dp.dieta-mediteraneana':   'A balanced eating pattern built on vegetables, fish, olive oil, and whole grains — no drastic exclusions.',
      'dp.dieta-mind':            'A blend of Mediterranean and DASH, focused on foods that are good for the brain and heart.',
      'dp.dieta-montignac':       'Choose low-glycaemic-index carbs and avoid combining them with fats — no calorie counting.',
      'dp.dieta-nalep':           'You can eat almost anything, with one condition: completely eliminate added salt and sugar. No calorie counting, no drastic restrictions.',
      'dp.dieta-noom':            'Habit change through psychology; foods are grouped by color based on calorie density, nothing is forbidden.',
      'dp.dieta-okinawa':         'Traditional Japanese diet: mainly vegetables, tofu, fish, rice, and seaweed — small portions and the hara hachi bu principle.',
      'dp.dieta-ornish':          'Predominantly vegetarian and very low in fat (below ~10% of calories), with a focus on whole foods.',
      'dp.dieta-paleo':           'Whole, unprocessed foods from the supposed ancestral diet — no grains, dairy, or refined sugar.',
      'dp.dieta-pegan':           'A blend of paleo and vegan: 75% plant-based, small amounts of quality meat/fish, no refined grains, sugar, or dairy.',
      'dp.dieta-pescetariana':    'Mainly plant-based eating with fish and seafood as the primary animal protein sources.',
      'dp.dieta-planetara':       'Model from the EAT-Lancet commission: half fruits and vegetables, the rest whole grains, legumes, nuts, and small amounts of animal products.',
      'dp.dieta-pritikin':        'Extremely low in fat (under 10% of calories) and high in natural complex carbohydrates. The program also includes daily exercise.',
      'dp.dieta-rina':            'Rotating days each dedicated to one food type: protein, starch, carbs, vitamins.',
      'dp.dieta-scarsdale':       'A fixed 14-day menu, high in protein, low in carbs and fat, with reduced calories.',
      'dp.dieta-sirtfood':        'A focus on foods rich in "sirtfoods," with an initial phase of very low calories and green juices.',
      'dp.dieta-slimming-world':  '"Free" foods (vegetables, lean protein) eaten freely, plus measured portions of higher-calorie foods — no calorie counting.',
      'dp.dieta-slow-carb':       'Avoiding fast carbs 6 days out of 7, replaced by legumes. One day a week — the cheat day — anything goes.',
      'dp.dieta-sonoma':          'Eating inspired by Sonoma culture (California): controlled portions and 10 nutrient-rich power foods, no calorie counting.',
      'dp.dieta-south-beach':     'Balanced low-carb: healthy fats and low-glycaemic-index carbs, across three phases.',
      'dp.dieta-supa-de-varza':   'A fixed 7-day plan: cabbage soup at will plus a different permitted food each day.',
      'dp.dieta-vegana':          'Only plant foods — no meat, fish, eggs, or dairy — with an emphasis on legumes and whole grains.',
      'dp.dieta-vegetariana':     'No meat, with a focus on filling, low-calorie vegetables, legumes, and whole grains.',
      'dp.dieta-volumetrics':     'You choose foods with low calorie density (lots of water and fiber) so you eat a large volume while consuming few calories.',
      'dp.dieta-weight-watchers': 'Every food has a point value based on its nutrition; you stay within a daily budget — no foods are forbidden.',
      'dp.dieta-whole30':         '30 days without sugar, grains, dairy, legumes, or alcohol, then gradual reintroduction.',
      'dp.dieta-zone':            'Every meal follows the ratio 40% carbs, 30% protein, 30% fat.',
      'dp.keto-ciclica':          'Alternate several keto days with one or two carb-loading days to support intense exercise.',
      'dp.omad':                  'One single meal per day within a short window, followed by a long fast of about 23 hours.',
      'dp.post-5-2':              'Five days of normal eating and two days per week with a very low calorie intake.',
      'dp.post-alternativ':       'Alternate a day of normal eating with a day of fasting or very low calorie intake.',
      'dp.post-intermitent-16-8': 'Eat within an 8-hour window and fast for 16 hours — it\'s about WHEN you eat, not just what.',
      'dp.dieta-bogata-in-proteine': 'Higher lean protein intake for satiety and muscle preservation.',
      /* ── Pagina calculatoare ─────────────────────── */
      'calc.page.h1':         'Free Weight Loss Calculators',
      'calc.page.lead':       'Simple and fast tools for your weight goals. No account needed, nothing is sent anywhere — everything is calculated directly in your browser.',
      'calc.calorii.titlu':   'Calorie Calculator (TDEE)',
      'calc.calorii.desc':    'How many calories you burn per day and how many you need to lose, maintain or gain weight.',
      'calc.imc.titlu':       'BMI Calculator',
      'calc.imc.desc':        'Your body mass index and category according to WHO standards.',
      'calc.ideal.titlu':     'Ideal Weight',
      'calc.ideal.desc':      'Healthy weight range for your height, plus classic formula estimates.',
      'calc.macro.titlu':     'Macronutrient Calculator',
      'calc.macro.desc':      'Splits your daily calories into protein, carbs and fat based on your profile.',
      'calc.apa.titlu':       'Water Calculator',
      'calc.apa.desc':        'How much water to drink per day based on your weight and activity level.',
      'calc.arse.titlu':      'Calories Burned',
      'calc.arse.desc':       'How many calories you burn walking, running, cycling, swimming and other activities.',
      /* ── Calculator calorii ──────────────────────── */
      'cc.bc':        'Calorie calculator',
      'cc.h1':        'Calorie Calculator (TDEE)',
      'cc.lead':      'Find out how many calories you burn in a day and how many you should eat to lose, maintain or gain weight. Data stays in your browser — nothing is sent anywhere.',
      'cc.sex':       'Gender',
      'cc.barbat':    'Male',
      'cc.femeie':    'Female',
      'cc.varsta':    'Age (years)',
      'cc.inaltime':  'Height (cm)',
      'cc.greutate':  'Weight (kg)',
      'cc.activitate':'Activity level',
      'cc.btn':       'Calculate',
      'cc.kcal-zi':   'kcal/day (maintenance)',
      'cc.bmr':       'Basal Metabolic Rate (BMR)',
      'cc.mentinere': 'Maintenance (TDEE)',
      'cc.slab-usor': 'Mild weight loss (−300 kcal)',
      'cc.slab':      'Weight loss (−500 kcal, ~0.5 kg/wk)',
      'cc.surplus':   'Weight gain (+300 kcal)',
      'cc.nota':      'Informational estimate. Do not go below ~1200 kcal/day (women) / ~1500 kcal/day (men) without specialist guidance.',
      'cc.h2':        'How it works',
      'cc.p-html':    'The calculator first estimates your <strong>Basal Metabolic Rate (BMR)</strong> — the calories your body burns at complete rest — using the Mifflin-St Jeor equation. It then multiplies by an <strong>activity factor</strong> to get your <strong>TDEE</strong>, the total calories burned on a typical day. To lose weight, eat below TDEE; to gain weight, eat above.',
      /* ── Calculator IMC ──────────────────────────── */
      'imc.bc':           'BMI Calculator',
      'imc.h1':           'BMI Calculator (Body Mass Index)',
      'imc.lead':         'Calculate your body mass index and see which category you fall into, based on World Health Organization thresholds. Data stays in your browser.',
      'imc.inaltime':     'Height (cm)',
      'imc.greutate':     'Weight (kg)',
      'imc.btn':          'Calculate',
      'imc.subponderal':  'Underweight',
      'imc.normal':       'Normal weight',
      'imc.supraponderal':'Overweight',
      'imc.obezitate':    'Obesity',
      'imc.h2':           'BMI Categories (WHO)',
      /* ── Calculator greutate ideală ──────────────── */
      'gi.bc':            'Ideal weight',
      'gi.h1':            'Ideal Weight Calculator',
      'gi.lead':          'Find your healthy weight range for your height, plus classic formula estimates. Ideal weight is a range, not a fixed number. Data stays in your browser.',
      'gi.sex':           'Gender',
      'gi.barbat':        'Male',
      'gi.femeie':        'Female',
      'gi.inaltime':      'Height (cm)',
      'gi.btn':           'Calculate',
      'gi.interval-sub':  'healthy range (kg)',
      'gi.imc-interval':  'Healthy range (BMI 18.5–24.9)',
      'gi.devine':        'Devine formula',
      'gi.robinson':      'Robinson formula',
      'gi.nota':          'Informational guide. Your ideal weight also depends on muscle mass, build and health status.',
      'gi.h2':            'How it works',
      'gi.p-html':        'The main method derives the <strong>healthy weight range</strong> from the normal BMI (18.5–24.9) applied to your height. We also show two <strong>classic formulas</strong> — Devine and Robinson — which give a single reference value based on height and gender. The differences between them show exactly why "ideal weight" is a range, not a single number.',
      /* ── Calculator macronutrienți ───────────────── */
      'macro.bc':         'Macronutrient calculator',
      'macro.h1':         'Macronutrient Calculator',
      'macro.lead-html':  'Split your daily calories into protein, carbs and fat. If you don\'t know your calorie needs, find out first with the <a href="/calculator-calorii/">calorie calculator</a>.',
      'macro.calorii':    'Calories per day (kcal)',
      'macro.profil':     'Macronutrient profile',
      'macro.btn':        'Calculate',
      'macro.prot':       '🥩 Protein',
      'macro.carb':       '🍞 Carbohydrates',
      'macro.gras':       '🥑 Fat',
      'macro.nota':       'Daily reference values. 1 g protein / carbs = 4 kcal, 1 g fat = 9 kcal.',
      'macro.h2':         'How it works',
      'macro.p-html':     'The calculator takes your total calories and splits them into three categories based on the chosen profile percentages, then converts calories to grams. The <strong>balanced</strong> profile works for most people; <strong>low-carb</strong> and <strong>keto</strong> reduce carbs; <strong>high protein</strong> supports muscle mass.',
      /* ── Calculator apă ──────────────────────────── */
      'apa.bc':           'Water calculator',
      'apa.h1':           'Daily Water Intake Calculator',
      'apa.lead':         'Estimate how much water you need daily based on your weight and activity level. Data stays in your browser.',
      'apa.greutate':     'Weight (kg)',
      'apa.sport':        'Minutes of exercise per day',
      'apa.btn':          'Calculate',
      'apa.litri-sub':    'litres per day',
      'apa.pahare':       'Glasses (250 ml)',
      'apa.ml':           'Millilitres',
      'apa.nota':         'Rough estimate. Needs increase in heat, fever or intense exercise. Also listen to your thirst.',
      'apa.h2':           'How it works',
      'apa.p-html':       'The calculator starts with approximately <strong>35 ml of water per kilogram</strong> of body weight and adds a supplement for minutes of exercise. The result is a rough target — actual needs depend on temperature, sweating and health status.',
      /* ── Calculator calorii arse ─────────────────── */
      'arse.bc':          'Calories burned',
      'arse.h1':          'Calories Burned Calculator',
      'arse.lead':        'Find out how many calories you burn at different activities based on your weight and duration. Data stays in your browser.',
      'arse.greutate':    'Weight (kg)',
      'arse.activitate':  'Activity',
      'arse.durata':      'Duration (minutes)',
      'arse.btn':         'Calculate',
      'arse.kcal-sub':    'kcal burned',
      'arse.nota':        'Estimate based on metabolic equivalent (MET). Actual value varies with intensity and fitness level.',
      'arse.h2':          'How it works',
      'arse.p-html':      'The calculator uses the formula <strong>MET × weight × duration</strong>. MET (metabolic equivalent) shows how many times more energy an activity uses compared to rest — for example, running has a much higher MET than walking.',
      /* ── Pagina despre ───────────────────────────── */
      'despre.h1':                'About Slăbește Ușor',
      'despre.bc':                'About',
      'despre.intro':             'Slăbește Ușor is an online library that brings together, in one place, information about the best-known weight-loss diets and a set of free calculators. The goal is simple: to help you quickly find clear, comparable data so you can make an informed decision — ideally together with a specialist.',
      'despre.h2-ce-gasesti':     'What you will find here',
      'despre.p-ce-gasesti':      'Over 50 diets presented in the same structure — how each works, what you eat, what you avoid, pros, cons and contraindications — plus calculators for calories, BMI, ideal weight, macronutrients, water and calories burned. On top of that, practical articles about healthy weight loss. All free, with no account and without asking for your personal data.',
      'despre.h2-principii':      'Our principles',
      'despre.p-principii-html':  'We present information <strong>neutrally and factually</strong>. We do not promote any particular diet, we do not sell programmes and we make no promises of guaranteed results. We use standard, verifiable formulas (for example Mifflin-St Jeor for calories or the WHO thresholds for BMI) and describe each approach in our own words, based on widely known principles. The data you enter into the calculators is processed <strong>entirely in your browser</strong> and never leaves your device.',
      'despre.h2-ce-nu':          'What we don\'t do',
      'despre.p-ce-nu':           'We don\'t tell you there is a „perfect diet" and we don\'t push miracle solutions or products. Every body is different, and what works for one person may not work for another. Our role is to give you well-organised information, not to decide for you.',
      'despre.h2-sanatate':       'Health and responsibility',
      'despre.p-sanatate-html':   'Diet and health are serious matters. The content on this site is for <strong>informational purposes only</strong> and does not replace consulting a doctor or nutritionist. Before starting any diet — especially if you have a medical condition — talk to a specialist. See also the <a href="/disclaimer-medical/">medical disclaimer</a>.',
      'despre.p-contact-html':    'Have a suggestion or correction? <a href="/contact/">Write to us</a>.',
      /* ── Pagina vedete ───────────────────────────── */
      'vedete.h1':        'Celebrities who lost weight',
      'vedete.lead':      'How public figures managed to lose weight — what diets they followed, what habits they changed and how many kilograms they shed. No magic formulas, just real lifestyle changes.',
      'vedete.strategie': '🍽️ Diet strategy',
      'vedete.miscare':   '🏃 Exercise',
      'vedete.disclaimer-html': '⚠️ The stories above are presented for informational and documentary purposes. Individual results vary depending on body, health and consistency. Before following any diet, consult a doctor or nutritionist. See the <a href="/disclaimer-medical/">medical disclaimer</a>.',
      /* ── Pagina alimente sănătoase ───────────────── */
      'alim.h1':          'Healthy Foods',
      'alim.lead':        'Shops and products I recommend for a healthy lifestyle. Here you\'ll find organic, natural foods and useful products for the diets featured on this site.',
      'alim.disclaimer-html': 'ℹ️ <strong>Transparency:</strong> Some links on this page are affiliate links. If you buy through them, I receive a small commission that helps me keep the page running, at no extra cost to you. I only recommend shops and products I trust.',
      /* ── Dieta slug page ─────────────────────────── */
      'dieta.bc.acasa':     'Home',
      'dieta.stat.dif':     'difficulty',
      'dieta.stat.durata':  'typical duration',
      'dieta.stat.tip':     'type',
      'dieta.mananci':      '✓ What you eat',
      'dieta.eviti':        '✕ What you avoid',
      'dieta.mananci-eviti':'What you eat and avoid',
      'dieta.meniu':        'Sample one-day menu',
      'dieta.avantaje-h2':  'Pros and cons',
      'dieta.avantaje':     'Pros',
      'dieta.dezavantaje':  'Cons',
      'dieta.contra-h2':    '⚠️ Who should avoid it',
      /* ── Footer / disclaimer ─────────────────────── */
      'footer.disclaimer-html': '⚕️ The content of this site is for informational purposes only and does not replace medical advice from a doctor or nutritionist. Before starting any diet, consult a specialist. See the <a href="/disclaimer-medical/">medical disclaimer</a>.',
      'footer.link-despre':           'About',
      'footer.link-vedete':           'Celebrity weight loss',
      'footer.link-contact':          'Contact',
      'footer.link-confidentialitate':'Privacy',
      'footer.link-termeni':          'Terms',
      'footer.link-disclaimer':       'Medical Disclaimer',
      'footer.copyright':             '© 2026 Slăbește Ușor — diet library & free tools.',
    }
  };

  /* ── API publică ─────────────────────────────────────────────── */
  function getLang() {
    var s = localStorage.getItem('site-lang');
    if (s) return s;
    /* fără preferință salvată: paginile /en/ sunt engleze implicit */
    return /^\/en\//.test(location.pathname) ? 'en' : 'ro';
  }

  function setLang(lang) {
    localStorage.setItem('site-lang', lang);
    apply(lang);
    updateFlag(lang);
  }

  function toggle() {
    setLang(getLang() === 'ro' ? 'en' : 'ro');
  }

  /* ── Aplicare traduceri ──────────────────────────────────────── */
  function apply(lang) {
    var d = DICT[lang] || DICT.ro;
    document.documentElement.lang = lang;

    /* text generat din CSS (content:) — badge „recomandat" pe carduri */
    document.documentElement.style.setProperty(
      '--txt-recomandat',
      lang === 'en' ? '"✓ Recommended"' : '"✓ Recomandat"'
    );

    /* elemente cu data-i18n (textContent) */
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (d[key] !== undefined) el.textContent = d[key];
    });

    /* elemente cu data-i18n-html (innerHTML — șiruri din dicționar propriu) */
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (d[key] !== undefined) el.innerHTML = d[key];
    });

    /* placeholder-uri */
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-ph');
      if (d[key] !== undefined) el.placeholder = d[key];
    });

    /* butoane filtru categorie (generate dinamic) */
    document.querySelectorAll('.filtre[data-grup="categorie"] .filtru-btn[data-val]').forEach(function (btn) {
      var val = btn.dataset.val;
      if (val !== '*' && d['cat.' + val]) btn.textContent = d['cat.' + val];
      if (val === '*' && d['filter.toate']) btn.textContent = d['filter.toate'];
    });

    /* butoane filtru caracteristică */
    document.querySelectorAll('.filtre[data-grup="caracteristica"] .filtru-btn[data-val]').forEach(function (btn) {
      var val = btn.dataset.val;
      if (val !== '*' && d['char.' + val]) btn.textContent = d['char.' + val];
      if (val === '*' && d['filter.toate']) btn.textContent = d['filter.toate'];
    });

    /* "Toate" pe restul filtrelor */
    document.querySelectorAll('.filtre .filtru-btn[data-val="*"]').forEach(function (btn) {
      if (d['filter.toate']) btn.textContent = d['filter.toate'];
    });

    /* grupuri vârstă în modal */
    document.querySelectorAll('.mv-btn[data-varsta]').forEach(function (btn) {
      var v = btn.dataset.varsta;
      var lbl = btn.querySelector('.mv-label');
      if (lbl && d['var.' + v]) lbl.textContent = d['var.' + v];
    });

    /* dificultate valori (data-dif-val) */
    document.querySelectorAll('[data-dif-val]').forEach(function (el) {
      var v = el.dataset.difVal;
      var key = 'diff.' + v;
      if (d[key]) el.textContent = d[key];
    });

    /* badge categorie singular (data-cat-sg) */
    document.querySelectorAll('[data-cat-sg]').forEach(function (el) {
      var v = el.dataset.catSg;
      if (d['cat-sg.' + v]) el.textContent = d['cat-sg.' + v];
    });

    /* butoane filtru vârstă */
    document.querySelectorAll('.filtre[data-grup="varsta"] .filtru-btn[data-val]').forEach(function (btn) {
      var val = btn.dataset.val;
      if (val !== '*' && d['var.' + val]) btn.textContent = d['var.' + val];
    });

    /* descrieri grupe vârstă în modal */
    document.querySelectorAll('.mv-btn[data-varsta] .mv-desc').forEach(function (el) {
      var btn = el.closest('[data-varsta]');
      if (!btn) return;
      var v = btn.dataset.varsta;
      if (d['var-desc.' + v]) el.textContent = d['var-desc.' + v];
    });

    /* titluri diete pe carduri */
    document.querySelectorAll('[data-diet-titlu]').forEach(function (el) {
      var slug = el.dataset.dietTitlu;
      if (d['dt.' + slug]) el.textContent = d['dt.' + slug];
    });

    /* principiu diete pe carduri */
    document.querySelectorAll('[data-diet-principiu]').forEach(function (el) {
      var slug = el.dataset.dietPrincipiu;
      if (d['dp.' + slug]) el.textContent = d['dp.' + slug];
    });

    /* banner vârstă activă — actualizează eticheta când se schimbă limba */
    var bannerEl = document.getElementById('banner-varsta');
    if (bannerEl && bannerEl.dataset.varstaActiva) {
      var slug = bannerEl.dataset.varstaActiva;
      var lbl = document.getElementById('banner-varsta-label');
      if (lbl && d['var.' + slug]) lbl.textContent = d['var.' + slug];
    }

    /* link-uri către diete: potrivește limba (/dieta/ ↔ /en/dieta/).
       Astfel cardurile și orice link intern duc spre varianta corectă. */
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href) return;
      if (lang === 'en') {
        if (href.indexOf('/dieta/') === 0) a.setAttribute('href', '/en' + href);
      } else {
        if (href.indexOf('/en/dieta/') === 0) a.setAttribute('href', href.slice(3));
      }
    });
  }

  /* ── Steag ───────────────────────────────────────────────────── */
  function updateFlag(lang) {
    var flag = document.getElementById('lang-flag');
    if (flag) flag.src = lang === 'ro' ? '/flags/ro.svg' : '/flags/us.svg';
    var btn = document.getElementById('lang-toggle-btn');
    if (btn) btn.title = lang === 'ro' ? 'Switch to English' : 'Schimbă în Română';
  }

  /* ── Inițializare ────────────────────────────────────────────── */
  function init() {
    /* Dacă există o preferință EXPLICITĂ de limbă care nu se potrivește cu
       varianta paginii de dietă, redirecționează spre varianta corectă.
       (Vizitatorii fără preferință rămân pe pagina pe care au aterizat —
        important pentru SEO: paginile /en/ indexate nu sunt deviate.) */
    var stored = localStorage.getItem('site-lang');
    var path = location.pathname;
    if (stored === 'en' && /^\/dieta\//.test(path)) {
      location.replace('/en' + path + location.search + location.hash);
      return;
    }
    if (stored === 'ro' && /^\/en\/dieta\//.test(path)) {
      location.replace(path.slice(3) + location.search + location.hash);
      return;
    }

    var lang = getLang();
    apply(lang);
    updateFlag(lang);

    /* buton toggle din header (dacă există) */
    var headerToggle = document.getElementById('header-lang-btn');
    if (headerToggle) {
      headerToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        toggle();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  /* Export global */
  window.siteI18n = { toggle: toggle, getLang: getLang, setLang: setLang };
})();
