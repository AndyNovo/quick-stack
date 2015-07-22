var Character = Backbone.Model.extend({
  idAttribute: "_id",
  urlRoot: "/characters",
  speak : function(){
    var myname = this.get('name') || "nameless";
    return "Hello there I am "+myname; 
  }
});

var Characters = Backbone.Collection.extend({
  model : Character,
  url : "/characters"
});

$(document).ready(function(){
  //WARNING this is a hello world, this style of rendering is not "the backbone way"
  $("body").html("<h1>List of Heroes:</h1><ul id=\"heroes\">...</ul><hr><button id=\"newhero\">Create New Hero</button>");
  var linkCounter = 1;
  var heroes = new Characters();
  $("#heroes").html("");
  heroes.listenTo(heroes, "add", function(hero){
    linkCounter += 1;
    $("#heroes").append("<li>Hero says: "+hero.speak()+"</li>");
  });
  heroes.fetch();
  $("#newhero").on('click', function(ev){
    var latestHero = new Character({name : "Link"+linkCounter});
    heroes.add(latestHero);
    latestHero.save();
  });
});
