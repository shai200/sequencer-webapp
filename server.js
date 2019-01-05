var express = require('express');
var app = express();


app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/nextFactorial', function (req, res) {
   // Prepare output in JSON format
   nextNum=factorialSeq();
   response = {
      next:nextNum
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/nextFibonacci', function (req, res) {
   // Prepare output in JSON format
   nextFibonacci=fibonacciSeq();
   response = {
      next:nextFibonacci
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/nextRange', function (req, res) {
   // Prepare output in JSON format
   nextRange=rangeSeq(1,2);
   response = {
      next:nextRange
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/nextPrime', function (req, res) {
   // Prepare output in JSON format
   nextPrime=primeSeq();
   response = {
      next:nextPrime
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.get('/nextPrimalSum', function (req, res) {
   // Prepare output in JSON format
   nextPrimalSum=partialSumSeq();
   response = {
      next:nextPrimalSum
   };
   console.log(response);
   res.end(JSON.stringify(response));
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})


// SEQUENCERS - TODO EXTERNALIZE


var factorialArray = [1,1,2,6,24,120,720,5040,40320,
362880,
3628800,
39916800,
479001600,
6227020800,
87178291200,
1307674368000,
20922789888000,
355687428096000,
6402373705728000,
121645100408832000,
2432902008176640000
];
currentFactorialPosition=0;
function factorialSeq () {
	// MOCK
	var currentNum = factorialArray[currentFactorialPosition];
	currentFactorialPosition++;
	return currentNum;
	
} // 1, 1, 2, 6, 24, ...



var fibArray = [
1,
1,
2,
3,
5,
8,
13,
21,
34,
55,
89,
144,
233,
377,
610,
987,
1597,
2584,
4181,
6765,
10946,
17711,
28657,
46368,
75025,
121393,
196418,
317811,
514229,
832040,
1346269,
2178309,
3524578,
5702887,
9227465,
14930352,
24157817,
39088169,
63245986,
102334155,
165580141,
267914296,
433494437,
701408733,
1134903170,
1836311903,
2971215073,
4807526976,
7778742049,
12586269025
];
currentFibPosition=0;
function fibonacciSeq () {
	// MOCK
	var currentNum = fibArray[currentFibPosition];
	currentFibPosition++;
	return currentNum;
	
} // 1, 1, 2, 6, 24, ...

var rangeArray = [
1,3,5,7
];
currentRangePosition=0;
function rangeSeq (start, stop) {
	// MOCK
	var currentNum = rangeArray[currentRangePosition];
	currentRangePosition++;
	return currentNum;
	
} // rangeSeq(1, 2) -> 1, 3, 5, 7, ...


var primeArray = [
2,3,5,7,11,13
];
currentPrimePosition=0;

function primeSeq () {
	// MOCK
	var currentNum = rangeArray[currentPrimePosition];
	currentPrimePosition++;
	return currentNum;
	
}

var primalSumArray = [
1,4,11,13,13
];
currentPrimalSumPosition=0;

function partialSumSeq () {
	// MOCK
	var currentNum = rangeArray[currentPrimalSumPosition];
	currentPrimalSumPosition++;
	return currentNum;
	
}


/*

function rangeSeq (start, step) {...} // rangeSeq(1, 2) -> 1, 3, 5, 7, ...
function primeSeq () {...} // 2,	3, 5, 7, 11, 13, ...
function partialSumSeq (1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
*/