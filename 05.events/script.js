const _initTime = Date.now()
const parentSquare = document.querySelector(".displayedsquare-wrapper")
const ul = document.querySelector("ul")
const body = document.querySelector("body")

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
  let newDiv = document.createElement('div')
  newDiv.classList.add('displayedsquare')
  newDiv.classList.add(e.target.classList[1])
  parentSquare.append(newDiv)
  
  let newli = document.createElement("li") 
  newli.textContent = `[${getElapsedTime()}] Create a new ${elColor} square`
  ul.append(newli)
  
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}
