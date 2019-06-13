// ----------Mozliwe ruchy Wieży---------
const possibleMovingT=(pos)=>{
    let possibleMov = [pos];
    let startPos = {x:pos.x,y:pos.y};
    //console.log(startPos);
            //Left
                while(startPos.y >0){
                    startPos.y--;
                    possibleMov.push({x:startPos.x,y:startPos.y});
                }
            //End Left
            startPos = {x:pos.x,y:pos.y};
            //Top
            while(startPos.x >0){
                startPos.x--;
                possibleMov.push({x:startPos.x,y:startPos.y});
            }
        //End Top
        startPos = {x:pos.x,y:pos.y};
           //Right
           while(startPos.y <7){
            startPos.y++;
            possibleMov.push({x:startPos.x,y:startPos.y});
            }
            //End Right
            startPos = {x:pos.x,y:pos.y};
               //Bottom
           while(startPos.x <7){
            startPos.x++;
            possibleMov.push({x:startPos.x,y:startPos.y});
            }
            //End Bottom
            startPos = {x:pos.x,y:pos.y};
    return possibleMov;
}

export default possibleMovingT;
