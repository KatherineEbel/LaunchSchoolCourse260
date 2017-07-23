describe('Honda', function() {
  it('inherits the Vehicle prototype', function() {
    let car = new Honda('Civic');
    let expected = 'Honda Civic';
    expect(car.toString()).toBe(expected);
  });

  it('sets the make and model property when a valid model is passed in', function() {
    let car = new Honda('Civic');
    expect(car.make).toEqual('Honda');
    expect(car.model).toEqual('Civic');
  });

  it('throws an error if an invalid model is passed in', function() {
    let createInvalidModel = function() {
      return new Honda('Tahoe');
    };
    expect(createInvalidModel).toThrowError(/Tahoe/);
  });

  it('returns a list of valid models', function() {
    let models = Honda.getModels();
    expect(models.length).toBeDefined()
    expect(models).toContain('Crosstour');
  });

  it('calls getPrice when a new car is created', function() {
    spyOn(Honda, 'getPrice');
    let car = new Honda('Civic');
    expect(Honda.getPrice).toHaveBeenCalled();
    expect(Honda.getPrice).toHaveBeenCalledWith('Civic');
  });

  it('returns a price for the passed in model', function() {
    expect(Honda.getPrice('Civic')).toBeGreaterThan(0);
  });

  it('returns a price less than 15000 when a Civic is created', function() {
    let civic = new Honda('Civic');
    expect(civic.price).toBeLessThan(15000);
  });

  it('returns a price greater than 10000 when a CR-Z is created', function() {
    let crz = new Honda('CR-Z');
    expect(crz.price).toBeGreaterThan(10000);
  });


});
