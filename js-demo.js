let globalNum = 12;


function returnLocalVariable() {
    var localNum = 10;
    return localNum;
}

{
  let thirdNum = 25;
  console.log(thirdNum);
}

// console.log(returnLocalVariable());

// console.log(localNum);

console.log(globalNum);

console.log(thirdNum);

//---------------------------------------------------------------------------------------