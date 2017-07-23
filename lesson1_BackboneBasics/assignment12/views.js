// create views the same way we create Models and Collections
let FruitList = Backbone.View.extend({
  pass data into constructor
  initialize(fruits) {
    this.collection = fruits;
  }
  // we can also pass in object with model and collection properties and Backbone
  // assigns the properties directly on view without needing initialize method.
});

// Backbone creates a div element and assigns it an el property as well as jQuery wrapped $el
let fruitView = new FruitList(fruits);

// alternatively
let fruitView = new FruitList({collection: fruits});
fruitView.$el.appendTo(document.body);

// Additional attributes added: el, id, className, tagName, attributes, events.
//
// We need to tell the view what template to render with. (Convention places a template method in the view definition.
// example if template is precompiled as 'fruitTemplate'...
let FruitList = Backbone.View.extend({
  template: fruitTemplate;
});

let fruitView = new FruitList({ collection: fruits });


// We need to write the code to render the template (Best pratice - create a render method that fills contents
// of parent element '$el' with the rendered template.)
let FruitList = Backbone.View.extend({
  template: fruitTemplate,
  render() {
    // render won't be called when a view is created.
    this.$el.html(this.template({ fruits: this.collection.toJSON()}));
  }
});

var fruitView = new FruitList({ collection: fruits });

// if we already have a parent view we want our view to render in, we can assign it in the constructor
let FruitList = Backbone.View.extend({
  el: $('main').get(0),
  template: fruitTemplate,
  render() {
    this.$el.html(this.template({
      fruits: this.collection.toJSON()
    }));
  },
  initialize() {
    this.render(); 
  }
});

let fruitView = new FruitList({ collection: fruits });

// customize element when Backbone constructs our view
let FruitList = Backbone.View.extend({
  tagName: 'main',
  attributes: {
    id: 'fruit'
  }
  el: $('main').get(0),
  template: fruitTemplate,
  render() {
    this.$el.html(this.template({
      fruits: this.collection.toJSON()
    }));
  },
  initialize() {
    this.render(); 
  }
});

let fruitView = new FruitList({ collection: fruits });

// for class and ID attributes you can use id and className properties directly 
let FruitList = Backbone.View.extend({
  tagName: 'main',
  id: 'fruit',
  className: 'tropical',
  el: $('main').get(0),
  template: fruitTemplate,
  render() {
    this.$el.html(this.template({
      fruits: this.collection.toJSON()
    }));
  },
  initialize() {
    this.render(); 
  }
});

let fruitView = new FruitList({ collection: fruits });

// assign a click event to one of the view's methods

let FruitList = Backbone.View.extend({
  tagName: 'main',
  id: 'fruit',
  className: 'tropical',
  events: {
    'click a.add': 'addToCart'  // if method on object use string, otherwise use reference.
  },
  el: $('main').get(0),
  template: fruitTemplate,
  render() {
    this.$el.html(this.template({
      fruits: this.collection.toJSON()
    }));
  },
  addToCart(e) {
    e.preventDefault();
    // handle event
  },
  initialize() {
    this.render();
    this.listenTo(this.collection, 'change', this.render); // instantly update the view with any changes made to collection.
  }
});

// we can call built-in remove method to remove the element from the DOM and unbind any events that were bound.
