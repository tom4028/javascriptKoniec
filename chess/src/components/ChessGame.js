import React, { Component } from 'react';

import ChessTable from './ChessTable';

import Chessboard from './ChessBoard';

import PossibleMoveKing from './possibleMoveKing';
import PossibleMoveQueen from './possibleMoveQueen';
import PossibleMoveTower from './possibleMoveTower';
import PossibleMoveBishop from './possibleMoveBishop';
import PossibleMoveKnight from './possibleMoveKnight';


class ChessGame extends Component {
    state = {
        newGame:false,
        gameIsContinue:true,
        gameResult:'',
        chessBoard:ChessTable(),
        chessMans: ['K','Q','T','Kn','B'],
        randomFirstFigure:{
            name:'',
            PosX:null,
            PosY:null,
            possibleMoves:[]
        },
        nextFigures:[]

     }

     newGame= ()=>{

        let rndFigure = this.state.chessMans[Math.floor(Math.random()*this.state.chessMans.length)];
        let posX = Math.floor(Math.random()*8);
        let posY = Math.floor(Math.random()*8);
        let tempChessBoard = this.state.chessBoard;
        tempChessBoard[posX][posY] = rndFigure;
        //if King First figure
        if(rndFigure==='K'){
            let tempPossibleMoveKing = PossibleMoveKing({x:posX,y:posY});
            this.setState({
                newGame:true,
                randomFirstFigure:{
                    name:rndFigure,
                    PosX:posX,
                    PosY:posY,
                    possibleMoves:tempPossibleMoveKing
                },
                chessBoard:tempChessBoard
            })
        }
        if(rndFigure==='Q'){
            let tempPossibleMoveQueen = PossibleMoveQueen({x:posX,y:posY});
            this.setState({
                newGame:true,
                randomFirstFigure:{
                    name:rndFigure,
                        PosX:posX,
                        PosY:posY,
                        possibleMoves:tempPossibleMoveQueen
                    },
                    chessBoard:tempChessBoard
                })
            }
        if(rndFigure==='T'){
                let tempPossibleMoveTower = PossibleMoveTower({x:posX,y:posY});
                console.log("Tower moves",tempPossibleMoveTower)
                this.setState({
                    newGame:true,
                    randomFirstFigure:{
                        name:rndFigure,
                            PosX:posX,
                            PosY:posY,
                            possibleMoves:tempPossibleMoveTower
                        },
                        chessBoard:tempChessBoard
                    })
        }
        if(rndFigure==='B'){
            let tempPossibleMoveBishop = PossibleMoveBishop({x:posX,y:posY});
            this.setState({
                newGame:true,
                randomFirstFigure:{
                    name:rndFigure,
                        PosX:posX,
                        PosY:posY,
                        possibleMoves:tempPossibleMoveBishop
                    },
                    chessBoard:tempChessBoard
                })
        }
        if(rndFigure==='Kn'){
            let tempPossibleMoveKnight = PossibleMoveKnight({x:posX,y:posY});
            this.setState({
                newGame:true,
                randomFirstFigure:{
                    name:rndFigure,
                        PosX:posX,
                        PosY:posY,
                        possibleMoves:tempPossibleMoveKnight
                    },
                    chessBoard:tempChessBoard
                })
        }      
     }

     resetGame = ()=>{
        this.setState({
            newGame:false,
            gameIsContinue:true,
            gameResult:'',
            chessBoard:ChessTable(),
            chessMans: ['K','Q','T','Kn','B'],
            randomFirstFigure:{
                name:'',
                PosX:null,
                PosY:null,
                possibleMoves:[]
            },
            nextFigures:[]
        })
    }

