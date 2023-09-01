import { it, expect, describe } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';


describe("transformToNumber()",() => {
  it('should transform a string number to a number of type number', () => {
    const input = '1';
  
    const result = transformToNumber(input);
  
    expect(result).toBeTypeOf('number');
  });
  
  it('should transform a string number to a number of type number', () => {
    const input = '1';
  
    const result = transformToNumber(input);
  
    expect(result).toBe(+input);
  });
  
  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';
    const input2 = {};
  
    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);
  
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
})

describe("cleanNumbers()", () => {
    it("should return an array of number if an array of string values number is provided", () => {
       const numberValues = ['1','2'];
       const cleanedNumbers = cleanNumbers(numberValues);

       expect(cleanedNumbers).toEqual([1,2]);  
    })

    it("should throw err when invalid inout", () => {
      const numberValues = ['',1]


      const cleanFn = () => cleanNumbers(numberValues);

      expect(cleanFn).toThrow()
    })
})
