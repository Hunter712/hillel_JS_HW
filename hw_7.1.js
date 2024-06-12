let obj = {
    name: "Vlad",
    surname: "Fedorchenko",
    age: 30,
    getInfo: function(){
        for (let key in obj) {
            if (key !== "getInfo") {
                console.log(key + ": " + obj[key]);
            }
        }
    }
}

obj.getInfo()
obj.gender = "male"
obj.getInfo()