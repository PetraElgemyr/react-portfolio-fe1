# Portfolio i React + TypeScript

Individuell uppgift i kursen Frontend 1 under min .Net-utbildning på Nackademin.
Du kan besöka portfolion här: [portfolio](https://petraelgemyr.vercel.app/)

## Uppgift

De uppgifter vi fick var att vi självständigt ska bygga en Utvecklarportfölj och får använda HTML, CSS & JS. Man får använda frontendramverk som React, Vue och Angular eller liknande och detta måste finnas med:

- En porträttbild
- En knapp där besökaren kan ladda ner ditt CV
- Någon form av navbar
- Länkar till era Social Medier/Github
- En About Me sektion där du introducerar dig själv
- En Kunskap sektion där du redovisar vilka teknologier du kan
- En Portfölj sektion som redovisar några av dina bästa projekt (inkl. länk till Github)
- En Referens sektion där du redovisar några referenser från ditt arbetsliv/skolliv
- En Kontaktform
- En Footer

## Tekniker & verktyg

Tech stacken består av TypeScript tillsammans med ReactJs. För styling är det en kombination av sass och styled components, och en eller två komponenter från MUI och EmailJs för kontaktformuläret. För att utmana mig själv provade jag för första gången att prova Three.js för mindre delar såsom en 3D-text med mitt namn och flytande bubblor som visar några av mina kunskaper.

[![Vite](https://img.shields.io/badge/tech-vite-purple)](https://vite.dev/)
[![Typescript](https://img.shields.io/badge/tech-typescript-darkblue)](https://www.typescriptlang.org/docs/)
[![Sass](https://img.shields.io/badge/tech-sass-pink)](https://sass-lang.com/guide)
[![React](https://img.shields.io/badge/tech-react-blue)](https://react.dev/)
[![Styled components](https://img.shields.io/badge/styled-components-green)](https://styled-components.com/)

## Installation

För att klona ner projektet:

```
git clone https://github.com/PetraElgemyr/react-portfolio-fe1.git
```

Ställ dig i roten av projektet och installera alla dependencies:

```
npm install
```

Starta projektet:

```
npm run dev
```

## Resultat

### Funktioner

Besökare ska kunna interagera smått med 3D-elementen, navigera runt till olika delar oavsett enhet eller skärmstorlek. Besökare ska kunna se de projekt som visas samt besöka deras respektive länkar (github och eventuellt live). Det ska gå att ladda ner mitt cv via en knapp och besökare ska kunna kontakta mig direkt genom kontaktformuläret, med korrekt information ifylld. Vid felaktig inmatning ska användaren få relevanta felmeddelanden.

### Design

Designen är baserad mycket på 3D färger, starka kontraster och mörkt tema. Designprinciper jag applicerat i mitt tänkande är kontrast, betoning, balans, hierarki, mönster och enhetlig design. Accentfärgerna är menade att få intressanta eller viktiga element att sticka ut. Självklart arbetar jag utefter mobile first där jag startar med mobilversionen och sedan skalar upp till tablet, laptop och större datorskärmar. På mobilversionen är det mesta av innehållet placerat i en kolumn, men det blir mer dynamiskt vid större skärmar då jag försöker hålla webbplatsen intressant genom olika typer av balanser/obalanser. Jag försökte även ha en lugnande hero på startsidan i min primära mörkblåa bakgrundsfärgen och min främsta accentfärg på 3D-texten för att få texten att sticka ut ännu mer.

#### Färger

Jag bestämde mig för att en mörk bakgrund och orange som min primära accentfärg. Den orangea färgen valde jag för att göra portfolion personlig, då jag gillar den färgen. Komplementfärg till orange är blå vilket var den största orsaken till att jag valde min mörkblåa bakgrund. För en andra accentfärg använde jag Canvas Color Wheel som hittade en triadisk färg (triadic color) som jag använt på vissa (inte alltför många) ställen vid sidan av det oranga. En stark nästintill lysande lila som enligt mig passar ihop med den starka oranga och dämpade mörka bakgrunden.

Accentfärger:

- Orange #e9793a
- Lila #793ae9
- Mörkblå #01040e

#### Bilder för mobil

Startsida med en hero som tar upp hela skärmhöjden:
![Mobile first start](/public/readMeImages/startPageMobile.png)

Om mig:
![Mobile first about](/public/readMeImages/aboutMobile.png)

Kunskaper och referenser. Mönster med 3D och orange accentfärg som återkopplar till startsidan:
![Mobile first skills](/public/readMeImages/skillsMobile.png)

Enhetlig portfolio som upprepar designen för projekten:
![Mobile first portfolio 1](/public/readMeImages/portfolioMobile.png)
![Mobile first portfolio 2](/public/readMeImages/portfolio2Mobile.png)

Kontaktfomrulär och kontaktvägar:
![Mobile first contact](/public/readMeImages/contactMobile.png)

#### Bilder för dator

Startsida:
![Desktop start](/public/readMeImages/startPageDesktop.png)

Om mig:
![Desktop about](/public/readMeImages/aboutDesktop.png)

Kunskaper och referenser:
![Desktop skills](/public/readMeImages/skillsDesktop.png)
![Desktop references](/public/readMeImages/referencesDesktop.png)

Portfolio
![Desktop portfolio](/public/readMeImages/portfolioDesktop.png)

Kontaktfomrulär och kontaktvägar:
![Desktop contact](/public/readMeImages/contactDesktop.png)

## Utvecklare

- [Petra Elgemyr](https://github.com/PetraElgemyr)
