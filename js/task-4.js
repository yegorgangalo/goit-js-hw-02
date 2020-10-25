const inputRef = document.querySelector(".task4__input");
const buttonSendRef = document.querySelector(".task4__btn-send");
const buttonExitRef = document.querySelector(".task4__btn-exit");

buttonExitRef.addEventListener("click", () => {
    console.log('Отменено пользователем!');
});

buttonSendRef.addEventListener("click", () => {
    const credits = 23580;
    const pricePerDroid = 3000;
    let message;
    let quantity = inputRef.value;
    quantity = Number(quantity);
    if (quantity > 0) {
        let totalPrice = pricePerDroid * quantity;
        if (totalPrice > credits) {
            message = 'Недостаточно средств на счету!';
        }
        else {
            const balance = credits - totalPrice;
            message = `Вы купили ${quantity} дроидов, на счету осталось ${balance} кредитов.`;
        }
    }
    else {
        message = "Введите количество от 1";
    }

    console.log(message);
});







// const credits = 23580;
// const pricePerDroid = 3000;
// let message;
// let totalPrice;
// const quantity = prompt("введите количество дронов");
// const quantityNumber = Number(quantity);
// if (quantity === null) {
//     message = 'Отменено пользователем!';
// }
// else if (Number.isNaN(quantityNumber) === false && quantityNumber > 0) {
//     totalPrice = pricePerDroid * Number(quantity);
//     if (totalPrice > credits) {
//         message = 'Недостаточно средств на счету!';
//     }
//     else {
//         const balance = credits - totalPrice;
//         message = `Вы купили ${quantityNumber} дроидов, на счету осталось ${balance} кредитов.`;
//     }
// }
// else {
//     message = "Введите количество от 1";
// }

// console.log(message);