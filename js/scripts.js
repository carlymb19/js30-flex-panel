// Carly Brown - 9/27
/* Adapted from https://courses.wesbos.com/account/access/64ea54d5119d0f571e0842f1
   Playing with CSS Variables and JS */
/* Unfamiliar method: .toggle()
   New element: transitioned */

// The main change I wanted to add was code that would make it so only one panel would be open at a time

const panels = document.querySelectorAll('.panel');
let activePanel = null; // I created a variable that would keep track of which panel is active and set it to null as no panel is active upon the initial open of the page

function toggleOpen() { 
    if (activePanel && activePanel !== this) { // I added an if statement that would look to see if the panel being clicked on is the same as panel currently marked as active
        activePanel.classList.remove('open'); // if the panels are not the same, the 'open' class is removed from the panel that is not currently active
    } // if the panels are the same or no panel is currently marked as active it jumps to the following code
        this.classList.toggle('open'); // Here, the newly clicked on panel is opened...
        activePanel = this; // ... and marked as the activel panel in the currentPanel variable
    }

function toggleActive(e) { 
    if (e.propertyName.includes('flex')) { 
        this.classList.toggle('open-active'); 
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); 
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); 

