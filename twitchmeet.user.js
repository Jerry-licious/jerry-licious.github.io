// ==UserScript==
// @name         Twitch Meet
// @downloadURL https://github.com/Jerry-Licious/jerry-licious.github.io/raw/master/twitchmeet.user.js
// @updateURL https://github.com/Jerry-Licious/jerry-licious.github.io/raw/master/twitchmeet.user.js
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Replaces references to certain Twitch emotes in Google Meet messages with their corresponding emotes.
// @author       Jerry
// @match        https://meet.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Create the style class for emote image elements.
    const styleElement = document.createElement("style");
    styleElement.type = "text/css";
    styleElement.innerHTML = `.emote-image {
        height: 20px;
        display: inline-block;
        top: 5px;
        position: relative;
    }`;
    document.head.appendChild(styleElement);

    const emoteIndex = new Map([
        // ["emote name", "emote image url"]

        // Twitch Emotes
        ["KappaPride", "https://static-cdn.jtvnw.net/emoticons/v1/55338/1.0"],
        ["Kappa", "https://static-cdn.jtvnw.net/emoticons/v2/25/default/dark/1.0"],
        ["4Head", "https://static-cdn.jtvnw.net/emoticons/v1/354/1.0"],
        ["BOP", "https://static-cdn.jtvnw.net/emoticons/v1/301428702/1.0"],
        ["BabyRage", "https://static-cdn.jtvnw.net/emoticons/v1/22639/1.0"],
        ["BibleThump", "https://static-cdn.jtvnw.net/emoticons/v1/86/1.0"],
        ["DarkMode", "https://static-cdn.jtvnw.net/emoticons/v1/461298/1.0"],
        ["HeyGuys", "https://static-cdn.jtvnw.net/emoticons/v1/30259/1.0"],
        ["Keepo", "https://static-cdn.jtvnw.net/emoticons/v1/1902/1.0"],
        ["KonCha", "https://static-cdn.jtvnw.net/emoticons/v1/160400/1.0"],
        ["LUL", "https://static-cdn.jtvnw.net/emoticons/v1/425618/1.0"],
        ["NotLikeThis", "https://static-cdn.jtvnw.net/emoticons/v1/58765/1.0"],
        ["ResidentSleeper", "https://static-cdn.jtvnw.net/emoticons/v1/245/1.0"],
        ["SMOrc", "https://static-cdn.jtvnw.net/emoticons/v1/52/1.0"],
        ["SSSsss", "https://static-cdn.jtvnw.net/emoticons/v1/46/1.0"],

        // BTTV emotes
        ["monkaS", "https://cdn.betterttv.net/emote/56e9f494fff3cc5c35e5287e/3x"],
        ["POGGERS", "https://cdn.betterttv.net/emote/58ae8407ff7b7276f8e594f2/3x"],
        ["PepeHands", "https://cdn.betterttv.net/emote/59f27b3f4ebd8047f54dee29/3x"],
        ["Pepega", "https://cdn.betterttv.net/emote/5aca62163e290877a25481ad/3x"],
        ["KEKW", "https://cdn.betterttv.net/emote/5e9c6c187e090362f8b0b9e8/3x"],
        ["5Head", "https://cdn.betterttv.net/emote/5d6096974932b21d9c332904/3x"],
        ["AYAYA", "https://cdn.betterttv.net/emote/58493695987aab42df852e0f/3x"],
        ["Sadge", "https://cdn.betterttv.net/emote/5e0fa9d40550d42106b8a489/3x"],
        ["peepoHappy", "https://cdn.betterttv.net/emote/5a16ee718c22a247ead62d4a/3x"],
        ["weSmart", "https://cdn.betterttv.net/emote/589771dc10c0975495c578d1/3x"],
        ["POGSLIDE", "https://cdn.betterttv.net/emote/5aea37908f767c42ce1e0293/3x"],

        // FFZ Emotes
        ["Pog", "https://cdn.frankerfacez.com/emoticon/210748/2"],
        ["REEeee", "https://cdn.frankerfacez.com/emoticon/116831/1"],
        ["Thonk", "https://cdn.frankerfacez.com/emoticon/191246/2"],
        ["Stonks", "https://cdn.frankerfacez.com/emoticon/428011/2"],
    ]);

    // Replace the Element.appendChild method with a new one that replaces
    // emotes in the element instances with images before adding them.
    const originalAppendChild = Element.prototype.appendChild;
    Element.prototype.appendChild = function(element) {
        // When an element is about to be added to its parent, if its class list
        // contains certain classes [that indicate that they hold chat
        // messages].
        if (// Accessing classList before checking if it is not null causes
            // buggy behaviours.
            element.classList) {
            // These style classes are used when a message is added to an
            // existing group of messages.
            if (element.classList.contains("oIy2qc") ||
                element.classList.contains("ZNiiKc") ||
                element.classList.contains("GDhqjd")) {
                var targetElement = element;
                // This style class is used when a new person/"group" of messages
                // is created.
                if (element.classList.contains("GDhqjd")) {
                    // When this is evoked, it contains the element with the
                    // message already, which also has a property called
                    // data-message-text, which has a copy of the message. When
                    // replacing the text, it also replaces the content of that
                    // property, which breaks the HTML.
                    // To prevent this from happening, the inner element will be
                    // extracted first.
                    targetElement = element.getElementsByClassName("oIy2qc")[0];
                    console.log(targetElement);
                }
                // Replace the occurance of emotes in it with images.
                emoteIndex.forEach(function(url, name) {
                    targetElement.innerHTML =
                        targetElement.innerHTML.replaceAll(name,
                        `<img src="${url}" class="emote-image"/>`);
                });
            }
        }
        return originalAppendChild.call(this, element);
    }
})();
