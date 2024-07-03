// เริ่มเขียนโค้ดตรงนี้
function printStar(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i += 1) {
    let rowResult = "";
    for (let j = 1; j <= i; j += 1) {
      rowResult += "* ";
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}

console.log(printStar(5));
