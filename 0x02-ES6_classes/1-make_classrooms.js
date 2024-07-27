import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const maxStudentsSizeOne = new ClassRoom(19);
  const maxStudentsSizeTwo = new ClassRoom(20);
  const maxStudentsSizeThree = new ClassRoom(34);

  const myArray = [maxStudentsSizeOne, maxStudentsSizeTwo, maxStudentsSizeThree];
  return myArray;
}
