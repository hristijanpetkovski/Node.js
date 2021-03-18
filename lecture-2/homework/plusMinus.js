arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let positiveNumber = 0;
  let negativeNumber = 0;
  let zeroNumber = 0;

  const lengthOfArr = arr.length;

  if (lengthOfArr > 0) {
    arr.map((item) => {
      if (item > 0) {
        positiveNumber++;
      } else if (item < 0) {
        negativeNumber++;
      } else {
        zeroNumber++;
      }

      return item;
    });
  }

  console.log(positiveNumber / lengthOfArr);
  console.log(negativeNumber / lengthOfArr);
  console.log(zeroNumber / lengthOfArr);
}
