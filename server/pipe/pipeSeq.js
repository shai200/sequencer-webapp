module.exports = (sequencer, ...args) => { // es6 style declaration
    const sequencerFunc = sequencer(...args);
    let func = [];
    return {
        pipeline(fun, ...args){
            func.push(fun(args));
            return this;
        },
        invoke(){
            // old way
            /**
            func.reduce(reducerFunc, sequencerFunc); //for test
             **/
            // es6 style
            return () => () => func.reduce(
                (res, fn) => fn(res), sequencerFunc());
        }
    }
};

function reducerFunc(sequencerFunc, accumulator) {
    console.log("accumulator;;"+accumulator);
    console.log("currentValue;;"+sequencerFunc);
    let sequencerVal = sequencerFunc();
    console.log("sequencerVal "+sequencerVal);
    let accumulatorFun = accumulator(sequencerVal);
    console.log("accumulator val"+accumulatorFun());
}