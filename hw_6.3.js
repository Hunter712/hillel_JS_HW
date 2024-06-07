function checkProbabilityTheory(count) {
    let resulted_arr = [];
    for (let i = 1; i <= count; i++) {
        resulted_arr.push(Math.floor(Math.random() * 1000) + 100);
    }

    let paired_numbers = 0;
    let non_paired_numbers = 0;
    for (let element of resulted_arr) {
        if(element % 2 === 0){
            paired_numbers += 1;
        } else {
            non_paired_numbers += 1;
        }
    }

    let paired_numbers_pecent = paired_numbers * 100 / count;
    let non_paired_numbers_pecent = 100 - paired_numbers_pecent;

    return {"numbers": resulted_arr, "numbers_count": resulted_arr.length, "paired_numbers": paired_numbers,
      "non_paired_numbers": non_paired_numbers, "paired_numbers_pecent": paired_numbers_pecent,
        "non_paired_numbers_pecent": non_paired_numbers_pecent};
}

console.log(checkProbabilityTheory(10));