'use strict'

// 1

let cost = +prompt('Стоимость товара');
let summ = +prompt('Количество денег клиента');
let gg = 0;
if ((cost > 0) && (summ > 0)) {
    if (cost > summ) {
        gg = cost - summ;
        console.log(`Нехватает ${gg} р.`)
    } else if (cost < summ) {
        gg = summ - cost;
        console.log(`Покупка совершена. Ваша сдача ${gg} р.`)
    } else if (cost = summ) {
        console.log('Покупка совершена')
    }
} else {
    alert('Некорректные данные');
}

// 2

let num = +prompt("Введите число");

if (num > 0) {
    alert('1');
} else if (num < 0) {
    alert('-1');
} else if (num == 0) {
    alert('0');
}

//  3

let a =Number(prompt("Введите число"));
let b = Number(prompt("Введите число"));
let result = (a + b < 4) ? 'Мало' : 
'Много';
console.log(result);


// 4

let l = prompt("Введите логин");
let message = (l == 'Сотрудник') ? 'Привет' : 
(l == 'Директор') ? 'Здравствуйте' : 
(l == '') ? 'Нет логина' :
'Неверно'
console.log(message); 

// 5

let login = prompt("Ваш логин");
if (login == "Админ") {
    let password = prompt("Пароль");
    if (password == 'Я главный') {
        console.log('Здравствуйте!');
    } else if(password == null){
        console.log('Отменено');
    } else{
        console.log('Я вас не знаю');
    }
} else if (login == null) {
    console.log("Отменено")
} else {
    console.log("Я вас не знаю")
}
