/* Static Typing

TypeScript, Flow, and
type-aware linting

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Benefits:
1. Catch type-related mistakes
2. Communicate type intent
3. Provide IDE feedback

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Caveats:
1. Inferencing is best-guess, not a
guarantee
2. Annotations are optional
3. Any part of the application that
isn't typed introduces uncertainty

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Type-Aware Linting: inferencing

TypeScript & Flow

var teacher = "Kyle";

// ..

teacher = { name: "Kyle" };
// Error: can't assign object to 
// string

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Type-Aware Linting: annotating

TypeScript & Flow

var teacher: string = "Kyle";

// ..

teacher = { name: "Kyle" };
// Error: can't assign object to 
// string

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Type-Aware Linting: custom types & signatures

TypeScript & Flow

type student = { name: string };

function getName(studentRec: student): string {
  return studentRec.name;
}

var firstStudent: student = { name: "Frank" };

var firstStudentName: string = getName(firstStudent);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Type-Aware Linting: validating operand types

TypeScript & Flow

var studentName: string = "Frank";

var studentCount: number = 16 - studentName;
// error: can't substract string

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Type-Aware Linting: TypeScript vs. Flow

https://github.com/niieani/typescript-vs-flowtype

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript & Flow:
Pros and Cons

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript/Flow: Pros

They make types more
obvious in code

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript/Flow: Pros

Familiarity: they look like other
language's type systems

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript/Flow: Pros

Extremely popular these days

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript/Flow: Pros

They're very sophisticated and
good at what they do

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript/Flow: Cons

They use "non-JS-standard"
syntax (or code comments)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript/Flow: Cons

They require* a build process,
which raises the barrier to entry

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript/Flow: Cons

Their sophistication can be
intimidating to those without
prior formal types experience

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript/Flow: Cons

They focus more on "static
types" (variables, parameters,
returns, properties, etc) than
value types

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript/Flow: Cons

The only way to have confidence
over the runtime behavior is to
limit/eliminate dynamic typing

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Alternative?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Typl
https://github.com/getify/Typl

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Motivations:
1. Only standard JS syntax
2. Compiler and Runtime (both optional)
3. Completely configurable (ie, ESLint)
4. Main focus: inferring or annotating
values; Optional: "static typing"
5. With the grain of JS, not against it

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Typl: inferencing + optional "static types"

var teacher = "Kyle";

// ..

teacher = { name: "Kyle" };
// Error: can't assign object
// to string

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Typl: tagging literals

********************************************************
var teacher = string`Kyle`;

// ..

teacher = { name: string`Kyle` };
// Error: can't assign object
// to string

********************************************************

********************************************************
var teacher = string`Kyle`;

// ..

teacher = object`${ { name: string`Kyle`} }`;
// Error: can't assign object
// to string

********************************************************

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Typl: type assertion (tagging expressions)

var student = { age: int`42` };

var studentAge = number`${student.age}` + number`1`;

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Typl: type signatures (functions, objects, etc)

// ???
function getName(studentRec = { name = string }) {
  return studentRec.name;
}

var firstStudent = {name: string`Frank`};

var firstStudentName = getName(firstStudent);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Typl: inline & persistent type signatures

function fetchStudent(
  id = int,
  onRecord = func`({ name = string }) => undef`
) {
  // do something asynchronous

  onRecord(student);
}

function printName(student = { name = string }) {
  console.log(student.name);
}

var cb= printName;

fetchStudent(42, cb);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Typl: powerful multi-pass inferencing

var three = gimme(3);
var greeting = "hello " + three;
// error: 'string' + 'int'

function gimme(num) {
  return num;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Typl: compiler vs runtime

function showInfo(
  name = string, topic = string``, count = int`0`
) {
  console.log(
    `${name}: ${topic} (${String(count)})`
  )
}

var teacher = string`Kyle`;
var workshop = string`Deep JS Foundations`;
var numStudents = int`${Number(studentsElem.value)}`;

showInfo(teacher, workshop, numStudents);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Typl: compiled (some runtime removed)

function showInfo(name, topic = "", count = 0) {
  name = string `${name}`;
  topic = string`${topic}`;
  count = int`${count}`;
  console.log(`${name}: ${topic} (${String(count)})`);
}

var teacher = "Kyle";
var workshop = "Deep JS Foundations";
var numStudents = int`${Number(studentsElem.value)}`;

showInfo(teacher, workshop, numStudents);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Much more to come...

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Wrapping Up

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

JavaScript has a (dynamic) type
system, which uses various
forms of coercion for value type
conversion, including equality
comparisons

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

However, the prevailing
response seems to be: avoid as
much of this system as possible,
and use === to "protect" from
needing to worry about types

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Part of the problem with
avoidance of whole swaths of
JS, like pretending === saves
you from needing to know
types, is that it tends to
systemically perpetuate bugs

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You simply cannot write quality
JS programs without knowing
the types involved in your
operations

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Alternately, many choose to
adopt a different "static types"
system layered on top

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

While certainly helpful in some
respects, this is "avoidance" of
a different sort

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Apparently, JS's type system is
inferior so it must be replaced,
rather than learned and leveraged

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Many claim that JS's type system
is too difficult for newer devs to
learn, and that static types are
(somehow) more learnable

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

My claim: the better approach is
to embrace and learn JS's type
system, and to adopt a coding
style which makes types as
obvious as possible

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

By doing so, you will make your
code more readable and more
robust, for experienced and new
developers alike

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As an option to aid in that effort, I
created Typl, which I believe
embraces and unlocks the best
parts of JS's types and coercion

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
