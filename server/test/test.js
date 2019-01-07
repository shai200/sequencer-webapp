var expect  = require('chai').expect;
var assert = require('chai').assert;
const sequencers = require("../sequencers");

var request = require('request');
var numbers = [1, 2, 3, 4, 5];

assert.isArray(numbers, 'is array of numbers');
assert.include(numbers, 2, 'array contains 2');
assert.lengthOf(numbers, 5, 'array contains 5 numbers');

describe("test sequencers", () =>{
  it("test factorial sequence", (done) =>{
        let fact = sequencers.factorialSeq();
        expect(fact()).to.eql(1);
        expect(fact()).to.eql(1);
        expect(fact()).to.eql(2);
        expect(fact()).to.eql(6);
        expect(fact()).to.eql(24);
        done();
  });

    it("test fibonacci sequence", (done) =>{
        let fib = sequencers.fibonacciSeq();
        expect(fib()).to.eql(1);
        expect(fib()).to.eql(1);
        expect(fib()).to.eql(2);
        expect(fib()).to.eql(3);
        expect(fib()).to.eql(5);
        expect(fib()).to.eql(8);
        expect(fib()).to.eql(13);
        done();
    });


    it("test prime sequence", (done) =>{
        let prime = sequencers.primeSeq(); //  2, 3, 5, 7, 11, 13, ...
        expect(prime()).to.eql(2);
        expect(prime()).to.eql(3);
        expect(prime()).to.eql(5);
        expect(prime()).to.eql(7);
        expect(prime()).to.eql(11);
        expect(prime()).to.eql(13);
        expect(prime()).to.eql(17);
        done();
    });

    it("test range sequence", (done) =>{
        let range = sequencers.rangeSeq(2,3); // rangeSeq(1, 2) -> 1, 3, 5, 7, ...
        expect(range()).to.eql(2);
        expect(range()).to.eql(5);
        expect(range()).to.eql(8);
        expect(range()).to.eql(11);
        expect(range()).to.eql(14);

        done();
    });

    it("test partial sum sequence", (done) =>{
        let partial = sequencers.partialSumSeq(1, 3, 7, 2, 0); //partialSumSeq (1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
        expect(partial()).to.eql(1);
        expect(partial()).to.eql(4);
        expect(partial()).to.eql(11);
        expect(partial()).to.eql(13);
        expect(partial()).to.eql(13);
        expect(partial()).to.eql(undefined);
        expect(partial()).to.eql(undefined);
        done();
    });

});

