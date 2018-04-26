/** @flow */

import addNumbers from './main';

describe('Add numbers', () => {
  it('should return 0 when an empty string is passed', () => {
    //given
    const numbers = '';

    //when
    const sum = addNumbers(numbers);

    //then
    expect(sum).toEqual(0);
  });

  it('should handle an unknown amount of numbers', () => {
    //given
    const numbers = '1,2,3,2,1';

    //when
    const sum = addNumbers(numbers);

    //then
    expect(sum).toEqual(9);
  });

  it('should handle handle new lines between numbers', () => {
    //given
    const numbers = '1\n2,3';

    //when
    const sum = addNumbers(numbers);

    //then
    expect(sum).toEqual(6);
  });

  it('should handle delimeter changes', () => {
    //given
    const numbers = '//;\n1;2';

    //when
    const sum = addNumbers(numbers);

    //then
    expect(sum).toEqual(3);
  });

  it('should throw an exception when negative numbers are present', () => {
    //given
    const numbers = '1,-2';

    //then
    expect(() => {
      addNumbers(numbers);
    }).toThrow('negatives not allowed');
  });

  it('should filter numbers bigger than 1000 when adding', () => {
    //given
    const numbers = '1,1002';

    //when
    const sum = addNumbers(numbers);

    //then
    expect(sum).toEqual(1);
  });

  it('should handle delimeter of any length', () => {
    //given
    const numbers = '//[***]\n1***2***3';

    //when
    const sum = addNumbers(numbers);

    //then
    expect(sum).toEqual(6);
  });
});