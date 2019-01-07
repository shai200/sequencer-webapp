var expect  = require('chai').expect;
var assert = require('chai').assert;
const sequencers = require("../sequencers");
const generator = require("../generator");
const piped = require("../pipe");
var request = require('request');


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
        expect(partial()).to.eql(null);
        expect(partial()).to.eql(null);
        done();
    });

});

describe("test generator", () =>{
    it("test factorial generator", (done) =>{
        let gen = generator(sequencers.factorialSeq);
        expect(gen.next()).to.eql(1);
        expect(gen.next()).to.eql(1);
        expect(gen.next()).to.eql(2);
        expect(gen.next()).to.eql(6);
        expect(gen.next()).to.eql(24);
        done();
    });

    it("test fibonacci generator", (done) =>{
        let gen = generator(sequencers.fibonacciSeq);
        expect(gen.next()).to.eql(1);
        expect(gen.next()).to.eql(1);
        expect(gen.next()).to.eql(2);
        expect(gen.next()).to.eql(3);
        expect(gen.next()).to.eql(5);
        expect(gen.next()).to.eql(8);
        expect(gen.next()).to.eql(13);
        done();
    });


    it("test prime generator", (done) =>{
        let gen = generator(sequencers.primeSeq);
        expect(gen.next()).to.eql(2);
        expect(gen.next()).to.eql(3);
        expect(gen.next()).to.eql(5);
        expect(gen.next()).to.eql(7);
        expect(gen.next()).to.eql(11);
        expect(gen.next()).to.eql(13);
        expect(gen.next()).to.eql(17);
        done();
    });

    it("test range generator", (done) =>{
        let gen = generator(sequencers.rangeSeq, 2, 3);
        expect(gen.next()).to.eql(2);
        expect(gen.next()).to.eql(5);
        expect(gen.next()).to.eql(8);
        expect(gen.next()).to.eql(11);
        expect(gen.next()).to.eql(14);
        done();

    });

    it("test partial sum sequence generator", (done) =>{
        let gen = generator(sequencers.partialSumSeq, 1, 3, 7, 2, 0); //partialSumSeq (1, 3, 7, 2, 0) {...} // 1, 4, 11, 13, 13, end
        expect(gen.next()).to.eql(1);
        expect(gen.next()).to.eql(4);
        expect(gen.next()).to.eql(11);
        expect(gen.next()).to.eql(13);
        expect(gen.next()).to.eql(13);
        expect(gen.next()).to.eql(null);
        expect(gen.next()).to.eql(null);
        done();

    });


});

    describe("test pipeSeq", () =>{
        it("test pipeSeq accumulator", (done) =>{
            let pipedSeq = piped.pipeSeq(sequencers.rangeSeq, 2,3)
                .pipeline(piped.accumulator).invoke();
            let seq = generator(pipedSeq);
            expect(seq.next()).to.eql(2);
            expect(seq.next()).to.eql(7);
            expect(seq.next()).to.eql(15);
            expect(seq.next()).to.eql(26);
            done()
        });

        it("test pipeSeq isEven", (done) =>{
            let pipedSeq = piped.pipeSeq(sequencers.rangeSeq, 2,3)
                .pipeline(piped.even).invoke();
            let gen = generator(pipedSeq);
            expect(gen.next().isEven).to.eql(true); //2
            expect(gen.next().isEven).to.eql(false); //5
            expect(gen.next().isEven).to.eql(true); //8
            expect(gen.next().isEven).to.eql(false); //11
            expect(gen.next().isEven).to.eql(true); //14
            done()
        });

});

