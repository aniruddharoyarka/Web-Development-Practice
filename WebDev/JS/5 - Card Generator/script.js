function generateCard(name, cName, views, date, thumbnail) {
    let viewStr;
    if(views<1000) {
        viewStr = views + " views"
    }

    else if(views<1000000) {
        viewStr = views/1000 + "K views"
    }

    else {
        viewStr = views/1000000 + "M views"
    }
    
    let html = `<div class="card">
         <div class="img">
            <img src="${thumbnail}" alt="">
        </div>
        <div class="text">
            <h3>${name}</h3>
            <p>${cName} . ${viewStr} . ${date} months ago</p>
        </div>
    </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

generateCard("You're wasting money on Tech.","MrWhosTheBoss",520000,6,"https://i.ytimg.com/vi/De7s-IB_DAw/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAPXnsA8WLBuh8uJ5ZDzhFWgNcpwg")

generateCard("I Investigated the Most Expensive Phone Brand","MrWhosTheBoss",520000,2,"https://i.ytimg.com/vi/oMmpC1tef4c/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCvySn_heyB8vZ695k_cl00fXQVxA")