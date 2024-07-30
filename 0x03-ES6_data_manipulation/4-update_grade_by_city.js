export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentCity = students.filter((student) => student.location === city);

  const gradesArray = studentCity.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);

    return {
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });

  return gradesArray;
}
