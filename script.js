const box = document.getElementById("box")
const nadpis = document.getElementById("nadpis")
var color;
var textColor;
function changeColor(){
    if(color === "aqua"){
        box.style.backgroundColor = "black"
        box.style.width = "500px"
        box.style.height = "500px"
        color = box.style.backgroundColor
    }else{
        box.style.backgroundColor = "aqua"
        box.style.width = "400px"
        box.style.height = "400px"
        color = box.style.backgroundColor
    }
}
function changeText(){
    if(textColor === "aqua"){
        nadpis.style.color = "black"
        textColor = nadpis.style.color
    }else{
        nadpis.style.color = "aqua"
        textColor = nadpis.style.color
    }
}

