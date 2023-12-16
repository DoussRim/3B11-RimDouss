/*var a="abcd"
console.log(a)
var b=a.split('')
console.log(b)
c=b.reverse()
console.log(c)
console.log(c.join(''))*/
function inverseCH(chaine){
	//console.log( chaine.split('').reverse().join(''))
	return chaine.split('').reverse().join('')

}
//inverseCH("Bonjour 3B11")
//console.log(inverseCH("Bonjour 3B11"))

var ch="Bonjour"
console.log(ch.indexOf("o",3))
console.log(ch.charAt(3))
function VerifMail(mail){
	if(mail.indexOf("@")>0&&
		mail.indexOf(".")>0 &&
		mail.indexOf("@")<mail.indexOf("."))
		{
			//mail.endsWith("@esprit.tn")
		alert("mail Valide")
} else alert("mail invalide")
}
//VerifMail("rim@jj.test")
function ConvertCh(ch){
	var ch2=ch.charAt(0).toUpperCase()
	var ch3=ch.substring(1).toLowerCase();
	//console.log( ch2+ch3)
	console.log(ch.charAt(0).toUpperCase()+ch.substring(1).toLowerCase())
}
//ConvertCh("bONJOUR")
function Remplace (Ch,c,newCh){
	
	var i=ch.indexOf(c)
	if(i!=-1){
		ch=ch.replace(c,newCh)
		console.log(ch)		
	} else console.log("Erreur")
}
//Remplace("Bonjour","jour","soir")
/*ch="BonJour"
console.log(ch.replace("jour","soir"))*/

function Verif(){
	pass1=document.getElementById("pwd1")
	pass2=document.getElementById("pwd2")
	parag=document.getElementById("par")
	/*console.log(pass1.value)
	console.log(pass2.value)*/
	if( pass1.value=== pass2.value &&
	pass1.value !="" && pass2.value!="")
		parag.innerHTML="<b style='color:green'>pwd correcte</b>"
	else alert("corriger votre pwd")
}
//function titre(){
	/*titres=document.getElementsByClassName('titre')
	titres=document.getElementsByName('tt')
	titres=document.getElementsByTagName('h1')
	titres=document.querySelector(".titre")*/
	titres=document.querySelector("h1")
	t1=document.querySelector("#t1")
	t1.addEventListener('click',function(){
		t2=document.querySelector("#t2").innerHTML
		t3=document.querySelector("#t3").innerHTML
		document.querySelector("#pp").innerText=t1.innerHTML+" "+t2+" "+t3
	})
	/*t2=document.querySelector("#t2").innerHTML
	t3=document.querySelector("#t3").innerHTML
	console.log(t1)
	document.querySelector("#pp").innerText=t1.innerHTML+" "+t2+" "+t3*/
//}
