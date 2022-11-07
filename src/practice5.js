function fib(n) {
    if (n === 0) return 0n;
    if (n < 2) return 1n;

    let first = 1;
    let second = 1;
    let third = 2;
    let index = 2;

    while (index < n) {
        third = first + second;
        first = second;
        second = third;
        index++;
    }
    return BigInt(third);

}

console.log(fib(4))
console.log(fib(5))
console.log(fib(6))
console.log(fib(180))
