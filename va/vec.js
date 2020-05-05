function Vec(x, y) {
    this.x = x;
    this.y = y;
}

Vec.from_magnitude_and_orientation = function (magnitude, orientation) {
    return new Vec(magnitude * Math.cos(orientation), magnitude * Math.sin(orientation));
}

Vec.prototype.magnitude = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
}

Vec.prototype.orientation = function() {
    if (this.y < 0 || this.x < 0) {
        if (this.y < 0 && this.x >= 0) {
            return Math.atan(this.y / this.x) + 2 * Math.PI
        }
        return Math.atan(this.y / this.x) + Math.PI;
    } else {
        return Math.atan(this.y / this.x);
    }
}

Vec.prototype.orientation_degree = function() {
    return this.orientation() * 180 / Math.PI;
}

Vec.prototype.multiply = function(scale) {
    return new Vec(this.x * scale, this.y * scale);
}

Vec.prototype.add = function(other) {
    return new Vec(this.x + other.x, this.y + other.y);
}
