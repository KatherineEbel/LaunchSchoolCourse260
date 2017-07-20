let template = Handlebars.compile($('#users').remove().html());

// User model
let User = Backbone.Model.extend({
  url: 'http://jsonplaceholder.typicode.com/users',
  parse(response) {
    let company = response.company;
    let result =  _(response).omit('company');
    result.catchPhrase = company.catchPhrase;
    result.companyName = company.name;
    result.companyBS = company.bs;
    return result;
  }
});

let Users = Backbone.Collection.extend({
  url: 'http://jsonplaceholder.typicode.com/users',
  model: User,
  initialize() {
    this.on('sync sort', renderCollection);
  }
});

let users = new Users();
users.fetch();

// let me = new User({
//   name: 'Katherine Ebel',
//   email: 'kathyebel@me.com'
// });
//
// users.add(me);
// me.save(null, {
//   success() {
//     debugger;
//     console.log(users.toJSON());
//   },
//   error() {
//     console.log('whoops! something went wrong');
//   }
// });
//

//   email: 'kathyebel@me.com'
// });
//
// users.add(me);
// me.save(null, {
//   success(model) {
//     console.log(model.toJSON());
//   },
//   error() {
//     console.log('whoops! something went wrong');
//   }
// });

// 5. Reset the collection and retrieve the initial 10 users again by using fetch.
// users.fetch({
//   reset: true,
//   success(response) {
//     console.log(response);
//   }
// });

// 6. Change thename and email attributes of the user with id of 1 to your name and email.
//    Then obtain the first model from the collection and log it in JSON form.

// users.set({
//   id: 1,
//   name: 'Kathy Ebel',
//   email: 'kathyebel@me.com'
// });
//
// console.log(users.first().toJSON());

// 7. create a function that will be bound to the 'sync' event on the collection that will
//    render the collection to the page. Bind the function in the collection's initialize method.
//    Then call fetch on users and make sure the event calls the render function.
function renderCollection() {
  $(document.body).html(template({users: this.toJSON()}));
}

// 9. obtain an array of just the email addresses
users.pluck('email');
