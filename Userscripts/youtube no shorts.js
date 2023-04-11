// ==UserScript==
// @name        Youtube No Shorts
// @namespace   Violentmonkey Scripts
// @match       *://*.youtube.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       none
// @version     1.0
// @author      Tim Koehne
// @description 12/06/2022, 10:58:00
// ==/UserScript==



//remove shorts tab in sidebar
waitForKeyElements ('[title="Shorts"]', e => e.remove())

//remove shorts from subscriptions
waitForKeyElements ('[href^="/shorts/"]', e => {
  if(e[0].id === "thumbnail"){
    e[0].parentElement.parentElement.parentElement.remove()
  }
})

//remove recommended shorts beside the video
waitForKeyElements ('span#title.style-scope.ytd-reel-shelf-renderer', e => {
    console.log(e[0].parentElement.parentElement.parentElement.remove())
})
