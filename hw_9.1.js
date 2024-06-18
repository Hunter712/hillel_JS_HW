let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function myBlend(array){
   let random_number = 0;
   for(let i = 0; i < 100; i++){    // choose any length to mix elements in array, it could be 100 for example
      random_number = Math.floor(Math.random() * (array.length - 1));   // generate random index in range 0 - (array.length - 1)
      array.push(array[random_number])    // add element with random index at the end of the array
      array.splice(random_number, 1);  // remove old value with random index from array
   }
   return array;
}
console.log(myBlend(arr));
console.log(arr);