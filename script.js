// Bad way //
// Code Duplication DRY 

const me = {
  talk() {
    return "Talking";
  }
}

const you = {
  talk() {
    return "Talking";
  }
}

// ...

me.talk()
you.talk()

// Good Way // 
// Reusability, easy to fix

class Person {
  constructor() {
    this.talk = function() { 
      // Bad way, cause we are coping function to every object
      return "Talking"
    }
  }

  talk() {
    // Good way, cause every object will refer to this function
    return "Talking";
  }
}

const he = new Person()
const she = new Person()

he.talk()
she.talk()

Person.prototype.talk = function() {
  return "new updated Talking"
}

he.talk()
she.talk()