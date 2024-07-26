product=[[1,"hide and seek",50,20],
[2,"food",20,25],
[3,'animal',40,30],
[4,"birds",25,10]]

// console.log(product.some((a) => a[2] >= 10 && a[2] <= 20));

product.filter((a) => a[3] < 40 && a[3] > 20).forEach((b) => console.log(b[1]));



