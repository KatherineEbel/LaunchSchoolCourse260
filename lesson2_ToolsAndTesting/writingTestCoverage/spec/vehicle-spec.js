describe('Vehicle', function() {
  beforeEach(function() {
    this.options = {make: 'Jeep', model: 'Wrangler'};
    this.vehicle = new Vehicle(this.options);
  });

  it('sets the make and model properties when an object is passed in', function() {
    expect(this.vehicle.make).toBe(this.options.make);
    expect(this.vehicle.model).toBe(this.options.model);
  });

  it('returns a concatenated string with make and model', function() {
    let newMake = 'Ford';
    let newModel = 'F-250';
    expect(this.vehicle.toString()).toBe(`${this.options.make} ${this.options.model}`);
    this.vehicle.make = newMake;
    this.vehicle.model = newModel;
    expect(this.vehicle.toString()).toBe(`${newMake} ${newModel}`);
  });

  it('returns a message when the horn is honked', function() {
    expect(this.vehicle.honkHorn).toMatch('Beep beep!');
  });
});
