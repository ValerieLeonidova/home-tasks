export const sum = (a: number, b: number) => a + b;

export const conditionalSum = (a: string | number, b: number) => {
    if (typeof a === 'string') {
        return Number(a) + b;
    }
    return a + b;
};

export const reverseNum = (num: number) => {
    return Number(String(num).split('').reverse().join(''));
};

export const alphabeticalOrder = (str: string) => {
    return str.split('').sort().join('');
};

export const uppercaseConvert = (str: string) => {
    var arr = str.split(' ');
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return newArr.join(' ');
};