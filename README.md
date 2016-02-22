# Interactive-Rubric

<html><head><title>interactiveRubric</title></head>

<body> 

<table border= '1'>
<tr>

<td> </td>	
<td>3</td>	
<td>2</td>	
<td>1</td>	
<td>0</td>	
	
</tr>


<tr >
<td> Author</td>	
<td id="I"onClick= "c3a();green();gold();orange();red();clik()" >sample</td>	
<td id="II" onclick="c2a();gold();green();orange();red();clik()">sample</td>	
<td id="III" onClick="c1a();red();gold();green();orange();clik()">sample</td>	
<td id= "IV" onclick="c0a();red();orange();gold();green();clik()">sample</td>	
</tr>
<tr> 
<td> Publisher</td>	
<td id="V" onclick="c3p();green();gold();orange();red();clik()"> sample</td>	
<td id="VI" onclick="c2p();green();gold();orange();red();clik()"> sample</td>	
<td id="VII" onClick="c1p();green();gold();orange();red();clik()" >sample</td>	
<td id="VIII"  onclick="c0p();green();gold();orange();red();clik()">sample</td>	
</tr>	
<tr> 
<td> Sources Cited</td>	
<td> id="IX" onclick="c3sc();green();gold();orange();red();clik()"> sample</td>	
<td> id="X" onclick="c2sc();green();gold();orange();red();clik()"> sample</td>	
<td> id="XI" onClick="c1sc();green();gold();orange();red();clik()" >sample</td>	
<td> id="XII"  onclick="c0sc();green();gold();orange();red();clik()">sample</td>		
</tr>	
<tr> 
<td> Purpose</td>	
<td><a id="XIII" onclick="c3pp();green();gold();orange();red();clik()"> sample</a></td>	
<td><a id="XIV" onclick="c2pp();green();gold();orange();red();clik()"> sample</a></td>	
<td><a id="XV" onClick="c1pp();green();gold();orange();red();clik()" >sample</a></td>	
<td><a id="XVI"  onclick="c0pp();green();gold();orange();red();clik()">sample</a></td>		
</tr>	
<tr> 
<td> Date</td>	
<td><a id="XVII" onclick="c3d();green();gold();orange();red();clik()"> sample</a></td>	
<td><a id="XVIII" onclick="c2d();green();gold();orange();red();clik()"> sample</a></td>	
<td><a id="XIX" onClick="c1d();green();gold();orange();red();clik()" >sample</a></td>	
<td><a id="XX"  onclick="c0d();green();gold();orange();red();clik()">sample</a></td>	
</tr>	
<tr> 
<td> Substance</td>	
<td><a id="XXI" onclick="c3s();green();gold();orange();red();clik()"> sample</a></td>	
<td><a id="XXII" onclick="c2s();green();gold();orange();red();clik()"> sample</a></td>	
<td><a id="XXIII" onClick="c1s();green();gold();orange();red();clik()" >sample</a></td>	
<td><a id="XXIV"  onclick="c0s();green();gold();orange();red();clik()">sample</a></td>	
</tr>	
</table>
<style type="text/css">
#I {
	cursor: pointer;
}
#II {
	cursor: pointer;
}
#III {
	cursor: pointer;
}
#IV {
	cursor: pointer;
}
#V {
	cursor: pointer;
}
#VI {
	cursor: pointer;
}
#VII {
	cursor: pointer;
}
#VIII {
	cursor: pointer;
}
#IX {
	cursor: pointer;
}
#X {
	cursor: pointer;
}
#XI {
	cursor: pointer;
}
#XII {
	cursor: pointer;
}
#XIII {
	cursor: pointer;
}
#XIV {
	cursor: pointer;
}
#XV {
	cursor: pointer;
}
#XVI {
	cursor: pointer;
}
#XVII {
	cursor: pointer;
}
#XVIII {
	cursor: pointer;
}
#XIX {
	cursor: pointer;
}
#XX {
	cursor: pointer;
}
#XXI {
	cursor: pointer;
}
#XXII {
	cursor: pointer;
}
#XXIII {
	cursor: pointer;
}
#XXIV {
	cursor: pointer;
}
</style>
<p id='idk'>
</p>
<script>

