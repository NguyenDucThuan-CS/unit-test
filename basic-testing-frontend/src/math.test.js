import { it, expect } from 'vitest';
import { add } from './math'


it('should sumarize all number values in an array', () => {
   //Arrange
   const numbers = [1,2]
   const expectedResult =  numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);

   // Act
   const result = add(numbers);

   //Assertion
   expect(result).toBe(expectedResult)
})



it('should sumarize all number values in an array', () => {
   //Arrange
   const numbers = ['invalid',2]
   //const expectedResult =  numbers.reduce((prevValue, curValue) => prevValue + curValue, 0);

   // Act
   const result = add(numbers);

   //Assertion
   expect(result).toBeNaN()
})

it('should sumarize all number values in an array', () => {
   //Arrange
   const numbers = ['1','2']
   const expectedResult =  numbers.reduce((prevValue, curValue) => +prevValue + +curValue, 0);

   // Act
   const result = add(numbers);

   //Assertion
   expect(result).toBe(expectedResult)
})


it('it should return 0 when empty array',() => {
   const numbers = [];
   const result = add(numbers);
   
   expect(result).toBe(0)
})

it('it should throw error when not value pass to funtion',() => {
   const resultFn = () => {
      add();
   }

   expect(resultFn).toThrow();
})

it('it should throw error when not value pass to funtion',() => {
   const resultFn = () => {
      add();
   }

   expect(resultFn).toThrow();
})

it('it should throw error if provided with multiple arguments',() => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
   add(num1, num2);
  }

  expect(resultFn).toThrow(/is not iterable/)
})




