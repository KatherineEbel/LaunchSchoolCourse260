// A collection needs a model constructor function and has a property called models.
let PostModel = Backbone.Model.extend({
  urlRoot: 'http://jsonplaceholder.typicode.com/posts',
  initialize() {
    if (!this.get('id')) {
      this.set('id', this.collection.nextId);
    } 
  }
});

// create collection same way we create models, but extending the Collection constructor
let Posts = Backbone.Collection.extend({
  model: PostModel,
  url: 'http://jsonplaceholder.typicode.com/posts',
  lastID: 0,
  setLastID() {
    if (this.isEmpty()) { return; }
    this.lastID = this.last().get('id');
  },
  nextId() {
    return ++this.lastID;
  },
  initialize() {
    this.on('sync', this.setLastID);
  }
});

let blogRoll = new Posts();

// users.js
let usersData = [{
  id: 1,
  name: 'Leanne Graham'
}, {
  id: 2,
  name: 'Ervin Howell'
}, {
  id: 3,
  name: 'Clementine Bauch'
}];

// User Model
let User = Backbone.Model.extend({});

// Collection constructor uses User model
let Users = Backbone.Collection.extend({
  model: User
});

//  create collection object with Users construtor
let blogAuthors = new Users();

// reset method updates collection's list
blogAuthors.reset(usersData);

// not good practice to access models property directly (use toJSON)/
console.log(blogAuthors.models);
blogRoll.fetch({
  reset: true,
  success(collection) {
    console.log(collection.toJSON());
    // locate a model by ite's id (id can be numeric or string)
    let firstPost = blogRoll.get(1);
    console.log(firstPost.toJSON());
    // blogRoll.set({
    //   id: 1,
    //   userId: 1,
    //   title: 'My First Post',
    //   body: 'This is my first blog post! Yay!'
    // });

    // check to make sure record updated
    console.log(firstPost.toJSON());

    // find all posts with a particular userID
    let postsByAuthor1 = blogRoll.where({userId: 1})

    // comparator property will sort collection using a given property
    console.log(blogRoll.first().toJSON());  // id: 1
    blogRoll.comparator = 'title';
    blogRoll.sort();
    console.log(blogRoll.first().toJSON()); // id: 30
  }
});

