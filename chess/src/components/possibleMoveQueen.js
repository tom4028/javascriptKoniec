

// ----------Mozliwe ruchy Queen---------
const possibleMovingQ=(pos)=>{
    let possibleMov = [pos];
    let startPos = {x:pos.x,y:pos.y};

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
            //LeftTop
        while(startPos.x>0 && startPos.y>0){
            startPos.x--;
            startPos.y--;
            possibleMov.push({x:startPos.x,y:startPos.y});
            
        }
        
        //End LeftTop
        startPos = {x:pos.x,y:pos.y};
        //LeftBottom
        // startPos = {x:pos.x,y:pos.y};
            while(startPos.x<7 && startPos.y>0){
                startPos.x++;
                startPos.y--;
                possibleMov.push({x:startPos.x,y:startPos.y});
                
            }
        //End LeftBottom

        startPos = {x:pos.x,y:pos.y};
        //RightTop
        while(startPos.x>0 && startPos.y<7){
            startPos.x--;
            startPos.y++;
            possibleMov.push({x:startPos.x,y:startPos.y});
            
        }
        
        //End RightTop
        startPos = {x:pos.x,y:pos.y};
        //RightBottom
        while(startPos.x<7 && startPos.y<7){
            startPos.x++;
            startPos.y++;
            possibleMov.push({x:startPos.x,y:startPos.y});
            
        }
    return possibleMov;
}
export default possibleMovingQ;
