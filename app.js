const playerOneName=  document.querySelector("#playerOneName");
const playerTwoName=  document.querySelector("#playerTwoName");

function player(name, marker){
	this.name = name;
	this.marker = marker;
}

function createPlayers(){
	const player1= new player("player1","X");
	const player2= new player("player2","O");
	return {player1, player2}

}
	
function startGame(){
	let board = [
		['1','2','3'],
		['4','5','6'],
		['7','8','9']
	];
	let {player1, player2} = createPlayers();
	player1.name= playerOneName.value;
	player2.name= playerTwoName.value;
	console.log(player1.name , player2.name);


}


function playerMove(player){
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
