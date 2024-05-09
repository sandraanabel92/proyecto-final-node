function getCache(req, res) {
  let saludos = [];
  for (let i = 0; i < 1000; i++) {
    saludos.push('Hola soy el numero' + i);
  }
  res.status(200).json({
    status: 200,
    message: 'Datos obtenidos correctamente',
    data: saludos,
  });
}

function fibonacci(req, res) {
  let n = 10000;
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  res.status(200).json({
    status: 200,
    message: 'Datos obtenidos correctamente',
    data: fib.slice(0, n + 1),
  });
}

module.exports = {
  getCache,
  fibonacci,
};
