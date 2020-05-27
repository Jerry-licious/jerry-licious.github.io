function get_from_class(element, style_class) {
    return element.getElementsByClassName(style_class)[0];
}

function check_number(element) {
    let e = element;
    // Allow the function to be executed to check elements directly.
    if (this instanceof HTMLElement) {
        e = this;
    }
    if (isNaN(parseFloat(e.value))) {
        e.classList.add("invalid-input");
    } else {
        e.classList.remove("invalid-input");
    }
}

function remove_self() {
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

const period_template = document.getElementById("period-template");
const period_number_classes = ["marker-start-input", "marker-end-input", "marker-row-input"];

const event_template = document.getElementById("event-template");
const event_number_classes = ["marker-time-input", "marker-row-input"];

function add_period(title, start, end, row, colour) {
    const clone = period_template.content.cloneNode(true);
    const root = clone.firstElementChild;
    
    if (title) { get_from_class(root, "marker-title-input").value = title; }
    if (start != null) { get_from_class(root, "marker-start-input").value = start; }
    if (end != null) { get_from_class(root, "marker-end-input").value = end; }
    if (row != null) { get_from_class(root, "marker-row-input").value = row; }
    if (colour) { get_from_class(root, "marker-colour-input").value = colour; }
    
    for (const number_class of period_number_classes) {
        const number_input = get_from_class(root, number_class);
        number_input.addEventListener("input", check_number);
        check_number(number_input);
    }
    
    get_from_class(root, "marker-remove-button").addEventListener("click", remove_self);
    
    root.get_period = function() {
        const label_input = get_from_class(this, "marker-title-input");
        const start_input = get_from_class(this, "marker-start-input");
        const end_input = get_from_class(this, "marker-end-input");
        const row_input = get_from_class(this, "marker-row-input");
        const colour_input = get_from_class(this, "marker-colour-input");
        
        return new shikio.TimePeriod(
            parseFloat(start_input.value), parseFloat(end_input.value), label_input.value,
            shikio.Colour.parseColour(colour_input.value), true, parseFloat(row_input.value)
        );
    }
    
    document.getElementById("periods").insertBefore(clone, document.getElementById("add-period"));
}

function add_event(title, time, row, description, link){
    const clone = event_template.content.cloneNode(true);
    const root = clone.firstElementChild;
    
    if (title) { get_from_class(root, "marker-title-input").value = title; }
    if (time != null) { get_from_class(root, "marker-time-input").value = time; }
    if (row != null) { get_from_class(root, "marker-row-input").value = row; }
    if (description) { get_from_class(root, "marker-description-input").value = description; }
    if (link) { get_from_class(root, "marker-link-input").value = link; }
    
    for (const number_class of event_number_classes) {
        const number_input = get_from_class(root, number_class);
        number_input.addEventListener("input", check_number);
        check_number(number_input);
    }
    
    get_from_class(root, "marker-remove-button").addEventListener("click", remove_self);
    
    root.get_event = function() {
        const name_input = get_from_class(this, "marker-title-input");
        const time_input = get_from_class(this, "marker-time-input");
        const row_input = get_from_class(this, "marker-row-input");
        const link_input = get_from_class(this, "marker-link-input");
        const description_input = get_from_class(this, "marker-description-input");
        
        return new shikio.Event(
            parseFloat(time_input.value), parseFloat(row_input.value), name_input.value, description_input.value, link_input.value
        );
    }
    
    document.getElementById("events-html").insertBefore(clone, document.getElementById("add-event"));
}

document.getElementById("add-period").addEventListener("click", function(){ add_period(); });
document.getElementById("add-event").addEventListener("click", function(){ add_event(); });

function get_periods() {
    const period_cards = document.getElementsByClassName("period-card");
    let periods = [];
    for (const period_card of period_cards) {
        periods.push(period_card.get_period());
    }
    
    return periods;
}

function get_events() {
    const event_cards = document.getElementsByClassName("event-card");
    let events = [];
    for (const event of event_cards) {
        events.push(event.get_event());
    }
    
    return events;
}


const json_input = document.getElementById("json-input");
const title_input = document.getElementById("title-input");
const start_input = document.getElementById("start-input");
const end_input = document.getElementById("end-input");
const interval_input = document.getElementById("interval-input");
const width_input = document.getElementById("width-input");
const rows_input = document.getElementById("rows-input");

const json_output = document.getElementById("json-output");
const svg_output = document.getElementById("svg-output");

const number_inputs = [start_input, end_input, interval_input, width_input, rows_input];

for (number_input of number_inputs) {
    number_input.addEventListener("input", check_number);
    check_number(number_input);
}

let timeline = null;
const timeline_container = document.getElementById("timeline-container");
document.getElementById("generate-button").addEventListener("click", function () {
    if (document.getElementsByClassName("invalid-input").length > 0) {
        alert("Please enter valid numbers.");
        return;
    }
    
    const start = parseFloat(start_input.value);
    const end = parseFloat(end_input.value);
    const interval = parseFloat(interval_input.value);
    const width = parseFloat(width_input.value);
    const rows = parseFloat(rows_input.value);
    
    const title = title_input.value;
    
    timeline = new shikio.Timeline(title, start, end, interval, width, rows, get_periods(), get_events());
    
    if (timeline_container.firstElementChild) {
        timeline_container.removeChild(timeline_container.firstElementChild);
    }
    timeline_container.appendChild(timeline.render());
    
    json_output.value = JSON.stringify(timeline.toJSON());
    svg_output.value = timeline_container.firstElementChild.outerHTML;
});

document.getElementById("load-button").addEventListener("click", function () {
    let timeline = null;
    try {
        timeline = shikio.Timeline.fromJSON(JSON.parse(json_input.value));
    } catch(e) {
        alert("Invalid JSON.");
        return;
    }
    
    title_input.value = timeline.title;
    start_input.value = timeline.startTime;
    end_input.value = timeline.endTime;
    interval_input.value = timeline.interval;
    width_input.value = timeline.widthPerInterval;
    rows_input.value = timeline.rows;
    
    const period_cards = document.getElementsByClassName("period-card");
    while (period_cards.length > 0) {
        period_cards[0].parentNode.removeChild(period_cards[0]);
    }
    const event_cards = document.getElementsByClassName("event-card");
    while (event_cards.length > 0) {
        event_cards[0].parentNode.removeChild(event_cards[0]);
    }
    
    for (period of timeline.timePeriods) {
        console.log(period);
        add_period(period.label, period.start, period.end, period.row, period.colour);
    }
    for (event of timeline.events) {
        add_event(event.title, event.time, event.row, event.description, event.link);
    }
    
    const inputs = document.getElementsByClassName("text-input");
    for (input of inputs) {
        if (input.classList.contains("invalid-input")) {
            check_number(input);
        }
    }
});

let editor_on = false;
const editor = document.getElementById("editor");
const toggle_button = document.getElementById("toggle-button");
toggle_button.addEventListener("click", function () {
    editor_on = !editor_on;
    if (editor_on) {
        toggle_button.style.opacity = 1.0;
        toggle_button.firstElementChild.innerHTML = "Hide";
        editor.style.display = "block";
    } else {
        toggle_button.style.opacity = 0.5;
        toggle_button.firstElementChild.innerHTML = "Edit";
        editor.style.display = "none";
    }
});
