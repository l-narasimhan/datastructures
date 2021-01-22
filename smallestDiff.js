function smallestDifference(arrayOne, arrayTwo) {

      arrayOne.sort((a, b) => a - b);
      arrayTwo.sort((a,b) => a - b);
      var arr = [];

      var lowestNum = arrayOne[0] - arrayTwo[0];
      lowestNum = Math.abs(lowestNum);
      var tempLowestNum;
      var i = 0,j = 0;

      while(i <= arrayOne.length && j <= arrayTwo.length){

        tempLowestNum = arrayOne[i] - arrayTwo[j];
        tempLowestNum = Math.abs(tempLowestNum)
        if (lowestNum > tempLowestNum){

            lowestNum = tempLowestNum;
            arr = [arrayOne[i], arrayTwo[j]]
        }
        if (arrayOne[i] < arrayTwo[j]){
            i++;
        }else{
            j++;
        }

       console.log(arr);
       console.log(arr);


      }
return arr;
}
