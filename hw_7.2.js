let services = {
    "стрижка": "1000 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function(){
        let result = 0;
        for (let key in services) {
            if (key !== "price" && key !== "maxPrice" && key !== "minPrice") {
                result += parseFloat(services[key]);
            }
        }
        return result;
    },
    maxPrice: function(){
       let result = 0;
        for (let key in services) {
            if (key !== "price" && key !== "maxPrice" && key !== "minPrice") {
                if (parseFloat(services[key]) > result){
                    result = parseFloat(services[key]);
                }
            }
        }
        return result;
    },
    minPrice: function(){
       let result = parseFloat(services["стрижка"]);
        for (let key in services) {
            if (key !== "price" && key !== "maxPrice" && key !== "minPrice") {
                if (parseFloat(services[key]) < result){
                    result = parseFloat(services[key]);
                }
            }
        }
        return result;
    }
};

services['Розбити скло'] = "200 грн";
console.log(services.price());
console.log(services.maxPrice());
console.log(services.minPrice());