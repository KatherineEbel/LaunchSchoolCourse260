this["JST"] = this["JST"] || {};

this["JST"]["album"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<img src=\""
    + alias4(((helper = (helper = helpers.cover || (depth0 != null ? depth0.cover : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cover","hash":{},"data":data}) : helper)))
    + "\"/><h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2><h3>"
    + alias4(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "</h3><p>"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</p><p>$"
    + alias4((helpers.formatPrice || (depth0 && depth0.formatPrice) || alias2).call(alias1,(depth0 != null ? depth0.price : depth0),{"name":"formatPrice","hash":{},"data":data}))
    + "</p><a class=\"button\" href=\"#\">Add to Cart</a>";
},"useData":true});

this["JST"]["index"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Albums</h1><ul></ul><footer><a class=\"button\" href=\"#\">Add an Album</a></footer>";
},"useData":true});

this["JST"]["newAlbum"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<form action=\"/albums\" method=\"post\"><legend>Add Album</legend><fieldset><dl><dt>Title</dt><dd><input id=\"title\" type=\"text\" name=\"title\"></dd><dt>Artist</dt><dd><input id=\"artist\" type=\"text\" name=\"artist\"></dd><dt>Date</dt><dd><input id=\"date\" type=\"date\" name=\"date\"></dd><dt>Cover</dt><dd><input id=\"url\" type=\"url\" name=\"cover\"></dd><dt>Price</dt><dd><input id=\"price\" type=\"text\" name=\"price\"></dd></dl></fieldset><fieldset class=\"actions\"><input type=\"submit\" value=\"Create\"></fieldset></form>";
},"useData":true});