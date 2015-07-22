var Book = Backbone.Model.extend({
  urlRoot : "/books"
});

var BookView = Backbone.View.extend({
  initialize : function(options){
    this.template = "This is the interface for the book <span><%= title %></span> by <span><%= author %></span>.";
  },
  events : {
    "click" : "toggleMe"
  },
  toggleMe : function(){
    this.$el.toggleClass("clicked");
  },
  render : function(){
    this.$el.html(_.template(this.template)(this.model.toJSON()));
    return this;
  }
});

var aBook = new Book({title: "Bananas: the book", author: "Monkey Man"});
var aView = new BookView({model: aBook});

$("body").html(aView.render().el);

