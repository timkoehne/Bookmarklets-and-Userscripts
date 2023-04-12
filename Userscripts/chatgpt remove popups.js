// ==UserScript==
// @name        ChatGPT remove popups
// @namespace   Violentmonkey Scripts
// @match       https://chat.openai.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant       none
// @version     1.0
// @author      Tim Koehne
// @description 12.4.2023, 14:42:33
// ==/UserScript==

waitForKeyElements ('div.relative.transform.overflow-hidden.rounded-lg.bg-white.text-left', e => {e.remove()})
waitForKeyElements ('div.w-full.p-1.text-center', e => {e.remove()})
waitForKeyElements ('div.fixed.inset-0', e => {e.remove()})

