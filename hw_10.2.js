const arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitry",
        lastName: "Kovalev",
        email: "dmitry.kovalev@gmail.com"
    },
    {
        userName: "Olga",
        lastName: "Volkova",
        email: "olga_volkova@yandex.ru"
    },
    {
        userName: "Alexey",
        lastName: "Lebedev",
        email: "alexey-lebedev@yahoo.com"
    },
    {
        userName: "Ivan",
        lastName: "",
        email: "ivan@icloud.com"
    },
    {
        userName: "Katerina",
        lastName: "Sidorova",
        email: "katerina$sidorova@protonmail.com"
    },
    {
        userName: "N",
        lastName: "",
        email: "n@outlook.com"
    },
    {
        userName: "Natalia",
        lastName: "Fedorova",
        email: "natalia1!fedorova@zoho.com"
    },
    {
        userName: "Sergei",
        lastName: "Nikitin",
        email: "sergei.nikitin*@mail.com"
    }
];

function email_validator(data){
    const pattern = /^[a-zA-Z0-9_.-]{2,20}\@[a-zA-Z0-9]{2,10}\.[a-zA-Z0-9]{2,4}$/gm;  // checking that it's email in this string
    let result = []
    let each_email = null
    for (let element = 0; element < data.length; element++) {
        each_email = data[element].email.match(pattern);
        if (each_email !== null) {
            each_email = approving_email(each_email[0])
            if (each_email !== undefined){
                result.push(each_email);
            }
        }
    }
    return result;
}

function approving_email(email){
    const pattern = /\@(gmail|yahoo)\.com$/gm;  // checking that it's email has only gmail.com or yahoo.com domain.
    let result = email.match(pattern);
    if(result !== null){
        return email;
    }
}

console.log(email_validator(arr));