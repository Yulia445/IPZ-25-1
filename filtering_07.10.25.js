console.log("----------------------------------------")
const toFilter = [7, 13, '4', 'Maks durachok',
                'Oleg', -0,5, '6h',
                [], undefined, 'i', 
                null,'Svieta', '-', ]

function filtrovane(arr =[]) {

    const result = []
    const resultNumber = []
    const resultNull = []
    const resultString = []
    const resultUndefined = []


    if(!Array.isArray(arr)){
    return 'It is not an array'
    }
    else console.log("original array is:",arr)

    console.log("----------------------------------------")
    
    for(let i = 0; i < arr.length; i++)
    {
        if (arr[i] === undefined) 
        {
            resultUndefined.push(arr[i])
        }
        if(typeof arr[i] === "number")
        {
            result.push(arr[i])
            resultNumber.push(arr[i])
        }
    
        if (typeof arr[i] === "string" && !isNaN(parseFloat(arr[i]))) 
        {
            result.push(parseFloat(arr[i]))
            resultNumber.push(parseFloat(arr[i]))
        }
        if (typeof arr[i] === "string" && isNaN(parseFloat(arr[i]))) 
        {
            resultString.push(arr[i])
        }
        if (arr[i] === null) 
        {
            resultNull.push(arr[i])
        }
    }

 
    return ["1) numbers:",resultNumber, 
        "2) string:" ,resultString, 
        "3) null:", resultNull, 
        "4) undefined:", resultUndefined]
}
const a = filtrovane(toFilter)

console.log('filtrovane:',a)
console.log("----------------------------------------")