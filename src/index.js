
// You should implement your task here.

module.exports = function towelSort(matrix) {
  return matrix === undefined
    ? []
    : matrix.map((ar, i) => { return i % 2 !== 0 ? ar.reverse() : ar }).flat()
}
