function quicksort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const pivo = arr[0]

  const biggest = arr.slice(1).filter(item => item > pivo)
  const smallest = arr.slice(1).filter(item => item <= pivo)

  return quicksort(smallest).concat(pivo, quicksort(biggest))
}

module.exports = quicksort
