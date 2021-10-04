const ol = document.querySelector("ol")
const lastli = document.querySelector("ol").lastElementChild
const firstli = document.querySelector("ol").firstElementChild
ol.insertBefore(lastli, firstli)

const h2 = document.querySelectorAll("h2")
const secondSec = h2[1].parentNode
const thirdSec = h2[2].parentNode
secondSec.insertBefore(h2[2], h2[1])
thirdSec.insertBefore(h2[1], thirdSec.firstChild)

let sections = document.querySelectorAll('section');
sections[sections.length-1].remove();