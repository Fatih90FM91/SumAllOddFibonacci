// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.








function sumFibs(num) {

    let fibo=[0,1];
    let sumofAllOdd=0;

   for (let i= 2; i < num; i++) {
       
       fibo[i]=fibo[i-2] + fibo[i-1];
   }

   for (let i= 0; i < fibo.length; i++) {
       
       if (fibo[i]%2==1) {
        sumofAllOdd+=fibo[i];
       }
   }

console.log(fibo);
document.write("<h2>"+fibo+"<h2/>");
document.write("<h1>Sum Of All OOdd Nums IN FIBONACI<h1/><h2>"+sumofAllOdd+"<h2/>");
  return num;




}
sumFibs(10);