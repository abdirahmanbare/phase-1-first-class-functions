// 1. The receivesAFunction function
function receivesAFunction(callback) {
    callback();
  }
  
  // 2. The returnsANamedFunction function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("I am a named function");
    }
    return namedFunction;
  }
  
  // 3. The returnsAnAnonymousFunction function
  function returnsAnAnonymousFunction() {
    return function() {
      console.log("I am an anonymous function");
    };
  }

  function sayHello() {
    console.log("Hello!");
  }
  receivesAFunction(sayHello);  // Output: "Hello!"

  const anonFunc = returnsAnAnonymousFunction();
anonFunc();  // Output: "I am an anonymous function"

