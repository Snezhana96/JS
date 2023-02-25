
//1
function SumNegative(arr){
  let sum = 0;
  for(let i = 0; i < arr.length; i++) 
if(arr[i] < 0)
  sum += arr[i];
  return sum;
}
let k = [1, -2, 3, -4, 5, -6, -7, 8];
console.log(SumNegative(k));

// 2
function zeroReplacement(a) {
  for (let u = 0; u <= a.length; u++) {
    if (a[u] < 0) {
      a[u] = 0;
    }
  }
  return a;
}

let j = [1, -2, 3, -4, 5, -6, -7, 8];

console.log(zeroReplacement(j))


// 3

function product (l) {
  let prod = 1;
  for (let o = 0; o < l.length; o++) {
    if(l[o] > 0 && l[o] < 10) {
      prod = prod * l[o];
    }
  }
  return prod;
}

let t = [1, 3, -4, 5, -6, -7, 13];

console.log('результат', product(t));

 //4

 function getZeroIndexes (l) {
  let n = [];
  for(let i = 0; i <= l.length; i++) {
    if (l[i] == 0) {
      n.push(i);
    }
  }
  return n;
}

let p = [0, 6, 0, 5, -6, 0, 13];

console.log('res', getZeroIndexes(p));

//5

function firstNElem(e, n) {
  let newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(t[i]);
  }
  return newArray;
}

let n = 3;
let e = [13, 45, 187, 44, 65, 198, 564, 234, 1234, 987];

console.log('result', firstNElem(e, n));