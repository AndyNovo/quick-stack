var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quickstack');

var genericSchema = new mongoose.Schema({}, { strict: false });

var createDoc = function(document, collection, callback){
  var Model = mongoose.model('Model', genericSchema, collection);
  Model.create(document, function(err, document){
    if(!err){
      callback(document);
    }
  });
};

var findDocs = function(collection, filter, callback){
  var Model = mongoose.model('Model', genericSchema, collection);
  Model.find(filter).exec(function(err, documents){
    if (!err){
      callback(documents);
    }
  });
};

var updateDoc = function(collection, id, changes, callback){
  var Model = mongoose.model('Model', genericSchema, collection);
  Model.update({_id: id}, {$set: changes}, function(err, document){
    if (!err){
      callback(document);
    }
  });
};

var deleteDoc = function(collection, id, callback){
  var Model = mongoose.model('Model', genericSchema, collection);
  Model.findByIdAndRemove(id, function(err, document){
    if (!err){
      callback(document);
    }
  });
};

var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

var router = express();
var server = http.createServer(router);
router.use(bodyParser.json());

router.use(express.static(path.resolve(__dirname, 'client')));

router.get('/:collection', function(req, res){
  var collection = req.params.collection;
  findDocs(collection, {}, function(docs){
    res.json(docs);
  });
})
.get('/:collection/:id', function(req, res){
  var collection = req.params.collection;
  var id = req.params.id;
  findDocs(collection, {_id: id}, function(docs){
    res.json(docs);
  });
})
.post('/:collection', function(req, res){
  var collection = req.params.collection;
  createDoc(req.body, collection, function(document){
    res.json(document);
  });
})
.put('/:collection/:id', function(req, res){
  var collection = req.params.collection;
  var id = req.params.id;
  updateDoc(collection, id, req.body, function(document){
    res.json(document);
  });
})
.delete('/:collection/:id', function(req, res){
  var collection = req.params.collection;
  var id = req.params.id;
  deleteDoc(collection, id, function(document){
    res.json(document);
  });
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Quick stack backend listening at", addr.address + ":" + addr.port);
});