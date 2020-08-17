/* Scope & Function Expressions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: which scope?

function teacher() { // ..  }

var myTeacher = function anotherTeacher() {
  console.log(anotherTeacher);
}

console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher);  // ReferenceError

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Named Function Expressions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Named Function Expressions

var clickHandler = function() {
  // ..
};

var keyHandler = function keyHandler() {
  // ..
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Named Function Expressions: Benefits

1. Reliable function self-reference (recursion, etc)
2. More debuggable stack traces
3. More self-documenting code

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Named Function Expressions vs. Anonymous Arrow Functions

var ids = people.map(person => person.id);
var ids = people.map(function getId(person){
  return person.id;
})

// *********************

getPerson()
.then(person => getData(person.id))
.then(renderData);

getPerson(function getDataFrom(person){
  return getData(person.id);
})
.then(renderData);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Named (Arrow) Function Expressions? Still no...

var getId = person => person.id;
var ids = people.map(getId);

// ******************

var getDataFrom = person => getData(person.id);
getPerson()
.then(getDataFrom)
.then(renderData);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(Named) Function Declaration
>
Named Function Expression
>
Anonymous Function Expression

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/