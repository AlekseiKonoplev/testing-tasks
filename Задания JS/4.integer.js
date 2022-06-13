/*Написать метод/функцию, который/которая на вход принимает целое число, 
а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).
*/

/*для того, чтобы проверить "простоту числа" n достаточно проверить его делимость на числа  от 2 до sqrt(n)*/
const isNumberPrime = (someNumber) => {
    sqrt = Math.sqrt(someNumber)
    for (let i = 2; i <= sqrt; i++) {
        if (someNumber % i == 0) {
            return false
        }
    }
    return true
}

/* Тестирование функции при помощи подстановки в её параметр значений из массива чисел*/
const testFn = () => {
    const ArrOfNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 22, 23, 400, 401, 907, 911]

    for (let i = 0; i < ArrOfNumber.length; i++){
        isNumberPrime(ArrOfNumber[i]) ?
            console.log(`${ArrOfNumber[i]} - простое число`) 
        :
            console.log(`${ArrOfNumber[i]} - непростое число`)
    }
}

testFn()

/*Время выполнения ~10мин*/