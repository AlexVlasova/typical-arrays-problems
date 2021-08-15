
exports.min = function min (array) {
  if (array === undefined)
    return 0

  if (array.length === 0)
    return 0

  let minValue = array[0]

  array.forEach(elem => {
    if (elem < minValue)
      minValue = elem
  })

  return minValue
}

exports.max = function max (array) {
  if (array === undefined)
    return 0

  if (array.length === 0)
    return 0

  let maxValue = array[0]

  array.forEach(elem => {
    if (elem > maxValue)
      maxValue = elem
  })
  
  return maxValue
}

exports.avg = function avg (array) {
  if (array === undefined)
    return 0
  
  if (array.length === 0)
    return 0

  let summ = 0
  let count = 0

  array.forEach(elem => {
    summ += elem
    count++
  })
  
  return summ / count
}
