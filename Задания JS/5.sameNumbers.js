/*
Написать метод, который определяет, какие элементы присутствуют в двух экземплярах 
в каждом из массивов (в двух и более, причем в каждом).
На вход подаются два массива.
На выходе массив с необходимыми совпадениями.
*/

const arr1 = [7, 17, 1, 9, 1, 17, 56, 56, 23]
const arr2 = [6, 17, 17, 1, 23, 34, 23, 1, 8, 1]

const findSameNumbers = (input1, input2) => {
    const result =[]
    const copyOfInput1 = input1.slice(0)
    for(let i = 0; i < copyOfInput1.length; i++) {

        if(result.includes(copyOfInput1[i])) continue ;

        delete copyOfInput1[i]

        if (copyOfInput1.includes(input1[i]) && input2.includes(input1[i])) {
            let copyOfInput2 = input2.slice(0)
            delete copyOfInput2[copyOfInput2.indexOf(input1[i])]
            if (copyOfInput2.includes(input1[i])) result.push(input1[i]) ;
        }
    }
    return result
}

console.log(findSameNumbers(arr1, arr2))

/*Время выполнения ~20мин*/
