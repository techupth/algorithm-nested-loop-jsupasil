// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i += 1) {
    let rowResult = [];
    for (let j = 1; j <= n; j += 1) {
      rowResult += i * j + "\t";
    }
    finalResult += rowResult + "\n";
  }
  return finalResult;
}

console.log(multiplicationTable(5));
