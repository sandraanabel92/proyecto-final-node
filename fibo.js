function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n + 1);
}

let n = 10000;
let fibo = fibonacci(n);
console.log(`La Sucesión de Fibonacci de ${n}`, fibo);
