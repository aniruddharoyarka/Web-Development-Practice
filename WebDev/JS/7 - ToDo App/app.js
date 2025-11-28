let addBtn = document.querySelector(".add-items button");

addBtn.addEventListener("click",addTask)

function addTask() {
    let addText = document.querySelector(".add-items input");
    generateTask(addText.value);
    addText.value="";
}

function generateTask(task) {
    let cont = document.querySelector(".container");
    cont.innerHTML = cont.innerHTML + `<div class="card">
            <p>${task}</p>
            <button>
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>`
}

let card = document.querySelector(".container");
card.addEventListener("click", function(event) {
    
    if(event.target.nodeName == "I") {
        let listElement = event.target.parentElement.parentElement
        listElement.remove();
        console.log("deleted")
    }
})