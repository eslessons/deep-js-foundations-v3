/* Introduction

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

KYLE SIMPSON GETIFY@GMAIL.COM
DEEP JS FOUNDATIONS v3

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Motivations?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var x = 40;

x++; // 40
x;   // 41

++x; // 42
x;   // 42

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

x++;
++x;

// as...

x = x + 1;

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var x = "5";
x = x + 1; // "51"

var y = "5";

y++; // ??
y;   // ??

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var x = "5";
x = x + 1; // "51"

var y = "5";

y++; // 5
y;   // 6

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

12.4.4.1 Runtime Semantics: Evaluation
UpdateExpression: LeftHandSideExpression ++

1. Let lhs be the result of evaluating LeftHandSideExpression.
2. Let oldValue be ? ToNumber(?GetValue(lhs)). // ToNumber!
3. Let newValue be the result of adding the value 1 to oldValue, using the same rules as for the + operator (see 12.8.5).
4. Perform ? PutValue(lhs, newValue).
5. Return oldValue

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// x++ means:

function plusPlus(orig_x) {
  var orig_x_coerced = Number(orig_x)
  x = orig_x_coerced + 1;
  return orig_x_coerced;
}

var x = "5";
plusPlus(x); // 5
x;           // 6

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Whenever there's a divergence
between what your brain thinks
is happening, and what the
computer does, that's where
bugs enter the code.

--getify's law #17 (getify = Kyle Simpson)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Course Overview

Types
 • Primitive Types
 • Abstract Operations
 • Coercion
 • Equality
 • TypeScript, Flow, etc.

Scope
 • Nested Scope
 • Hoisting
 • Closure
 • Modules

Objects (Oriented)
 • this
 • class { }
 • Prototypes
 • OO vs. OLOO

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
