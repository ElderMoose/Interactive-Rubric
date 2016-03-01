# Interactive-Rubric

<script type="text/javascript">

var a = 4;
var b = 4;
var c = 4;
var d = 4;
var e = 4;
var f = 4;
var ttl = 0;
var x = 6;
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
