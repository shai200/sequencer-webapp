module.exports = function primeSeq() {

    function isPrime(num) {
        if ( num === 0 || num === 1 ) {
            return false;
        }
        for ( var i = 2; i < num; i++ ) {
            if ( num % i === 0 ) {
                return false;
            }
        }
        return true;
    }

    var max = 67280421310721	; // prime from 1855 see: https://en.wikipedia.org/wiki/Largest_known_prime_number
    function findNextPrime(start){
        for ( var i = start; i <= max; i+=1 ) {
            if ( isPrime(i) ) {
                return i;
            }
        }
        return 0;
    }


    let currentNum=0, prime = 0;
    return () => {
        if (currentNum === 0){
            prime = 2;
        } else {
            prime = findNextPrime(currentNum);
        }
        currentNum = prime+1;
        return prime;
    }
}; // 2, 3, 5, 7, 11, 13, ...
