'use strict'

//1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval

function detonatorTimer(delay) {
	console.log(delay);
let timerId = setInterval(() => {
    delay--;
    if (delay > 0) {
        console.log(delay);
    } else {
        clearInterval(timerId);
        console.log('BOOM!');
    }
    }, 1000);
}
detonatorTimer(3);

//2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout

// function detonatorTimer(delay) {
// 	console.log(delay);
//     if (delay > 1) {
//         setTimeout(() => detonatorTimer(delay - 1), 1000);
//     } else {
//         setTimeout(() => console.log('BOOM!'), 1000);
//     }
// }

// detonatorTimer(3);

//3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 

// let myParametrs = {
//     name: "Vlad",
//     surname: "Sumar",
//     city: "Kharkiv",
//     gender: "male",
//     age: 31,
//     status: "married",
//     children: 1,
//     childrenName: "Stepan",
//     childrenOld: 2.8,
//     aboutMe() {
//         console.log (`Hi! My name is ${this.name} and I'm ${this.age} years old `);
//     },
//     aboutFamily() {
//         console.log (`I'm ${this.status} and have son ${this.childrenName} he is ${this.childrenOld} years old. In September he will be ${this.childrenOld + 0.2}`);
//     },
//     whereAmI() {
//         console.log (`I have been living in ${this.city} for ${this.age} years`)
//     },
//     nextBD() {
//         console.log (`I'll turn ${this.age + 1} in July and it's good that I'm not ${this.age + 9} yet)`)
//     }
// }
// myParametrs.aboutMe();
// myParametrs.aboutFamily();
// myParametrs.whereAmI();
// myParametrs.nextBD();

//4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту

// let securedAboutMe = myParametrs.aboutMe.bind(myParametrs);
// let securedAboutFamily = myParametrs.aboutFamily.bind(myParametrs);
// let securedWhereAmI = myParametrs.whereAmI.bind(myParametrs);
// let securedNextBD = myParametrs.nextBD.bind(myParametrs);

// setTimeout(securedAboutMe, 1000);
// setTimeout(securedAboutFamily, 2000);
// setTimeout(securedWhereAmI, 3000);
// setTimeout(securedNextBD, 4000);