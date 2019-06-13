const possibleMovingK=(pos)=>{
    let possibleMov = [pos];
    let startPos = {x:pos.x,y:pos.y};
        
            //y<6 x<7

            if(startPos.y<6 && startPos.x<7){
                startPos.y = startPos.y+2;
                startPos.x= startPos.x+1;
                possibleMov.push({x:startPos.x,y:startPos.y});
                }
                startPos = {x:pos.x,y:pos.y};

                //y<6 x<7

                if(startPos.x<6 && startPos.y<7){
                    startPos.y = startPos.y+1;
                    startPos.x= startPos.x+2;
                    possibleMov.push({x:startPos.x,y:startPos.y});
                    }
                    startPos = {x:pos.x,y:pos.y};
                    
            
            
            //y>0 x<6
            if(startPos.y>0 && startPos.x<6){
                startPos.y = startPos.y-1;
                startPos.x= startPos.x+2;
                possibleMov.push({x:startPos.x,y:startPos.y});
                }
                startPos = {x:pos.x,y:pos.y};
            
            //y>1 x<7 --|

             if(startPos.y>1 && startPos.x<7){
                startPos.y = startPos.y-2;
                startPos.x= startPos.x+1;
                possibleMov.push({x:startPos.x,y:startPos.y});
                }
                startPos = {x:pos.x,y:pos.y};
            


            //x>1 y<6
            if(startPos.y<6 && startPos.x>1){
                startPos.y = startPos.y+2;
                startPos.x= startPos.x-1;
                possibleMov.push({x:startPos.x,y:startPos.y});
                }
                startPos = {x:pos.x,y:pos.y};
            
            //x>1 y<6
            if(startPos.x>1 && startPos.y<7){
                startPos.y = startPos.y+1;
                startPos.x= startPos.x-2;
                possibleMov.push({x:startPos.x,y:startPos.y});
                }
                startPos = {x:pos.x,y:pos.y};


            //y>1 && x>0
            if(startPos.y>1 && startPos.x>0){
                startPos.y = startPos.y-2;
                startPos.x= startPos.x-1;
                possibleMov.push({x:startPos.x,y:startPos.y});
                }
                startPos = {x:pos.x,y:pos.y};

                //x>1 && y>0
                if(startPos.x>1 && startPos.y>0){
                    startPos.y = startPos.y-1;
                    startPos.x= startPos.x-2;
                    possibleMov.push({x:startPos.x,y:startPos.y});
                    }
                    startPos = {x:pos.x,y:pos.y};

    return possibleMov;
}

export default possibleMovingK;
