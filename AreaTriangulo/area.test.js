const area = require('./area')

test('área de un triángulo', () => {
    const base = 10;
    const altura = 5;

    const esperado = 25;
    const resultado = area(base, altura);
  
    expect(resultado).toBe(esperado);
});