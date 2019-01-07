module.exports = function factorialSeq () {
    let currentNum=0, sum = 0;
    return () => {
        if (currentNum === 0){
            sum = 1;
        } else {
            sum *= currentNum;
        }
        currentNum += 1;
        return sum;
    }
}; // 1, 1, 2, 6, 24, ...
