import "./conpute.css"
import $ from "jquery"

let $computeResult = $('.compute > .result');
let resultText = window.localStorage.getItem("compute") || $computeResult.text();
$computeResult.text(resultText)

let map = new Map()
map.set("add", (number) => {
    return number - 0 + 1
})
map.set("subtract", (number) => {
    return number - 1
})
map.set("multiplication", (number) => {
    return number * 2
})
map.set("division", (number) => {
    return number / 2
})
$(".compute").click((e) => {
    if (map.get(e.target.className) !== undefined) {
        resultText = map.get(e.target.className).call(null, resultText)
    }
    $computeResult.text(resultText)
    window.localStorage.setItem("compute", resultText)
})
