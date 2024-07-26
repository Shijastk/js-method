//[no,district,+ve cases,death rates,curred rates, 1st dose vaccine, 2nd dose vaccine]

covid_data = [
  [1, "Eranakulam", 34000, 2000, 23000, 20000, 2000],
  [2, "Edukki", 14000, 3000, 25000, 30000, 1000],
  [3, "Thrissur", 24000, 4000, 33000, 24000, 2500],
  [4, "Pathanamthitta", 20000, 2000, 45000, 22000, 1500],
  [5, "Kozhikode", 44000, 5000, 12000, 21000, 500],
  [6, "Kottayam", 27000, 1500, 27000, 14000, 1000],
  [7, "Kollam", 14000, 2500, 25000, 18000, 2700],
];

 console.log(covid_data.reduce((a, b) => (a[3] < b[3] ? a : b)).find((c) => c[1]));
console.log(covid_data.reduce((d, f) => (d[5] > f[5] ? d : f)).find((g) => g[1]));
console.log(
  covid_data.reduce((h, i) => (h[2]> i[2] ? h : i)).find((k) => k[1])
);
console.log(covid_data.sort((a,b)=>b[2]-a[2]))
console.log(covid_data.sort((a, b) => a[5] - b[5]));
console.log(covid_data.map((element) => element[4]).reduce((a, b) => a + b));
console.log(covid_data.filter((a) => a[2] < 27000).some((a) => a[1]));
covid_data.filter((a) => a[1] === "Edukki").find((a) => console.log(a[4]));
