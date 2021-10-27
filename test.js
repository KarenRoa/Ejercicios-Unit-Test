// importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromEuroToYen, fromEuroToPound, fromDollarToYen, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('si sumamos 14 + 9 debe dar 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test ("un euro es igual a 1.2 dollar", ()=>{
    let totaldollar=fromEuroToDollar(10);
    expect(totaldollar).toBe(12);
} );

test ("un euro es igual a 127.9 Yen", ()=>{
    let totalYen=fromEuroToYen(10);
    expect(totalYen).toBe(1279);
} );

test ("un euro es igual a 0.8 Pound", ()=>{
    let totalPound=fromEuroToPound(10);
    expect(totalPound).toBe(8);
} );

test ("un dolar es igual a 106 Yen", ()=>{
    let dolarayen=fromDollarToYen(1);
    expect(dolarayen).toBe(106.58333333333334);
});

test ("un Yen es igual a 0 Libra", ()=>{
    let YenPound=fromYenToPound(1);
    expect(YenPound).toBe(0.006254886630179828);
});
