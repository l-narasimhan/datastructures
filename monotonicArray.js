function monotonicArray(array) {

 var incrPattern = true;
 var decrPattern = true;
 var isMontoic = 0;

 for(i=0; i < array.length-1; i++) {

    if(array[i] > array[i+1] ){
        incrPattern = false;
    }
    if(array[i] < array[i+1]){
        decrPattern = false;
    }
    }
 
return incrPattern || decrPattern
    
}

var pattern = monotonicArray([-1,-5,-10,-1100,-1100,-1101,-1102,-9001])
//var pattern = monotonicArray([-1, -5, -10, -1100, -900, -1101, -1102, -9001])
console.log(pattern)

//monotonicArray([1, 5, 10, 1100, 1101, 1102, 9001])
