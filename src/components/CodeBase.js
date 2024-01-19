/*Flat Array in js

const arr = [1, 2, 3, 4, [5, 6, [8, 9]]];
const flat = [];

const flating = (arr) => {
  arr.forEach((i) => {
    if (Array.isArray(i)) {
      flating(i);
    } else {
      flat.push(i);
    }
  });
};
flating(arr);
console.log(flat);

*/

// ---------------------------------------------------

/*Flating Object
 
 const obj = {
  name: "taryn",
  info: { city: "GZB", pincode: { pin: "201009" } },
};

function objFlat(obj, parentKey = "") {
  let result = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        Object.assign(result, objFlat(obj[key], newKey));
      } else {
        result[newKey] = obj[key];
      }
    }
  }

  return result;
}

const c = objFlat(obj);
console.log(c);

*/

// ------------------------------------

/*

const series = [];
const word_list = [];

function customSort(word_list, series) {
  for (let i = 0; i < word_list.length; i++) {
    for (let j = i + 1; j < word_list.length; j++) {
      if (
        series.indexOf(word_list[i][1]) - series.indexOf(word_list[j][1]) >
        0
      ) {
        let temp = word_list[i];
        word_list[i] = word_list[j];
        word_list[j] = temp;
      }
    }
  }
  return word_list;
}

console.log(customSort(word_list, series));

*/

// -----------------------------------

/* Rotetate Left

const arr = [1, 2, 3];
let rotate = [];
let rotation = 1;

for (let i = 0; i < arr.length; i++) {
  let next = (i + rotation) % arr.length;
  rotate[next] = arr[i];
}

console.log(rotate);

*/

// ------------------------

const arr = [1, 2, 3, 4, 5, 6];

function pairMatch(arr) {
  let target = 9;
  let count = 0;
  let found = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        console.log([arr[i], arr[j]]);
        count++;
        found = true;
      }
    }
  }
  if (!found) {
    console.log("Not Found");
  } else {
    console.log(count);
  }
}

console.log(pairMatch(arr));
