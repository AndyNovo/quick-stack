var Book = Backbone.Model.extend({
  idAttribute: "_id",
  urlRoot : "/books",
  defaults : {
    title: "Generic Title Here",
    author: "Some Author Name Here"
  }
});

var BookView = Backbone.View.extend({
  tagName: "p",
  className: "book view forsale",
  initialize : function(options){
    this.listenTo(this.model, "change", this.render, this);
    this.template = $("#book-template").html();
  },
  events : {
    "click" : "toggleMe"
  },
  toggleMe : function(){
    this.$el.toggleClass("clicked");
    this.model.set({title: "Monkey "+Date.now().toString()});
  },
  render : function(){
    this.$el.html(_.template(this.template)(this.model.toJSON()));
    return this;
  }
});

var aBook = new Book({title: "Bananas: the book", author: "Monkey Man"});
var aView = new BookView({model: aBook});

var bBook = new Book({title: "Bananas2: the book", author: "Monkey Man2"});
var bView = new BookView({model: aBook});

var cView = new BookView({model: bBook});


$("body").html(aView.render().el);
$("body").append("<hr/>");
$("body").append(bView.render().el);
$("body").append("<hr/>");
$("body").append(cView.render().el);

