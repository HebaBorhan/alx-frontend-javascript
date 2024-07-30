export default function createInt8TypedArray(length, position, value) {
  // Create ArrayBuffer
  const buffer = new ArrayBuffer(length);

  // Create DataView for the buffer
  const view = new DataView(buffer);

  // Position Check
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set value at specific position
  view.setInt8(position, value);

  return view;
}
