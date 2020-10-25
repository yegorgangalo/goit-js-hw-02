const inputRef = document.querySelector(".task5__input");
const buttonSendRef = document.querySelector(".task5__btn-send");
const buttonExitRef = document.querySelector(".task5__btn-exit");

buttonExitRef.addEventListener("click", () => {
    console.log('Отменено пользователем!');
});

buttonSendRef.addEventListener("click", () => {
    let cost;
    let country = inputRef.value;
    country = country.toLowerCase();

    switch (country) {
        case 'китай':
            country = "Китай";
            cost = 100;
            break;

        case 'чили':
            country = "Чили";
            cost = 250;
            break;

        case 'австралия':
            country = "Австралия";
            cost = 170;
            break;

        case 'индия':
            country = "Индия";
            cost = 80;
            break;

        case 'ямайка':
            country = "Ямайка";
            cost = 120;
            break;

        default: console.log('В вашей стране доставка не доступна');
    }

    if (cost != undefined) {
        console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    }
});






// const countryPrompt = prompt("Введите страну");

// switch (countryPrompt) {
//     case null:
//         console.log('Отменено пользователем!');
//         break;

//     default:


//         let country = countryPrompt.toLowerCase();
//         let cost;

//         switch (country) {
//             case 'китай':
//                 country = "Китай";
//                 cost = 100;
//                 break;

//             case 'чили':
//                 country = "Чили";
//                 cost = 250;
//                 break;

//             case 'австралия':
//                 country = "Австралия";
//                 cost = 170;
//                 break;

//             case 'индия':
//                 country = "Индия";
//                 cost = 80;
//                 break;

//             case 'ямайка':
//                 country = "Ямайка";
//                 cost = 120;
//                 break;

//             default: console.log('В вашей стране доставка не доступна');
//         }

//         if (cost != undefined) {
//             console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
//         }

// }