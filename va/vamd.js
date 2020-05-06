const config = {
    cross_width: 3,
    stroke_width: 2,
    vec_mark_radius: 6,
    vec_u_colour: "#ff4747",
    vec_v_colour: "#47f4ff",
    resultant_colour: "#c668ff"
}

const image = document.getElementById("image");

image.setAttribute("width", window.innerWidth);
image.setAttribute("height", window.innerHeight);

svg_util.set_dimensions(window.innerWidth, window.innerHeight);

let line_group;
let dot_group;
let label_group;
let cross_group;

function clear_group(g){
    while (g.firstChild) {
        g.removeChild(g.firstChild);
    }
}
function clear_image() {
    if (line_group) clear_group(line_group);
    if (dot_group) clear_group(dot_group);
    if (label_group) clear_group(label_group);
}
function make_groups(){
    if (!line_group) {
        line_group = svg_util.create_group("line");
        image.appendChild(line_group);
    }
    if (!dot_group) {
        dot_group = svg_util.create_group("dot");
        image.appendChild(dot_group);
    }
    if (!cross_group) {
        cross_group = svg_util.create_group("cross");

        cross_group.appendChild(svg_util.create_line(svg_util.x(0), 0, svg_util.x(0), svg_util.height, config.cross_width, "black"));
        cross_group.appendChild(svg_util.create_line(0, svg_util.y(0), svg_util.width, svg_util.y(0), config.cross_width, "black"));

        image.appendChild(cross_group);
    }
    if (!label_group) {
        label_group = svg_util.create_group("labels");
        image.appendChild(label_group);
    }
}

function draw_vec(vec, colour, origin) {
    make_groups();
    const o = origin || new Vec(0, 0);
    line_group.appendChild(svg_util.create_line(
        svg_util.x(o.x), svg_util.y(o.y),
        svg_util.x(o.x + vec.x), svg_util.y(o.y + vec.y), config.stroke_width, colour
    ));
    dot_group.appendChild(svg_util.create_circle(
        svg_util.x(o.x + vec.x), svg_util.y(o.y + vec.y), config.vec_mark_radius, colour
    ));
}

function label(x, y, content) {
    const group = svg_util.create_group("label");
    const text = svg_util.create_text(x, y, content);
    text.setAttribute("font-size", "20");
    group.appendChild(text);
    label_group.appendChild(group);
    group.insertBefore(
        svg_util.create_rectangle(x, y, text.getComputedTextLength(), 20, "white"), text);
}

function round(x){
    return Math.round(x * 100) / 100;
}

function draw_vector_addition(u, v) {
    clear_image();

    const largest_possible_magnitude = u.magnitude() + v.magnitude();
    const shortest_dimension = Math.min(svg_util.centre_x, svg_util.centre_y);
    const scale = shortest_dimension / largest_possible_magnitude;

    // Scale vectors according to image size.
    const u_multiplied = u.multiply(scale);
    const v_multiplied = v.multiply(scale);
    const resultant = u_multiplied.add(v_multiplied);

    draw_vec(u_multiplied, config.vec_u_colour);
    draw_vec(v_multiplied, config.vec_v_colour, u.multiply(scale));
    draw_vec(resultant, config.resultant_colour);

    let rad_c = Math.PI - u.orientation() + v.orientation();
    // Cast it to the inner angle if the calculated angle is the outer angle.
    if (rad_c > Math.PI) {
        rad_c = 2 * Math.PI - rad_c;
    }
    label(svg_util.x(u_multiplied.x + config.vec_mark_radius), svg_util.y(u_multiplied.y),
        round(Math.abs(rad_c * 180 / Math.PI)).toString() + "°");

    const u_magnitude = u.magnitude();
    const v_magnitude = v.magnitude();
    const resultant_magnitude = Math.sqrt(Math.pow(u_magnitude, 2) + Math.pow(v_magnitude, 2)
        - 2 * u_magnitude * v_magnitude * Math.cos(rad_c));
    const resultant_label_position = resultant.multiply(0.5);

    label(svg_util.x(resultant_label_position.x), svg_util.y(resultant_label_position.y), round(resultant_magnitude).toString());

    let rad_b = Math.asin(v_magnitude * Math.sin(rad_c) / resultant_magnitude);
    // Use cos law to check if the angle is acute
    if (round(Math.sqrt(Math.pow(resultant_magnitude, 2) + Math.pow(u_magnitude, 2)
        - 2 * resultant_magnitude * u_magnitude * Math.cos(rad_b))) !== round(v_magnitude)) {
        rad_b = Math.PI - rad_b;
    }
    if (rad_b > Math.PI) {
        rad_b = 2 * Math.PI - rad_b;
    }
    label(svg_util.x(10), svg_util.y(10), round(Math.abs(rad_b * 180 / Math.PI)).toString() + "°");
}

let magnitude_orientation = false;
function attempt_draw() {
    const ux = parseFloat(document.getElementById("ux").value);
    const uy = parseFloat(document.getElementById("uy").value);
    const vx = parseFloat(document.getElementById("vx").value);
    const vy = parseFloat(document.getElementById("vy").value);
    if (isNaN(ux) || isNaN(uy) || isNaN(vx) || isNaN(vy)) {
        alert("Please input valid numbers.");
        return;
    }

    if (magnitude_orientation) {
        draw_vector_addition(
            Vec.from_magnitude_and_orientation(ux, uy * Math.PI / 180),
            Vec.from_magnitude_and_orientation(vx, vy * Math.PI / 180));
    } else {
        draw_vector_addition(new Vec(ux, uy), new Vec(vx, vy));
    }
}

function swap() {
    magnitude_orientation = !magnitude_orientation;
    if (magnitude_orientation) {
        document.getElementById("ux").setAttribute("placeholder", "magnitude of u");
        document.getElementById("uy").setAttribute("placeholder", "orientation of u");
        document.getElementById("vx").setAttribute("placeholder", "magnitude of v");
        document.getElementById("vy").setAttribute("placeholder", "orientation of v");
    } else {
        document.getElementById("ux").setAttribute("placeholder", "x of u");
        document.getElementById("uy").setAttribute("placeholder", "y of u");
        document.getElementById("vx").setAttribute("placeholder", "x of v");
        document.getElementById("vy").setAttribute("placeholder", "y of v");
    }
}
