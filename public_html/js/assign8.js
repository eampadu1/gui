/*
**Author: Ebenezer Ampadu
**Program: assign8.js
**Description: JavaScript Program for Assignment 6
*/


/*Function generateTable: builds multiplication table*/
function generateTable() {
var mTable = null;
mTable = document.getElementById("multTable");

var col_start = Number(rfirst);
var col_end = Number(rend);
var row_start = Number(cfirst);
var row_end = Number(cend);

/*Input Validation*/
if (parseInt(col_start) >= parseInt(col_end)) {
document.getElementById("err").innerHTML = "Error: Horizontal Start Entry is Greater than Horizontal End Entry";
return;
}

if (parseInt(row_start) >= parseInt(row_end)) {
document.getElementById("err").innerHTML = "Error: Vertical Start Entry is Greater than Vertical End Entry";
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

col_start = 0;
col_end = 0;
row_start = 0;
row_end = 0;
return;
};

/* End of Function*/
