document.title = "Modifying the DOM"

const element = document.body.children

for (item of element) {
    console.log(item)
}

document.body.style.backgroundColor = backcolor()

function backcolor(){
    let r = function () {return Math.floor(Math.random()*256)}
    return "rgb(" + r() + "," + r() + "," + r()+ ")"
}
console.log(backcolor())
