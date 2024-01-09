/*
FUNCTION INVOCATION or CALLING

The Code inside the function will execute when 
"something " invokes(calls) the function

When an event occur (when a user clicks a button)

when it is invoked(called) from javascript

Automatically (self invoked)
 */

function test() {
  return "I  love INDIA";
}

const result = test();

console.log(result + "and" + "Indians");
document.write(test()+'abc'+"abd");
