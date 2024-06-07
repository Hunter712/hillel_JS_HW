function pad(str, symbol, length, where_to_add) {
    if (length > str.length) {
        let result = symbol.repeat(length - str.length);
        if (where_to_add){
            return result + str;
        } else {
            return str + result;
        }

    }
}

console.log(pad("string", "*", 9, false));
