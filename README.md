# Interactive-Rubric
# Interactive-Rubric
<html>

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
<td id="I"onClick= "c3a();green();gold();orange();red();clik()" >The author's credentials indicate that he/she is an expert on this topic. The author gives contact info or prefessional afiliation.</td>	
<td id="II" onclick="c2a();gold();green();orange();red();clik()">The author is named but credentials and/or contact info (online sources) is incomplete.</td>	
<td id="III" onClick="c1a();red();gold();green();orange();clik()">The author is unamed and/or no credentials are given.</td>	
<td id= "IV" onclick="c0a();red();orange();gold();green();clik()">The author is named, but is clearly not an expert on the topic (published by student or fans).</td>	
</tr>
<tr> 
<td> Publisher</td>	
<td id="V" onclick="c3p();green();gold();orange();red();clik()"> 
Published by:<br/>
*U.S. Government (.gov) <br />
*Scholarly Journal <br />
or<br /> 
in a Reference or academic book</td>	
<td id="VI" onclick="c2p();green();gold();orange();red();clik()"> 
Published by a known:<br/>
*organization<br />
*university<br />
*business<br />
*magazine/newspaper<br />
or <br />
in a print book
</td>	
<td id="VII" onClick="c1p();green();gold();orange();red();clik()" >
Published by:<br/>
*a K-12 school<br/>
*an unknown business(.com)<br/>
*an unknown organization (.org).</td>	
<td id="VIII"  onclick="c0p();green();gold();orange();red();clik()">
Self-published:<br/>
blogs, personal web pages, etc.<br/>
Look for the symbols ~% or the words "users" "members" etc. in the URL</td>	
</tr>	
<tr> 
<td> Sources Cited</td>	
<td id="IX" onclick="c3sc();green();gold();orange();red();clik()"> The work is original research/info by a reputable source.  There is a Works Cited list and/or a Bibliography</td>	
<td id="X" onclick="c2sc();green();gold();orange();red();clik()">The work is a compilation of research/info by a reputable source. No Works Cited information as a list.</td>	
<td id="XI" onClick="c1sc();green();gold();orange();red();clik()" >There is a statement about the source of information embedded in the source, but no Works Cited list.</td>	
<td id="XII"  onclick="c0sc();green();gold();orange();red();clik()">No indication of where the information came from.</td>		
</tr>	
<tr> 
<td> Purpose</td>	
<td id="XIII" onclick="c3pp();green();gold();orange();red();clik()">To promote scholarly research.</td>	
<td id="XIV" onclick="c2pp();green();gold();orange();red();clik()">To provide factual information. Some opinion may be included.</td>	
<td id="XV" onClick="c1pp();green();gold();orange();red();clik()" >To sell something, to persuade, or to promote an idea.</td>	
<td id="XVI"  onclick="c0pp();green();gold();orange();red();clik()">For personal or entertainment purposes.</td>		
</tr>	
<tr> 
<td> Date</td>	
<td id="XVII" onclick="c3d();green();gold();orange();red();clik()"> 
Online:<br/>
The info is less than 1 year old.<br/>
Print:<br/>
The info is less than 3 years old.
</td>	
<td id="XVIII" onclick="c2d();green();gold();orange();red();clik()"> Online:<br/> 
The info is less than 3 years old.<br/>
Print:<br/>
The information is more than 3 years old, but is not necessarily out of date.</td>	
<td id="XIX" onClick="c1d();green();gold();orange();red();clik()" >The information is more than five years old.</td>	
<td id="XX"  onclick="c0d();green();gold();orange();red();clik()">There is no indication of when the information was published.</td>	
</tr>	
<tr> 
<td> Substance</td>	
<td id="XXI" onclick="c3s();green();gold();orange();red();clik()"> Depth of coverage needed for your purpose and written at a college or professional level.</td>	
<td id="XXII" onclick="c2s();green();gold();orange();red();clik()">Written for the general public.</td>	
<td id="XXIII" onClick="c1s();green();gold();orange();red();clik()" >Lacking the depth needed for your purpose.</td>	
<td id="XXIV"  onclick="c0s();green();gold();orange();red();clik()">No depth, contains excessive colloquialisms, slang, use of "I"</td>	
</tr>	
</table>

<p id='idk'>
</p>
<script language="javascript" type="text/javascript" src="CODE.js"> </script>
Mark V
</body>
</html>
