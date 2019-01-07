module.exports = function generator (sequencer) {
    const gen = {
        next : sequencer()
    };
    return gen
};
