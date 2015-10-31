$(document).ready(init);
function init () {



	$(".tower").on("click", selectTopOfStack);
 // $("#tower3").on("click", checkForVictory);

}

	var countOfMoves = 0; 

function selectTopOfStack(event){
			var selectedDisc = $($(this).children()[0]);
			var discsDataSize= $(this).find(">:first-child").data("size");
			console.log("S D:", selectedDisc, "S D S:", discsDataSize);
			var lilBroSize = $(this).find(">:nth-child(2)").data("size");
			console.log("LBS:", lilBroSize);
 			// if the class "highlight has been applied to any of the boxes switch the highlighting
 			  if  ( $(selectedDisc).hasClass("highlight")){
 						console.log("I deselecting the other disc and selecting this new one")
 			  		$(".highlight").removeClass("highlight");
		  	} 
		  	// otherwise just add the class highlight ... so there is only ever one highlighted disc
		  	else {
		  		$(selectedDisc).addClass("highlight");
		  		console.log("This is my first highlight")
		  	}
		  //if the class removed has not been applied
		 // if the selected disc is already highlighted
		 // execute the function to remove selectedDisc from the document (and store it wherever removed things go)
		 // add the class removed so it now has both highlight and remove and should on third
		 // click advance to else statement
		  	function removeOrPlaceDisc () {
		  	if  ( $(selectedDisc).hasClass("highlight") && $(selectedDisc).hasClass("removed")) {
		  		console.log("I am placing the disc")
	 				countOfMoves ++; 
						// when selected thing has the class remove and also the class highlight then 
						// execute the function to append the new tower
						// with the remove the classes and append it to the tower that was just
						// clicked ... but only if there is no disc in there already (ie lilBroSize does not
						// return a truthy value or at least
						// not already a smaller disc than the
						// current disc. ... otherwise player will remain in this state (ie have these)
						// two classes and just keep clicking until they find a tower that fits
						// within those parameters
 				if((! lilBroSize || discsDataSize < lilBroSize )){
 				$("this").append(removedDisc);
 				}
			} else  {
 				var removedDisc =	$(selectedDisc).addClass("removed").detach();   
 			}
 		}
};


// by the way, if tower# was the tower that was just clicked
// have a quick look to see if you've manage to get all three
// discs in there... if all three are there then you won
// function checkForVictory(){
//  if ( tower3 has 3 child elements in it  )
//  	declareVictory;
// }


function declareVictory (){
	$("#winner").removeClass("invisible");
	$("body").css("background-color", "orange");
}


