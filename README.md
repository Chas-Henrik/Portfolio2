# Personal portfolio page

This is a single-page, 'Portfolio Site' consisting of 5 sections:
- Home
- About
- Tech Stack
- Projects
- Contact

The design is a 'Mobile First' responsive design that also support Tablet's and Desktop's. Breakpoints have been set at 650px for Tablet's & Small Desktop's, and 1024px for Medium & Large Desktop's.  
  
One additional content driven breakpoints have been set at 830px:  
- The 830px breakpoint achieves a smooth transition from the 'mobile full screen project card' as the card turns directly into two cards when passing the breakpoint. 
  
The site uses HTML5, CSS & JavaScript and the following Java Script 'user interaction' has been added:
1. Progress bar when user loads the page.
2. Hamburger menu.
3. A ResizeObserver has been added to the Header that updates the `scroll-padding-top` attribute when the header is resized, to achieve flawless scroll offset for the internal menu links.
4. Active menu indication
5. 'Expand/Collapse All' button to expand/collapse all 'Description' & 'Technology' details.
  
The site supports ‘dark theme’ (configured through operating system settings).  
  
Some effort has been made to remove the header & footer when the page is printed and to make the page print with suitable page breaks.  
  
Both the cv.json & the GitHub API data is cached in Local Storage. The data in Local Storage is timestamped and is invalidated after 24h, so that the cache reflects the latest server content when the cv.json and/or the the GitHub API data is updated on the server.
  
All images, except the profile picture and the 'artistic images' (in the project section) are 'svg formatted' to scale seamlessly with different screen resolutions. The profile picture and the 'artistic images' are webP formatted to achieve the best possible compression while still preserving the details of the image, and the images are also available in png format as fallback in case webP is not supported by the client browser. All images except images used on the landing page are lazy loaded to improve performance. All fonts are hosted locally (as .woff2 files) and the landing-page fonts are preloaded to improve performance.
  
The `display: inline; vertical-align: middle;` solution has been selected over the 'flex-box' solution for the 'icon & text grid cells' even though the icon vertical alignment is slightly worse. The reason for this, is that the 'line wrap behavior' is way better for the 'vertical-align' solution when the (icon & text) line run out of horizontal space.
  
A 'three column menu' has been used for Tablet's & Small Desktop's in favor of a the 'two column menu' to reduce the header height as much as possible.
  
