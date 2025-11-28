let btn = document.querySelector("button");

function sayHello() {
  let name = prompt("What is your name");
  alert("Hello, " + name);
}

btn.onclick = sayHello;
