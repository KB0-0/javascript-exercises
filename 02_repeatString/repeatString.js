const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    else {
        returnString = "";
        for (i = 0; i < num; i++) {
            returnString += string;
            
        }
        return returnString;
    }


};

// Do not edit below this line
module.exports = repeatString;
