$(document).ready(init);
function init(){

	$(".tower").on("click", selectTopOfStack);

}

function selectTopOfStack (event) {
if ($("#tower1").hasClass("removed")){
	$(".removed").removeClass(".removed")
		var receivingTower = $(this).find(">:first-child")
	// if ( || )
	console.log("I would like to place in" + (receivingTower))

		$(receivingTower).append(removePiece());
}else {var selectedPiece = $(this).find(">:first-child");
		selectedPiece = selectedPiece.find(">:first-child");
		if ($(selectedPiece).hasClass("highlight")){
			$(".highlight").removeClass("highlight")	
		console.log("I just un-highlighted a piece yo")
			removePiece(selectedPiece);	
		} else {
			$(".highlight").removeClass("highlight")
			$(selectedPiece).addClass("highlight")
		console.log("ELSE I just highlighted a piece yo")
			return
		}
	}
}

function removePiece (selectedPiece) {
	console.log("removed the shit outta this piece")
	$(selectedPiece).addClass("highlight")
	$(".tower").addClass("removed");
	var removedPiece = $(selectedPiece).remove();
	console.log("...so tower1 should have a class of removed now")
	return removedPiece;
}

function placePiece(selectedTower){
		$(".removed").removeClass(".removed")
		var receivingTower = $(this).find(">:first-child")
	// if ( || )
	console.log("I would like to place in" + selectedTower)

		$(selectedTower).append(removePiece());
}


//for calc -> $().on("keypress", "MAIN OPERATOR IF ELSE FUNCTION"
// || keypress.(Charcode("ASCII KEY CODE HERE"))

// function applyRules () {
// 	if ( the selected piece is less than the top existing piece or there are no existing pices)
// 		put the piece in the box. 
// }