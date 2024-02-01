function setReducer(input) {
    let result = [];
    let count = 1;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++;
        } else {
            result.push(count);
            count = 1;
        }
    }
     console.log(result);
    if (result.length === 1) {
        return result[0];
    } else {
        return setReducer(result);
    }
}

  input1= [0, 4, 6, 8, 8, 8, 5, 5, 7];
//   output: 2

  input2=[9, 4, 1, 1, 1, 2, 3, 9, 4, 6, 2];
//   output: 3

  input3=[1, 7, 0, 6, 1, 9, 0, 7, 1, 6, 0, 9, 0];
//   output: 13

  input4=[0, 2, 7, 0, 0, 6, 2, 1, 2, 2, 3, 4];
//   output: 5

console.log(setReducer(input1));
console.log(setReducer(input2)); 
console.log(setReducer(input3));
console.log(setReducer(input4));