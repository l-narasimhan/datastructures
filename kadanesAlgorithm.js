function globalMaxSum(array){

    var arrayLen = array.length;
    var localMax = 0;
    var globalMax = -Infinity;

    for(i =0; i< array.length; i++){
        localMax = Math.max(array[i], array[i] + localMax)
        if(localMax > globalMax) {
            globalMax = localMax;
        }
    }
console.log(globalMax)
    return globalMax;
}
globalMaxSum([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4])
