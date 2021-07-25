/**
 * Khoi 1: Input
 * usdAmount
 * 
 * Khoi 2: Cac buoc xu ly
 * B1: Tao va gan gia tri cho bien: usdAmount, rate, vndAmount
 * B2: Tinh so tien vnd: vndAmount = usdAmount*rate
 * B3: Hien thi len console
 * 
 * 
 * Khoi 3: Output
 * vndAmount
 */

var usdAmount=2;
var rate=23500;
var vndAmount=0;
vndAmount=usdAmount*rate;
console.log("So tien sau quy doi VND la: " + vndAmount);