
function forLoop(array) {
  for (var i = 0; i<25; i++) {
    if(i === 1) {array.push(`I am ${i} strange loop.`);
    }
  else {array.push(` am ${i} strange loops.`);
    }
  }
  return array;
}

function whileLoop(n) {
  while(n>0) {
    console.log(n--);
  }
  return "done";
}

function maybeTrue() {
  return Math.random() >= 0.5; 
  }

function doWhileLoop(array) {
  do {array.length>0;
  }
  while (maybeTrue()===true);
}
