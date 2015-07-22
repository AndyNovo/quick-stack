var Router = Backbone.Router.extend({
  routes : {
    "": "homePage",
    "bananas/:id" : "bananaPage",
    "oddurl/*pathhere" : "oddPage",
    "*other" : "otherPage"
  },

  homePage : function(){ 
    $("body").html("You reached the <span>HOME</span> page");
  },
  
  bananaPage : function(id){
    $("body").html("You reached banana page for id: "+id);
  },
  
  oddPage : function(pathhere){
    $("body").html("This is the odd page with requested path: "+pathhere);
  },
  
  otherPage : function(other){
    $("body").html("The page you requested doesn't exist: "+other);
  }
});

new Router();
Backbone.history.start();