// add and remove
const tombol = document.querySelector('.button');
tombol.addEventListener('click', function(){
	const ul = document.querySelector('ul');
	const libaru = document.createElement('li');
	const isian = document.querySelector('.isian').value;
	const text = document.createTextNode(isian);
	libaru.appendChild(text);
	ul.appendChild(libaru);

	const nodeList = document.getElementsByTagName('LI');
		for (let i = 0; i < nodeList.length; i++) {
			const span = document.createElement("SPAN");
			const tulisan = document.createTextNode("\u00D7");
			span.appendChild(tulisan);
			span.className = "close";
			nodeList[i].appendChild(span);
		}
	
	const tutup = document.querySelectorAll(".close");
	tutup.forEach(function(el){
		el.addEventListener('click', function(e){
			e.target.parentElement.style.display = "none";
			e.preventDefault();
			e.stopPropagation();
		});
	});
});



// const tutup = document.querySelectorAll(".close");
// 	for (let a = 0; a < tutup.length; a++){
// 		tutup[i].addEventListener('click', function(b){
// 			b[i].parentElement.style.display = "none";
// 		});
// 	}


// checked list
const data = document.querySelector('ul');
data.addEventListener('click', function(ev){
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}, false);


// typing effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Create.", "Mark.", "Schedule.", "Checklist."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// remove to do list
// const nodeList = document.getElementsByTagName('LI');
// for (let i = 0; i < nodeList.length; i++) {
// 	const span = document.createElement("SPAN");
// 	const tulisan = document.createTextNode("\u00D7");
// 	span.className = "close";
// 	span.appendChild(tulisan);
// 	nodeList[i].appendChild(span);
// }
	


// click on close button
// const tutup = document.querySelectorAll(".close");

// tutup.addEventListener('click', function(){
// 	for (let a = 0; a < tutup.length; a++) {
// 		const div = this.parentElement;
// 		div.style.display = "none";
// 	}
// });
// for (let a = 0; a < tutup.length; a++) {
// 	tutup[i].addEventListener('click', function(){
// 		const div = this.parentElement;
// 		div.style.display = "none";
// 	});
// }




