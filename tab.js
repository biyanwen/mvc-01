import "./tab.css"
import $ from "jquery"

let $leftTab = $(".leftTab");
let $rightTag = $(".rightTag");
$leftTab.click(() => {
    $leftTab.addClass("active")
    $rightTag.removeClass("active")
})
$rightTag.click(() => {
    $rightTag.addClass("active")
    $leftTab.removeClass("active")
})

$rightTag.ready(() => {
    $leftTab.addClass("active")
})