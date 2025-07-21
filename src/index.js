module.exports = function toReadable(number) {
  const zeroToTwenty = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const dozens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if (number < 20) {
    return zeroToTwenty[number];
  }
  if (number >= 20 && number < 91 && number % 10 === 0) {
    const index = number / 10 - 2;
    return dozens[index];
  }
  if (number > 20 && number < 100 && number % 10 !== 0) {
    const tensIndex = Math.floor(number / 10) - 2;
    const unitsIndex = number % 10;
    return `${dozens[tensIndex]} ${zeroToTwenty[unitsIndex]}`;
  }
  if (number >= 100 && number < 1000 && number % 100 === 0) {
    const index = number / 100;
    return `${zeroToTwenty[index]} hundred`;
  }
  if (number > 100 && number < 1000 && number % 100 !== 0) {
    const hundredIndex = Math.floor(number / 100);
    const tens = number % 100;
    if (tens < 20) {
      return `${zeroToTwenty[hundredIndex]} hundred ${zeroToTwenty[tens]}`;
    }
    if (tens >= 20 && tens % 10 === 0) {
      const tensIndex = tens / 10 - 2;
      return `${zeroToTwenty[hundredIndex]} hundred ${dozens[tensIndex]}`;
    }
    if (tens > 20 && tens % 10 !== 0) {
      const tensIndex = Math.floor(tens / 10) - 2;
      const unitsIndex = tens % 10;
      return `${zeroToTwenty[hundredIndex]} hundred ${dozens[tensIndex]} ${zeroToTwenty[unitsIndex]}`;
    }
  }
  return 'wrong number';
};
