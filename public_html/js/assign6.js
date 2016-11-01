/*
**Author: Ebenezer Ampadu
**Program: assign6.js
**Description: JavaScript Program for Assignment 6
*/

/*Function generateTable: builds multiplication table*/

var generateTable = function() {
var mTable = null;
mTable = document.getElementById("multTable");

var col_start = document.getElementById("t_row_start").value;
var col_end = document.getElementById("t_row_end").value;

var row_start = document.getElementById("t_col_start").value;
var row_end = document.getElementById("t_col_end").value;

/*Input Validation: 1 - 50*/
if ((parseInt(col_start) < 1) || (parseInt(col_start) > 50)) {
document.getElementById("err").innerHTML = "Error: Horizontal Start Value";
return;
}

if ((parseInt(col_end) < 1) || (parseInt(col_end) > 50)) {
document.getElementById("err").innerHTML = "Error: Horizontal Input";
return;
}

if ((parseInt(row_start) < 1) || (parseInt(row_start) > 50)) {
document.getElementById("err").innerHTML = "Error: Vertical Input";
return;
}

if ((parseInt(row_end) < 1) || (parseInt(row_end) > 50)) {
document.getElementById("err").innerHTML = "Error: Vertical Input";
return;
}

var row_diff = row_end - row_start+1;
var col_diff = col_end - col_start+1;

var items = new Array(row_diff);
var i;
var j;

for (i = 0; i <= row_diff; i = i + 1) {
items[i] = new Array(col_diff);
items[i] = mTable.insertRow(i);
 
 for (j=0; j <= col_diff; j = j + 1) {
  items[i][j] = items[i].insertCell(j);

  items[0][0].innerHTML = " ";
  items[0][j].innerHTML = parseInt(j) + parseInt(col_start-1);
  items[i][0].innerHTML = parseInt(i) + parseInt(row_start-1);
  items[i][j].innerHTML = (parseInt(i) + parseInt(row_start-1)) * (parseInt(j) + 
  parseInt(col_start-1));
  }
 }

for (i = 0; i <= row_diff; i = i + 1) {
 for (j = 0; j <= col_diff; j = j + 1) {
 items[i][j] = undefined;
 }
}
  return;
};



