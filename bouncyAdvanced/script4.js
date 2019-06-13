const ctx = document.querySelector('#ctx').getContext('2d');

const WIDTH = 500;
const HEIGHT = 700;

let brickTab = [];

const ball ={
    x:25,
    y:25,
    spdX:5,
    spdY:5,
    radius:10,
    color:'white'
}
const ballNext ={
    x:ball.x+225,
    y:ball.y+250,
    spdX:5,
    spdY:5,
    radius:10,
    color:'yellow'
}
const ballNext2 ={
    x:ball.x+425,
    y:ball.y+425,
    spdX:5,
    spdY:5,
    radius:10,
    color:'red'
}

const brick ={
    x:0,
    y:0,
    width:50,
    height:50,
    color:'blue'
}


const drawCircle =(ball)=>{
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.x,ball.y,ball.radius,0,Math.PI*2,true);
    ctx.fill();
    ctx.closePath();
}



const startGame =()=>{
    
    //setInterval(updateAll,1000/60);
    
    window.requestAnimationFrame(updateAll);
}

const updateAll = ()=>{
    drawAll();
    moveBall(ball);
    moveBall(ballNext);
    moveBall(ballNext2);
    window.requestAnimationFrame(updateAll);
}

const moveBall=(ball)=>{

    if(ball.x>WIDTH || ball.x<0){
        ball.spdX*=-1;
    }
    if(ball.y>HEIGHT || ball.y<0){
        ball.spdY*=-1;
    }

    

    brickTab.forEach(b=>{

        
        if(ball.x >b.x &&
            ball.x < b.x+brick.width && 
            ball.y> b.y && 
            ball.y<b.y+brick.height){
            ball.spdX*=-1;
            ball.spdY*=-1;
        }
        
    })

    ball.x+=ball.spdX;
    ball.y+=ball.spdY;
}


    let brick1 = {
        x:150,
        y:350
    }
    brickTab.push(brick1);
    
    let brick2 = {
        x:200,
        y:400
    }
    brickTab.push(brick2);
    
    let brick3 = {
        x:150,
        y:450
    }
    brickTab.push(brick3);
    
    let brick4 = {
        x:100,
        y:400
    }
    brickTab.push(brick4);
    
    let brick5 = {
        x:150,
        y:400
    }
    brickTab.push(brick5);
    



    for(let c=2;c<10;c++){
        let tempBrick ={
                x:c*50,
                y:0           
        }
        brickTab.push(tempBrick);
        
    }
    for(let c=3;c<10;c++){
        let tempBrick ={
                x:c*50,
                y:50           
        }
        brickTab.push(tempBrick);
    }
    for(let c=4;c<10;c++){
        let tempBrick ={
                x:c*50,
                y:100           
        }
        brickTab.push(tempBrick);
        
    }
    for(let c=5;c<10;c++){
        let tempBrick ={
                x:c*50,
                y:150           
        }
        brickTab.push(tempBrick);
        
    }
    for(let c=6;c<10;c++){
        let tempBrick ={
                x:c*50,
                y:200           
        }
        brickTab.push(tempBrick);
        
    }

const drawBricks =()=>{
    brickTab.forEach(b=>{
        colorRect(b.x,b.y,brick.width-1,brick.height-1,'blue');
    })
}


        


const drawAll=()=>{
    colorRect(0,0,600,800,'black');  
    drawBricks();
    drawCircle(ball);
    drawCircle(ballNext);
    drawCircle(ballNext2);
    
}

const colorRect=(topLeftX,topLeftY,boxWidth,boxHeight,fillColor)=>{
    ctx.fillStyle = fillColor;
    ctx.fillRect(topLeftX,topLeftY,boxWidth,boxHeight);
};

startGame();

/// odległość między punktami
// getDistance(x1,y1,x2,y2){
//     let xDistance = x2-x1;
//     let yDistance = y2-y1;

//     return Math.sqrt(
//             Math.pow(xDistance,2)+
//             Math.pow(yDistance,2)
//     );
// }