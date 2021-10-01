function rdmcolor(){
  let r = function () {return Math.floor(Math.random()*256)}
  return "rgb(" + r() + "," + r() + "," + r()+ ")"
}

const learners = ["Antoine Ghysens", "Aurore Remy", "Baptiste Geron", "Batsheba Deepijan", "Bruno Presti", "Fabrice Castrogiovanni", "Fanny Fraiture", "Francis François", "Frederic Van Overmeire", "JC Molhant", "Maxim K.", "Michael Tesfay", "Philippe Meulemans", "Raoni Gillet", "René", "Rouslan Boyko", "Stephane Genet", "Thomas Backers", "Tiffany Dessouroux"];

/* learners = learners.sort((a, b) => 0.5 - Math.random()) */


let article = document.querySelector("article")

for (item of learners) {
  let section = document.createElement("section")
  article.appendChild(section)

  let paragraph = document.createElement("p")
  let newText = document.createTextNode(item)
  
  section.append(paragraph)
  paragraph.append(newText)
  
  let newColor = rdmcolor
  section.style.backgroundColor = newColor()
  
  /* if(rdmcolor(rgba[0]*0.299)+(rgba[1]*0.587)+(rgba[2]*0.114)>186) {
      return newText.style.color('black')
    } else {
      return newText.style.color('white')
    } */
  
}

