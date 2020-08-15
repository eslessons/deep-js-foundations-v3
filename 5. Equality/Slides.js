/* Equality

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Equality
== vs. ===

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Loose Equality vs. Strict Equality

== checks value (loose)
=== checks value and type (strict)

?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you're trying to understand
your code, it's critical you
learn to think like JS

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Loose Equality: still types, and ===

7.2.14 Abstract Equality Comparison

The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

1. If Type(x) is the same as Type(y), then
  a. Return the result of performing Strict Equality Comparison x === y.
2. If x is null and y is undefined, return true.
3. If x is undefined and y is null, return true.
4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y)
5. If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
6. If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
7. If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
8. If Type(x) is either String, Number or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
9. If Type(x) is Object and Type(y) is either String, Number or Symbol, return the result of the comparison ToPrimitive(x)==y.
10. Return false. 

*********************************************************
Here, the ! just means that we are certain that this call to ToBoolean will never return an exception, not that the result is inverted!
*********************************************************

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: == and ===

var studentName1 = "Frank";
var studentName2 = `${studentName1}`;

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshopEnrollment1 + 0;

studentName1 == studentName2;                // true
studentName1 === studentName2;               // true

workshopEnrollment1 == workshopEnrollment2;  // true
workshopEnrollment1 === workshopEnrollment2; // true

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Strict Equality: types and lies

7.2.15 Strict Equality Comparison

The comparison x===y, where x and y are values, produces true or false. Such a comparison is performed as follows:

1. If Type(x) is different from Type(y), return false.
2. If Type(x) is Number, then
  a. If x is NaN, return false.
  b. If y is NaN, return false.
  c. If x is the same Number value as y, return true.
  d. If x is +0 and y is -0, return true.
  e. If x is -0 and y is +0, return true.
  f. Return false.
3. Return SameValueNonNumber(x,y).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Equality: identity, not structure

var workshop1 = {
  name: "Deep JS Foundations"
};

var workshop2 = {
  name: "Deep JS Foundations"
};

if(workshop1 == workshop2) {
  // Nope
}

if(workshop1 === workshop2) {
  // Nope
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality vs. Non-Coercive Equality

Do Not

== checks value (loose)
=== checks value and type (strict)

Do

== allows coercion (types different)
=== disallows coercion (types same)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: helpful?

Like every other operation, is
coercion helpful in an equality
comparison or not?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: safe?

Like every other operation, do
we know the types or not?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: null == undefined

7.2.14 Abstract Equality Comparison

The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

1. If Type(x) is the same as Type(y), then
  a. Return the result of performing Strict Equality Comparison x === y.
*********************************************************
2. If x is null and y is undefined, return true.
3. If x is undefined and y is null, return true.
*********************************************************
4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y)
5. If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
6. If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
7. If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
8. If Type(x) is either String, Number or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
9. If Type(x) is Object and Type(y) is either String, Number or Symbol, return the result of the comparison ToPrimitive(x)==y.
********************************************************
10. Return false. 
********************************************************

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: null == undefined

var workshop1 = { topic: null };
var workshop2 = {};

if(
  (workshop1.topic === null || workshop1.topic === undefined) && (workshop2.topic === null || workshop12topic === undefined)
) {
  // ..
}

if(
  workshop1.topic == null &&
  workshop2.topic == null
) {
  // ..
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: prefers <<< numeric comparison >>>

7.2.14 Abstract Equality Comparison

The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

1. If Type(x) is the same as Type(y), then
  a. Return the result of performing Strict Equality Comparison x === y.
2. If x is null and y is undefined, return true.
3. If x is undefined and y is null, return true.
4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! <<< ToNumber(y) >>>.
5. If Type(x) is String and Type(y) is Number, return the result of the comparison ! <<< ToNumber(x) == y >>>.
6. If Type(x) is Boolean, return the result of the comparison ! <<< ToNumber(x) == y >>> .
7. If Type(y) is Boolean, return the result of the comparison x == ! <<< ToNumber(y) >>> .
8. If Type(x) is either String, Number or Symbol and Type(y) is Object, return the result of the comparison x == ToPrimitive(y).
9. If Type(x) is Object and Type(y) is either String, Number or Symbol, return the result of the comparison ToPrimitive(x)==y.
10. Return false. 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: prefers numeric comparison

var workshopEnrollment1 = 16;
var workshopEnrollment2 = workshop2Elem.value;

if (Number(workshopEnrollment1) === Number(workshopEnrollment2)) {
  // ..
}

// Ask: what do we know about the types here?
if (workshopEnrollment1 == workshopEnrollment2) {
  // ..
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: only <<< primitives >>>

7.2.14 Abstract Equality Comparison

The comparison x == y, where x and y are values, produces true or false. Such a comparison is performed as follows:

1. If Type(x) is the same as Type(y), then
  a. Return the result of performing Strict Equality Comparison x === y.
2. If x is null and y is undefined, return true.
3. If x is undefined and y is null, return true.
4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ! ToNumber(y)
5. If Type(x) is String and Type(y) is Number, return the result of the comparison ! ToNumber(x) == y.
6. If Type(x) is Boolean, return the result of the comparison ! ToNumber(x) == y.
7. If Type(y) is Boolean, return the result of the comparison x == ! ToNumber(y).
8. If Type(x) is either String, Number or Symbol and Type(y) is Object, return the result of the comparison x == <<< ToPrimitive(y) >>>.
9. If Type(x) is Object and Type(y) is either String, Number or Symbol, return the result of the comparison <<< ToPrimitive(x)==y >>>.
10. Return false. 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: only primitives

var workshop1Count = 42;
var workshop2Count = [42];

if(workshop1Count == workshop2Count) {
  // Yep (hmm...)
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: only primitives

var workshop1Count = 42;
var workshop2Count = [42];

// if(workshop1Count == workshop2Count) {
// if (42 == "42") {
// if (42 === 42) {
if (true) {
  // Yep (hmm...)
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Coercive Equality: summary

== Summary:
If the types are the same: ===
If null or undefined: equal
If non-primitives: ToPrimitive
Prefer: ToNumber

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

== Corner Cases

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

== Corner Cases: WAT!?

[] == ![]; // true WAT!?

var workshop1Students = [];
var workshop2Students = [];

if (workshop1Students == !workshop2Students) {
  // Yep, WAT!?
}

if (workshop1Students != workshop2Students) {
  // Yep, WAT!?
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

== Corner Cases: WAT!?

var workshop1Students = [];
var workshop2Students = [];

// if (workshop1Students == !workshop2Students) {
// if ([] == false) {
// if ("" == false) {
// if (0 == false) {
// if (0 === 0) {
if (true) {
  // Yep, WAT!?
}

// if (workshop1Students != workshop2Students) {
// if (!(workshop1Students == workshop2Students)) {
// if (!(false)) {
if (true) {
  // Yep, WAT!?
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

== Corner Cases: booleans

var workshopStudents = [];

if (workshopStudents) {
  // Yep
}

if (workshopStudents == true) {
  // Nope :(
}

if (workshopStudents == false) {
  // Yep :(
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

== Corner Cases: booleans

var workshopStudents = [];

// if (workshopStudents) {
// if (Boolean(workshopStudents)) {
if (true) {
  // Yep
}

// if (workshopStudents == true) {
// if ("" == true) {
// if (0 === 1) {
if (false) {
  // Nope :(
}

// if (workshopStudents == false) {
// if ("" == false) {
// if (0 === 0) {
if (true) {
  // Yep :()
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Avoid:
1. == with 0 or "" (or even " ")
2. == with non-primitives
3. == true or == false : allow
ToBoolean or use ===

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The case for preferring ==

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Knowing types is always
better than not knowing them
Static Types is not the only (or
even necessarily best) way to
know your types

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

== is not about comparisons
with unknown types
== is about comparisons
with known type(s), optionally
where conversions are helpful

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you know the type(s) in a
comparison:
If both types are the same,
== is identical to ===
Using === would be unnecessary,
so prefer the shorter ==

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

TypeScript

var teacher = "Student";        //  This condition will
var numStudents = 42;           // always return 'false'
if (teacher === numStudents) {  // since the types
  // ..                         // 'string' and 'number'
}                               // have no overlap.

Since === is pointless when the types don't match,
it's similarly unnecessary when they do match.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you know the type(s) in a
comparison:
If the types are different, using
one === would be broken
Prefer the more powerful ==
or don't compare at all

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you know the type(s) in a
comparison:
If the types are different, the
equivalent of one == would be
two (or more!) === (ie, "slower")
Prefer the "faster" single ==

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you know the type(s) in a
comparison:
If the types are different, two (or
more!) === comparisons may
distract the reader
Prefer the cleaner single ==

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you know the type(s) in a
comparison:
Summary: whether the types match or
not, == is the more sensible choice

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you don't know the type(s) in
a comparison:
Not knowing the types means not
fully understanding that code
So, best to refactor so you
can know the types

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you don't know the type(s) in
a comparison:
The uncertainty of not knowing
types should be obvious to reader
The most obvious signal is ===

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you don't know the type(s) in
a comparison:
Not knowing the types is equivalent
to assuming type conversion
Because of corner cases, the only
safe choice is ===

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you don't know the type(s) in
a comparison:
Summary: if you can't or won't use
known and obvious types, === is
the only reasonable choice

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Even if === would always be
equivalent to == in your code,
using it everywhere sends a wrong
semantic signal: "Protecting myself
since I don't know/trust the types

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Summary: making types
known and obvious leads to
better code. If types are
known, == is best.

Otherwise, fall back to ===.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
