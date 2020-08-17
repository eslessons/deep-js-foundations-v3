/* Scope

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope

• Nested Scope
• Hoisting
• Closure
• Modules

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: where to look
for things

x = 42;
console.log(y);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: sorting marbles

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope

JavaScript organizes
scopes with functions
and blocks

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope

var teacher = "Kyle";

function otherClass() {
  var teacher = "Suzy";
  console.log("Welcome!");
}

function ask() {
  var question = "Why?";
  console.log(question);
}

otherClass(); // Welcome!
ask();        // Why?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope

var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome!");
}

otherClass();       // Welcome!

teacher;            // Suzy  // ???
topic;              // React // ???

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope

"use strict"

var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  topic = "React";  // ReferenceError
  console.log("Welcome!");
}

otherClass();       

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope

var teacher = "Kyle";

function otherClass() {
  teacher = "Suzy";
  
  function ask(question) {
    console.log(teacher, question);
  }

  ask("Why?");
}

otherClass();   //  Suzy Why?
ask("????");    // ReferenceError

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope

undefined
vs.
undeclared

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope

   Global Scope
 ^   o o o o o             
 |   o o o o o    Lexical 
 |   o o o o o 
 |   o o o o o    Scope(s)
 |   o o o o o 
   Current Scope

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
