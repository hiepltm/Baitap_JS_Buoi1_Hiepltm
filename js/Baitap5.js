/**
 * Khoi 1: Input
 * num
 * 
 * Khoi 2: Cac buoc xu ly
 * B1: Tao va gan gia tri cho bien: num, ten, unit, sum
 * B2: Tinh
 * ten = Math.floor(num/10)
 * unit = num%10
 * sum = ten +unit
 * B3: Show len console
 * 
 * Khoi 3: Output
 * sum
 */

var num = 12;

var ten = 0;
var unit = 0;
var sum = 0;

ten = Math.floor(num/10);
unit = num%10;
sum= ten+ unit;

console.log("Tong 2 ky so la: " + sum);