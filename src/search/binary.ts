function binarySearch(arr: Array<string | number>, item: string | number) {
  let first = 0
  let last = arr.length

  while (first <= last) {
    const between = Math.ceil(first + last / 2)
    const possibleItem = arr[between]

    if (possibleItem == item) {
      return between
    } else if (possibleItem > item) {
      last = between - 1
    } else {
      first = between + 1
    }
  }

  return null
}

export default binarySearch
