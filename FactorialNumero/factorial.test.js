const factorial = require('./factorial')

test('factorial de un número', () => {
    const numero = 5;
  
    const esperado = 120;
    const resultado = factorial(numero);
  
    expect(resultado).toBe(esperado);
}); 