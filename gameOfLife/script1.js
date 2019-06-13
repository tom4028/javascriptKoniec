const game = document.querySelector('#game');
const ctx =  game.getContext('2d');


let resolution = 80;
let cols = game.width/resolution;
let rows = game.height/resolution;


const buildGrid = ()=>{
    let grid = [];
    for(let i =0;i<cols;i++){
        grid[i]=[];
        for(let j=0;j<rows;j++){
            grid[i][j] = Math.floor(Math.random()*2);
        }
    }
    return grid;
};


const nextGrid =(grid)=>{
    let nextGrid = grid.slice();

    for(let col=0;col<grid.length;col++){
        for(let row=0;row<grid[col].length;row++){
            //check each cell
            const cell = grid[col][row];
            let numN = 0;
            for(let i=-1;i<2;i++){
                for(let j=-1;j<2;j++){
                    if(i===0 && j === 0){
                        continue;
                    }

                    const cellX = col+i;
                    const cellY = row+j;

                    if(cellX>=0 && cellY>=0 && cellX<cols && cellY<rows ){
                        const currentN = grid[col+i][row+j];
                         numN+=currentN;
                    }
                    
                }
            }
            //rules of the game
            if(cell ===1 && numN <2){
                nextGrid[col][row] = 0
            }else if(cell ===1 && numN >3){
                nextGrid[col][row] = 0
            }else if (cell === 0 && numN===3){
                nextGrid[col][row] = 1
            }

        }
    }
    return nextGrid;
}
const renderGrid=(grid)=>{
    for(let col=0;col<grid.length;col++){
        for(let row=0;row<grid[col].length;row++){

            let color = grid[col][row] ===1 ? 'white' : 'black';
            colorRectFill(ctx,col*resolution,row*resolution,resolution,resolution,color);
            colorRectStroke(ctx,col*resolution,row*resolution,resolution,resolution,'brown');
             
            
            

        }
    }
}


const colorRectStroke=(ctx,topLeftX,topLeftY,boxWidth,boxHeight,strokeColor)=>{
    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    //console.log(boxWidth,boxHeight)
    ctx.rect(topLeftX,topLeftY,boxWidth,boxHeight);
    ctx.stroke();
};
const colorRectFill=(ctx,topLeftX,topLeftY,boxWidth,boxHeight,strokeColor)=>{
    ctx.beginPath();
    ctx.fillStyle = strokeColor;
    //console.log(boxWidth,boxHeight)
    ctx.rect(topLeftX,topLeftY,boxWidth,boxHeight);
    ctx.fill();
};

let  grid = buildGrid();




const update=()=>{
    grid = nextGrid(grid);
    renderGrid(grid);
    window.requestAnimationFrame(update);
}


//setInterval(update,1000/60);
const startLife = ()=>{
    window.requestAnimationFrame(update);
}

startLife();