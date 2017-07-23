(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['app'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Favorite Colors</h1>\n<ul id=\"favorites\"></ul>\n<button id=\"add-person\">Add Person</button>\n";
},"useData":true});
templates['listItem'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "    <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<span class=\"name\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n<ul class=\"favorite-colors\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.colors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});
templates['new'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"modal\">\n  <form action=\"#\" method=\"POST\">\n    <fieldset>\n      <label for=\"name\">Name:</label>\n      <input type=\"text\" id =\"name\", name=\"name\">\n      <label for=\"color1\">#1 Color:</label>\n      <input type=\"text\" id=\"color1\" name=\"color1\">\n      <label for=\"color2\">#2 Color:</label>\n      <input type=\"text\" id=\"color2\" name=\"color2\">\n      <label for=\"color3\">#3 Color:</label>\n      <input type=\"text\" id=\"color3\" name=\"color3\">\n    </fieldset>\n    <fieldset>\n      <button class=\"btn add\" type=\"submit\">Add</button>\n      <button class=\"btn cancel\">Cancel</button>\n    </fieldset>\n  </form>\n</div>\n";
},"useData":true});
})();