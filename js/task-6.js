const inputRef = document.querySelector(".task6__input");
const buttonSendRef = document.querySelector(".task6__btn-send");
const buttonExitRef = document.querySelector(".task6__btn-exit");
let total = 0;

buttonSendRef.addEventListener("click", () => {
    let input = inputRef.value;
    input = Number(input);
    total += input;
    console.log(total);
    inputRef.value = "";
    inputRef.focus();
});

buttonExitRef.addEventListener("click", () => {
    alert(`Общая сумма чисел равна ${total}`);
    total = 0;
});




/* просто цикл while*/
// let total = 0;

// while (true) {

//     let input = prompt("Введите число");

//     if (input === null) {
//         break;
//     }

//     input = Number(input);
//     if (Number.isNaN(input)) {
//         alert("Было введено не число, попробуйте еще раз");
//     }
//     else {
//         total += input;
//     }
// };

// alert(`Общая сумма чисел равна ${total}`);






/* цикл do while*/
// let total = 0;

// do {
//     let input = prompt("Введите число");

//     if (input === null) {
//         break;
//     }

//     input = Number(input);
//     if (Number.isNaN(input)) {
//         alert("Было введено не число, попробуйте еще раз");
//     }
//     else {
//         total += input;
//     }
// } while (true);

// alert(`Общая сумма чисел равна ${total}`);




// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз
//добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не нужно.
//Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
//при этом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;