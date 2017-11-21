foods = [
  {
    name: 'burger', 
    ingredients: [
      'beef', 'bun', 'lettuce', 'ketchup'
    ]
  },
  {
    name: 'fries', 
    ingredients: [
      'potatoes', 'oil'
    ]
  },
  {
    name: 'chicken sandwich', 
    ingredients: [
      'chicken', 'lettuce', 'mayo', 'bun'
    ]
  },
  {
    name: 'tea', 
    ingredients: [
      'tea'
    ]
  },
  {
    name: 'veggie burger', 
    ingredients: [
      'veggies', 'bun'
    ]
  },
  {
    name: 'veggie burger', 
    ingredients: [
      'veggies', 'bun'
    ]
  },
  {
    name: 'pancakes', 
    ingredients: [
      'wheat', 'syrup'
    ]
  }
]

function veggieFoodFilter(foods) {
  var meats = ['chicken', 'beef']
  return foods.filter(function(food) {
    var meatFound = false
    food.contents.forEach(function(ingredient) {
      if (meats.includes(ingredient)) {
        meatFound = true
      }
    })
    return !meatFound
  })
}