     addNewFigure =()=>{
         let nextFigure={
             name:'',
             PosX:null,
             PosY:null,
             possibleMoves:[]
         }
        //let tempNextFigures = [];
        let tempChessBoard = this.state.chessBoard;
        let rndFigure = this.state.chessMans[Math.floor(Math.random()*this.state.chessMans.length)];
        
        let firstFigure = this.state.randomFirstFigure;
        let posX = null;
        let posY = null;

         //Check if current position doesnt match to firstFigure
         let checkedPos = this.checkPos(firstFigure);
         console.log("CheckedPos",checkedPos);
         posX = checkedPos[0];
         posY = checkedPos[1];
            
                nextFigure.name=rndFigure;
                nextFigure.PosX = posX;
                nextFigure.PosY = posY;
                if(rndFigure === 'K'){
                    nextFigure.possibleMoves = PossibleMoveKing({x:posX,y:posY});
                }
                if(rndFigure ==='Q'){
                    nextFigure.possibleMoves = PossibleMoveQueen({x:posX,y:posY});
                }
                if(rndFigure==='T'){
                    nextFigure.possibleMoves = PossibleMoveTower({x:posX,y:posY});
                }
                if(rndFigure==='B'){
                    nextFigure.possibleMoves = PossibleMoveBishop({x:posX,y:posY});
                }
                if(rndFigure==='Kn'){
                    nextFigure.possibleMoves = PossibleMoveKnight({x:posX,y:posY});
                }
                
                //tempNextFigures.push(nextFigure);
                console.log("Length of nextFigures:",this.state.nextFigures.length);
                tempChessBoard[posX][posY] = rndFigure;

                this.setState(prevState=>{
                    return {
                        gameIsContinue:gameContinue,
                        gameResult:tempGameResult,
                        chessBoard:tempChessBoard,
                        nextFigures:[...prevState.nextFigures,nextFigure]
                    }
                });
                console.log("Length of nextFigures:",this.state.nextFigures);
            
        
        //----------------------------------Game------------------------
            const  firstFigureMoves = this.state.randomFirstFigure.possibleMoves;
            
            //const nextFigureMoves = nextFigure.possibleMoves;
            let tempGameResult = '';
            let gameContinue = this.state.gameIsContinue;
            for(let p in firstFigureMoves){
                 let p1 = firstFigureMoves[p].x;
                 let p2 = firstFigureMoves[p].y;
                //  console.log(p1,'-',nextFigure.PosX);
                //  console.log(p2,'-',nextFigure.PosY);
                //  console.log('----------------------');
                 
                 if(p1 ===nextFigure.PosX && p2===nextFigure.PosY){
                    gameContinue = false;
                    tempGameResult = `Result: ${this.state.randomFirstFigure.name} beat ${nextFigure.name}`;
                    
                 }
                
            }

            
     }

     mainGame=()=>{

     }

     //helper function

     checkPos=(f)=>{
         
        
        let pX = Math.floor(Math.random()*8);
        let pY = Math.floor(Math.random()*8);
        if(pX===f.PosX && pY===f.PosY){
            return this.checkPos(f);
        }
        
        let indexPos = this.state.nextFigures.findIndex(nF=>{
            return nF.PosX ===pX && nF.PosY ===pY
        })
        console.log(indexPos);
        if(indexPos === -1){
            return [pX,pY];
        }
        return this.checkPos(f);
        
        
        
     }

     

     
    render() {
        // console.log("state",this.state);
        // console.log("Figure mOves:",this.state.randomFirstFigure.possibleMoves);
        //console.log("nextFigures",this.state.nextFigures);
        console.log("gameISContinue",this.state.gameIsContinue);
        return (
            <div className="game">
                
                <Chessboard newChessBoard={this.state.chessBoard}/>
                
                
                
                <div className="buttons">
                    {this.state.newGame ? <button disabled={this.state.newGame} onClick={()=>this.newGame()}>New Game</button> : <button onClick={()=>this.newGame()}>New Game</button>}
                    { (!this.state.newGame || !this.state.gameIsContinue) ? <button disabled={true} onClick={this.addNewFigure} >Add New Figure</button> :<button onClick={this.addNewFigure} >Add New Figure</button>}
                    <button onClick={this.resetGame}>Reset Game</button>
                </div>
                <hr></hr>
                {!this.state.gameIsContinue ? <p>{this.state.gameResult}</p>: <p>{this.state.gameResult}</p>}
            </div>
        );
    }
}

export default ChessGame;