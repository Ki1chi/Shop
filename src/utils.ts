

export {checkForDupeId, addPrice, roundUpMoney};

function checkForDupeId (arr: Array<[]>) {
    
};

function addPrice (arr:Array<[]>) {
    let sum:int = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum
}

function roundUpMoney(num) {
    return Math.ceil(num * 100) / 100;
}




