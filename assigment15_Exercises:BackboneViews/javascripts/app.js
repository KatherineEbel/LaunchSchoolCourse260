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
    this.appView = new AppView();
    this.appView.render();
    this.collection = new Items(data);
    this.itemsView = new ItemsView({collection: this.collection});
    this.itemsView.render();
  }
};

app.init();
