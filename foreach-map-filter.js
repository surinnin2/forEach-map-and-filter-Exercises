function doubleValues(arr){
    let doubledArray = []
    arr.forEach(function(value) {
        doubledArray.push(value*2)
    })
    return doubledArray
}

function onlyEvenValues(arr){
    let evenArray  = []
    arr.forEach(function(value) {
        if (value%2 === 0) {
            evenArray.push(value)
        }
    })
    return evenArray
}

function showFirstAndLast(arr){
    let firstAndLastArray = []
    arr.forEach(function(value) {
        let returnValue = ''
        returnValue += value[0] + value[value.length-1]
        firstAndLastArray.push(returnValue)
    })
    return firstAndLastArray
}

function addKeyAndValue(arr,key,value){
    let finalArray = []
    arr.forEach(function(val) {
        let newObject = val
        newObject[key] = value
        finalArray.push(newObject)
    })
    return finalArray
}

function vowelCount(str){
   let objToReturn = {}
   let stringToCheck = str.toLowerCase()
   for (letter of stringToCheck){
       if ('aeiou'.indexOf(letter) !== -1) {
          objToReturn[letter] = (objToReturn[letter]+1) || 1
       }
    }
   return objToReturn
}

function doubleValuesWithMap(arr) {
    let doubledArray = arr.map(function(value) {
        return value*2
    })
    return doubledArray
}

function valTimesIndex(arr){
    let arrayToReturn = arr.map(function(value, index) {
        return value*index
    })
    return arrayToReturn
}

function extractKey(arr, key){
    let arrayToReturn = arr.map(function(value) {
        return value[key]
    })
    return arrayToReturn
}

function extractFullName(arr){
    let arrayToReturn = arr.map(function(value) {
        return value['first'] + ' ' + value['last']  
    })
    return arrayToReturn
}

function filterByValue(arr, key) {
    let arrayToReturn = arr.filter(function(value) {
        return value[key]
    })
    return arrayToReturn
}

function find(arr, searchValue) {
    let valueToReturn
    let arryOfValues = arr.filter(function(value, index) {
        return (value === searchValue)
    })
    valueToReturn = arryOfValues[0] || undefined
    return valueToReturn
}

function findInObj(arr, key, searchValue) {
    let objToReturn = {}
    let arrayOfValues = arr.filter(function(value, index, arr) {
        return (value[key] === searchValue)
    })
    objToReturn = arrayOfValues[0]
    return objToReturn
}

function removeVowels(str) {
    let stringToReturn = ''
    let wordAsArray = []
    for (letter of str) {
        wordAsArray.push(letter.toLowerCase())
    }

    let filteredArray = wordAsArray.filter(function(letter) {
        return ('aeiou'.indexOf(letter) === -1)
    })
    for (letter of filteredArray) {
        stringToReturn += letter
    }
    return stringToReturn
}

function doubleOddNumbers(arr) {
    let oddOnly = arr.filter(function(value, index, arr) {
        return (value%2 === 1)
    })
    let arrayToReturn = oddOnly.map(function(value) {
        return value*2
    })
    return arrayToReturn
}
