class LeaDocument {
    /**
    @param {String} name The name of the document.
    @param {String} description The description of the document.
    @param {Boolean} read Whether the document has been read.
    @param {String} openAction The href attached to the <a> element on the
        document that opens it.
    */
    constructor(name, description, read, openAction) {
        this.name = name;
        this.description = description;
        this.read = read;
        this.openAction = openAction;
    }

    // Loads relevant information of a document from its table row element.
    static fromElement(rowElement) {
        // Fetch the name from the a element responsible for the title of the document.
        const name = rowElement.querySelector(".lblTitreDocumentDansListe").innerText;
        // The description of the child element is in a text node that is the parent
        // of the name element.
        const description = rowElement.querySelector(".divDescriptionDocumentDansListe")
            // This means that innerText of the element will also include the
            // name of the document.
            // Luckily, the description text node is the last child of the
            // element.
            // However, this description node's content also includes many `\t`
            // characters at its start and end, which need to be get rid of with
            // `trim()`.
            .lastChild.textContent.trim();
        // The status of the document is indicated by a star icon that appears
        // if it has not been read. Check if that icon is present to see if the
        // document has been read.
        const read = rowElement.querySelector(".classeEtoileNouvDoc") == null;
        // The download url of the document is placed in an <a> element that is
        // in the element with the class .colVoirTelecharger.
        const downloadURL = rowElement.querySelector(".colVoirTelecharger a").href;

        return new LeaDocument(name, description, read, downloadURL);
    }

    /**
    Scrapes all elements from documents page of a given course.

    @param {Document} page The document page.

    @returns {LeaDocument[]}
    */
    static loadFromCourseDocumentPage(page) {
        // Documents are placed within either table row elements with either the
        // itemDataGrid or the .itemDataGridAltern class, which correspond to
        // even and odd-numbered documents.
        return Array.from(page.querySelectorAll(".itemDataGrid, .itemDataGridAltern"))
            .map((rowElement) => LeaDocument.fromElement(rowElement));
    }
}

/**
Fetches from an URL and returns a document parsed from the response HTML code.

@param {String} url
*/
function fetchDocumentFrom(url) {
    // Fetch from the url and get the text
    return fetch(url).then((response) => response.text())
        // Then parse the html from the text to return a document.
        .then((text) => new DOMParser().parseFromString(text, "text/html"));
}
