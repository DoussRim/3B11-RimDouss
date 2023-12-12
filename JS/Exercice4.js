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
		parag.innerHTML="<b>pwd correcte</b>"
	else alert("corriger votre pwd")
}