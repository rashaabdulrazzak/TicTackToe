import React,{useState} from 'react';
import Board from './Board'
import { calculateWinner } from '../helper';

const styles={
    width:'200px', 
    margin:'20px auto'
}
const Game =()=>{
    const [board,setBoard]=useState(Array(9).fill(null));
    const[xIsNext,setXisNext]=useState(true);
    const winner = calculateWinner(board);
    const handleClick =(i)=>{
        const boardCopy=[...board];
        // if user click an occupied square or if game i won return 
        if(winner || boardCopy[i]) return ;
        // put an 'x' value or 0 in the clicked square
        boardCopy[i]=xIsNext ?'X' :'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext)

     }
      const jumpTo =()=>{}
        
      
      const renderMoves =()=>(
          <button onClick={()=> setBoard(Array(9).fill(null))}>
           start game 
           </button>
      )
 return (
     <>
 <Board squares={board} onClick={handleClick} />  
 <div style={styles}>
 <p>{ winner? 'winner' + winner :'Next Player :' + (xIsNext?'X' :'O')}</p>
 {renderMoves()}
 </div>
   </>
   )
}
export default Game;