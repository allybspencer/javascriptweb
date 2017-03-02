function fibSequence(n) {
  var value;
  var div = document.createElement('div');
    if (n === 0) {
      value = 0;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p)
    } 
    else if (n === 1) {
      value = 1;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p)
    }
  else {
    var left = fibSequence(n - 1);
    var right = fibSequence(n - 2);
   
    value = left.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Fib(' + n + ') = ' + value;
    div.appendChild(p);
    
    div.appendChild(left.html);
    div.appendChild(right.html);
  }
  return { 'value': value, 'html': div };
}

function tribSequence(n) {
    var value;
    var div = document.createElement('div');
    if (n === 0) {
      value = 0;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p)
    } 
    else if (n === 1) {
      value = 0;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p)
    }
    else if (n === 2) {
        value = 1;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p)
    }
  else {
    var left = tribSequence(n - 1);
    var right = tribSequence(n - 3);
    var middle = tribSequence(n - 2);
   
    value = left.value + right.value + middle.value;
    var p = document.createElement('p');
    p.textContent = 'Fib(' + n + ') = ' + value;
    div.appendChild(p);
    
    div.appendChild(left.html);
    div.appendChild(right.html);
    div.appendChild(middle.html);
  }
  return { 'value': value, 'html': div };
    
}

function pellSequence(n) {
  var value;
  var div = document.createElement('div');
    if (n === 0) {
      value = 0;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p)
    } 
    else if (n === 1) {
      value = 1;
        var p = document.createElement('p');
        p.textContent = 'Fib(' + n + ') = ' + value;
        div.appendChild(p)
    }
  else {
    var left = pellSequence(n - 1);
    var right = pellSequence(n - 2);
   
    value = 2 * left.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Fib(' + n + ') = ' + value;
    div.appendChild(p);
    
    div.appendChild(left.html);
    div.appendChild(right.html);
  }
  return { 'value': value, 'html': div };
}

var fibonacci = function (n, node) {
  var fibTree = fibSequence(n)
  node.appendChild(fibTree.html)
}
fibonacci(6, document.querySelector('.red'))
var pell = function (n, node) {
  var pellTree = fibSequence(n)
  node.appendChild(pellTree.html)
}
pell(6, document.querySelector('.yellow'))
var tribonacci = function (n, node) {
  var tribTree = tribSequence(n)
  node.appendChild(tribTree.html)
}
tribonacci(6, document.querySelector('.blue'))