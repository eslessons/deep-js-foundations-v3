/* Coercion

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

7 Abstract Operations

  These operations are not a part of the ECMAScript 
language; they are defined here to solely to aid
the specification of the semantics of the ECMAScript
language. Other, more specialized abstract operations
are defined throughout this specification.

7.1 Type Conversion

  The ECMAScript language implicitly performs 
automatic type conversion as needed. To clarify 
the semantics of certain constructs it is useful 
to define a set of conversion abstract operations.
  The conversion abstract operations are polymorphic;
they can accept a value of any ECMAScript language
type. But no other specification types are used with
these operation.

(aka "coercion")

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations

ToPrimitive(hint) (7.1.1)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations: ToPrimitive

hint: "number"      hint: "string"

valueOf()           toString()
toString()          valueOf()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations

ToString (7.1.12)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations: ToString

null        "null"
undefined   "undefined"
true        "true"
false       "false"
3.14159     "3.14159"
0           "0"
-0          "0"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations: ToString (Array/Object)

ToString (object):
ToPrimitive (string)
aka: toString() / valueOf()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations: ToString (Array)

[]                 ""

[1,2,3]            "1,2,3"

[null,undefined]   ","

[[[],[],[]],[]]    ",,,"

[,,,,]             ",,,"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations: ToString (Object)

{}                              "[object Object]"
{a:2}                           "[object Object]"
{ toString(){ return "X"; } }   "X"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations

ToNumber (7.1.3)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations: ToNumber

""          0
"0"         0
"-0"        -0
" 009 "     9
"3.14159"   3.14159
"0."        0
".0"        0
"."         NaN
"0xaf"      175

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations: ToNumber

false       0 
true        1
null        0
undefined   NaN

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations: ToNumber (Array/Object)

ToNumber (object):
ToPrimitive (number)
aka: valueOf() / toString()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations: ToNumber (Array/Object)

(for [] and {} by default):
valueOf() { return this; }
--> toString()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: ToNumber (Array)

[""]             0
["0"]            0
["-0"]           -0
[null]           0
[undefined]      0
[1,2,3]          NaN
[[[[]]]]         0

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: ToNumber (Object)

{ .. }                        NaN
{ valueOf() { return 3; } }   3

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations

ToBoolean (7.1.2)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Abstract Operations: ToBoolean

Falsy       Truthy

“”          “foo”
0, -0       23
null        { a:1 }
NaN         [1,3]
false       true
undefined   function(){..}
            ...

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion

You claim to avoid coercion
because it's evil, but...

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: we all do it...

var numStudents = 16;

console.log(`There are ${numStudents} students.`);
// "There are 16 students."

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: string concatenation (number to string)

var msg1 = "There are";
var numStudents = 16;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2);
// "There are 16 students."

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: string concatenation (number to string)

var numStudents = 16;

//                                (+"")
console.log(`There are ${numSudents+""} students`)
// "There are 16 students."

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: string concatenation (number to string)

12.8.3 The Addition Operator (+)

| NOTE    The addition operator either performs string
|         concatenation or numeric addition.

12.8.3.1 Runtime Semantics: Evaluation

AdditiveExpression : AdditiveExpression + MultiplicativeExpression

1. Let lref be the result of evaluating AdditiveExpression.
2. Let lval be ? GetValue(lref).
3. Let rref be the result of evaluating MultiplicativeExpression.
4. Let rval be ? GetValue(rref)
5. Let lprim be ? ToPrimitive(lval)
6. Let rprim be ? ToPrimitive(rval)
7. If Type(lprim) is String or Type(rprim) is String, then
    a. Let lstr be ? ToString(lprim)
    b. Let rstr be ? ToString(rprim)
    c. Return the string-concatenation of lstr and rstr.
8. Let lnum be ? ToNumber(lprim).
9. Let rnum be ? ToNumber(rprim).
10. Return the result of applying the addition operation to lnum and rnum. See the Note below 12.8.5.  

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: number to string

var numStudents = 16;

console.log(`There are ${[numStudents].join("")} students.`);
// "There are 16 students."

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: number to string

var numStudents = 16;

console.log(`There are ${numStudents.toString()} students.`);
// "There are 16 students."

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: number to string

var numStudents = 16;

console.log(`There are ${String(numStudents)} students.`);
// "There are 16 students."

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OK, OK... but, what about...?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: string to number

var numStudents = 16;

function addAStudent(numStudents) {
  return numStudents + 1;
}

addAStudent(studentsInputElem.value);
// "161" OOPS!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: string to number

var numStudents = 16;

function addAStudent(numStudents) {
  return numStudents + 1;
}

//         (+)
addAStudent(+studentsInputElem.value);
// 17

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: string to number

var numStudents = 16;

function addAStudent(numStudents) {
  return numStudents + 1;
}

//         (Number(                       ))
addAStudent(Number(studentsInputElem.value));
// 17

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: string to number

var numStudents = 16;

function kickStudentOut(numStudents) {
  return numStudents - 1;
}

kickStudentOut(studentsInputElem.value);
// 15

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yeah, but...

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: __ to boolean

Recall Falsy vs Truthy?

if(studentsInputElem.value) {
  numStudents = Number(studentsInputElem.value);
}

while(newStudents.length) {
  enrollStudent(newStudents.pop());
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: __ to boolean

if(!!studentsInputElem.value) {
  numStudents = Number(studentsInputElem.value);
}

while(newStudents.length > 0) {
  enrollStudent(newStudents.pop());
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: __ to boolean

Boolean("")       // false
Boolean(" \t\n"); // true OOPS!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: __ to boolean

if (workshop) {
  console.log(`Welcome ${student.name} to ${workshop.name}.`);
}

// ***********************

Boolean(undefined);     // false
Boolean(null);          // false
Boolean({});            // true

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ummmm.....

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: primitive to object

Boxing

if(studentNameElem.value.length > 50) {
  console.log("Student's name too long.");
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

All programming languages
have type conversions, because
it's absolutely necessary

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You use coercion in JS
whether you admit it or not,
because you have to.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Every language has type
conversion corner cases

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: corner cases

Number( "" );               // 0 OOPS!
Number( " \t\n" );          // 0 OOPS!
Number( null );             // 0 OOPS!
Number( undefined );        // NaN
Number( [] );               // 0 OOPS!
Number( [1,2,3] );          // NaN
Number( [null] );           // 0 OOPS!
Number( [undefined] );      // 0 OOPS!
Number( {} );               // NaN

String( -0 );               // "0" OOPS!
String( null);              // "null"
String( undefined );        // "undefined"
String( [null] );           // "" OOPS!
String( [undefined] );      // "" OOPS!

Boolean(new Boolean(false)) // true OOPS!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: corner cases

The Root Of All (Coercion) Evil

------------------------------------

studentsInput.value = "";

// ..

Number(studentsInput.value); // 0

------------------------------------

studentsInput.value = " \t\n";

// ..

Number(studentsInput.value); // 0

------------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: corner cases

Number(true);         // 1
Number(false);        // 0

1<2;                  // true
2<3;                  // true
1 < 2 < 3;            // true (but...)

(1<2) < 3; // >>>
(true) < 3; // >>>
1 < 3;                // true (hmm...)

// ******************************

3 > 2;                // true
2 > 1;                // true
3 > 2 > 1;            // false OOPS!

(3 > 2) > 1; // >>>
(true) > 1; // >>>
1 > 1;                // false

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
