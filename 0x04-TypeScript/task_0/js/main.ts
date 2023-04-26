/**
 * Create a student interface
 */
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

/**
 * Create 2 student objects
 */
const student1: Student = {
	firstName: 'Emmy',
	lastName: 'West',
	age: 40,
	location: 'Gamerz Republik',
};

const student2: Student = {
	firstName: 'Tee',
	lastName: 'Mama',
	age: 4,
	location: 'Republik of Gamers',
};

// add the students to an array
const studentsList = [student1, student2];

// console.log(studentsList);
const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
