const removeFromArray = function(input_array, ...otherArgs) {
    for (toRemove of otherArgs) {
        input_array_length = input_array.length;
        for (i = 0; i < input_array_length; i++) {
            if (input_array[i] === toRemove) {
                input_array.splice(i, 1);
                //console.log(input_array);
                input_array_length = input_array.length;
            }
        }

    }
    console.log(input_array);
    return input_array;


};


removeFromArray([1, 2, 3, 3, 4], 3);

