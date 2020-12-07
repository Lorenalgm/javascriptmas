function depositProfit(deposit, rate, threshold) {
    var new_value = deposit;
    var counter=0;
    
        do{
            counter++;
            new_value = new_value + (new_value*rate/100)
        }while(new_value < threshold);
        
    return counter;
}



/**
* Test Suite 
*/
describe('depositProfit()', () => {
    it('returns number of years it will take to hit threshold based off of deposit & rate', () => {
        // arrange
        const deposit = 100;
        const rate = 20;
        const threshold = 170;
        
        // act
        const result = depositProfit(deposit, rate, threshold)

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(3);
    });
});