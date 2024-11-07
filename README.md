# Personal portfolio page

This is a single-page, 'Portfolio Site' consisting of 5 sections:
- Home
- About
- Tech Stack
- Projects
- Contact

The design is a 'Mobile First' responsive design that also support Tablet's and Desktop's. Breakpoints have been set at 650px for Tablet's & Small Desktop's, and 1024px for Medium & Large Desktop's.  
  
Two additional content driven breakpoints have been set at 815px and 1200px:  
- The 815px breakpoint achieves a smooth transition from the 'mobile full screen project card' as the card turns directly into two cards when passing the breakpoint.  
- The 1200px breakpoint shrinks the Introduction Card to prevent 'screen overflow' when resizing the Web Browser on a Desktop.  
  
The site uses HTML5, CSS & JavaScript and the following Java Script 'user interaction' has been added:
1. Progress bar when user loads the page
2. Hamburger menu
3. A ResizeObserver has been added to the Header that updates the `scroll-padding-top` attribute when the header is resized, to achieve flawless scroll offset for the site internal menu links
4. Active menu indication
5. 'Expand/Collapse All' button to expand/collapse all 'Description' & 'Technology' details in the grid below.
  
  
The site supports ‘dark theme’ (configured through the operating system settings).  
  
Some additional effort has been made to remove the header & footer when the page is printed, and effort has also been made to make the page print with suitable page breaks.  
  
Both the cv.json & the GitHub API data is cached in Local Storage. The data in Local Storage is timestamped and 'automatically' invalidated after 24h, so that the cache reflects the latest server content when cv.json and/or the the GitHub API data is updated on the server.
  
All images, except the profile picture and the 'artistic images' (in the project section) are 'formatted' as svg images to scale seamlessly with different screen resolutions. The profile picture and the 'artistic images' are png formatted to preserve the details of the image while keeping a reasonable file size.   
  
The `display: inline; vertical-align: middle;` solution has been selected over the 'flex-box' solution for the 'icon & text grid cells' even though the icon vertical alignment is slightly worse. The reason for this, is that the 'line wrap behavior' is way better for the 'vertical-align' solution when the (icon & text) line run out of horizontal space.
  
A 'three column menu' has been used for Tablet's & Small Desktop's in favor of a the 'two column menu' to reduce the header height as much as possible.
  
The site is published on Netlify (see hyperlink below):  
[https://chas-henrik-u02-egen-portfoliosida.netlify.app/](https://chas-henrik-u02-egen-portfoliosida.netlify.app/)
  
***
*Known problems:*
1. A gray square appears around the profile image when printed from Safari.

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

JSON står för “JavaScript Object Notation” och är ett lättvikts format för att strukturera data. JSON är särskilt utformat för att vara enkelt att läsa och skriva för både människor och maskiner. JSON består av nyckel-värde-par och använder en syntax som liknar JavaScript-objekt, vilket gör det väldigt användbart och lätt att arbeta med i webbutveckling, särskilt på frontend-sidan.  
  
JSON används för att utbyta data mellan webbläsaren och servern i frontend.
JSON är ett enkelt och effektivt dataformat som är centralt för frontendutveckling, särskilt när det gäller kommunikation mellan klient och server, hantering av dynamisk data och lagring av konfigurationer. Genom att arbeta med JSON kan frontendutvecklare enkelt hantera och manipulera data, vilket är viktigt för att skapa interaktiva och responsiva webbapplikationer.

Här är några specifika användningsområden:
1. API-kommunikation :  JSON är det vanligaste formatet för att skicka och ta emot data från API:er. 
2. Datanavigering och rendering :  JSON-data kan hämtas från en server och direkt omvandlas till JavaScript-objekt vilket gör det enkelt att navigera och bearbeta data för att rendera dynamiskt innehåll i en webbsida.
3. Lokalt lagrad data : JSON används också för att cacha data i webbläsarens “localStorage” för att snabbt kunna hämta datan utan nya API anrop.
4. Konfiguration och inställningar : Vissa frontendverktyg och bibliotek använder JSON för konfigurationer och inställningar. 
5. Serialisering och deserialisering av data : JSON gör det möjligt att “serialisera” (omvandla) JavaScript-objekt till en textsträng, vilket behövs för att kunna skicka objekt i ett HTTP-anrop.
  
### Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

HTTP (HyperText Transfer Protocol) är ett applikationslager protokoll i Internet-protokoll svitmodellen för distribuerade, kollaborativa hypermedia informationssystem. HTTP används för att kommunicera med webbservrar och definierar hur förfrågningar och svar ska skickas mellan klient (ex. en webbläsare) och server.

Kunskap om HTTP och dess protokoll hjälper frontendutvecklaren att förstå hur man hämtar data på ett effektivt sätt, och hur data skickas och skyddas i en webbapplikation, vilket både förbättrar användarupplevelsen och säkerheten.

Som frontendutvecklare är det också viktigt att ha kunskap om HTTP och dess protokoll eftersom det påverkar hur en webbapplikation kommunicerar med backend-tjänster och hanterar data. Och det är viktigt att förstå hur man hämtar data på ett effektivt sätt med HTTP, och hur data skickas och skyddas i en webbapplikation då detta både förbättrar användarupplevelsen och säkerheten.

Här är några ytterligare skäl till att det är viktigt att ha kunskap om HTTP och dess protokoll:
1. Förståelse för klient-server-kommunikation: Som frontendutvecklare behöver man förstå hur förfrågningar och svar hanteras mellan klient och server. Detta är avgörande när man bygger funktioner som hämtar data från API:er eller skickar information till servern.
2. Förfrågningstyper (GET, POST, PUT, DELETE): HTTP använder olika typer av förfrågningar (s.k. “HTTP-metoder”) för att definiera syftet med en förfrågan, som att hämta, skicka, uppdatera eller ta bort data. Att förstå skillnaderna mellan dessa är viktigt när man arbetar med API-anrop i frontendkoden.
3. HTTP-statuskoder: Statuskoder som 200 (OK), 404 (Not Found) och 500 (Server Error) ger information om resultatet av en förfrågan. Dessa är viktiga att känna till för att kunna hantera fel i frontendkoden och ge användaren rätt information om vad som sker.
4. Säkerhet (HTTPS): HTTPS är en säker version av HTTP som använder SSL/TLS-kryptering för att skydda datan som skickas mellan klient och server. Att förstå hur HTTPS fungerar är viktigt för att kunna säkra applikationer och se till att användardata skyddas.
5. Caching och prestanda: HTTP har inbyggda funktioner för caching som gör det möjligt att förbättra sidladdningstider och prestanda. Som frontendutvecklare är det bra att förstå hur dessa fungerar och hur de kan utnyttjas för att optimera webbplatsen.
6. CORS (Cross-Origin Resource Sharing): När frontendapplikationen kommunicerar med en backend på en annan domän är det viktigt att förstå CORS-regler, eftersom de bestämmer vilka domäner som får skicka förfrågningar till servern.

