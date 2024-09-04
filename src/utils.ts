

export { addPrice, roundUpMoney};



function addPrice (arr:Array<[]>) {
    let sum:any = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum
}

function roundUpMoney(num:any) {
    return Math.ceil(num * 100) / 100;
}




