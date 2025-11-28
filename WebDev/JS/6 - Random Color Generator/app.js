let btn = document.querySelector("button")

btn.addEventListener("click",function() {
    let box = document.querySelector(".box")
    let randomColour = generateColour();
    let h1 = document.querySelector("h1");
    h1.innerText = randomColour;
    box.style.backgroundColor= randomColour;
} );



function generateColour() {
     
    let red = Math.floor(Math.random() *255)
    let green = Math.floor(Math.random() *255)
    let blue = Math.floor(Math.random() *255)
    
    let colour = `rgb(${red},${green},${blue})`
    
    return colour;
}