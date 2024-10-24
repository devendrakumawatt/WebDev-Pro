function outer() {
    let counter = 4;
    return function () {
      counter++;
      return counter;
    };
  }
  
  let increement = outer();
  console.log(increement());
  