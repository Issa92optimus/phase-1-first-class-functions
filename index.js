
function receivesAFunction(spy, another) {
    return(spy() + "" + another);
  }
  function greetings() {
    let name= 'Jacob';
    let name1= 'danny';
   return`Hello ${name, name1}`;
  }
  console.log(greetings());
  function returnsANamedFunction() {
   return greetings;
  }
  console.log(returnsANamedFunction());
  var fn= returnsANamedFunction();
  function returnsAnAnonymousFunction () {
    return (function (){
        return'It is nine in the morning'
    })
  }
  console.log(returnsAnAnonymousFunction());
  var fn= returnsAnAnonymousFunction();
  white_check_mark
  eyes
  raised_hands