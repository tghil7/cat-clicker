var friskyCt = 0;
var chewieCt = 0;

$(function(){
var selection = document.getElementById("mySelect").value; 
$("#big").prepend(selection);
document.getElementById("selectedCat").src = "img/" + selection;


function makeCount(){
  $('#big').click(function(e) {
  if (selection == "Frisky"){
	   count = friskyCt;
	  }
  else if (selection == "Chewie") {
	    count = chewieCt;
	  }
  //the element has been clicked... do stuff here
  myCount = count + 1;
  $('#count').val(myCount);
  return myCount;
   });   
  }
  
  if (selection == "Frisky"){
     var friskyCt = makeCount();
   }
   else if (selection == "Chewie"){
     var chewieCt = makeCount();
   }
});
