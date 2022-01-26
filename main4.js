// 4
const souvenir = 75;
const bauble = 112;

let souvenirNumber = prompt("Введите количества сувенир:");
let baubleNumber = prompt("Введите количество безделушек:");

document.write(`Общий вес посылки : ${(souvenir * souvenirNumber) + (bauble * baubleNumber)} г.`);