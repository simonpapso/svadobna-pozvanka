# Svadobná pozvánka

Jednostránková slovenská pozvánka s programom, odpočtom, mapou, kalendárom, otázkami pre hostí a formulárom na potvrdenie účasti. Projekt používa HTML, CSS a JavaScript bez inštalácie balíkov.

[Otvoriť živú ukážku](https://simonpapso.github.io/svadobna-pozvanka/)

## Ako vložiť vlastné údaje

1. Vo [wedding.js](wedding.js) upravte mená, termín, čas, miesto, odkaz na mapu, program, termín na odpoveď a odpovede na otázky hostí. Použite časový posun platný v dátume svadby. Kalendár má celodňovú udalosť, kým je `allDay` zapnuté. Po potvrdení programu zadajte časy do `startsAt` a `endsAt` a nastavte `allDay` na `false`. Termín pre odpovede zadajte do `replyDeadline` vo formáte `RRRR-MM-DD`. Pri zmene údajov upravte aj zodpovedajúci obsah pre návštevníkov s vypnutým JavaScriptom v [index.html](index.html).
2. Vytvorte priečinok `assets`, vložte doň vlastné fotky a nastavte napríklad `src: "./assets/par.jpg"` a `src: "./assets/miesto.jpg"` pri `photos` vo [wedding.js](wedding.js). Pri každej fotografii upravte aj slovný opis v poli `alt`.
3. Farby sú v premenných na začiatku [styles.css](styles.css). Úvodnú vetu upravíte pri `hero-message` v [index.html](index.html).

## Potvrdenie účasti

Ukážkový režim formulára umožňuje vyskúšať jeho správanie. Údaje sa neposielajú ani neukladajú.

Na prijímanie odpovedí si vytvorte formulár v službe, ako je [Formspree](https://formspree.io/), alebo pripojte vlastný HTTPS endpoint. Vo [wedding.js](wedding.js) zadajte jeho adresu do `rsvp.endpoint`, nastavte `rsvp.demo` na `false` a podľa potreby upravte `maxGuests`. Endpoint má akceptovať požiadavku POST s JSON poliami `name`, `attendance`, `partySize` a `note`. Pri odmietnutí účasti je `partySize` nula. Pri úspešnom prijatí odpovede endpoint vráti stav 2xx a pri inej doméne musí povoliť požiadavky z domény pozvánky cez CORS. Overte doručenie testovacej odpovede pred rozoslaním.

GitHub Pages aj zdrojový repozitár tejto ukážky sú verejné. Pri úpravách rátajte s tým pri výbere osobných údajov a fotografií. Odpovede hostí patria iba do zvolenej formulárovej služby.

## Nasadenie

GitHub Pages publikuje koreň vetvy `main`. Na lokálny náhľad môžete otvoriť `index.html` v prehliadači. Pre lokálny HTTP náhľad stačí ľubovoľný statický server v koreňovom priečinku projektu.

## Porovnanie svadobných webov

| Portál | Čo ponúka a ako sa to premietlo do pozvánky |
| --- | --- |
| [Sa-Berú.sk](https://www.sa-beru.sk/) | Slovenský web pre hostí zdôrazňuje čas a miesto obradu. Obe informácie majú na pozvánke zreteľné miesto. |
| [Plánujeme svadbu](https://www.planujemesvadbu.sk/) | Slovenský portál spája web pre hostí s mapou svadby a parkovania. Pozvánka má odkaz na mapu a praktické informácie o príchode. |
| [Vowly](https://vowly.love/sk) | Česká služba spája informácie, RSVP a galériu na jednom odkaze. Pozvánka drží program, miesto aj odpoveď na jednej stránke. |
| [Joy](https://withjoy.com/wedding-website/) | RSVP zahŕňa účasť a požiadavky k jedlu. Formulár sa preto pýta na účasť, veľkosť skupiny a voliteľnú poznámku. |
| [Zola](https://www.zola.com/wedding-planning/website) | Informácie o obrade, doprave a ubytovaní sú súčasťou webu pre hostí. Pozvánka má harmonogram a samostatnú sekciu praktických otázok. |

## Ilustračné fotografie

- [Svadobný pár — Enes Beydilli, Pexels](https://www.pexels.com/photo/elegant-wedding-couple-in-rustic-stone-courtyard-33363338/)
- [Svadobný stôl v záhrade — Pexels](https://www.pexels.com/photo/photo-of-a-wedding-table-in-the-garden-15283448/)
- [Licencia Pexels](https://www.pexels.com/license/)
