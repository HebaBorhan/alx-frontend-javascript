var student1 = {
    firstName: "Heba",
    lastName: "Zaki",
    age: 36,
    location: "Egypt"
};
var student2 = {
    firstName: "Amr",
    lastName: "Elkady",
    age: 36,
    location: "Egypt"
};
var studentsList = [student1, student2];
var mainElement = document.createElement('div');
document.body.appendChild(mainElement);
var myTable = document.createElement('table');
mainElement.appendChild(myTable);
var titleRow = myTable.insertRow(0);
titleRow.insertCell(0).textContent = 'Student';
titleRow.insertCell(1).textContent = 'First Name';
titleRow.insertCell(2).textContent = 'Location';
studentsList.forEach(function (student, index) {
    var row = myTable.insertRow(index + 1);
    row.insertCell(0).textContent = "Student ".concat(index + 1);
    row.insertCell(1).textContent = student.firstName;
    row.insertCell(2).textContent = student.location;
});
