

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
	let move= playerMove();
	console.log(move);


}

showBoard();

function playerMove(){
	let move = Math.floor(Math.random()*10)
	return move;
}
