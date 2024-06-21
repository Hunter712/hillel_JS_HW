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
    const result = data.reduce(
    (accumulator, element) =>  {
        if (element.email.match(pattern)) {
            if (approving_email(element.email)){
                accumulator.push(element.email);
            }
        }
        return accumulator;
    }, []);
    return result;
}

function approving_email(email){
    const pattern = /\@(gmail|yahoo)\.com$/gm;  // checking that it's email has only gmail.com or yahoo.com domain.
    const result = email.match(pattern);
    return result ? email : null;
}

console.log(email_validator(arr));