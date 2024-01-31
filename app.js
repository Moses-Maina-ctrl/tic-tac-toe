const playerOneName=  document.querySelector("#playerOneName");
const playerTwoName=  document.querySelector("#playerTwoName");
const form = document.querySelector(".gameStart");
const gameBoard = document.querySelector(".load");
const cell = document.querySelector(".cell")

let board = [
		['','',''],
		['','',''],
		['','','']
	];
let player1Turn = true;

function player(name, marker, color){

	this.name = name;
	this.marker = marker;
	this.color = color;
}

function createPlayers(){
	const player1= new player("player1","X","#3498db");
	const player2= new player("player2","O","#2ecc71");
	return {player1, player2}

}
	
function startGame(){
showBoard();
}
;
function showBoard(){
	form.style.display = 'none';
	gameBoard.style.display = 'block'
}

function changeTurn(){
	player1Turn = !player1Turn
}

function updateGame(r,c,element){
	let {player1, player2} = createPlayers();
	player1.name= playerOneName.value;
	player2.name= playerTwoName.value;
	if (player1.name ==''){
		player1.name="Player 1";
	}
	if (player2.name==''){
		player2.name="Player 2";
	}

	const currentPlayer = player1Turn ? player1 :player2
	console.log(`currentPlayer: ${currentPlayer.name}`)
	console.log(player1.name, player2.name);
	if( board[r][c] == ''){
		board[r][c] = currentPlayer.marker;
		element.style.color = currentPlayer.color;
		element.innerHTML +=  currentPlayer.marker
		console.log(board)
		if (checkWin(currentPlayer.marker)){
			alert(currentPlayer.name + 'wins!');
		}else{
			changeTurn()
		}
		
	}
	console.log(`Players Turn : ${currentPlayer.name}`)
} 

function checkRows(currentPlayerMove){
	for(let i=0;i<3;i++){
		if(board[i][0]=== currentPlayerMove && board[i][1]===currentPlayerMove && board[i][2] === currentPlayerMove){
			return true;
		}
	}
}

function checkColumns(currentPlayerMove){
	for(let i= 0;i<3;i++){
		if(board[0][i] ===currentPlayerMove && board[1][i]=== currentPlayerMove && board[2][i]=== currentPlayerMove){
			return true;
		} 
	}

}

function checkDiagonal(currentPlayerMove){
	if (
		(board[0][0] === currentPlayerMove && board[1][1] === currentPlayerMove && board[2][2] ===currentPlayerMove) ||
		(board[0][2] === currentPlayerMove && board[1][1] === currentPlayerMove && board[2][0] === currentPlayerMove)
	){
		return true;
	}
}

function checkWin(currentPlayerMove){
	return checkRows(currentPlayerMove) || checkColumns(currentPlayerMove) || checkDiagonal(currentPlayerMove);
}
