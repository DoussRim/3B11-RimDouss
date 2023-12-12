//alert("Bonjour 3B11")
//confirm('Bonjour 3B11')
/*var a=prompt('Bonjour 3B11');
console.log(typeof a);*/
/*var a=5;
console.log(typeof a);
var b="5";
console.log(typeof b);
console.log(typeof null);
console.log(5+4);*/
/*
a=5;
var b="5";
if (a===b){
	console.log("ok")
}
else console.log("not ok")
*/
/*a=5;
var b="5";
if (a===b){
	console.log("ok")
}
else console.log("not ok")
*/
/*
var b=5;
var d=8;
if (b<d){
	let a=6;
	var e=9;
	const AA=10
	aa=aa+a;
	console.log(aa);
	console.log("1er affichage: "+a + e);
}
console.log("2eme affichage: " + e);*/
/*var t1=[5];
var t2=new Array(5);
var t3=Array(5);
//var t4=Array(5.2);
var t5=Array.of(5);
var t6=[];
t6.length=6;
console.log("t1: " +t1);
console.log("t2: " +t2);
console.log("t3: " +t3);
//console.log("t4: " +t4);
console.log("t5: " +t5);
console.log("t6: " +t6);*/
var arr=[];
arr[0]="un";
arr[1]=2;
arr[2]=3.14;
/*console.log(arr);
console.log(arr[0]);
console.log(arr["length"]);
arr.length=0;
console.log(arr);
arr.length=3;
console.log(arr);*/
for(var i=0; i<arr.length; i++){
	console.log("element"+i+" "+arr[i])
}
arr.forEach(function(nb){
	console.log('nb :'+nb)
})
arr.forEach(nb=>console.log('nb :'+nb));
