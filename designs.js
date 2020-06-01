// Select color input
var selectedColor;

// Select size input
var height, width;

// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(e) {
  e.preventDefault();
  height = document.getElementById("inputHeight").value; // get the enterd Grid Height
  width = document.getElementById("inputWidth").value; // get the enterd Grid width
  makeGrid();
}); // collect the height and the width and call makeGrid() when submit button is clicked

function makeGrid() {
  // this method start buliding the Grid based on the height and width stored in the previous function

  const table = document.querySelector("#pixelCanvas");
  table.innerHTML = ""; // clear the table after each method call

  // Generate the rows
  for (var row = 0; row < height; row++) {
    var tr = document.createElement("tr");
    // Generate the column
    for (var col = 0; col < width; col++) {
      tr.setAttribute("id", row); // set an id to each tr to make it unique than the others
      var td = document.createElement("td");
      tr.appendChild(td); // add the column to the row
      table.appendChild(tr);
    }
  }
  /* 
         -----------------------
        |        by using       |
        |         Jquery        | 
         -----------------------

*/
  // // Get the color ppicked by the user and apply it to the cell
  // $("td").click(function () {
  // 	selectedColor = document.getElementById("colorPicker").value;
  // 	$(this).attr("style", "background-color:" + selectedColor);
  // });

  /* 
         -----------------------
        |        by using       |
        |           Js          | 
         -----------------------

*/

  table.addEventListener("click", function(event) {
    if (event.target.nodeName === "TD") {
      selectedColor = document.getElementById("colorPicker").value;
      event.target.setAttribute("style", "background-color:" + selectedColor);
    }
  });
}
