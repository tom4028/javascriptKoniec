
const possibleMovingK = (pos)=>{
    //console.log(pos);
    let possibleMov = [pos];
    let startPos = {x:pos.x,y:pos.y};

    //console.log(startPos);

    
        if(startPos.x>0){
            startPos.x=startPos.x-1;
            possibleMov.push({x:startPos.x,y:startPos.y});
        }
        startPos = {x:pos.x,y:pos.y};
        
        if(startPos.x<7){
            startPos.x=startPos.x+1;
            possibleMov.push({x:startPos.x,y:startPos.y});
        }
        startPos = {x:pos.x,y:pos.y};
        
        if(startPos.y>0){
            startPos.y=startPos.y-1;
            possibleMov.push({x:startPos.x,y:startPos.y});
        }
        startPos = {x:pos.x,y:pos.y};
        
        
        if(startPos.x<7){
            startPos.y=startPos.y+1;
            possibleMov.push({x:startPos.x,y:startPos.y});
        }
        startPos = {x:pos.x,y:pos.y};

        
        if(startPos.x>0 && startPos.y>0){
            startPos.x=startPos.x+1;
            startPos.y=startPos.y-1;
            possibleMov.push({x:startPos.x,y:startPos.y});
        }
        startPos = {x:pos.x,y:pos.y};
        
        if(startPos.x<7 && startPos.y<7){
            startPos.x=startPos.x+1;
            startPos.y=startPos.y+1;
            possibleMov.push({x:startPos.x,y:startPos.y});
        }
        startPos = {x:pos.x,y:pos.y};
        
        if(startPos.x>0 && startPos.y<7){
            startPos.x=startPos.x-1;
            startPos.y=startPos.y+1;
            possibleMov.push({x:startPos.x,y:startPos.y});
        }
        startPos = {x:pos.x,y:pos.y};
        
        if(startPos.x<7 && startPos.y>0){
            startPos.x=startPos.x+1;
            startPos.y=startPos.y-1;
            possibleMov.push({x:startPos.x,y:startPos.y});
        }
        startPos = {x:pos.x,y:pos.y};

        

    return possibleMov;
}

export default possibleMovingK;