const sumAll = function(start_int, end_int) {


    if ((start_int < 0) || (end_int < 0)) {
        return "ERROR";
    }

    else if ((start_int % 1 !== 0) || (end_int % 1 !== 0)) {
        return "ERROR";
    }

    else if ((typeof start_int !== 'number') || (typeof end_int !== 'number')) {
        return "ERROR";
    }

    else if (start_int > end_int) {
        new_int = start_int;
        start_int = end_int;
        end_int = new_int;

        finalSum = start_int;
        current_int = start_int + 1;
    
        while (current_int <= end_int) {
            finalSum += current_int;
            current_int += 1;
        }
    
        return finalSum;
    

    }

    else {

        finalSum = start_int;
        current_int = start_int + 1;
    
        while (current_int <= end_int) {
            finalSum += current_int;
            current_int += 1;
        }
    
        return finalSum;
    }



};

x = sumAll(2, 6);
console.log(x);
