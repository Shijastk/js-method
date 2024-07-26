// let employee = [
//   [100,200],
//   [10, 60],
//   [200,200],
//   [3, 60],];

//   console.log(employee.flat().filter((a)=>(a<70)))

//   let deeplyNestedArray=[1,[2,[3,[4,[5,]]]]];
//   console.log(deeplyNestedArray.flat().flat().flat().flat());
//    console.log(deeplyNestedArray.flat(Infinity));



let arrWithEmptySlots =[1,,[3,5],,[4,[5,6]]]
console.log(arrWithEmptySlots.flat(Infinity))