var a = 4;
var b = 4;
var c = 4;
var d = 4;
var e = 4;
var f = 4;
var ttl = 0;
var x = 6
var cl = 0;
function green(){
	if(a ==3){
	document.getElementById("I").style.color= "green"
	}
	if(a!=3){
	document.getElementById('I').style.color='black'
	}

	if(b==3){
	document.getElementById('V').style.color='green'
	}
	if(b!=3){
	document.getElementById('V').style.color='black'
	}

	if(c==3){
	document.getElementById('IX').style.color='green'
	}
	if(c!=3){
	document.getElementById('IX').style.color='black'
	}

	if(d==3){
	document.getElementById('XIII').style.color='green'
	}
	if(d!=3){
	document.getElementById('XIII').style.color='black'
	}

	if(e==3){
	document.getElementById('XVII').style.color='green'
	}
	if(e!=3){
	document.getElementById('XVII').style.color='black'
	}

	if(f==3){
	document.getElementById('XXI').style.color='green'
	}
	if(f!=3){
	document.getElementById('XXI').style.color='black'
	}
}

function gold(){
	if(a==2){	
	document.getElementById("II").style.color= "gold"
	}
	if(a!=2){
	document.getElementById("II").style.color= "black"
	}

	if(b==2){
	document.getElementById('VI').style.color='gold'
	}
	if(b!=2){
	document.getElementById('VI').style.color='black'
	}

	if(c==2){
	document.getElementById('X').style.color='gold'
	}
	if(c!=2){
	document.getElementById('X').style.color='black'
	}

	if(d==2){
	document.getElementById('XIV').style.color='gold'
	}
	if(d!=2){
	document.getElementById('XIV').style.color='black'
	}

	if(e==2){
	document.getElementById('XVIII').style.color='gold'
	}
	if(e!=2){
	document.getElementById('XVIII').style.color='black'
	}

	if(f==2){
	document.getElementById('XXII').style.color='gold'
	}
	if(f!=2){
	document.getElementById('XXII').style.color='black'
	}
}

function orange(){
	if(a==1){
	document.getElementById("III").style.color="#E66C2C"
	}
	if(a!=1){
	document.getElementById("III").style.color="black"
	}

	if(b==1){
	document.getElementById('VII').style.color='#E66C2C'
	}
	if(b!=1){
	document.getElementById('VII').style.color='black'
	}
	if(c==1){
	document.getElementById('XI').style.color='#E66C2C'
	}
	if(c!=1){
	document.getElementById('XI').style.color='black'
	}

	if(d==1){
	document.getElementById('XV').style.color='#E66C2C'
	}
	if(d!=1){
	document.getElementById('XV').style.color='black'
	}

	if(e==1){
	document.getElementById('XIX').style.color='#E66C2C'
	}
	if(e!=1){
	document.getElementById('XIX').style.color='black'
	}

	if(f==1){
	document.getElementById('XXIII').style.color='#E66C2C'
	}
	if(f!=1){
	document.getElementById('XXIII').style.color='black'
	}
}

function red(){
	if(a==0){
	document.getElementById("IV").style.color="red"
	}
	if(a!=0){
	document.getElementById("IV").style.color="black"
	}

	if(b==0){
	document.getElementById('VIII').style.color='red'
	}
	if(b!=0){
	document.getElementById('VIII').style.color='black'
	}

	if(c==0){
	document.getElementById('XII').style.color='red'
	}
	if(c!=0){
	document.getElementById('XII').style.color='black'
	}

	if(d==0){
	document.getElementById('XVI').style.color='red'
	}
	if(d!=0){
	document.getElementById('XVI').style.color='black'
	}

	if(e==0){
	document.getElementById('XX').style.color='red'
	}
	if(e!=0){
	document.getElementById('XX').style.color='black'
	}

	if(f==0){
	document.getElementById('XXIV').style.color='red'
	}
	if(f!=0){
	document.getElementById('XXIV').style.color='black'
	}
}

