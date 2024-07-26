let employee = [
  [100, "anu", "dvelepor", "calicut", 100],
  [10, "aju", "trader", "kochi", 60],
  [200, "amal", "singer", "dubai", 200],
  [3, "shibu", "driver", "america", 60],
];
console.log( employee.reduceRight((a, b) => (a[4] < b[4] ? a : b)));