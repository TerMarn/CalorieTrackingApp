export function processNumbers(num:string):string{
    const numReg =  /[^0-9.]/, numeReg = /[0-9]/;
    var arr = [];
   // console.log(Number(num.toString().replace(numReg,'')));
   if(num.startsWith('0')){
    for(var i = 0; i < num.length; i++){
        arr.push(num[i]);
    }
    console.log(arr + " " + arr.length)
    if(arr.length > 1){
        if(arr[1].match(numeReg)){
        console.log('asd');
        num = num.slice(1);}
    }else {arr = [];}

    console.log(arr[1]);
   }

    if(isNaN(Number(num))) {
            for(var i = 0; i < num.length; i++){
                arr.push(num[i]);
            }
            for(var i = arr.indexOf('.') + 1; i < arr.length; i++){
                if(arr[i] === '.'){ arr.splice(i,1)}
            }
           num = arr.join('');
         return num.replace(numReg,'').trim();
        }
    return num;
}
