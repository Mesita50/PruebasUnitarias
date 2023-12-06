const volumen = require('./volumen')

test('volumen de una esfera', () => {
    const radio = 5;
  
    const esperado = 523.6004786220472;
    const resultado = volumen(radio);
  
    expect(resultado).toBe(esperado);
});  