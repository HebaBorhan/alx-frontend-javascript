export default function returnHowManyArguments(...args) {
  let i = 0;
  while (i < args.length) {
    i += 1;
  }
  return i;
}
