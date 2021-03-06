import {
  binarySearchTwoSum,
  binarySearchThreeSum,
  productOfArrayEntries,
  productOfTwo2020Elements,
  productOfThree2020Elements,
  binarySearch,
} from './main';

const sampleNumbers = [1721, 979, 366, 299, 675, 1456];
const twoSumSampleNumbersProduct = 514579;
const threeSumSampleNumbersProduct = 241861950;

it('return the product of the array entries', () => {
  expect(productOfArrayEntries([2, 3])).toEqual(6);
  expect(productOfArrayEntries([2, 3, 4])).toEqual(24);
});

it('binarySearch corrrectly sorts', () => {
  let array = [1721, 979, 366, 299, 675, 1456];

  expect(binarySearch(array, 99)).toBeFalsy();
  expect(binarySearch(array, 1721)).toEqual(1721);
});

it('binarySearch corrrectly handles result in midpoint', () => {
  let array = [1, 2, 3, 4, 5];
  expect(binarySearch(array, 3)).toBe(3);
});

it('binarySearch corrrectly handles negative inputs', () => {
  let array = [-1, 2, 3, 4, 5];
  expect(binarySearch(array, -1)).toBe(-1);
});

it('binarySearchTwoSum correctly returns Sample values from Advent', () => {
  let array = [1721, 979, 366, 299, 675, 1456];
  let sum = 2020;
  expect(binarySearchTwoSum(array, sum).sort()).toEqual([1721, 299].sort());
});

it('binarySearchThreeSum correctly returns Sample values from Advent', () => {
  let array = [299, 1721, 979, 366, 299, 675, 1456, 299];
  let sum = 2020;
  expect(binarySearchThreeSum(array, sum).sort()).toEqual(
    [979, 366, 675].sort()
  );
});

it('binarySearchThreeSum correctly returns 3 values if 2 would fulfill', () => {
  let array = [0, 0, 0, 1, 2, 3, 5, 6];
  let sum = 6;
  expect(binarySearchThreeSum(array, sum).sort()).toEqual([1, 2, 3].sort());
});

it('two sum returns corrrect product of sample array', () => {
  expect(productOfTwo2020Elements(sampleNumbers)).toEqual(
    twoSumSampleNumbersProduct
  );
});

it('three sum returns corrrect product of sample array', () => {
  expect(productOfThree2020Elements(sampleNumbers)).toEqual(
    threeSumSampleNumbersProduct
  );
});
