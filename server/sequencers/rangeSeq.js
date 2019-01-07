module.exports = function rangeSeq (start, step) {
    let currentNum=0;
    return () => {
        if (currentNum === 0){
            currentNum=start;
        } else {
            currentNum += step;
        }
        return currentNum;
    }
}; // rangeSeq(1,2) -> 1, 3, 5, 7, ...
