// ==UserScript==
// @name         StopYoutubeFromFastforwardingWhenYouJustWantToPauseAtTheRightTime.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  make it so hold clicking doesn't increase playback speed
// @author       devNegative-asm
// @include      /^https?:\/\/(www\.)?youtu(\.be|be\.com).*$/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(async function() {
    await new Promise(r => setTimeout(r, 1000));
    const fuck_this_element = document.getElementById("movie_player").querySelector(".html5-video-container");
    const cloned = fuck_this_element.cloneNode(false);
    for(const child of fuck_this_element.childNodes) {
        cloned.appendChild(child);
    }
    fuck_this_element.replaceWith(cloned);
})();
