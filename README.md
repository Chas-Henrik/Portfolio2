# Personal portfolio page

This is a single-page, 'Portfolio Site' consisting of 5 sections:
- Home
- About
- Tech Stack
- Projects
- Contact

The design is a 'Mobile First' responsive design that also support Tablet's and Desktop's. Breakpoints have been set at 650px for Tablet's & Small Desktop's, and 1024px for Medium & Large Desktop's.  
  
Two additional content driven breakpoints have been set at 815px and 1350px:  
- The 815px breakpoint achieves a smooth transition from the 'mobile full screen project card' as the card turns directly into two cards when passing the breakpoint.  
- The 1350px breakpoint prevents navigation bar overflow and 'profile picture bouncing' when resizing the Web Browser on a Desktop.  
  
The site uses HTML5, CSS & JavaScript and the following Java Script 'user interaction' has been added:
1. Progress bar when user loads the page
2. Hamburger menu
3. A ResizeObserver has been added to the Header that updates the `scroll-padding-top` attribute when the header is resized, to achieve flawless scroll offset for the site internal menu links

The site supports ‘dark theme’ (configured through the operating system settings).  
  
All images, except the profile picture and the 'artistic images' (in the project section) are 'formatted' as svg images to scale seamlessly with different screen resolutions. The 'artistic images' are png formatted to preserve the details of the image while keeping a reasonable file size. The profile picture is jpg formatted as that's the only available format for that particular image.  
  
The `display: inline; vertical-align: middle;` solution has been selected over the 'flex-box' solution for the 'icon & text grid cells' even though the icon vertical alignment is slightly worse. The reason for this, is that the 'line wrap behavior' is way better for the 'vertical-align' solution when the (icon & text) line run out of horizontal space.
  
A 'three column menu' has been used for Tablet's & Small Desktop's in favor of a the 'two column menu' to reduce the header height as much as possible.

The site is published on Netlify (see hyperlink below):  
[https://chas-henrik-u02-designskiss.netlify.app/](https://chas-henrik-u02-designskiss.netlify.app/)
  
***
*Known problems:*
1. Contact gradient doesn't render properly when printed with Google Chrome.
2. Gradients don't render properly when printed with Safari on iPad and iPhone.

*Notes:*

***

## Frågor:

### Vad kan man utveckla m.h.a av Javascript inom frontend?


### Vad är JSON och hur används det inom frontend?



### Vad är HTTP och varför bör man som frontendutvecklare ha kunskap om det och dess protokoll?

HTTP (HyperText Transfer Protocol) är ett applikationslager protokoll i Internet-protokoll svitmodellen för distribuerade, kollaborativa hypermedia informationssystem.
