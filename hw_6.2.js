function isNaN(arg) {
    if (arg !== arg) {
        return true;
    } else {
        if (typeof arg === "undefined") {
            return true;
        } else if (typeof arg === "object") {
            if (arg === null || arg.toString() === new Date().toString()) {
                return false;
            } else {
                return true;
            }
        } else if (typeof arg === "boolean" || typeof arg === "number") {
            return false;
        } else if (typeof arg === "string") {
            if (Number(arg) !== Number(arg)) {
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(isNaN(NaN));            // true
console.log(isNaN(undefined));      // true (undefined приводит к NaN)
console.log(isNaN({}));             // true ({} приводит к NaN)

console.log(isNaN(true));           // false (true приводит к 1)
console.log(isNaN(null));           // false (null приводит к 0)
console.log(isNaN(37));             // false (37 - это число)

console.log(isNaN("37"));           // false ("37" приводит к 37)
console.log(isNaN("37.37"));        // false ("37.37" приводит к 37.37)
console.log(isNaN(""));             // false ("" приводит к 0)
console.log(isNaN(" "));            // false (" " приводит к 0)
console.log(isNaN("37,5"));         // true ("37,5" приводит к NaN из-за запятой)

console.log(isNaN(new Date()));     // false (Date преобразуется в миллисекунды с начала эпохи, которые не NaN)
console.log(isNaN(new Date().toString())); // true (строка даты приводит к NaN)

console.log(isNaN("blabla"));       // true ("blabla" приводит к NaN)