function c3a(){
	if(a==4){
		x -=1
	
	}
	a=3;

}
function c2a(){
	if(a==4){
		x -=1
	
	}
	a=2;
}
function c1a(){
	if(a==4){
		x -=1
	
	}
	a=1
}
function c0a(){
	if(a==4){
		x -=1
	
	}
	a=0;
}

function c3p(){
	if(b==4){
		x -=1
	}

	b=3;
}
function c2p(){
	if(b==4){
		x -=1
	}
	b=2;
}
function c1p(){
	if(b==4){
		x -=1
	}	
	b=1;
}
function c0p(){
	if(b==4){
		x -=1
	}	
	b=0;
}

function c3sc(){
	if(c==4){
		x -=1
	}
	c=3;
}
function c2sc(){
	if(c==4){
		x -=1
	}
	c=2;
}
function c1sc(){
	if(c==4){
		x -=1
	}
	c=1;
}
function c0sc(){
	if(c==4){
		x -=1
	}
	c=0;
}

function c3pp(){
	if(d==4){
		x -=1
	}
	d=3;
}
function c2pp(){
	if(d==4){
		x -=1
	}	
	d=2;
}
function c1pp(){
	if(d==4){
		x -=1
	}
	d=1;
}
function c0pp(){
	if(d==4){
		x -=1
	}
	d=0;
}

function c3d(){
	if(e==4){
		x -=1
	}	
	e=3;
}
function c2d(){
	if(e==4){
		x -=1
	}		
	e=2;
}
function c1d(){
	if(e==4){
		x -=1
	}			
	e=1;
}
function c0d(){
	if(e==4){
		x -=1
	}			
	e=0;
}

function c3s(){
	if(f==4){
		x -=1
	}		
	f=3;

}
function c2s(){
	if(f==4){
		x -=1
	}		
	f=2;
}
function c1s(){
	if(f==4){
		x -=1
	}		
	f=1;
}
function c0s(){
	if(f==4){
		x -=1
	}		
	f=0;
}

function junk(){
	if(a!=4||b!=4||c!=4||d!=4||e!=4||f!=4){
		ttl = a + b + c + d + e + f - 6;
		document.write("<br />" + ttl)
		if(a!=4&&b!=4&&c!=4&&d!=4&&e!=4&&f!=4){
			ttl = a + b + c + d + e + f;
			document.write("<br />" + ttl)

		}
	}
		if(a!=4||b!=4||c!=4||d!=4||e!=4||f!=4&&x>5){
		x=5
	}
	if(a!=4||b!=4||c!=4||d!=4||e!=4||f!=4&&x>4){
		x=4
	}
	if(a!=4||b!=4||c!=4||d!=4||e!=4||f!=4&&x>3){
		x = 3
	}
	if(a!=4||b!=4||c!=4||d!=4||e!=4||f!=4&&x>2){
		x=2
	}	
	if(a!=4||b!=4||c!=4||d!=4||e!=4||f!=4&&x>1){
		x=1
	}	
	if(a!=4||b!=4||c!=4||d!=4||e!=4||f!=4&&x>0){
		x=0
	}

	if(a!=4&&x >5){
		x - 1
	}
	if(b!=4&& x >4){
		x - 1
	}
	if(c!=4&&x > 3){
		x - 1
	}
	if(d!=4&&x>2){
		x-1
	}	
	if(e!=4&&x>1){
		x-1
	}	
	if(f!=4&&x>0){
		x-1
	}	

		ttl = a + b + c + d + e + f -x
	
		document.getElementById('idk').innerHTML=ttl	
		return
}
	
function clik(){

	if(a!=4&&b!=4&&c!=4&&d!=4&&e!=4&&f!=4){
		ttl = a + b + c + d + e + f;
		document.getElementById('idk').innerHTML=ttl	
		
 	} else
 		if(a!=4||b!=4||c!=4||d!=4||e!=4||f!=4){
		ttl = a + b + c + d + e + f - x;
		document.getElementById('idk').innerHTML=ttl	
	}

}
//separate variable that increases in value everytime something is clicked
//keep track of how many of the rows have been clicked


</script>
Mark IV
</body>
</html>
