function showBoard(){
	let board = [
		['1','2','3'],
		['4','5','6'],
		['7','8','9']
	];
}

function player(name, marker){
	this.name = name;
	this.marker = marker;
}

function createPlayers(){
	const player1= new player("player1","X");
	const player2= new player("player2","O");
	console.log(player1,player2);
	return player

}
createPlayers();

function makeMove(){
	let board =showBoard();
	console.log(board);
}	
makeMove()