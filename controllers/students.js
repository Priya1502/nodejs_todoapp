import { v4 as uuidv4 } from "uuid";
let students = [];
// return all students
export const getstudents = (req, res) => {
  res.send(students);
};

export const createstudent = (req, res) => {
  const student = req.body;

  students.push({ ...student, id: uuidv4() });
  res.send(`student with the name ${students[0].id} added to the database!`);
};

export const getstudent = (req, res) => {
  const { id } = req.params;
  const foundstudent = students.find((student) => student.id === id);
  res.send(foundstudent);
};

export const deletestudent = (req, res) => {
  const { id } = req.params;

  students = students.filter((student) => student.id !== id);
  res.send(`student with the id ${id} deleted from the database.${students.length} `);
};
export const updatestudent = (req, res) => {
  const { id } = req.params;
  const student = students.find((student) => student.id === id);
  if (student) {
    const { firstName, lastName, rollno, year, gender  } = req.body;

    if (firstName) student.firstName = firstName;
    if (lastName) student.lastName = lastName;
    if (rollno) student.rollno= rollno;
    if (year) student.year = year;
    if (gender) student.gender = gender;
    res.send(`student with the id ${id} has been updated`);
  } else {
    res.send(`student with the id ${id} not found`);
  }
};
