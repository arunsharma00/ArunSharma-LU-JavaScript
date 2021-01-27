//QUESTION 1-What is the value of clothes[0] and why?
const clothes = ['jacket', 't-shirt'];
clothes.length = 0;
console.log(clothes[0]);
//Answer:clothes[0] is undefined,because reducing the value of the length property is to delete its own array elements. Therefore, when JavaScript executes clothes.length = 0,
all the array elements will be deleted.So the value of clothes[0] is undefined.
//QUESTION 2-Write a Javascript program to find the sum of all elements of a given array?
var add=[6,9,3,5,2,8];
sum=0;
for(i=0;i<add.length;i++){
    sum= sum+add[i];
   }
console.log("Sum of array=" +sum);
//Answer:Sum of array=33.
