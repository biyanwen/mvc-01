import "./move.css"
import $ from "jquery"
let $moveBox = $(".move > .box");

$moveBox.click(() => {
    $moveBox.toggleClass("active")
})