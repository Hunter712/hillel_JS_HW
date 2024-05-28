function drawTriangle(high, symbols) {
    resulted_str = ""
    for (let i = 1; i <= high; i++) {
        resulted_str += (symbols.repeat(i)) + "\n"
    }
  return resulted_str;
}

console.log(drawTriangle(5, "+"))
