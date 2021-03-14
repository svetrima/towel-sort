// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length < 1)
        return []; //check matrix

    let checkArray = matrix[0];



    for (let i = 1; i < matrix.length; i++) {
        if (i % 2 !== 0) {
            checkArray = checkArray.concat(matrix[i].reverse());
        } else {
            checkArray = checkArray.concat(matrix[i]);
        }
    }
    return checkArray;
    console.log(checkArray)
}