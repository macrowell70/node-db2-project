const Cars = require('./cars-model');

const checkCarId = (req, res, next) => {
  Cars.getById(req.params.id)
  .then(car => {
    if(!car) {res.status(404).json({ message: "there are no cars with that id" })}
    if(car) { 
      req.car = car
      next()
     }
  })
  .catch(err => res.json({ message: err.message }))
}

const checkCarPayload = (req, res, next) => {
  const { vin, make, model, mileage } = req.body;
    if(!vin) { return res.status(400).json({ message: "vin is missing"}) }
    if(!make) { return res.status(400).json({ message: "make is missing"})}
    if(!model) { return res.status(400).json({ message: "model is missing"})}
    if(!mileage) { return res.status(400).json({ message: "mileage is missing"}) }
    next()
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
