interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Mathieu",
  lastName: "Mjr",
  age: 33,
  location: "France",
};

const student2: Student = {
  firstName: "Tristan",
  lastName: "Martinez",
  age: 24,
  location: "France",
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

studentsList.forEach((student: Student) => {
const tr: HTMLTableRowElement = document.createElement("tr");
table.appendChild(tr);
const td1: HTMLTableCellElement = document.createElement('td');
td1.innerText = student.firstName;
const td2: HTMLTableCellElement = document.createElement('td');
td2.innerText = student.location;
tr.appendChild(td1);
tr.appendChild(td2);
});

document.body.appendChild(table);