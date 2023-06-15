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
