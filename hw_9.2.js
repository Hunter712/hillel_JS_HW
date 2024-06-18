const company = {
  name: 'Велика Компанія',
  type:'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
              partners: [
                {
                  name: 'Клієнт 1.2.3.4',
                  type: 'subsubsubSubCompany',
                  uses: 'Рішення для продажу квитків',
                  sells: 'Рішення для продажу квитків',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 2.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        }
    ]
    }
  ]
};

function findValueByKey(companyName) {
  for (let i in company.clients) {
    if (company.clients[i].name === companyName) {
      console.log(company.clients[i].name);
      console.log(company.clients[i].type);
      console.log(company.clients[i].uses);
      console.log(company.clients[i].sells);
    } else {
      findByRecursiveFunction(company.clients[i].partners, companyName);
    }
  }
}
function findByRecursiveFunction(partners_array, companyName) {
  for (let i in partners_array) {
    if (partners_array[i].name === companyName) {
      console.log(partners_array[i].name);
      console.log(partners_array[i].type);
      console.log(partners_array[i].uses);
      console.log(partners_array[i].sells);
    } else if ('partners' in partners_array[i]) {
      findByRecursiveFunction(partners_array[i].partners, companyName);
    }
  }
}


findValueByKey("Клієнт 1.2.3.4");
