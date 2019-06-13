let num = 4;
let check = false;

let numToCheck=null;
let tab = [];

// console.log(check);
// let counter=0;

//     while(!check){
//         numToCheck = Math.floor(Math.random()*10)+1;
//         //console.log(numToCheck)
//         if(num !== numToCheck){
//             check=true;
//             tab.push( numToCheck);
//         }else{
//             //checkPos();
//             counter++;
//             numToCheck = Math.floor(Math.random()*10)+1;
//         }
        
//     }

const figure = {PosX:2,PosY:2};
checkPos=(f)=>{
    //let fXY = f;
    console.log(f);
    let pX = Math.floor(Math.random()*8);
    let pY = Math.floor(Math.random()*8);
    if(pX!==f.PosX && pY!==f.PosY){
        console.log("Inside: ",[pX,pY]);
        return [pX,pY];
    }
    return checkPos(f);
    // if(pX==fXY.PosX && pY==fXY.PosY){
    //     return this.checkPos(fXY);
    // }
 }

 let checkedPos = checkPos(figure);


console.log(checkedPos);
