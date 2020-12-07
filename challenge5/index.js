function reverseAString(str) {
    var array = str.split("");
    var new_array = array.reverse();
    new_array = new_array.join(""); 
    return new_array;
}



/**
* Test Suite 
*/
describe('reverseAString()', () => {
    it('returns original string reversed', () => {
        // arrange
        const str = 'hello';
        
        // act
        const result = reverseAString(str);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe('olleh');
    });
});