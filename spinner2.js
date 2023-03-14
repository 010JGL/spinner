// Same thing as spinner1 but better

let count = 100;   // starting count at 100
let list = ['\r|   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r|   ','\r/   ','\r-   ','\r\\   ', '\r|   '];
// making an array so it treats the line as a block.

for (let index of list) {  // loop thru each 'block'
  
  setTimeout(() => {
    process.stdout.write(index);
  }, count);        // timeout use count, whihc increment by 200 after every loop
  
  count += 200;
  
}
//spinner1

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); // Need to escape the backslash since it's a special character.
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);