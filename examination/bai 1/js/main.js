let inputArray = ["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]

function allLongestStrings(inputArray){
    let outputArray = []
    let max = inputArray[0].length
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length > max){
            max = inputArray[i].length
        }
    }
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length == max){
            outputArray.push(inputArray[i])
            console.log("Hi")
        }
    }
    console.log(outputArray)
}

