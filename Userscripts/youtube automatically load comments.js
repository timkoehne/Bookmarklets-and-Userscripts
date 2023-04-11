// ==UserScript==
// @name        youtube Automatically load comments
// @namespace   Violentmonkey Scripts
// @match       *://*.youtube.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       none
// @version     1.0
// @author      Tim Koehne
// @description 5.4.2023, 21:53:00
// ==/UserScript==

//search for like button to identify when a video is on the page
//comment elements cant be used since its also loaded on subscription page
waitForKeyElements ('div#segmented-like-button', e => {
    window.scrollTo(0, 700);
    setTimeout(function(){window.scrollTo(0, 0);}, 0);
  })
  