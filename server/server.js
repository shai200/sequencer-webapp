var express = require('express');

const sequencers = require("./sequencers");

const generator = require("./generator");

const piped = require("./pipe");

var app = express();


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

let fact = sequencers.factorialSeq();

app.get('/nextFactorial', function (req, res) {

    // Prepare output in JSON format
    nextNum = fact();
    response = {
        next: nextNum
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

let fib = sequencers.fibonacciSeq();
app.get('/nextFibonacci', function (req, res) {
    // Prepare output in JSON format
    nextFibonacci = fib();
    response = {
        next: nextFibonacci
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


let prime = sequencers.primeSeq(); //  2, 3, 5, 7, 11, 13, ...
app.get('/nextPrime', function (req, res) {
    // Prepare output in JSON format
    nextPrime = prime();
    response = {
        next: nextPrime
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


let range = sequencers.rangeSeq(2, 3); // rangeSeq(1, 2) -> 1, 3, 5, 7, ...
// TODO customize range params based on user input
app.get('/nextRange', function (req, res) {
    // Prepare output in JSON format
    nextRange = range();
    response = {
        next: nextRange
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


let partial = sequencers.partialSumSeq(1, 3, 7, 2, 0); //partialSumSeq (1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
// TODO customize partial sum params based on user input
app.get('/nextPartialSum', function (req, res) {
    // Prepare output in JSON format
    nextPartialSum = partial();
    if (nextPartialSum == null) nextPartialSum = "error";
    response = {
        next: nextPartialSum
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

let pipedSeq = piped.pipeSeq(sequencers.rangeSeq, 2, 3).pipeline(piped.accumulator).invoke();
let seq = generator(pipedSeq);

app.get('/nextPipedSeq', function (req, res) {
    // Prepare output in JSON format
    nextPipedSeq = seq.next();
    if (nextPipedSeq == null) nextPipedSeq = "error";
    response = {
        next: nextPipedSeq
    };
    console.log(response);
    res.end(JSON.stringify(response));
})


let pipedSeqEven = piped.pipeSeq(sequencers.rangeSeq, 2, 3)
    .pipeline(piped.even).invoke();
let genEven = generator(pipedSeqEven);

app.get('/isEvenNextPipedRangeSeq', function (req, res) {
    // Prepare output in JSON format
    response = genEven.next();
    console.log(response);
    res.end(JSON.stringify(response));
})

app.get('/initRange', function (req, res) {
    // initialize each sequencer which has args with new args
    try {

        var args_int = req.query.args.split(',').map(function (item) {
            return parseInt(item, 10);
        });
        range = sequencers.rangeSeq.apply(this, args_int); // rangeSeq(1, 2) -> 1, 3, 5, 7, ...
        response = {
            args: req.query.args, success: true
        };

    } catch (err) {
        response = {
            error: err.message, success: false
        };
    }

    console.log(response);
    res.end(JSON.stringify(response));
})


app.get('/initPartialSum', function (req, res) {
    // initialize each sequencer which has args with new args
    try {

        var args_int = req.query.args.split(',').map(function (item) {
            return parseInt(item, 10);
        });
        partial = sequencers.partialSumSeq.apply(this, args_int); // rangeSeq(1, 2) -> 1, 3, 5, 7, ...
        response = {
            args: req.query.args, success: true
        };

    } catch (err) {
        response = {
            error: err.message, success: false
        };
    }

    console.log(response);
    res.end(JSON.stringify(response));
})

app.get('/initPipedSeq', function (req, res) {
    // initialize each sequencer which has args with new args
    try {

        var args_int = req.query.args.split(',').map(function (item) {
            return parseInt(item, 10);
        });
        partial = sequencers.partialSumSeq.apply(this, args_int); // rangeSeq(1, 2) -> 1, 3, 5, 7, ...
        response = {
            args: req.query.args, success: true
        };

    } catch (err) {
        response = {
            error: err.message, success: false
        };
    }

    console.log(response);
    res.end(JSON.stringify(response));
})


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Sequences App Listening At http://%s:%s", host, port)
})


