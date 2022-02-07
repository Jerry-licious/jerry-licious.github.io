// ==UserScript==
// @name         WeBWorK Fast Preview
// @downloadURL  https://github.com/Jerry-Licious/jerry-licious.github.io/raw/master/scripts/fast_preview.user.js
// @updateURL    https://github.com/Jerry-Licious/jerry-licious.github.io/raw/master/scripts/fast_preview.user.js
// @version      0.2
// @description  Adds a 'fast preview' button to WeBWorK that allows you to preview your submissions without having to reload the page.
// @author       Jerry Li
// @match        *webwork2*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.css">
    // <script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.js"></script>
    function loadKaTeX() {
        const katexStylesheet = document.createElement("link");
        katexStylesheet.rel = "stylesheet";
        katexStylesheet.href = "https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.css";
        document.head.appendChild(katexStylesheet);

        const katexScript = document.createElement("script");
        katexScript.src = "https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.js";
        document.head.appendChild(katexScript);
    }

    // Due to server side rendering, the problem section of webwork is not organised
    // in a hierarchy. Which means that all the elements belong to the same parent.
    // This makes it troublesome when trying to display the preview for math
    // expressions.
    // To provide a constant place for them, the problem section has to be
    // reorganised such that there is an element for rendering previews.
    function createKatexPreviewElements() {
        // Fetch all the input fields for entering text.
        document.querySelectorAll(".problem .codeshard").forEach(function(input) {
            const parent = input.parentElement;

            // Create a new div element that includes the input element and
            // the preview.
            const container = document.createElement("div");

            // Place the container in front of the input element.
            parent.insertBefore(container, input);
            // Remove the input element from its original parent.
            parent.removeChild(input);

            // Put the katex element and the input element inside the container.
            const katexElement = document.createElement("span");
            katexElement.classList.add("katex-preview");
            container.appendChild(katexElement);
            // Add a line break between the preview and the input.
            container.appendChild(document.createElement("br"));

            container.appendChild(input);
        });
    }

    // Sends an HTTPRequest to submit the form data without reloading the page.
    function fetchPreview() {
        return new Promise(function (resolve, reject) {
            const request = new XMLHttpRequest();

            // Extract the form form the document.
            const formElement = document.querySelector("#problemMainForm");
            // Extract the URL to submit the POST request.
            const submitURL = formElement.action;
            // Extract the form data from the element.
            const formData = new FormData(formElement);

            // Additionally
            // The preview button isn't pressed. Add an extra line to indicate that
            // this is not a reload, but rather a preview request.
            formData.set("previewAnswers", "Preview Answers");
            // WeBWorK defaults to image previews. Add an extra line to make sure that
            // we always get MathJax code.
            formData.set("displayMode", "MathJax");

            // On successful submission
            request.addEventListener("load", function(event) {
                // The response text will be the HTML of the response page.
                const html = event.target.responseText;

                // Use DOMParser to load the HTML.
                const responseDocument = new DOMParser().parseFromString(html, "text/html");

                // Fetch the preview Tex code from the scripts, or the error
                // code from the messages.
                resolve(Array.from(responseDocument
                    // Grab the row elements from the table, excluding the first
                    // because WeBWorK refuses to use <th> for headers.
                    .querySelectorAll(".attemptResults tr:not(:first-child)"))
                    // Then extract their works.
                    .map(function (row) {
                        const scriptElement = row.querySelector("script");
                        // If the script exists, extract its content.
                        if (scriptElement) {
                            return {
                                success: true,
                                content: scriptElement.innerHTML
                            };
                        } else {
                            // Otherwise fetch the error code from the last cell.
                            return {
                                success: false,
                                content: row.lastElementChild.innerText
                            }
                        }
                    }))
            });

            // On error
            request.addEventListener("error", function(event) {
                reject("Failed to submit the form.")
            })

            request.open("POST", submitURL);
            request.send(formData);
        });
    }

    // Render a list of tex code in the katex-preview elements.
    function renderKaTeXPreview(texCode) {
        // Fetch all the preview elements.
        document.querySelectorAll(".katex-preview")
            .forEach(function (element, i) {
                if (texCode[i].success) {
                    katex.render(texCode[i].content, element, {
                        throwOnError: false
                    });
                } else {
                    // First remove all children of the node.
                    while (element.firstChild) {
                        element.removeChild(element.lastChild);
                    }

                    // Then add the error code.
                    element.append(document.createTextNode(texCode[i].content));
                }
            });
    }

    // Add a fast preview button to activate the script to the form.
    function createFastPreviewButton() {
        // Fetch the preview button.
        const previewButton = document.querySelector("#previewAnswers_id");

        // Create a new button that activates the fast preview function.
        const fastPreviewButton = document.createElement("input");
        fastPreviewButton.type = "button";
        fastPreviewButton.classList.add("btn");
        fastPreviewButton.classList.add("btn-primary");
        fastPreviewButton.value = "Fast Preview";
        // Triggers preview on click.
        fastPreviewButton.addEventListener("click", function() {
            alertTips();

            // Disable the button while processing the request.
            fastPreviewButton.disabled = true;
            fetchPreview().then(function(math) {
                renderKaTeXPreview(math);
                // Re-enable it after the task is done.
                fastPreviewButton.disabled = false;
            });
        });

        previewButton.parentElement.insertBefore(fastPreviewButton, previewButton);
    }

    // A tip displayed only once that sends a warning to the user.
    function alertTips() {
        // If the cookie hasn't been set.
        if (!document.cookie.split("; ").find(row => row.startsWith("fastPreviewWarningSent"))) {
            // Create the persistent cookie.
            document.cookie = "fastPreviewWarningSent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None";
            // And then send the alert.
            alert("Using the fast preview function does NOT make WeBWorK save your work. Remember to click the regular preview button or the submit button to make sure that your solutions are remembered.");
        }
    }

    (function init() {
        loadKaTeX();
        createKatexPreviewElements();
        createFastPreviewButton();

        // Preview saved work.
        fetchPreview().then(renderKaTeXPreview);
    })();
})();
