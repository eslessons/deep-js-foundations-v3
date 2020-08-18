/* Prototypes

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes

Objects are built by
"constructor calls" (via new)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes

A "constructor call" makes an object
|x|“based on”|x| its own prototype

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes

A "constructor call" makes an
object linked to its own prototype

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes: as "classes"

function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");
var reactJS = new Workshop("Suzy");

deepJS.ask("Is 'prototype' a class?");
// Kyle Is 'prototype' a class?

reactJS.ask("Isn't 'prototype' ugly?");
// Suzy Isn't 'prototype' ugly?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes

this -> ... -> Object.prototype

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes

function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

var deepJS = new Workshop("Kyle");

deepJS.constructor === Workshop;

deepJS.__proto__ === Workshop.prototype; // true
Object.getPrototypeOf(deepJS) === Workshop.prototype; // true

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes: shadowing

function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
}

var deepJS = new Workshop("Kyle");

deepJS.ask = function(question){
  this.ask(question.toUpperCase());
};

deepJS.ask("Oops, is this infinite recursion?");

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes: shadowing

function Workshop(teacher) {
  this.teacher = teacher;
}

Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
}

var deepJS = new Workshop("Kyle");

deepJS.ask = function(question){
  this.__proto__.ask.call(this, question.toUpperCase());
};

deepJS.ask("Oops, is this infinite recursion?");

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes

“Prototypal Inheritance”

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes: objects linked

function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function(question){
  console.log(this.teacher, question);
};

function AnotherWorkshop(teacher) {
  Workshop.call(this, teacher);
}

AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function(msg) {
  this.ask(msg.toUpperCase());
}

var JSRecentParts = new AnotherWorkshop("Kyle");

JSRecentParts.speakUp("Is this actually inheritance?");
// Kyle IS THIS ACTUALLY INHERITANCE?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OO (~ OOP)

Clarifying Inheritance

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OO: classical inheritance

Workshop ------------> deepJS
  | -----------------> reactJS
  |
  v
  AnotherWorkshop ---> JSRecentParts

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OO: “|x|prototypal|x| inheritance”

Workshop <------------ deepJS
  ^ ^
  | |----------------- reactJS
  |
  AnotherWorkshop <--- JSRecentParts

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OO: js

JavaScript |x|“Inheritance”|x|
“Behavior Delegation”

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OLOO

Let's Simplify!

OLOO:
Objects Linked to Other Objects

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OLOO: recall class?

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

OLOO: prototypal objects

function Workshop(teacher) {
  this.teacher = teacher;
}
Workshop.prototype.ask = function(question) {
  console.log(this.teacher, question);
};

function AnotherWorkshop(teacher) {
  Workshop.call(this, teacher);
}
AnotherWorkshop.prototype = Object.create(Workshop.prototype);
AnotherWorkshop.prototype.speakUp = function(msg) {
  this.ask(msg.toUpperCase());
};

var JSRecentParts = new AnotherWorkshop("Kyle");
JSRecentParts.speakUp("Isn't this ugly?");
// Kyle ISN'T THIS UGLY?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OLOO: delegated objects

var Workshop {
  setTeacher(teacher) {
    this.teacher = teacher;
  },
  ask(question) {
    console.log(this.teacher, question);
  }
};

var AnotherWorkshop = Object.assign(
  Object.create(Workshop),
  {
    speakUp(msg) {
      this.ask(msg.toUpperCase());
    }
  }
);

var JSRecentParts = Object.create(AnotherWorkshop);
JSRecentParts.setTeacher("Kyle");
JSRecentParts.speakUp("But isn't this cleaner?");
// Kyle BUT ISN'T THIS CLEANER?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OLOO: Object.create()

if(!Object.create) {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Delegation: Design Pattern

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Composition Thru Inheritance

AuthControllerClass
>>>
LoginFormControllerClass
>>>
pageInstance

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Composition Over Inheritance

LoginFormControllerClass   AuthControllerClass
    |              ________________/
    v             /
  pageInstance <-/
    authInstance


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Mixin Composition

LoginFormControllerClass   AuthControllerClass
            |                     |
            v                     v
      pageInstance <------- authInstance

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Delegation (Dynamic Composition)

LoginFormController ---> AuthController

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Delegation-Oriented Design

|x| Parent-Child |x|    |v| Peer-Peer |v|

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Delegation-Oriented Design

var AuthController = {
  authenticate() {
    setver.authenticate(
      [this.username, this.password],
      this.handleResponse.bind(this)
    );
  },
  handleResponse(resp) {
    if(!resp.ok) this.displayError(resp.msg);
  }
};

var LoginFormController = Object.assign(Object.create(AuthController), {
  onSubmit() {
    this.username = this.$username.val();
    this.password = this.$password.val();
    this.authenticate();
  },
  displayError(msg) {
    alert(msg);
  }
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Delegation-Oriented Design

More Testable

MockLoginFormController -\   /-> MockAuthController
                          \ /  
                           X
                          / \
LoginFormController -----/---\-> AuthController

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Know Your JavaScript

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

THANKS!!!!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
