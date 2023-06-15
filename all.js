//JS 功能ㄧ
let str = "";

function timesNum(min, max) {
  for (let i = min; i <= max; i++) {
    for (let j = 1; j <= max; j++) {
      str = `${i} x ${j} = ${i * j};`;
      console.log(str);
    }
  }
}

// timesNum(3, 15);

//JS 功能二
function BMI(height, weight) {
  let ans = Math.round((weight / Math.pow(height / 100, 2)) * 10) / 10;
  console.log(ans);
}

BMI(178, 70);
