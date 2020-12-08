function countVowelConsonant(str) {
    var letters = str.split("");
    var contador = 0;
    
    for(var i=0;i < letters.length;i++){
        if(letters[i] == 'a' || letters[i] == 'e' || 
        letters[i] == 'i' || letters[i] == 'o' || letters[i] == 'u' ){
            contador++;
        }else{
            contador= contador + 2;
        }
    }

    return contador;
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});