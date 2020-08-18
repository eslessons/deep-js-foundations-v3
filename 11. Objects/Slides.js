/* Objects

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objects (Oriented)
• this
• class { }
• Prototypes
• “Inheritance” vs. “Behavior Delegation”
(OO vs. OLOO)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this

A function's this references the execution
context for that call, determined entirely by
how the function was called.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this

A this-aware function can thus have a
different context each time it's called, which
makes it more flexible & reusable.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recall: dynamic scope

var teacher = "Kyle";

function ask(question) {
  console.log(teacher, question);
}

function otherClass() {
  var teacher = "Suzy "

  ask("Why?");
}

otherClass();

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Dynamic Context ~= JS's Dynamic Scope

function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy"
  }
  ask.call(myContext, "Why?"); // Suzy Why?
}

otherClass();

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: implicit binding

var workshop = {
  teacher: "Kyle",
  ask(question) { // here this = workshop ->
    console.log(this.teacher, question); 
  },
};

workshop.ask("What is implicit binding?");
// Kyle What is implicit binding?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: dynamic binding -> sharing

function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask: ask,
};

var workshop1 = {
  teacher: "Suzy",
  ask: ask,
};

workshop1.ask("How do I share a method?");
// Kyle How do I share a method?

workshop2.ask("How do I share a method?");
// Suzy How do I share a method?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: explicit binding

function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Kyle",
  ask: ask,
};

var workshop1 = {
  teacher: "Suzy",
  ask: ask,
};

ask.call(workshop1, "How do I share a method?");
// Kyle How do I share a method?

ask.call(workshop2, "How do I share a method?");
// Suzy How do I share a method?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: hard binding

var workshop = {
  teacher: "Kyle",
  ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(workshop.ask, 10, "Lost this?");
// undefined Lost this?

setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?");
// Kyle Hard bound this?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: new binding

"constructor calls"

function ask(question) {
  console.log(this.teacher, question);
}

var newEmptyObject = new ask("What is 'new' doing here?");
// undefined What is 'new' doing here?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

new: steps

1. Create a brand new empty object
2.* Link that object to another object
3. Call function with this set to the new object
4. If function does not return an object,
assume return of this

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: default binding

var teacher = "Kyle";

function ask(question) {
  console.log(this.teacher, question);
}

function askAgain(question) {
  "use strict";
  console.log( |x|this.|x| teacher, question);
}

ask("What's the non-strict mode default?");
// Kyle What's the non-strict-mode default?

askAgain("What's the strict-mode default?");
// TypeError

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: binding rule precedence?

var workshop = {
  teacher: "Kyle",
  ask: function ask(question) {
    console.log(this.teacher, question);
  },
};

new (workshop.ask.bind(workshop))("What does this do?");
// undefined What does this do?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: determination

1. Is the function called by new?
2. Is the function called by call() or apply()?
 Note: bind() effectively uses apply()
3. Is the function called on a context object?
4. DEFAULT: global object (except strict mode)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: arrow functions

var workshop = {
  teacher: "Kyle",
  ask(question) {
    setTimeout(()=>{
      console.log(this.teacher, question);
    }, 100);
  },
};

workshop.ask("Is this lexical 'this'?");
// Kyle is this lexical 'this'?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: arrow functions

An arrow function is this-bound
(aka .bind()) to its parent function.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: arrow functions

14.2.16 Runtime Semantics: Evaluation
ArrowFunction: ArrowParameters => ConciseBody

1. If the function code for this ArrowFunction is strict mode code, let strict be true. Otherwise let strict be false.
2. Let scope be the LexicalEnvironment of the running execution context.
3. Let parameters be CoveredFormalsList of ArrowParameters.
4. Let closure be FunctionCreate(Arrow, parameters, ConciseBody, scope, strict).
5. Return closure.

| NOTE     An ArrowFunction does not define local bindings
|          for arguments, super, this, or new.target. Any
|          reference to arguments, super, this or new.tar-
|          get within an ArrowFunction must resolve to a
|          binding in a lexically enclosing environment.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: arrow functions

var workshop = {
  teacher: "Kyle",
  ask: (question) => {
    console.log(this.teacher, question);
  },
};

workshop.ask("What happened to 'this'?");
// undefined What happened to 'this'?

workshop.ask.call(workshop, "Still no 'this'?");
// undefined What happened to 'this'?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

this: arrow functions

Only use => arrow functions 
when you need lexical this.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES6

class { }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES6 class

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'class' a class?");
// Kyle Is 'class' a class?

reactJS.ask("Is this class OK?");
// Suzy Is this class OK?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES6 class: extends (inheritance)

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(msg) {
    this.ask(msg);
  }
}

var JSRecentParts = new AnotherWorkshop("Kyle");

JSRecentParts.speakUp("Are classes getting better?");
// Kyle Are classes getting better?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES6 class: super (relative polymorphism)

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  ask(msg) {
    super.ask(msg.toUpperCase());
  }
}

var JSRecentParts = new AnotherWorkshop("Kyle");

JSRecentParts.speakUp("Are classes getting better?");
// Kyle Are classes getting better?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES6 class: still dynamic this

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

var deepJS = new Workshop("Kyle");

setTimeout(deepJS.ask, 100,"Still losing 'this'?");
// undefined Still losing 'this'?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES6 class: "fixing" this?

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
    this.ask = (question) => {
     console.log(this.teacher, question);
    };
  }
}

var deepJS = new Workshop("Kyle");

setTimeout(deepJS.ask, 100, "Is 'this' fixed?");
// Kyle Is 'this' fixed?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES6 class: hacktastrophy

var method = (function defineMethod(){
  var instances = new WeakMap();

  return function method(obj, methodName, fn) {
    Object.defineProperty(obj, methodName, {
      get() {
        if(!instances.has(this)){
          instances.set(this, {});
        }
        var methods = instances.get(this);
        if(!(methodName in methods)) {
          methods[methodName] = fn.bind(this);
        }
        return methods[methodName];
      }
    });
  }
})();

function bindMethods(obj) {
  for (let ownProp of Object.getOwnPropertyNames(obj)) {
    if (typeof obj[ownProp] == "function") {
      method(obj, ownProp, obj[ownProp])
    }
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES6 class: inheritable hard this-bound methods

class Workshop {
  constructor(teacher) {
    this.teacher = teacher;
  }
  ask(question) {
    console.log(this.teacher, question);
  }
}

class AnotherWorkshop extends Workshop {
  speakUp(msg) {
    this.ask(msg)
  }
}

bindMethods(Workshop.prototype);
bindMethods(AnotherWorkshop.prototype);

JSRecentParts.speakUp("What's different here?");
// Kyle What's different here?

setTimeout(JSRecentParts.speakUp, 100, "Oh! But does this feel gross?");
// Kyle Oh! But does this feel gross?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
