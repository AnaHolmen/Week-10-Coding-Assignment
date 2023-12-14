function btnClickAppend() {
  // Get input values
  let name = document.getElementById("inputName").value;
  let phone = document.getElementById("inputPhone").value;
  let position = document.getElementById("inputPosition").value;
  console.log(name, phone, position);

  // Validate inputs

  // Create a new row for the table
  let newRow = document.createElement("tr");

  // Create cells for the row
  let nameCell = document.createElement("td");
  let phoneCell = document.createElement("td");
  let positionCell = document.createElement("td");
  let removeCell = document.createElement("td");

  // Set values for the cells
  nameCell.textContent = name;
  phoneCell.textContent = phone;
  positionCell.textContent = position;
  removeCell.innerHTML =
    '<button class="btn btn-danger" onclick="removeRow(this)">Remove</button>';

  // Append cells to the row
  newRow.appendChild(nameCell);
  newRow.appendChild(phoneCell);
  newRow.appendChild(positionCell);
  newRow.appendChild(removeCell);

  console.log(nameCell, phoneCell, positionCell);

  // Append the row to the table
  let tableBody = document.querySelector(".table-dark  tbody");
  console.log("tableBody:", tableBody);
  tableBody.appendChild(newRow);

  // Clear input fields
  document.getElementById("inputName").value = "";
  document.getElementById("inputPhone").value = "";
  document.getElementById("inputPosition").value = "";
  console.log("inputName", "inputPhone", "inputphone");
}

// Function to remove a row
function removeRow(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
