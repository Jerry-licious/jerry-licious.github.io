function addPeriod() {
    let tr = document.createElement("tr");

    for (let i = 0; i < 5; i++) {
        let td = document.createElement("td");
        let input = document.createElement("input");
        input.classList.add("text-input");
        if (i < 3) {
            input.type = "number";
        }
        td.appendChild(input);
        tr.appendChild(td);
    }

    let removeButton = document.createElement("td");
    removeButton.appendChild(document.createTextNode("-"));
    removeButton.addEventListener("click", function () {
        tr.parentElement.removeChild(tr);
    });

    tr.appendChild(removeButton);

    tr.getPeriod = function(){
        let inputs = tr.getElementsByClassName("text-input");

        let start = parseFloat(inputs.item(0).value);
        let end = parseFloat(inputs.item(1).value);
        let row = parseInt(inputs.item(2).value);
        let colour = inputs.item(3).value;
        let label = inputs.item(4).value;

        if (isNaN(start)) {
            alert("Start must be a number.");
            throw Error("Start must be a number.");
        }
        if (isNaN(end)) {
            alert("End must be a number.");
            throw Error("End must be a number.");
        }
        if (isNaN(row)) {
            alert("Row must be a number.");
            throw Error("Row must be a number.");
        }

        return new shikio.TimePeriod(start, end, label, shikio.Colour.parseColour(colour), true, row);
    };

    document.getElementById("periodsList").appendChild(tr);
}

function addEvent() {
    let tr = document.createElement("tr");

    for (let i = 0; i < 5; i++) {
        let td = document.createElement("td");
        let input = document.createElement("input");
        input.classList.add("text-input");
        if (i < 2) {
            input.type = "number";
        }
        td.appendChild(input);
        tr.appendChild(td);
    }

    let removeButton = document.createElement("td");
    removeButton.appendChild(document.createTextNode("-"));
    removeButton.addEventListener("click", function () {
        tr.parentElement.removeChild(tr);
    });

    tr.appendChild(removeButton);

    tr.getEvent = function(){
        let inputs = tr.getElementsByClassName("text-input");

        let time = parseFloat(inputs.item(0).value);
        let row = parseFloat(inputs.item(1).value);
        let title = inputs.item(2).value;
        let link = inputs.item(3).value;
        let description = inputs.item(4).value;

        if (isNaN(time)) {
            alert("Time must be a number.");
            throw Error("Time must be a number.");
        }
        if (isNaN(row)) {
            alert("Row must be a number.");
            throw Error("Row must be a number.");
        }

        return new shikio.Event(time, row, title, description, link);
    };

    document.getElementById("eventsList").appendChild(tr);
}

function getTimePeriods(){
    let nodes = document.getElementById("periodsList").childNodes;

    let periods = [];
    for (let i = 1; i < nodes.length; i++) {
        if (nodes.item(i).getPeriod) {
            periods.push(nodes.item(i).getPeriod());
        }
    }

    return periods;
}

function getEvents() {
    let nodes = document.getElementById("eventsList").childNodes;

    let events = [];
    for (let i = 1; i < nodes.length; i++) {
        if (nodes.item(i).getEvent) {
            events.push(nodes.item(i).getEvent());
        }
    }

    return events;
}

let timeline = null;
function generateTimeline() {
    let inputs = document.getElementById("timeline").getElementsByClassName("text-input");

    let start = parseFloat(inputs.item(0).value);
    let end = parseFloat(inputs.item(1).value);
    let interval = parseFloat(inputs.item(2).value);
    let widthPerMark = parseFloat(inputs.item(3).value);
    let rows = parseFloat(inputs.item(4).value);
    let title = inputs.item(5).value;

    if (isNaN(start)) {
        alert("Start must be a number.");
        throw Error("Start must be a number.");
    }
    if (isNaN(end)) {
        alert("End must be a number.");
        throw Error("End must be a number.");
    }
    if (isNaN(interval)) {
        alert("Interval must be a number.");
        throw Error("Interval must be a number.");
    }
    if (isNaN(widthPerMark)) {
        alert("Width per mark must be a number.");
        throw Error("Width per mark must be a number.");
    }
    if (isNaN(rows)) {
        alert("Rows per mark must be a number.");
        throw Error("Rows per mark must be a number.");
    }

    timeline = new shikio.Timeline(title, start, end, interval, widthPerMark, rows, getTimePeriods(), getEvents());

    if (document.getElementById("timelineDisplay").firstElementChild) {
        document.getElementById("timelineDisplay").removeChild(document.getElementById("timelineDisplay").firstElementChild);
    }
    document.getElementById("timelineDisplay").appendChild(timeline.render());

    document.getElementById("link").value =
        encodeURI("https://kaminingyou.github.io/shikio.html?" + JSON.stringify(timeline.toJSON()));
    document.getElementById("html").value = document.getElementById("timelineDisplay").firstElementChild.outerHTML;
}