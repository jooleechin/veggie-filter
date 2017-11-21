foods = [
  {
    name: 'burger', 
    contents: [
      'beef', 'bun', 'lettuce', 'ketchup'
    ]
  },
  {
    name: 'fries', 
    contents: [
      'potatoes', 'oil'
    ]
  },
  {
    name: 'chicken sandwich', 
    contents: [
      'chicken', 'lettuce', 'mayo', 'bun'
    ]
  },
  {
    name: 'tea', 
    contents: [
      'tea'
    ]
  },
  {
    name: 'veggie burger', 
    contents: [
      'veggies', 'bun'
    ]
  },
  {
    name: 'veggie burger', 
    contents: [
      'veggies', 'bun'
    ]
  },
  {
    name: 'pancakes', 
    contents: [
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

console.log(veggieFoodFilter(foods))
