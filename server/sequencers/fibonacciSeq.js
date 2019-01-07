module.exports = function fibonacciSeq() {

    function fibonacci(num){
        var a = 1, b = 0, temp;
        while (num >= 0){
            temp = a;
            a = a + b;
            b = temp;
            num--;
        }
        return b;
    }

    let currentNum=0, fib = 0;
    return () => {
        if (currentNum === 0){
            fib = 1;
        } else {
            fib = fibonacci(currentNum);
        }
        currentNum += 1;
        return fib;
    }
}; // 1,	1, 2, 3, 5, 8, 13, ...
