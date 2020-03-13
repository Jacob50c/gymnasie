

// choiceBox

var situation = ["Div1", "Div2", "Div3", "Div4", "Div5"];
function Visibility(divId)
{
  console.log(divId);
  for (var i = 0; i < situation.length; i++) {
    if (situation[i] === divId)  { console.log(divId); document.getElementById(divId).style.display = "block"; }
    else { document.getElementById(divId).style.display = "none"; }
  }
}






/*
var divs = ["Div1", "Div2", "Div3", "Div4"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  }
  else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}


function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
*/