The site is published on Netlify (see hyperlink below):  
[https://chas-henrik-u02-egen-portfoliosida.netlify.app/](https://chas-henrik-u02-egen-portfoliosida.netlify.app/)
  
***
*Known problems:*
1. `break-inside: avoid-page` doesn't work properly on flex-boxes when printed from Safari, and a workaround has been applied to alleviate this problem. Printing with 'HP Smart' from Safari still doesn't work though.
2. Lazy loaded images doesn't show up in 'Print Preview' in Safari until images has been browsed on page.

*Notes:*

***

## Frågor:

### Vad kan man utveckla m.h.a av Javascript inom frontend?
Man kan utveckla interaktion & funktionalitet m.h.a JavaScript.  

Exempel på interaktion med användaren:
1. Reagera på olika events (t.ex. click, mouseover, drag, drop)
2. Ändra, lägga till och ta bort HTML element
3. Visa & ta bort pop-ups

Exempel på funktionalitet:
1. Spara data i Local Storage
2. Kommunicera med backend m.h.a Rest API
3. Beräkningar i fronend såväl som backend
4. Spara data i backend databas
5. Kommunicera med externa tjänster m.h.a API (väderdata, recept, generera data från Chat GPT)
  
  
### Vad är JSON och hur används det inom frontend?

JSON står för “JavaScript Object Notation” och är ett lättvikts format för att strukturera data. JSON är särskilt utformat för att vara enkelt att läsa och skriva för både människor och maskiner. JSON består av nyckel-värde-par och använder en syntax som liknar JavaScript-objekt, vilket gör det väldigt lätt att arbeta med i webbutveckling, särskilt på frontend-sidan.  
  
JSON används för att utbyta data mellan webbläsaren och servern, hantera dynamisk data & lagra konfigurationer. Frontendutvecklare använder även JSON för att hantera och manipulera data som behövs för att skapa interaktiva och responsiva webbapplikationer.

Exempel på specifika användningsområden där JSON används:
1. API-kommunikation : JSON används för att skicka och ta emot data från API:er. 
2. Datanavigering och rendering : JSON-data kan hämtas från en server och omvandlas direkt till ett JavaScript-objekt, och detta gör det enkelt att navigera (JSON objekt kan innehålla länkar till andra JSON objekt) och bearbeta data för att rendera dynamiskt innehåll i en webbsida.
3. Lokalt lagrad data : JSON används för att cacha data i webbläsarens “localStorage” (m.h.a. `JSON.stringify(obj)`) för att snabbt kunna hämta datan utan nya API anrop (m.h.a. `JSON.parse(obj)`).
4. Konfiguration och inställningar : Vissa frontendverktyg och bibliotek använder JSON för konfigurationer och inställningar. 
5. Serialisering och deserialisering av data : JSON gör det möjligt att serialisera JavaScript-objekt till en textsträng, vilket behövs för att kunna skicka objekt i HTTP-anrop.
  
### Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

Hypertext Transfer Protocol (HTTP) är det kommunikationsprotokoll som används för att överföra webbsidor på informationsnätverket WWW, World Wide Web på Internet. Det ursprungliga syftet med HTTP var att tillhandahålla en metod för att överföra HTML-sidor från webbservrar till webbklienter.
Utvecklingen av HTTP koordinerades av World Wide Web Consortium (W3C) och arbetsgrupper i Internet Engineering Task Force.

HTTP bygger på ett förfrågan/svar-förfarande mellan klient och server. En HTTP-klient, vanligen en webbläsare, som skall hämta en HTML-fil, en bild eller annan fil från en webbserver skickar en förfrågan bestående av en kort textsträng till en TCP-port på servern, vanligen nummer 80. Textsträngen innehåller information om vilken version av HTTP som används, och vilken fil (eller annan resurs eller information) som klienten vill att servern skall skicka. En HTTP-förfrågan kan till exempel se ut som följande: `GET /index.html HTTP/1.1` (vilket med hjälp av HTTP version 1.1 skulle begära en överföring av serverns indexdokument till webbläsaren).  
  
Kunskap om HTTP och dess protokoll hjälper frontendutvecklaren att förstå hur man hämtar data på ett effektivt sätt, och hur data skickas och skyddas i en webbapplikation, vilket både förbättrar användarupplevelsen och säkerheten.

Som frontendutvecklare är det också viktigt att ha kunskap om HTTP och dess protokoll eftersom det påverkar hur en webbapplikation kommunicerar med backend-tjänster och hanterar data. Och det är viktigt att förstå hur man hämtar data på ett effektivt sätt med HTTP, och hur data skickas och skyddas i en webbapplikation då detta både förbättrar användarupplevelsen och säkerheten.

Här är några ytterligare skäl till att det är viktigt att ha kunskap om HTTP och dess protokoll:
1. Förståelse för klient-server-kommunikation: Som frontendutvecklare behöver man förstå hur förfrågningar och svar hanteras mellan klient och server. Detta är avgörande när man bygger funktioner som hämtar data från API:er eller skickar information till servern.
2. Förfrågningstyper (GET, POST, PUT, DELETE): HTTP använder olika typer av förfrågningar (s.k. “HTTP-metoder”) för att definiera syftet med en förfrågan, som att hämta, skicka, uppdatera eller ta bort data. Att förstå skillnaderna mellan dessa är viktigt när man arbetar med API-anrop i frontendkoden.
3. HTTP-statuskoder: Statuskoder som 200 (OK), 404 (Not Found) och 500 (Server Error) ger information om resultatet av en förfrågan. Dessa är viktiga att känna till för att kunna hantera fel i frontendkoden och ge användaren rätt information om vad som sker.
4. Säkerhet (HTTPS): HTTPS är en säker version av HTTP som använder SSL/TLS-kryptering för att skydda datan som skickas mellan klient och server. Att förstå hur HTTPS fungerar är viktigt för att kunna säkra applikationer och se till att användardata skyddas.
5. Caching och prestanda: HTTP har inbyggda funktioner för caching som gör det möjligt att förbättra sidladdningstider och prestanda. Som frontendutvecklare är det bra att förstå hur dessa fungerar och hur de kan utnyttjas för att optimera webbplatsen.
6. CORS (Cross-Origin Resource Sharing): När frontendapplikationen kommunicerar med en backend på en annan domän är det viktigt att förstå CORS-regler, eftersom de bestämmer vilka domäner som får skicka förfrågningar till servern.

