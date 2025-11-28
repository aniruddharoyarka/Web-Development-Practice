function multipleGreet(func, count) {
    for (let i = 0; i < count; i++) {
        func()
    }
}


let sayHello = function greet() {
    console.log("Hello")
}

multipleGreet(sayHello, 2);