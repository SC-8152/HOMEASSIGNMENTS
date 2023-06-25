// Вводимо необхідні дані
let a = parseFloat(prompt('Введіть дійсне число А', '0.00'))
let b = parseFloat(prompt('Введіть дійсне число B', '0.00'))

// Знаходимо результат
let sum = a + b
let multiplication = a * b
let division = a / b

// Виводимо результат
document.write(`
А = ${a} , В = ${b} <br>
Сума    А + В = ${sum}  <br>
Добуток А * В = ${multiplication}  <br>
Частка  А в В = ${part}
`)
