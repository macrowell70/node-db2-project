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
  // DO YOUR MAGIC
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
