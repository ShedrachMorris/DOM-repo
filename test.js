//forEach Array Method
/*let names = ['john', 'peace', 'abel', 'john', 'love', 'john'];
names.forEach((n, i, name) => {
   console.log(n, i, name);
});
 */
//Reduce Array Method
/*let num = [1, 2, 3, 4, 5, 6];

let dom = num.reduce((accumulator, currentValue) => 
   accumulator + currentValue
);
console.log(dom);
*/

//Map Array Method
/*let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array = num.map(a => a*2);
console.log(array);
*/

//Filter Array Method
/*let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let wap = num.filter(n => n % 2 === 0); 
console.log(wap);
*/

/*let nums = [1, 2, 3, 4, 5, 6];
let result= nums
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((acc, val) => acc + val)
    console.log(result);
    */

let num = [1, 2, 3, 4, 5, 6];
let me = num.map((n) => n.toString(2));
console.log(me);
