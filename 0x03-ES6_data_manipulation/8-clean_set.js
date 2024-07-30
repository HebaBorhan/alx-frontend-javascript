export default function cleanSet(mySet, startingString) {
  if (startingString === '') {
    return '';
  }

  // Convert Set to array and filter values with startingString
  const filteredValues = [...mySet].filter((value) => value.startsWith(startingString));

  // Remove startingString from each filtered value
  const newValues = filteredValues.map((value) => value.slice(startingString.length));

  // Join newvalues with '-' separator
  return newValues.join('-');
}
