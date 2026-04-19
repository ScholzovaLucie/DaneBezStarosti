export const serviceCards = [
  {
    title: 'Daňová přiznání',
    description:
      'Zpracování a podání daňových přiznání fyzických i právnických osob, DPH a dalších daní přesně a včas.',
    icon: ['M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'],
  },
  {
    title: 'Daňové poradenství',
    description:
      'Optimalizace daňové zátěže, analýzy rizik, odborná stanoviska a řešení složitých daňových situací.',
    icon: [
      'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2',
      'M9 5a2 2 0 002 2h2a2 2 0 002-2',
      'M9 5a2 2 0 012-2h2a2 2 0 012 2',
    ],
    delay: 0.1,
  },
  {
    title: 'Účetní služby',
    description:
      'Vedení účetnictví, poradenství při sestavování závěrek a průběžná kontrola správnosti zpracování.',
    icon: ['M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'],
    delay: 0.2,
  },
  {
    title: 'Mzdová agenda',
    description:
      'Kompletní zpracování mezd, komunikace s úřady, přihlášky a odhlášky zaměstnanců i roční zúčtování.',
    icon: [
      'M17 20h5v-2a3 3 0 00-5.356-1.857',
      'M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857',
      'M7 20H2v-2a3 3 0 015.356-1.857',
      'M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    ],
    delay: 0.05,
  },
  {
    title: 'Školení & mentoring',
    description:
      'Zaškolení vašich pracovníků, novinková daňová školení a průběžný mentoring účetní agendy.',
    icon: [
      'M12 6.253v13',
      'M12 6.253C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253',
      'M12 6.253C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    ],
    delay: 0.15,
  },
  {
    title: 'Telefonické konzultace',
    description:
      'Rychlé poradenství po telefonu, e-mailu nebo osobně v průběhu celého roku - kdykoliv potřebujete.',
    icon: ['M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'],
    delay: 0.25,
  },
];

export const packageCards = [
  {
    tier: 'Základní',
    name: 'Konzultace & přiznání',
    items: [
      'Telefonické, mailové či osobní konzultace během roku',
      'Zpracování daňových přiznání fyzických i právnických osob',
      'Přiznání k DPH a dalším daním',
      'Odpovědi na vaše dotazy',
    ],
    ctaLabel: 'Zjistit více',
    ctaClassName: 'pkg-cta pkg-cta-outline',
  },
  {
    tier: 'Komplexní',
    name: 'Průběžná péče',
    items: [
      'Průběžný mentoring – měsíční kontrola účetnictví před podáním DPH',
      'Kompletní vedení mzdové agendy a komunikace s úřady',
      'Kontrola dokladů, inventarizace a účetní uzávěrky',
      'Zastupování před finančním úřadem a správou sociálního zabezpečení',
      'Obsluha datové schránky',
    ],
    ctaLabel: 'Nezávazně se zeptat',
    ctaClassName: 'pkg-cta pkg-cta-white',
    featured: true,
    tag: 'Nejoblíbenější',
    delay: 0.1,
  },
  {
    tier: 'Vzdělávání & servis',
    name: 'Školení & úplný servis',
    items: [
      'Zaškolení zaměstnanců v účetnictví, mzdách a daních',
      'Novinková školení daňových změn',
      'Průběžný mentoring účetního týmu',
      'Úplný servis – převzetí všech účetních, mzdových a daňových povinností',
    ],
    ctaLabel: 'Zjistit více',
    ctaClassName: 'pkg-cta pkg-cta-outline',
    delay: 0.2,
  },
];

const iconPhone = ['M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'];
const iconEmail = ['M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'];
const iconPin = ['M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', 'M15 11a3 3 0 11-6 0 3 3 0 016 0z'];
const iconId = ['M2 7h20v14a2 2 0 01-2 2H4a2 2 0 01-2-2V7zm14 14V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16'];

export const sharedContactItems = [
  { label: 'Telefon', value: '+420 602 184 029', icon: iconPhone },
  { label: 'E-mail', value: 'petrovicka@danebezstarosti.cz', icon: iconEmail },
];

export const personalContactItems = [
  { label: 'Adresa', value: 'Zvole 100, 552 25 Rychnovek', icon: iconPin },
  { label: 'IČO / DIČ', value: '74415301 / CZ8459133287', icon: iconId },
];

export const companyContactItems = [
  { label: 'Adresa', value: 'Královédvorská 249, 541 01 Trutnov', icon: iconPin },
  { label: 'IČO / DIČ', value: '08617562 / CZ08617562', icon: iconId },
];
