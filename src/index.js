function RandomIntegerGenerator() {
    const AMOUNT_RANDOM_INTEGERS = 1000000;

    function random (min, max)  {
        let randomNumber = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(randomNumber);
    }
    
    function randomInteger () {
        let arrRandomNumber = [];
        let randomLength = random(1, 7);

        for(let i = 0; i < randomLength; i++) {
            arrRandomNumber[i] = random(0, 1);
        }

        return +arrRandomNumber.join('');
    }

    function amountIntegers(number, num) {
        return number === num;
    }

    function amountLengthInteger(number, num) {
        return number.toString().length === num;
    }

    this.getArrayRandomIntegers = () => {
        let arrRandomIntegers = [];
    
        for(let i = 0; i < AMOUNT_RANDOM_INTEGERS; i++) {
            arrRandomIntegers[i] = randomInteger();
        }

        return arrRandomIntegers;
    };
    
    this.filterArrayRandomIntegers  = (arr, num, isAmountInteger) => {
        return arr.filter((number) => isAmountInteger ? amountIntegers(number, num) : 
        amountLengthInteger(number, num)).length;
    };

    this.getPercent = (strType, integer) => {
        let percent = Math.round((
            (integer / AMOUNT_RANDOM_INTEGERS) * 100) * 100) / 100;
        return `Процентное соотношение ${strType}: ${percent}%`;
    };


}

let randomIntegerGenerator = new RandomIntegerGenerator();

let arrayIntegers = randomIntegerGenerator.getArrayRandomIntegers();
let amountZero = randomIntegerGenerator.filterArrayRandomIntegers(arrayIntegers, 0, true);
let amountUnits = randomIntegerGenerator.filterArrayRandomIntegers(arrayIntegers, 1, true);
let amountTwoNumbersSequence = randomIntegerGenerator.filterArrayRandomIntegers(arrayIntegers, 2, false);
let amountThreeNumbersSequence = randomIntegerGenerator.filterArrayRandomIntegers(arrayIntegers, 3, false);
let getPercentAmountZero = randomIntegerGenerator.getPercent('нулей', amountZero);
let getPercentAmountUnits = randomIntegerGenerator.getPercent('единиц', amountUnits);
let getPercentAmountTwoNumbersSequence = randomIntegerGenerator.getPercent('последовательностей из двух цифр', amountTwoNumbersSequence);
let getPercentAmountThreeNumbersSequence = randomIntegerGenerator.getPercent('последовательностей из трех цифр', amountThreeNumbersSequence);

console.log('Массив случайных целых чисел: ', arrayIntegers);
console.log('Количество 0 в массиве: ', amountZero);
console.log('Количество 1 в массиве: ', amountUnits);
console.log('Количество последовательностей из двух цифр: ', amountTwoNumbersSequence);
console.log('Количество последовательностей из трех цифр: ', amountThreeNumbersSequence);
console.log(getPercentAmountZero);
console.log(getPercentAmountUnits);
console.log(getPercentAmountTwoNumbersSequence);
console.log(getPercentAmountThreeNumbersSequence);