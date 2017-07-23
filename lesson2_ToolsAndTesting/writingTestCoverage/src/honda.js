//honda.js
let Honda = function(model) {
  if(this.verify(model)) {
    let options = {make: this.make, model: model };
    Vehicle.call(this, options)
    this.price = Honda.getPrice(this.model);
  } else {
    return undefined;
  }
};

Honda.getModels = function() {
  return ["Accord", "Civic", "Crosstour", "CR-V", "CR-Z", "Fit", "HR-V", "Insight", "Odyssey", "Pilot"];
}

Honda.priceList = function() {
  return [16500, 14500, 21000, 15800, 12000, 13100, 16000, 18100, 22500, 19300];
}

Honda.getPrice = function(model) {
  return this.priceList()[this.getModels().indexOf(model)];
};
Honda.prototype = Object.create(Vehicle.prototype);
Honda.prototype.constructor = Honda;
Honda.prototype.make = 'Honda';
Honda.prototype.verify = function(model) {
  if (Honda.getModels().includes(model)) { return true; }
  throw new Error(`Model ${model} does not exist`, 'honda.js', '11');
}

let civic = new Honda('Civic');

