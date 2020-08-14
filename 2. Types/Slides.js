/* Types

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Types

• Primitive Types
• Abstract Operations
• Coercion
• Equality
• TypeScript, Flow, etc.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

"In JavaScript, everything is an object."
false

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Primitive Types

6.1 ECMAScript Language Types

An ECMAScript language type corresponds to values that are directly manipulated by an ECMAScript programmer using the ECMAScript language. 

The ECMAScript language types are:

• Undefined
• Null
• Boolean
• String
• Symbol
• Number
• Object

An ECMAScript language value is a value that is characterized by an ECMAScript language type.



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Primitive Types

Primitive Types?

• undefined       // false
• string          // false
• number          // false
• boolean         // false
• object          // false
• symbol          // false
• undeclared?     // false
• null?           // false
• bigint (future) // false

Objects:

• object
• function
• array

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In JavaScript, variables
don't have types, values do.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Primitive Types: typeof

var v;
typeof v; // "undefined"

v = "1";
typeof v; // "string"

v = 2;
typeof v; // "number"

v = true;
typeof v; // "boolean"

v = {};
typeof v; // "object"

v = Symbol;
typeof v; // "symbol"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Primitive Types: typeof

typeof doesntExist; // "undefined"

var v = null;
typeof v;           // "object" OOPS!

v = function(){};
typeof v;           // "function" hmmm?

v = [1,2,3];
typeof v;           // "object" hmmm?

// coming soon!
var v = 42n;
// or: BigInt(42)
typeof v;           // "bigint"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Primitive Types: staring into the emptiness

undefined vs.
undeclared vs.
uninitialized (aka TDZ)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Special Values

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Special Values

NaN (“not a number”)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Special Values: NaN

var myAge = Number("0o46");    // 38
var myNextAge = Number("39");  // 39
var myCatsAge = Number("n/a"); // NaN
myAge - "my son's age";        // NaN

myCatsAge  === myCatsAge;      // false OOPS!

isNaN(myAge);                  // false
isNaN(myCatsAge);              // true
isNaN("my son's age");         // true OOPS!

Number.isNaN(myCatsAge);       // true
Number.isNaN("my son's age")   // false

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Special Values: NaN

NaN: Invalid Number

The result of a numerical operation 
with non-numerical values is:

not: undefined
not: null
not: false
not: -1
not: 0

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Special Values

Negative Zero

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Special Values: -0

var trendRate = -0;
trendRate === -0;         // true

trendRate.toString();     // "0" OOPS!
trendRate === 0;          // true OOPS!
trendRate < 0;            // false
trendRate > 0;            // false

Object.is(trendRate, -0); // true
Object.is(trendRate, 0);  // false

******************************
*                            *
* MDN                        *
*                            *
* The Object.is() method     *
* determines whether two     *
* values are the same value. *
*                            *
******************************

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Special Values: -0

Math.sign(-3);      // -1
Math.sign(3);       // 1
Math.sign(-0);      // -0 WTF?
Math.sign(0);       // 0 WTF?

// "fix" Math.sign(..)
function sign(v) {
  return v !== 0 ? Math.sign(v) : Object.is(v, 0) ? -1 : 1;
}

sign(-3);  // -1
sign(3);   // 1
sign(-0);  // -1
sign(0);   // 1

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Special Values: -0

function formatTrend(trendRate) {
  var direction = 
  (trendRate < 0 || Object.is(trendRate, 0)) ? "^" : "v";
  return `${direction} ${Math.abs(trendRate)}`;
}

formatTrend(-3); // "v 3"
formatTrend(3)   // "^ 3"

formatTrend(-0); // "v 0"
formatTrend(0);  // "^ 0"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Fundamental Objects

aka: Built-In Objects
aka: Native Functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Fundamental Objects

Use new: 

• Object()
• Array()
• Function()
• Date()
• RegExp()
• Error()

Don't use new:

• String()
• Number()
• Boolean()

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Fundamental Objects

var yesterday = new Date("March 6, 2019");
yesterday.toUTCString();
// "Wed, 06 Mar 2019 06:00:00 GMT"

var myGPA = String(transcript.gpa);
// "3.54"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
