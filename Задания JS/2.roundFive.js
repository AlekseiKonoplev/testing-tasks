/*Написать метод/функцию, который/которая на вход принимает число (float), 
а на выходе получает число, округленное до пятерок. 

Пример: 
27 => 25, 27.8 => 30, 41.7 => 40.
*/

const roundForFive = (someNumber) => {
    if (someNumber % 5 <= 2) {                      
        return someNumber - (someNumber % 5)               
    }
    else if (someNumber % 5 > 2) {
        return someNumber + (5 - (someNumber % 5))
    }
    else{
        return someNumber
    }
}

/* Тестирование функции при помощи нескольких её вызовов со случайными значениями: */ 
const randomNumber = () => Math.random()*1000

const testFn = () => {
    for (let i = 0; i < 5; i++){
        let testValue = randomNumber()
        console.log(`${testValue} => ${roundForFive(testValue)}`)
    }
} 

testFn()

/*Время выполнения ~10мин*/