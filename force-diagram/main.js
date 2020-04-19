const canvas = document.getElementById("diagram");
// Set the dimensions of the canvas to be equal to the size of the window.
// So that the canvas will not appear blurry.
canvas.setAttribute("width", window.innerWidth.toString());
canvas.setAttribute("height", window.innerHeight.toString());

const context = canvas.getContext("2d");

const centre_x = window.innerWidth / 2;
const centre_y = window.innerHeight / 2;
const hypotenuse_length = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)) / 2;
const square_side_length = hypotenuse_length / 6;

function attempt_draw(){
    let degree_input = parseFloat(document.getElementById("deg").value);
    if (isNaN(degree_input)) {
        alert("Degree must be a number.");
        return;
    }
    if (degree_input < 0 || degree_input > 90) {
        alert("Degree must be between 0 and 90.");
        return;
    }
    let force_input = parseFloat(document.getElementById("f").value);
    if (isNaN(force_input)) {
        alert("Force must be a number.");
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    force_diagram(degree_input, force_input);
}

document.body.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        attempt_draw();
    }
});

function force_diagram(degree, force) {
    /// Calculate the cos and sin value to speed up the process.
    const radian = degree * Math.PI / 180;
    const cos = Math.cos(radian);
    const sin = Math.sin(radian);
    const inner_triangle_hypotenuse_length = square_side_length * cos / 2 + hypotenuse_length * sin * 0.5 - 30;

    draw_triangle(cos, sin);
    draw_square(cos, sin);
    draw_inner_triangle(cos, sin, inner_triangle_hypotenuse_length);

    label(cos, sin, degree, force, inner_triangle_hypotenuse_length);
}

function draw_triangle(cos, sin) {
    context.beginPath();
    context.moveTo(-hypotenuse_length * cos / 2 + centre_x,
        hypotenuse_length * sin / 2 + centre_y);
    context.lineTo(hypotenuse_length * cos / 2 + centre_x,
        hypotenuse_length * sin / 2 + centre_y);
    context.lineTo(hypotenuse_length * cos / 2 + centre_x,
        -hypotenuse_length * sin / 2 + centre_y);
    context.closePath();
    context.stroke();
}

function draw_square(cos, sin) {
    context.beginPath();
    context.moveTo(-square_side_length * cos / 2 + centre_x,
        square_side_length * sin / 2 + centre_y);
    context.lineTo(-square_side_length * cos / 2 - square_side_length * sin + centre_x,
        square_side_length * sin / 2 - square_side_length * cos + centre_y);
    context.lineTo(square_side_length * cos / 2 - square_side_length * sin + centre_x,
        -square_side_length * sin / 2 - square_side_length * cos + centre_y);
    context.lineTo(square_side_length * cos / 2 + centre_x,
        -square_side_length * sin / 2 + centre_y);
    context.closePath();
    context.stroke();
}

function draw_inner_triangle(cos, sin, inner_triangle_hypotenuse_length) {
    context.beginPath();
    context.moveTo(-square_side_length * sin / 2 + centre_x,
        -square_side_length * cos / 2 + centre_y);
    context.lineTo(-square_side_length * sin / 2 + centre_x,
        -square_side_length * cos / 2 + inner_triangle_hypotenuse_length + centre_y);
    context.lineTo(-square_side_length * sin / 2 + inner_triangle_hypotenuse_length * cos * sin + centre_x,
        -square_side_length * cos / 2 + inner_triangle_hypotenuse_length * cos * cos + centre_y);
    context.closePath();
    context.stroke();
}

function label(cos, sin, degree, force, inner_triangle_hypotenuse_length) {
    context.font = "30px \"Times New Roman\"";
    context.textBaseline = "middle";
    context.fillText(degree.toString() + "°", -hypotenuse_length * cos / 2 + 30 / sin + centre_x,
        hypotenuse_length * sin / 2 - 15 + centre_y);

    const force_label = force.toString() + "N";
    context.textBaseline = "bottom";
    context.fillText(force_label, -square_side_length * sin / 2 - context.measureText(force_label).width - 5 + centre_x,
        -square_side_length * cos / 2 + inner_triangle_hypotenuse_length + centre_y);

    const effective_force = Math.round(force * sin * 100) / 100;
    context.fillText(effective_force + "N", -square_side_length * sin / 2 + 30 / sin  + centre_x,
        -square_side_length * cos / 2 + inner_triangle_hypotenuse_length + centre_y);
}