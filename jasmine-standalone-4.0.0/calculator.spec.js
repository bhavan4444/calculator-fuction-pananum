// suite -> means group of test
describe('Calculator.js', function() {

    //(  write Test cases)  
    it('should add number to total', function() {
         //TODO expection
        //  expect(5 + 5).toBe(10);
        const calculator = new Calculator();
        calculator.add(5);
        
        expect(calculator.total).toBe(5);

    });

    it ('should subtract number from toal', function() {
          //TODO expection
         const calculator = new Calculator();
         calculator.total = 35;
         calculator.subtract(5);
         expect(calculator.total).toBe(30);
    });

    xit ('should multiply number with total', function() {
          //TODO expection
          const calculator = new Calculator();
          calculator.total = 20;
          calculator.multiply(2);
          expect(calculator.total).toBe(40);
    });

    it ('should divide number by the total', function() {
             //TODO expection
             const calculator = new Calculator();
             calculator.total = 20;
             calculator.divide(2);
             expect(calculator.total).toBe(10);
    })

});