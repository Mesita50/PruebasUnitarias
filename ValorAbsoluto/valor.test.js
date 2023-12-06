const valor = require('./valor')

test('valor absoluto de un número', () => {
    const numero = -10;
  
    const esperado = 10;
    const resultado = valor(numero);
  
    expect(resultado).toBe(esperado);
});  