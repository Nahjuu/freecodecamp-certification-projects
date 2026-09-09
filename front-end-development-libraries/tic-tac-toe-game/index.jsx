const { useState } = React;

export function Board() {
  const [squareArr, setSquareArr] = useState(new Array(9).fill(null));
  const [fillSquare, setFillSquare] = useState(true);

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]  
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; 
      }
    }
    return null; 
  }

  
  const winner = calculateWinner(squareArr);
  const isDraw = !winner && !squareArr.includes(null);
  
  
  let message;
  if (winner) {
    message = `Winner: ${winner}`;
  } else if (isDraw) {
    message = "It's a draw!";
  } else {
    message = `Next player: ${fillSquare ? 'X' : 'O'}`;
  }

  function handleClick(index) {
    
    if (squareArr[index] || winner) return;

    const copySquareArr = squareArr.slice();
    copySquareArr[index] = fillSquare ? 'X' : 'O'; 
    setSquareArr(copySquareArr);
    setFillSquare(!fillSquare);
  }

  function resetClick() {
    setSquareArr(Array(9).fill(null));
    setFillSquare(true); 
  }

  
  const renderSquare = (i) => (
    <button onClick={() => handleClick(i)} className="square">
      {squareArr[i]}
    </button>
  );

  return ( 
    <>
      <p>{message}</p>
      
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      
      <br/><br/>
      <button onClick={resetClick} id="reset">RESET</button>
    </> 
  );
}
