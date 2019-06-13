import React from 'react';
import './board.css';


import  Cell from './Cell';

const ChessBoard =(props)=> {
   
    const chessFromProps = props.newChessBoard;
    const chessBoard = [];

    //console.log("From chessboard:",chessFromProps);

    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            if(i%2===0){
                if(j%2===0){
                    if(chessFromProps[i][j] !== null){
                        chessBoard.push(<Cell key={Math.random()} bck="white" figure={chessFromProps[i][j]}/>);
                    } else{
                        chessBoard.push(<Cell key={Math.random()} bck="white" />);
                    }
                    
                }else{
                    if(chessFromProps[i][j] !== null){
                        chessBoard.push(<Cell key={Math.random()} bck="brown" figure={chessFromProps[i][j]}/>);
                    } else{
                        chessBoard.push(<Cell key={Math.random()} bck="brown" />);
                    }
                }
            }else{
                if(j%2===0){
                    
                    if(chessFromProps[i][j] !== null){
                        chessBoard.push(<Cell key={Math.random()} bck="brown" figure={chessFromProps[i][j]}/>);
                    } else{
                        chessBoard.push(<Cell key={Math.random()} bck="brown" />);
                    }
                }else{
                    
                    if(chessFromProps[i][j] !== null){
                        chessBoard.push(<Cell key={Math.random()} bck="white" figure={chessFromProps[i][j]}/>);
                    } else{
                        chessBoard.push(<Cell key={Math.random()} bck="white" />);
                    }
                }
            }  
        }
    }

    return (
        <div className="board">
            {chessBoard}
        </div>
    )
    
    
    
       
            
      
    
}

export default ChessBoard;