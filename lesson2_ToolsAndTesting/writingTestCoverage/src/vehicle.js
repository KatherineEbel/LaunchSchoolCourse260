//vehicle.js

let Vehicle = function(options) {
  this.make = options.make;
  this.model = options.model;
};

Vehicle.prototype = {
  toString() {
    return `${this.make} ${this.model}`;
  },
  honkHorn: "Beep beep!"
};


