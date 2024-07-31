interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Heba",
    lastName: "Zaki",
    age: 36,
    location: "Egypt"
}

const student2: Student = {
    firstName: "Amr",
    lastName: "Elkady",
    age: 36,
    location: "Egypt"
}

const studentsList: Student[] = [student1, student2]

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const myTable = document.createElement('table') as HTMLTableElement;
mainElement.appendChild(myTable);

const titleRow = myTable.insertRow(0);
titleRow.insertCell(0).textContent = 'Student';
titleRow.insertCell(1).textContent = 'First Name';
titleRow.insertCell(2).textContent = 'Location';

studentsList.forEach((student, index) => {
    const row = myTable.insertRow(index + 1);
    row.insertCell(0).textContent = `Student ${index + 1}`;
    row.insertCell(1).textContent = student.firstName;
    row.insertCell(2).textContent = student.location;
});
