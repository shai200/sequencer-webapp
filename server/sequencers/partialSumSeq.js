module.exports =  (...arguments) => {
    let currentIndex=0,sum=0;
    let input = arguments;

    function sumTillMaxIndex(arr,maxIndex){
        if(maxIndex>arr.length-1){
            maxIndex=arr.length-1;
        }
        var sum=0;
        for(var i=0; i<=maxIndex; i++){
            sum+=arr[i];
        }
        return sum;
    }
    return () => {
        if(currentIndex>=input.length){
            return null;
        }
        sum = sumTillMaxIndex(input,currentIndex);
        currentIndex += 1;
        return sum;
    }
}; //partialSumSeq (1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
