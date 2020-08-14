/* Philosophy of Coercion

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You don't deal with these type
conversion corner cases by
avoiding coercions.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Instead, you have to adopt a
coding style that makes value
types plain and obvious.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A quality JS program embraces
coercions, making sure the types
involved in every operation are
clear. Thus, corner cases are
safely managed.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

No Type Rigidity
No Static Types
No Type Soundness

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

JavaScript's dynamic typing is
not a weakness, it's one of its
strong qualities

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

But... but...
what about the junior devs?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Implicit != Magic
Implicit != Bad
Implicit: Abstracted

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Hiding unnecessary details,
re-focusing the reader and
increasing clarity

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: implicit can be good (sometimes)

------------------------------------------------------

var numStudents = 16;

console.log(`There are ${String(numStudents)} students.`);

// "There are 16 students."

------------------------------------------------------

var numStudents = 16;

console.log(`There are ${numStudents} students.`);

// "There are 16 students."

------------------------------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercion: implicit can be good (sometimes)

var workshopEnrollment = 16;
var workshopEnrollment2 = workshop2Elem.value;

if(Number(workshopEnrollment1) < Number(workshopEnrollment2)) {
  // ...
}

if(workshopEnrollment1 < WorkshopEnrollment2) {
  // ...
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Is showing the reader the
extra type details helpful or
distracting?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

hmmm no... "If a feature is sometimes useful
and sometimes dangerous and if
there is a better option then always
use the better option."

-- "The Good Parts", Crockford

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Useful: when the reader is
focused on what's important

Dangerous: when the reader
can't tell what will happen

Better: when the reader
understands the code

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It is irresponsible to
knowingly avoid usage of a
feature that can improve code
readability

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/