const svg_util = {
	SVGNS: "http://www.w3.org/2000/svg",
	width: 0,
	height: 0,
	centre_x: 0,
	centre_y: 0,
	set_dimensions: function (width, height) {
		this.width = width;
		this.height = height;
		this.update_centre();
	},
	update_centre: function () {
		this.centre_x = this.width / 2;
		this.centre_y = this.height / 2;
	},
	x: function (x) {
		return this.centre_x + x;
	},
	y: function (y) {
		return this.centre_y - y;
	},

	create_svg_element: function (tag) {
		return document.createElementNS(this.SVGNS, tag);
	},
	create_group: function (name) {
		const element = this.create_svg_element("g");
		element.classList.add(name);
		return element;
	},
	create_line: function (x1, y1, x2, y2, width, colour) {
		const line = this.create_svg_element("line");

		line.setAttribute("x1", x1.toString());
		line.setAttribute("y1", y1.toString());
		line.setAttribute("x2", x2.toString());
		line.setAttribute("y2", y2.toString());

		line.setAttribute("stroke-width", width.toString());
	    if (colour) {
	        line.setAttribute("stroke", colour);
	    }

		return line;
	},
	create_circle: function (x, y, r, colour) {
		const circle = this.create_svg_element("circle");

		circle.setAttribute("cx", x.toString());
		circle.setAttribute("cy", y.toString());
		circle.setAttribute("r", r.toString());
		circle.setAttribute("fill", colour);

		return circle;
	},
	create_text: function (x, y, content) {
		const text = this.create_svg_element("text");

		text.setAttribute("x", x.toString());
		text.setAttribute("y", y.toString());
		text.setAttribute("dominant-baseline", "hanging");
		text.setAttribute("font-family", "Times New Roman");
		text.appendChild(document.createTextNode(content));

		return text;
	},
	create_rectangle: function (x, y, w, h, colour) {
		const rectangle = this.create_svg_element("rect");

		rectangle.setAttribute("x", x.toString());
		rectangle.setAttribute("y", y.toString());
		rectangle.setAttribute("width", w.toString());
		rectangle.setAttribute("height", h.toString());

		rectangle.setAttribute("fill", colour);

		return rectangle;
	}
};
