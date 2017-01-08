var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Pet =  require('../models/schema.js' );
var path = require('path');

router.get('/', function(req, res){
  console.log('In get pets');
  Pet.find({}, function(err, petResults) {
      if(err){
        console.log(err);
        res.sendStatus(500);
      }else{
        console.log('pets: ' + petResults);
        res.send(petResults);
      }
    });
});

router.post('/', function(req, res){
  console.log('req.body = ' + req.body);
    console.log('DB');
    var newPet = new Pet({
      petName: req.body.petName,
      animalType: req.body.animalType,
      imageUrl: req.body.imageUrl
    });
    newPet.save(function(err){
      if (err) {
      console.log("error: " + err);
    }else {
      console.log("New Pet posted.");
      res.sendStatus(201);
    }
    });
});


module.exports= router;
