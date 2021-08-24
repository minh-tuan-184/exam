let inputArray = [60, 40, 55, 75, 64]

function alternatingSums(inputArray) {
    let sumOdd = 0
    let sumEven = 0
    for(let i = 0; i < inputArray.length; i = i + 2){
        sumEven += inputArray[i]
    }
    for(let i = 1; i < inputArray.length; i = i + 2){
        sumOdd += inputArray[i]
    }
    let outputArray = []
    outputArray.push(sumEven)
    outputArray.push(sumOdd)
    console.log(outputArray)
}
