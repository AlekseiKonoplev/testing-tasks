/* 
Написать метод/функцию, который/которая на вход принимает число (int), 
а на выходе выдает слово “компьютер” в падеже, соответствующем указанному количеству. 
Например, «25 компьютеров», «41 компьютер», «1048 компьютеров».
*/

 const word = 'компьютер'

 const padge = (someNumber) => {
    const numberAsString = String(someNumber)
    const lastDigit = someNumber%10                                                 /** Нахожу последнюю цифру числа */
    const lastTwoDigits = numberAsString.slice(-2)                                  /** Нахожу 2 посление цифры числа */
    

    if ((lastTwoDigits >= 11 && lastTwoDigits <= 14) || (lastDigit >= 5 && lastDigit <= 9) || (lastDigit == 0)) {
        return word + 'ов'
    }
    else if (lastDigit >= 2 && lastDigit <= 4) {
        return word + 'а'
    }
    else if (lastDigit == 1) {
        return word
    }
 }


/* Тестирование функции при помощи нескольких её вызовов со случайными значениями: */
 const randomNumber = () => Math.round(Math.random()*1000)

 const testFn = () => {
     for (let i = 0; i < 5; i++) {
         const testValue = randomNumber()
         console.log(`${testValue} ${padge(testValue)}`)
     }
 }

testFn()

/*Время выполнения ~10мин*/