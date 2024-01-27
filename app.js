

function player(name, marker){
	this.name = name;
	this.marker = marker;
}

function createPlayers(){
	const player1= new player("player1","X");
	const player2= new player("player2","O");
	return {player1, player2}

}
	
function showBoard(){
	let board = [
		['1','2','3'],
		['4','5','6'],
		['7','8','9']
	];
	let {player1, player2} = createPlayers();
	console.log(player1, player2);
	let move= playerMove().toString();

	console.log(move);
	let positionIndex = findPositionIndex(board, move);
	let row =positionIndex[0], col = positionIndex[1];
	board[row][col]= "X"
	console.log(board);


}

showBoard();

function playerMove(){
	let move = Math.floor(Math.random()*10)
	return move;
}

function findPositionIndex(board,move){
	let  positionIndex = [].concat.apply([], board).indexOf(move);
	if(positionIndex === -1){
		return false;
	}
	numColumns = board[0].length;
	row = parseInt(positionIndex / numColumns);
	col = positionIndex % numColumns;
	return [row, col];
}
