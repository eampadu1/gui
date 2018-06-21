//Author: Ebenezer Ampadu
//Program: assign7.js
//Description: jquery is used to do the validation of the form fields

//Function generateTable: builds multiplication table; Mixed jquery and JavaScript

var generateTable = function() {
var mTable = null;
mTable = document.getElementById("multTable");

var col_start = document.getElementById("t_row_start").value;
var col_end = document.getElementById("t_row_end").value;
var row_start = document.getElementById("t_col_start").value;
var row_end = document.getElementById("t_col_end").value;

var $col_start = col_start;
if ($col_start < 1) {
$("#err").text('Error: Horizontal Start Entry is Less than 1');
return;
}

var $col_end = col_end;
if ($col_end < 1) {
$("#err").text('Error: Horizontal End Entry is Less than 1');
return;
}

if ($col_start >= $col_end) {
$("#err").text('Error: Horizontal Start Entry must be less than Horizontal End Entry');
return;
}

var $row_start = row_start;
if ($row_start < 1) {
$("#err").text('Error: Vertical Start Entry is Less than 1');
return;
}

var $row_end = row_end;
if ($row_end < 1) {
$("#err").text('Error: Vertical End Entry is Less than 1');
return;
}

if ($row_start >= $row_end) {
$("#err").text('Error: Vertical Start Entry must be less than Vertical End Entry');
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

 $col_start =0;
 $row_start = 0;
$row_end = 0;
$col_end = 0;


return;
};

/* End of Function*/
