/* Closure

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Closure

Closure is when a function “remembers” its
lexical scope even when the function is
executed outside that lexical scope.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Closure

function ask(question) {
  setTimeout(function waitASec() {
    console.log(question);
  }, 100);
}

ask("What is closure?");
// What is closure?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Closure

function ask(question) {
  return function holdYourQuestion() {
    console.log(question);
  }
}

var myQuestion = ask("What is closure?");

// ..

myQuestion(); // What is closure?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Closure: NOT capturing a value

var teacher = "Kyle";

var myTeacher = function() {
  console.log(teacher);
}

teacher = "Suzy";

myTeacher();  // ?? Suzy

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Closure: loops

for(var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, i * 1000);
}

// i: 4
// i: 4
// i: 4

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Closure: loops

for(var i = 1; i <= 3; i++) {
  let j = i;
  setTimeout(function() {
    console.log(`j: ${j}`);
  }, j * 1000);
}

// j: 1
// j: 2
// j: 3

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Closure: loops

for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(`i: ${i}`);
  }, i * 1000);
}

// i: 1
// i: 2
// i: 3

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Modules

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Namespace, NOT a module

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

workshop.ask("Is this a module?");
// Kyle Is this a module?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Modules encapsulate data and behavior
(methods) together. The state (data) of a
module is held by its methods via closure.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Classic/Revealing module pattern

var workshop = (function Module(teacher){
  var publicAPI = {ask, };
  return publicAPI;

  // **********

  function ask(question) {
    console.log(teacher, question);
  }
})("Kyle");

workshop.ask("It's a module, right?");
// Kyle It's a module, right?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Module Factory

var workshop = (function Module(teacher){
  var publicAPI = {ask, };
--> return publicAPI;
|
|  // **********
|
|  function ask(question) {
|    console.log(teacher, question);
|  }
| })("Kyle");
|
workshop.ask("It's a module, right?");
// Kyle It's a module, right?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES6 module pattern

// workshop.mjs
var teacher = "Kyle";

export default function ask(question) {
  console.log(teacher, question);
};

//
import ask from "workshop.mjs";

ask("It's a default import, right?");
// Kyle It's a default import, right?

import * as workshop from "workshop.mjs";

workshop.ask("It's a namespace import, right?");
// Kyle It's a namespace import, right?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
