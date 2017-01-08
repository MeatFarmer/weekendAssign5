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
