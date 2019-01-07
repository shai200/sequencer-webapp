module.exports = function isEven(){
    return function (value) {
        return {
            isEven: ((value % 2) === 0),
            number: value,
        };
    };
};