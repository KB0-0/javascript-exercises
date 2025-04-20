const reverseString = function(input_string) {
    string_length = input_string.length;
    if (string_length === 1) {
        return input_string;
    }

    else {
        const array_string = input_string.split("");
        new_string = "";
        for (i = 0; i < string_length; i++) {
            new_string += array_string[string_length - 1 - i];
        }

        return new_string;
    }

};

// Do not edit below this line
module.exports = reverseString;
