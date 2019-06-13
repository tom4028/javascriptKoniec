const  possibleMovingB=(pos)=>{
    let possibleMov = [pos];
    let startPos = {x:pos.x,y:pos.y};
    //console.log("StartPos: ",pos)
    

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
        
        //End RightBottom
     

    return possibleMov;

}

export default possibleMovingB;