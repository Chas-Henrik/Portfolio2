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

The site supports ‘dark theme’ (configured through the operating system settings).  
  
The cv.json is cached in Local Storage. The data in Local Storage has been timestamped and 'automatically' invalidated after 24h, so that the cache reflects the server content when cv.json is updated on the server.

All images, except the profile picture and the 'artistic images' (in the project section) are 'formatted' as svg images to scale seamlessly with different screen resolutions. The profile picture and the 'artistic images' are png formatted to preserve the details of the image while keeping a reasonable file size.   
  
The `display: inline; vertical-align: middle;` solution has been selected over the 'flex-box' solution for the 'icon & text grid cells' even though the icon vertical alignment is slightly worse. The reason for this, is that the 'line wrap behavior' is way better for the 'vertical-align' solution when the (icon & text) line run out of horizontal space.
  
A 'three column menu' has been used for Tablet's & Small Desktop's in favor of a the 'two column menu' to reduce the header height as much as possible.

The site is published on Netlify (see hyperlink below):  
[https://chas-henrik-u02-designskiss.netlify.app/](https://chas-henrik-u02-designskiss.netlify.app/)
  
***
*Known problems:*
1. No effort has been spent on rendering the page properly when printing the page, and therefore the header is visible and the page breaks can occur anywhere on the page when it is printed.

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

JSON (JavaScript Object Notation) är ett lättvikts format för att lagra och överföra data. Det är enkelt att läsa och skriva för människor och lätt att tolka och generera för maskiner. Formatet representerar data i arrayer och/eller 'nyckel-värde-par' och är språkoberoende, vilket innebär att det kan användas i många programmeringsspråk.  
  
JSON används för att utbyta data mellan webbläsaren och servern i frontend. 
  
### Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

HTTP (HyperText Transfer Protocol) är ett applikationslager protokoll i Internet-protokoll svitmodellen för distribuerade, kollaborativa hypermedia informationssystem.
