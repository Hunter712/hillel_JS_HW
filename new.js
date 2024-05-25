var prompt = require('prompt');

prompt.start();
prompt.get(['year'], function (err, result) {
  year = Number(result.year)

  if(year && year > 0){
    if(year === 1){
      console.log(year, " рік");
    } else if(year > 1 && year < 5){
      console.log(year, " роки");
    } else if(year >= 5){
      console.log(year, " років");
    }
  } else {
    console.log("wrong number");
  }
});