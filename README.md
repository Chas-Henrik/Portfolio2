# Portfolio page from design sketch

This is a multi-page, 'Portfolio Site' consisting of 5 pages:
- Home
- About
- Tech Stack
- Projects
- Contact

The design is a 'Mobile First' responsive design that also support Tablet's and Desktop's. Breakpoints have been set at 768px for Tablet's & Small Desktop's, and 1024px for Medium & Large Desktop's.  
  
Two additional content driven breakpoints have been set at 815px and 1350px:  
- The 815px breakpoint achieves a smooth transition from the 'mobile full screen project card' as the card turns directly into two cards when passing the breakpoint.  
- The 1350px breakpoint prevents navigation bar overflow and 'profile picture bouncing' when resizing the Web Browser on a Desktop.  
  
Since the site only use HTML & CSS, there is limited support for interaction. The mobile version supports the hamburger menu button though, and the menu can be collapsed and expanded by pressing the hamburger button. The site also supports ‘dark theme’ (configured through the operating system settings).  
  
All images, except the profile picture and the 'artistic images' (in the project section) are 'formatted' as svg images to scale seamlessly with different screen resolutions. The 'artistic images' are png formatted to preserve the details of the image while keeping a reasonable file size. The profile picture is jpg formatted as that's the only available format for that particular image.  
  
The `display: inline; vertical-align: middle;` solution has been selected over the 'flex-box' solution for the 'icon & text grid cells' even though the icon vertical alignment is slightly worse. The reason for this, is that the 'line wrap behavior' is way better for the 'vertical-align' solution when the (icon & text) line run out of horizontal space.
  
A 'three column menu' has been used for Tablet's & Small Desktop's in favor of a the 'two column menu' to reduce the header height as much as possible.

The site is published on Netlify (see hyperlink below):  
[https://chas-henrik-u01-designskiss.netlify.app/](https://chas-henrik-u01-designskiss.netlify.app/)
  
***
*Known problems:*
1. Contact gradient doesn't render properly when printed with Google Chrome.
2. Gradients don't render properly when printed with Safari on iPad and iPhone.

*Notes:*
1. The 'Live Preview', GitHub, Twitter & LinkedIn icons have not been linked to any profile at this time.

*Deviations from Figma:*
1. The Tech Stack icons have been scaled to a unified width of 11rem (while keeping their aspect ratio). This is to align them perfectly underneath each other when the flex-box wraps, and to resize them as part of a responsive design.
2. The Card footer is symmetric (it is asymmetric in Figma).
3. The Card Title text is centered and use a 28px line-height & 28px font-size (instead of the Figma specified 26px line-height & 28px font-size), to avoid text-clipping on Safari.
***

## Frågor:

### Vad är HTML och dess roll inom frontend? Vad menas med semantiskt html?

HTML är grunden för alla web platser och används av webläsare för att visa och presentera innehållet korrekt.
HTML står för 'Hyper Text Markup Language' och används för att skapa och struktur & innehåll på en webplats (rubriker, paragrafer, bilder, listor etc). En webläsare kan endast läsa in HTML filer initialt och sedan kan HTML sidan länka in CSS och JavaScript, men det är HTML som utgör grunden till alla websidor.

Semantisk HTML innebär att man använder HTML-element som tydligt beskriver sitt innehåll och sin funktion på ett sätt som är meningsfullt för både människor, maskiner, sökmotorer och skärmläsare.
Icke semantiska HTML element som `<div>` och `<span>` ger ingen tydlig indikation på vad innehållet representerar medan semantiska element ger en starkare struktur och förklaring till innehållet, vilket gör det lättare att förstå för både utvecklare och teknologier som bearbetar webbsidor (t.ex. sökmotorer och skärmläsare). 
Exempel på semantiska element är:
- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- `<figure>`
- `<figcaption>`
- `<address>`
- `<time>`
- `<mark>`
- `<details>`
- `<summary>`

### Vad är CSS och dess roll inom frontend? 

CSS står för Cascading Style Sheet och är ett stilmalls-språk som beskriver utseendet & styling på en websida. Cascading betyder att när flera stilregler kan tillämpas på ett element, så finns det en specifik ordning och prioritering som avgör vilken stil som ska gälla.

CSS används för att förändra färg, form, typsnitt, layout, animation m.m. på en web sida.
CSS filen länkas in från HTML sidan med `<link>` elementet (t.ex. `<link rel="stylesheet" href="./css/style.css">`) och är valfri, medan HTML filen är ett krav och måste finnas på alla web platser.

### Vad menas med responsiv design samt med vilka metoder man kan utveckla responsiva sidor?

En responsiv design anpassar layouten och innehållet (text, bilder etc.) till skärmstorleken.

Man kan använda följande 'metoder' för att utveckla responsiva sidor:
1. Media Queries (t.ex. `@media (min-width: 768px)`).
2. Använd relativa dimensioner (%, em, rem, vh, vw)
3. Använd rätt relativ enhet så att objektet skalar bra med skärmstorleken.
4. Designa utifrån innehållet (ibland behövs fler Media Queries för att innehållet ska vara 'läsbart' för alla skärm resolutioner)
5. Göra bilder responsiva så att de stretchar i förhållande till sin behållare och behåller sina proportioner.
6. Använd moderna layout tekniker (CSS Flexbox & Grid). I CSS Flexbox så kan t.ex. följande Flexbox egenskaper användas för att göra sidan responsiv:
   - flex-direction: row/column
   - flex-wrap: nowrap/wrap
   - flex: (flex-grow, flex-shrink, flex-basis)
   - flex-order
