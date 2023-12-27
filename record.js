// fill in javascript code here

function addEmployee() {
    // Get form values
    const name = document.getElementById('name').value;
    const employeeId = document.getElementById('employeeId').value;
    const department = document.getElementById('department').value;
    const experience = parseInt(document.getElementById('experience').value);
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Determine role based on experience
    let role;
    if (experience > 5) {
        role = 'Senior';
    } else if (experience >= 2 && experience <= 5) {
        role = 'Junior';
    } else {
        role = 'Fresher';
    }

    // Create table row and append to table body
    const tableBody = document.getElementById('employeeTableBody');
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${employeeId}</td>
        <td>${department}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${role}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;

    // Clear form fields after submission
    document.getElementById('employeeForm').reset();
}

function deleteRow(button) {
    // Get the row index to be deleted
    const rowIndex = button.parentNode.parentNode.rowIndex;

    // Remove the row from the table
    document.getElementById('employeeTableBody').deleteRow(rowIndex);
}