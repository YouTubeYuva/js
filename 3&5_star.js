// 1.staircase
let k = " ";
for (let i = 0; i < 5; i++) {
    for (let j = 1; j < 2; j++) {
        k += "*"
    }
    console.log(k)
}

// 2.staircase
function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let hashes = '*'.repeat(i);
        console.log(spaces + hashes);
    }
}
staircase(4);

//3. 3 & 5 sums in 1000
let sum1 = 0;
for (let i = 3; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum1 += i;
    }
}
console.log(sum1); 
