const removeFromArray = function(input_array, ...otherArgs) {
    for (toRemove of otherArgs) {
        input_array_length = input_array.length;
        for (i = 0; i < input_array_length; i++) {
            if (input_array[i] === toRemove) {
                input_array.splice(i, 1);
                i -= 1;
                input_array_length = input_array.length;
            }
        }

    }

    return input_array;


};

// Do not edit below this line
module.exports = removeFromArray;
