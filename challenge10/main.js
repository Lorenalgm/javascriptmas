function adjacentElementsProduct(nums) {

    for(var i=0;i<nums.length;i++){
        var adjacent = nums[i-1]*nums[i];
    }
    
    return adjacent;
}



/**
* Test Suite 
*/
describe('adjacentElementsProduct()', () => {
    it('returns largest product of adjacent values', () => {
        // arrange
        const nums = [3, 6, -2, -5, 7, 3];
        
        // act
        const result = adjacentElementsProduct(nums);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(21);
    });
});