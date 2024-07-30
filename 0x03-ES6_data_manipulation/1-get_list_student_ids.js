export default function getListStudentIds(newArray) {
  if (!Array.isArray(newArray)) {
    return [];
  }

  const myList = newArray.map((myId) => myId.id);
  return myList;
}
