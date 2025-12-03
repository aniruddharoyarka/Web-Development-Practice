import { generate, count } from "random-words";

import express from 'express'

let app = express();

let port = 3000;

app.listen(port, ()=> {
    console.log("App Listening: " + port)
} )

app.get(res)

console.log(generate());

