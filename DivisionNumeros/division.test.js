const division = require('./division')

test('división de dos números', () => {
    const numero1 = 10;
    const numero2 = 5;
  
    const esperado = 2;
    const resultado = division(numero1, numero2);
  
    expect(resultado).toBe(esperado);
});  