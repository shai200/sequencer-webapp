module.exports = function generator (sequencer) {
    if(arguments.length>1){
        var args = [];
        Array.prototype.push.apply( args, arguments );
        args.shift();
        const gen = {
            next : sequencer.apply(this, args)
        };
        return gen;
    }else{
        const gen = {
            next : sequencer()
        };
        return gen
    }
};
