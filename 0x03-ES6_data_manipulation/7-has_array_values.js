export default function hasValuesFromArray(mySet, myArray) {
  const checkBoolean = myArray.every((value) => mySet.has(value));
  return checkBoolean;
}
