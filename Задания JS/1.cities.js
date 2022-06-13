/*
Задача: Написать метод/функцию, который/которая на вход принимает массив городов. 
В качестве результата возвращает строку, где города разделены запятыми, 
а в конце стоит точка. Например, «Москва, Санкт-Петербург, Воронеж.» 
*/

const cities = ['Москва', 'Санкт-Петербург', 'Казань', 'Нижний Новгород']

const makeStr = (someArr) => {
    str = someArr.join(', ') + '.'
    return str
}


/* Без использования готового методаи */
/*                           
const makeStr2 = (someArr) => {                          
    let str = ''
    for (let i = 0; i < (someArr.length - 1); i++){                   
        str += someArr[i] + ', '
    }
    str += someArr[someArr.length-1] + '.'
    return str
}

console.log(makeStr2(cities))
*/

console.log(makeStr(cities))

/*Время выполнения ~5мин */


