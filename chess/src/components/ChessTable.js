
const ChessTable = ()=>{

    const chessBoard = [];

    for(let i=0;i<8;i++){
        let temp = [];
        for(let j=0;j<8;j++){
            temp.push(null);
        }
        chessBoard.push(temp);
        }

    return chessBoard;
}
// const tab = ChessTable();
// tab[0][0]='K';
// console.log(tab);
export default ChessTable;