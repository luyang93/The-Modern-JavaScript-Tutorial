// π say.js
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

export function becomeSilent() { }

export {sayHi, sayBye}; // ε―ΌεΊειεθ‘¨

export {sayHi as hi, sayBye as bye};

export {sayHi as default};
