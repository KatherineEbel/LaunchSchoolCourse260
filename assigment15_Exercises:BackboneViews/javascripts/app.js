let data = [{
  name: 'Kathy Ebel',
  colors: ['purple', 'blue', 'dark-pink']
},{
  name: 'Sydney Snell',
  colors: ['blue', 'purple', 'red']
},{
  name: 'David Snell',
  colors: ['white', 'black', 'blue']
}];

let app = {
  init() {
    _.extend(this, Backbone.Events);
    this.appView = new AppView();
    this.collection = new Items(data);
    this.appView.render();
    this.itemsView = new ItemsView({collection: this.collection});
    this.itemsView.render();
    this.listenTo(this.appView, 'create', this.create);
  },
  create(data) {
    let attrs = _(data).reduce((props, attr) => {
      props.colors = props.colors || [];
      if (attr.name.includes('color')) {
        props.colors.push(attr.value);
      } else {
        props[attr.name] = attr.value;
      }
      return props;
    },{});
    this.collection.add(attrs);
  }
};

app.init();
