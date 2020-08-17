/* Advanced Scope

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

lexical scope
    dynamic scope

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: lexical

Global Scope
{{{
var teacher = "Kyle";

function otherClass() {
Scope B 
{{{  
  teacher = "Suzy";
  
  Scope A 
  {{{
    function ask(question) {
      console.log(teacher, question);
    }
  }}}

  ask("Why?");
}}}

}

}}}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: lexical

Sublime-Levels plugin.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Function Scoping

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Function Scoping

var teacher = "Kyle";

// ..

var teacher = "Suzy"
console.log(teacher);   // Suzy

// ..

console.log(teacher);   // Suzy -- oops!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Function Scoping

var teacher = "Kyle";

function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);     // Suzy
}

anotherTeacher();           // Suzy

console.log(teacher);       // Kyle

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Function Scoping

var teacher = "Kyle";

function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);     // Suzy
}

(anotherTeacher)();           // Suzy

console.log(teacher);       // Kyle

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Function Scoping: IIFE

var teacher = "Kyle";

(function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);
})() // Suzy

console.log(teacher);       // Kyle

http://benalman.com/news/2010/11/immediately-invoked-function-expression/

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Function Scoping: IIFE

var teacher = "Kyle";

(function(teacher) {
  console.log(teacher);
})("Suzy") // Suzy

console.log(teacher);       // Kyle

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Function Scoping: IIFE

var teacher;

try {
  teacher = fetchTeacher(1);
}
catch (err) {
  teacher = "Kyle"
}

// try and catch have its own scopes

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Function Scoping: IIFE

var teacher = (function getTeacher() {
  try {
    return fetchTeacher(1);
  }
  catch (err) {
    return "Kyle";
  }
})();

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Block Scoping

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Block Scoping: encapsulation

Instead of an IIFE?

var teacher = "Kyle";

( function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher); // Suzy
})();

console.log(teacher);   // Kyle

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Block Scoping: encapsulation

var teacher = "Kyle";

{
  let teacher = "Suzy";
  console.log(teacher);   // Suzy
}

console.log(teacher);     // Kyle

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Block Scoping: intent

function diff (x,y) {
  if (x > y) {
    var tmp = x;
    x = y;
    y = tmp;
  }

  return y - x;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Block Scoping: let

function diff (x, y) {
  if (x > y) {
    let tmp = x;
    x = y;
    y = tmp;
  }

  return y - x;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Block Scoping: "well, actually, not all vars..."

function repeat(fn, n) {
  var result;

  for (var i = 0; i < n; i++) {
    result = fn(result, i);
  }

  return result;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Block Scoping: let + var

function repeat (fn, n) {
  var result;

  for (let i = 0; i < n; i++) {
    result = fn (result, i);
  }

  return result;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Block Scoping: sometimes var > let

function lookupRecord(searchStr) {
  try {
    var id = getRecord(searchStr);
  }
  catch (err) {
    var id = -1;
  }

  return id;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Block Scoping: explicit let block

function formatStr(str) {
  { 
    let prefix, rest;
    prefix = str.slice(0,3);
    rest = str.slice(3);
    str = prefix.toUpperCase() + rest;
  }

  if (/^FOO:/.test( str )) {
    return str;
  }

  return str.slice( 4 );
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Block Scoping: const(antly confusing)

var teacher = "Suzy";
teacher = "Kyle";                  // OK

const myTeacher = teacher;
myTeacher = "Suzy";                // TypeError

const teachers = ["Kyle", "Suzy"]
teachers[1] = "Brian";             // Allowed!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Hoisting

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: hoisting

student;                // ??
teacher;                // ??
var student = "you";
var teacher = "Kyle";

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: hoisting

var student;
var teacher;

student;                // undefined
teacher;                // undefined
student = "you";
teacher = "Kyle";

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: hoisting

teacher();            // Kyle 
otherTeacher();       // ??

function teacher() {
  return "Kyle";
}

var otherTeacher = function() {
  return "Suzy";
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: hoisting

function teacher() {
  return "Kyle";
}

var otherTeacher;

teacher();            // Kyle 
otherTeacher();       // TypeError

otherTeacher = function() {
  return "Suzy";
};

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: hoisting

var teacher = "Kyle";
otherTeacher();           // ?? 

function otherTeacher() {
  console.log(teacher);   // (undefined)
  var teacher = "Suzy";
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope: hoisting

// var hoisting?
// usually bad :/
teacher = "Kyle";
var teacher;

// function hoisting?
// IMO actually pretty useful
getTeacher();     // Kyle

function getTeacher() {
  return teacher;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Hoisting: let gotcha

"let doesn't hoist"? false (it gives the TDZ error)

{
  teacher = "Kyle";    // TDZ error!
  let teacher;
}

var teacher = "Kyle";

{
  console.log(teacher); // TDZ error!
  let teacher = "Suzy";
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Hoisting: let gotcha

"let doesn't hoist"? false (it gives the TDZ error)

13.3.1 Let and Const Declaration

|           
| NOTE     let and const declarations define variables
|           that are scoped to the running execution
|           context's LexicalEnvironment. The variables
|           are create when their containing Lexical
|           Environment is instantiated but may not be 
|           accessed in any way until the variable's 
|           LexicalBinding is evaluated. 
|          A variable defined by a LexicalBinding with
|           an Initializer is assigned the value of its
|           Initializer's AssignmentExpression when the
|           LexicalBinding is evaluated, not when the
|           variable is created. 
|          If a LexicalBinding in a let declaration does
|           not have an Initializer the variable is 
|           assigned the value undefined when the
|           LexicalBinding is evaluated.   
|           

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
