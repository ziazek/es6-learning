var cars = [
  { model: 'Buick', price: 'CHEAP' }
  { model: 'Camaro', price: 'expensive' }
]

var prices = cars.map(function(car) {
  return car.price;
})

prices;