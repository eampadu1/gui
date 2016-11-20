/*
**Author: Ebenezer Ampadu
**Program: assign7.js
**Description: jquery and JavaScript Program for Assignment 7
*/

/*
Function validateInput: To validate user input
var validateInput = function() {
var $tr_start = $("#t_row_start").val();
if ($tr_start < 1) {
$("#err").text('Check Horizontal Start');
return;
}
var $tr_end = $("#t_row_end").val();
if ($tr_end < 1) {
$("#err").text('Check Horizontal End');
return;
}
var $tc_start = $("#t_col_start").val();
if ($tc_start < 1) {
$("#err").text('Check Vertical Start');
return;
}
var $tc_end = $("#t_col_end").val();
if ($tc_end < 1) {
$("#err").text('Check Vertical End');
return;
}
};
*/


/*Function generateTable: builds multiplication table*/
var generateTable = function() {
var mTable = null;
mTable = document.getElementById("multTable");

var col_start = document.getElementById("t_row_start").value;
var $tr_start = $("#t_row_start").val();
if ($tr_start < 1) {
$("#err").text('Check Horizontal Start');
return;
}

var col_end = document.getElementById("t_row_end").value;
var $tr_end = $("#t_row_end").val();
if ($tr_end < 1) {
$("#err").text('Check Horizontal End');
return;
}

var row_start = document.getElementById("t_col_start").value;
var $tc_start = $("#t_col_start").val();
if ($tc_start < 1) {
$("#err").text('Check Vertical Start');
return;
}

var row_end = document.getElementById("t_col_end").value;
var $tc_end = $("#t_col_end").val();
if ($tc_end < 1) {
$("#err").text('Check Vertical End');
return;
}

var row_diff = row_end - row_start+1;
var col_diff = col_end - col_start+1;

var items = new Array(row_diff);

for (var i = 0; i <= row_diff; i = i + 1) {
items[i] = new Array(col_diff);
items[i] = mTable.insertRow(i);
 
 for (var j=0; j <= col_diff; j = j + 1) {
  items[i][j] = items[i].insertCell(j);

  items[0][0].innerHTML = " ";
  items[0][j].innerHTML = parseInt(j) + parseInt(col_start-1);
  items[i][0].innerHTML = parseInt(i) + parseInt(row_start-1);
  items[i][j].innerHTML = (parseInt(i) + parseInt(row_start-1)) * (parseInt(j) + 
  parseInt(col_start-1));
  }
 }

return;
};

/* End of Function*/
