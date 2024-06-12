let services = {
    "стрижка": "120 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price: function(){
        let result = 0;
        let value = null
        for (let key in services) {
            if (key !== "price" && key !== "maxPrice" && key !== "minPrice") {
                value = parseFloat(services[key])
                if (!isNaN(value)) {
                    result += value;
                }
            }
        }
        return result;
    },
    maxPrice: function(){
       let result = 0;
       let value = null
        for (let key in services) {
            if (key !== "price" && key !== "maxPrice" && key !== "minPrice") {
                value = parseFloat(services[key])
                if (!isNaN(value)) {
                    if (value > result) {
                        result = value;
                    }
                }
            }
        }
        return result;
    },
    minPrice: function(){
       let result = parseFloat(services["стрижка"]);
       let value = null
        for (let key in services) {
            if (key !== "price" && key !== "maxPrice" && key !== "minPrice") {
                value = parseFloat(services[key])
                if (!isNaN(value)) {
                    if (value < result) {
                        result = value;
                    }
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