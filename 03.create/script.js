const learners = ["Antoine Ghysens", "Aurore Remy", "Baptiste Geron", "Batsheba Deepijan", "Bruno Presti", "Fabrice Castrogiovanni",
"Fanny Fraiture", "Francis François", "Frederic Van Overmeire", "JC Molhant", "Maxim K.", "Michael Tesfay", 
"Philippe Meulemans", "Raoni Gillet", "René", "Rouslan Boyko", "Stephane Genet", "Thomas Backers", "Tiffany Dessouroux"];


/**
 * Shuffles an given array
 * @param {*} array 
 */
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffleArray(learners)


/**
 * Randomise a given number
 * @param {*} max 
 * @returns 
 */
const rand = (max) => {
  return Math.floor(Math.random() * max +1);
}

/**
 * Give random colour and set a Brightness 
 * @returns color and Brightness
 */
const colorPicker = () => {
  let red = rand(255);
  let green = rand(255);
  let blue = rand(255);
  let brightness  =  Math.sqrt((.299 * red * red) + (.587 * green * green) + (.114 * blue * blue));
  return {"color": `rgb(${red}, ${green}, ${blue})`, "brightness": brightness}
}

let article = document.querySelector("article")

for (item of learners) {
  let section = document.createElement("section")
  article.appendChild(section)
  
  let paragraph = document.createElement("p")
  let newText = document.createTextNode(item)
  
  section.append(paragraph)
  paragraph.append(newText)
  
  let newColor = colorPicker()
  section.style.backgroundColor = newColor.color
  section.style.color = newColor.brightness > 140 ? "black" : "white";

}




