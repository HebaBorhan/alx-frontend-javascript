export default function getStudentIdsSum(studentsList) {
  const sumIds = studentsList.reduce((accumulator, current) => accumulator + current.id, 0);

  return sumIds;
}
