function pow(p1, p2) {
    let powed_number = p1
    for (let i = 1; i < p2; i++) {
        powed_number *= p1
    }
  return powed_number;
}

console.log(pow(3, 3))