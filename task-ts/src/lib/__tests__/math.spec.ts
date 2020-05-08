import {sum, conditionalSum, alphabeticalOrder, reverseNum, uppercaseConvert} from '../math';

describe('Math library', () => {
    describe('sum', () => {
        test('math function should return some of two arguments', () => {
            expect((sum(1,2))).toBe(3);
        });
    });
    describe('conditionalSum', () => {
        test('should convert first arg to number', () => {
            expect((conditionalSum('2',5))).toBe(7);
        });
        test('should return some of two args', () => {
            expect((conditionalSum(2,5))).toBe(7);
        });
    });
    describe('reverseNum', () => {
        test('should reverse a number', () => {
            expect((reverseNum(123))).toBe(321);
        });
    });
    describe('alphabeticalOrder', () => {
        test('should return a passed string with letters in alphabetical order', () => {
            expect((alphabeticalOrder('webmaster'))).toBe('abeemrstw');
        });
    });
    describe('uppercaseConvert', () => {
        test('should convert the first letter in upper case', () => {
            expect((uppercaseConvert('the quick brown fox'))).toBe('The Quick Brown Fox');
        });
    });
});