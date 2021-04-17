function updateInventory(arr1, arr2) {
  let resArr = arr1;

  resArr.forEach((ele) => {
    for (let i = arr2.length - 1; i >= 0; i--) {
      if (ele[1].indexOf(arr2[i][1]) > -1) {
        ele[0] += arr2[i][0];
        arr2.splice(i, 1);
      }
    }
  });

  //merge all the array without duplication
  resArr = resArr.concat(arr2);

  // get all the name in single Array
  let title = [];

  resArr.forEach((ele) => {
    title.push(ele[1]);
  });
  
  title.sort();

  let result = [];

  title.forEach((ele) => {
    for (let i = 0; i < resArr.length; i++) {
      if (ele.indexOf(resArr[i][1]) !== -1) {
        result.push(resArr[i]);
      }
    }
  });
  //console.log(result);
  return result;
}

