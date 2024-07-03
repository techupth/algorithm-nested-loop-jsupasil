// เริ่มเขียนโค้ดตรงนี้
function printPattern(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i += 1) {
    let rowResult = "";
    for (let j = 1; j <= i; j += 1) {
      rowResult += j + " ";
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}

console.log(printPattern(5));
