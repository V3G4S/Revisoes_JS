// Exibir os números pares de uma sequência de números

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        pares.push(nums[i]);
    }
}

console.log(pares);