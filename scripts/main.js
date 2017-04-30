// JavaScript Document

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
var db;
var prom=0;
var plnt=0;
var point1=0;
var fuel = 5000;
var allowtouch = 0;
function initDB(){
	//size of disk 2097152
	db=window.openDatabase('Database',1.0,'AppGame',2097152);
	db.transaction(createTB, errorCB);
}
function createTB(tx){
	tx.executesql('CREATE TABLE IF NOT EXISTS StarSystems(coordX,coordY,radius)');
	
}
function errorCB(err){
	alert(err)
}
var movingcat =0;
var marleft=0;
var martop=0;
var initialleft=0;
var initialtop=0;
var movingtime= setInterval(catmove,10);

function catmove(){
		if(initialleft != marleft && initialtop != martop){
			var initialleft1= initialleft+"vw";
            document.getElementById('catspace').style.marginLeft=initialleft1;
            var initialtop1= initialtop+"vh";
            document.getElementById('catspace').style.margintop=initialtop1;
			if(initialleft < marleft && initialtop < martop){
            	initialleft += .1;
            	initialtop += .1;
            }
            else if(initialleft > marleft && initialtop < martop){
            	initialleft -= .1;
            	initialtop += .1;
            }
            else if(initialleft < marleft && initialtop > martop){
                initialleft += .1;
                initialtop -= .1;
            }
            else if(initialleft > marleft && initialtop > martop){
                initialleft -= .1;
                initialtop -= .1;
            }
		}
		else{
			if (initialleft==0){
				marleft=80;
			}
			else if (initialleft==80){
				marleft=80;
			}
			if (initialtop==0){
				martop=80;
			}
			else if (initialtop==80){
				martop=80;
			}
            
		}
}
function maingame(){
   var ra=plnt-1;
   if(planetlock[plnt] == 0 || fuel<planetfuel[plnt]){
        if(planetlock[plnt] == 0){
            alert(systemo[plnt]+" is locked till you win in "+systemo[ra]);
        }
        else if(fuel<planetfuel[plnt]){
            alert('Not Enough Fuel!!');
        }
   }
   else{
        fuel -= planetfuel[plnt];
        $(systemdes).hide();
        $(systemtarget).hide();
        $(spacecrft).hide();
        $(playing).hide();
        $(systems).hide();
        $(frontalpage).hide();
        $(gamingmain).show();
		$(backingmain).hide();
		$(startup).hide();
		$(resultup).hide();
		$(robous).hide();
		$(disasterhunt).hide();
		if (plnt>0 && prom==0){
			startgaming(plnt);
		}
		else{
			startpromo();
		}
   }
}
function initgame(){
    $(gamingmain).hide();
    $(systemdes).show();
    $(systemtarget).show();
    $(spacecrft).show();
    $(playing).show();
    $(systems).show();
    $(frontalpage).hide();
	$(backingmain).show();
	$(startup).hide();
	$(resultup).hide();
	$(robous).hide();
	$(disasterhunt).hide();
}
function frontalgm(){
	$(aboutus).hide();
	$(systemdes).hide();
    $(systemtarget).hide();
    $(spacecrft).hide();
    $(playing).hide();
    $(systems).hide();
	$(backingmain).hide();
    $(frontalpage).show();
	$(startup).hide();
	$(resultup).hide();
	$(itsyou).hide();
	$(robous).hide();
	$(disasterhunt).hide();
}
function abtus(){
	$(aboutus).show();
	$(frontalpage).hide();
	$(backingmain).hide();
	$(startup).hide();
	$(resultup).hide();
	$(robous).hide();
	$(disasterhunt).hide();
}
function itu(){
	$(itsyou).show();
	$(frontalpage).hide();
	$(backingmain).hide();
	$(startup).hide();
	$(resultup).hide();
	$(robous).hide();
	$(disasterhunt).hide();
	
}
function robotinging(){
	$(robous).show();
	$(itsyou).hide();
	$(disasterhunt).hide();
}
function selfp(){
	$(disasterhunt).show();
	$(itsyou).hide();
}
function startpromo(){
		$(systemdes).hide();
        $(systemtarget).hide();
        $(spacecrft).hide();
        $(playing).hide();
        $(systems).hide();
        $(gamingmain).hide();
		$(backingmain).hide();
		$(aboutus).hide();
		$(startup).show();
		$(resultup).hide();
}
function resultisthat(){
		$(systemdes).hide();
        $(systemtarget).hide();
        $(spacecrft).hide();
        $(playing).hide();
        $(systems).hide();
        $(gamingmain).hide();
		$(backingmain).hide();
		$(resultup).show();
		
		document.getElementById('anotherpiece').src="rocket2.png";
		if (plnt == 0){
			document.getElementById('anotherpiece').src="rocket2.png";
		}
		else if (plnt == 1){
			document.getElementById('anotherpiece').src="rocket3.png";
		}
		else if (plnt == 2){
			document.getElementById('anotherpiece').src="rocket4.png";
		}
		else if (plnt == 3){
			document.getElementById('anotherpiece').src="rocket5.png";
		}
		else if (plnt == 4){
			document.getElementById('anotherpiece').src="rocket6.png";
		}
		else if (plnt == 5){
			document.getElementById('anotherpiece').src="rocket7.png";
		}
		else if (plnt == 6){
			document.getElementById('anotherpiece').src="rocket8.png";
		}
		else if (plnt == 7){
			document.getElementById('anotherpiece').src="rocket9.png";
		}
		else if (plnt == 8){
			document.getElementById('anotherpiece').src="rocket10.png";
		}
		else if (plnt == 9){
			document.getElementById('anotherpiece').src="rocket0.png";
		}
		$(resultup).show();
}

function promo2(){
	if (prom == 0) {
		document.getElementById('startin').src="pic2.png";
		prom++;
	}
	else if (prom == 1) {
		document.getElementById('startin').src="pic3.png";
		prom++;
	}
	else if (prom == 2) {
		document.getElementById('startin').src="pic4.png";
		prom++;
	}
	else if (prom == 3) {
		document.getElementById('startin').src="pic5.png";
		prom++;
	}
	else if (prom == 4) {
		$(startup).hide();
		$(resultup).hide();
		$(systemdes).hide();
        $(systemtarget).hide();
        $(spacecrft).hide();
        $(playing).hide();
        $(systems).hide();
        $(frontalpage).hide();
        $(gamingmain).show();
		$(backingmain).hide();
		startgaming(plnt);
	}
}
//universe
function startgaming(reqpoint){
            var maxm = 0;
            document.getElementById('catspace').style.marginLeft="8vw";
            document.getElementById('catspace').style.marginTop="8vh";
			var reqlvl = reqpoint +5;
			var point = 0;
			var ido='a';
			var size = 4;
			var x = new Array(4);
			for (var i = 0; i < 4; i++) {
			  x[i] = new Array(4);
			}
			for (var j=0;j<4;j++){
				for (var kj=0;kj<4;kj++){
					x[j][kj]=0;
				}
			}
			x[3][3]=1;
			x[3][2]=1;
			x[2][2]=1;
			var altb=0;
			//var re=setInterval(colore,50);
			//var c= setInterval(checkKey,100);
			document.addEventListener('touchstart', handleTouchStart, false);
			document.addEventListener('touchmove', handleTouchMove, false);

			var xDown = null;
			var yDown = null;

			function checkgameing(rqlvl){
				var er=rqlvl-5;
				if (maxm == rqlvl){
					resultisthat();
					point1=point;
					$(resultup).show();
					planetlock[er+1]=1;
					rqlvl=0;
					maxm=0;
					plnt = 0;
				}
			};
			function handleTouchStart(evt) {
				xDown = evt.touches[0].clientX;
				yDown = evt.touches[0].clientY;
			};

			function handleTouchMove(evt) {
				if ( ! xDown || ! yDown ) {
					return;
				}

				var xUp = evt.touches[0].clientX;
				var yUp = evt.touches[0].clientY;

				var xDiff = xDown - xUp;
				var yDiff = yDown - yUp;

				if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
					if ( xDiff > 0 ) {
						/* left swipe */
						moveleft111();
						colore();
					} else {
						/* right swipe */
						moveright111();
						colore();
					}
				} else {
					if ( yDiff > 0 ) {
						/* up swipe */
						moveup111();
						colore();
					} else {
						/* down swipe */
						movedown111();
						colore();
					}
				}
				/* reset values */
				xDown = null;
				yDown = null;
			};
			document.onkeydown = checkKey;

			function checkKey(e) {
				e = e || window.event;
				if (e.keyCode == '37') {
				   moveleft111();
				   colore();
				}
				else if (e.keyCode == '39') {
				   moveright111
				   colore();
				}
				else if (e.keyCode == '38') {
				   moveup111();
				   colore();
				}
				else if (e.keyCode == '40') {
				   movedown111();
				   colore();
				}
			}

			colore();
			//00	01	02	03
			//10	11	12	13
			//20	21	22	23
			//30	31	32	33
			function moveup111(){
				for (var j=0;j<size;j++){
					for (var i=1;i<size;i++){
						if (x[i][j] != 0){
							var row = i;
							while (row>0){
								if(x[row-1][j]==0){
									x[row-1][j] = x[row][j];
									x[row][j] =0;
									row--;
								}
								else if (x[row-1][j]==x[row][j]){
									x[row-1][j] += 1;
									x[row][j] =0;
									point += x[row-1][j];
									break;
								}
								else {
									break;
								}
							}
						}
					}
				}
				randomy();
			}
			function movedown111(){
				for (var j=0;j<size;j++){
					for (var i=size - 2;i>=0;i--){
						if (x[i][j] != 0){
							var row = i;
							while (row +1 < size){
								if(x[row+1][j]==0){
									x[row+1][j] = x[row][j];
									x[row][j] =0;
									row++;
								}
								else if (x[row+1][j]==x[row][j]){
									x[row+1][j] += 1;
									x[row][j] =0;
									point += x[row+1][j];
									break;
								}
								else {
									break;
								}
							}
						}
					}
				}
				randomy();
			}
			function moveright111(){
				for (var i=0;i<size;i++){
					for (var j=size-2; j>=0; j--){
						if (x[i][j] != 0){
							var col = j;
							while (col+1 <size){
								if(x[i][col+1]==0){
									x[i][col+1] = x[i][col];
									x[i][col] =0;
									col++;
								}
								else if (x[i][col+1]==x[i][col]){
									x[i][col+1] += 1;
									x[i][col] =0;
									point += x[i][col+1];
									break;
								}
								else {
									break;
								}
							}
						}
					}
				}
				randomy();
			}
			function moveleft111(){
				for (var i=0;i<size;i++){
					for (var j=1; j<size; j++){
						if (x[i][j] != 0){
							var col = j;
							while (col-1 >=0){
								if(x[i][col-1]==0){
									x[i][col-1] = x[i][col];
									x[i][col] =0;
									col--;
								}
								else if (x[i][col-1]==x[i][col]){
									x[i][col-1] += 1;
									x[i][col] =0;
									point += x[i][col-1];
									break;
								}
								else {
									break;
								}
							}
						}
					}
				}
				randomy();
			}
			
			function randomy(){
				var pq = Math.random();
				pq *= 1000;
				pq= parseInt(pq);
				pq %= 4;
				var qp = Math.random();
				qp *= 1000;
				qp= parseInt(qp);
				qp %= 4;
				var qpr = Math.random();
				qpr *= 1000;
				qpr= parseInt(qpr);
				qpr %= maxm;
				qpr %= 2;
				qpr += 1;

				if (x[pq][qp] == 0){
					x[pq][qp] = qpr;
				}
				else if (x[pq][qp] != 0){
					randomy();
				}
			}
			function agero()
			{
				document.getElementById('lvl').innerHTML=maxm;
				if (maxm == 1){
					document.getElementById('agerr').innerHTML="First Accurate Star Map";
					document.getElementById('agerrr').innerHTML="First Accurate Star Map";
					document.getElementById('tagging').innerHTML="130 B.C. - Hipparchus from Greece develops the first accurate star map and star catalogue with over 850 of the brightest stars.";
				}
				else if (maxm == 2){
					document.getElementById('agerr').innerHTML="Construction of First Observatory";
					document.getElementById('agerrr').innerHTML="Construction of First Observatory";
					document.getElementById('tagging').innerHTML="Construction of an observatory in Cairo, Egypt was begun in 1120 A.D. This is possibly the first observatory built in Medieval Islam.";
				}
				else if (maxm == 3){
					document.getElementById('agerr').innerHTML="Heliocentric Theory of the Universe ";
					document.getElementById('agerrr').innerHTML="Heliocentric Theory of the Universe ";
					document.getElementById('tagging').innerHTML="In 1543, Copernicus from Poland publishes his heliocentric theory of the Universe. In 1608, Hans Lippershey, a Dutch spectacles maker invents the telescope.";
				}
				else if (maxm == 4){
					document.getElementById('agerr').innerHTML="Discovery of Galilei";
					document.getElementById('agerrr').innerHTML="Discovery of Galilei";
					document.getElementById('tagging').innerHTML="1609 A.D. – Galileo from Italy uses telescope for astronomical purposes. He discovers 4 Jovian moons, the Moon's craters and the Milky Way galaxy.";
				}
				else if (maxm == 5){
					document.getElementById('agerr').innerHTML="Discovery of Huygens ";
					document.getElementById('agerrr').innerHTML="Discovery of Huygens ";
					document.getElementById('tagging').innerHTML="1656 to 1659 - Christian Huygens of Netherlands discovers Saturn's rings and Titan, the fourth satellite of Saturn. In 1659, Huygens notes markings on Mars.";
				}
				else if (maxm == 6){
					document.getElementById('agerr').innerHTML="First Object Orbiting Earth";
					document.getElementById('agerrr').innerHTML="First Object Orbiting Earth";
					document.getElementById('tagging').innerHTML="1957 A.D. - Sputnik was the first object to orbit Earth, launched by Russians. ";
				}
				else if (maxm == 7){
					document.getElementById('agerr').innerHTML="First Animal in Space";
					document.getElementById('agerrr').innerHTML="First Animal in Space";
					document.getElementById('tagging').innerHTML="November, 1957- (Sputnik 2) The dog Laika, was the first living creature to orbit the Earth.";
				}
				else if (maxm == 8){
					document.getElementById('agerr').innerHTML="First U.S. Satellite Orbiting Earth";
					document.getElementById('agerrr').innerHTML="First U.S. Satellite Orbiting Earth";
					document.getElementById('tagging').innerHTML="1958 A.D. - Explorer 1 was launched. This was the first U.S. satellite to orbit the Earth";
				}
				else if (maxm == 9){
					document.getElementById('agerr').innerHTML="First NASA Satellite Launches";
					document.getElementById('agerrr').innerHTML="First NASA Satellite Launches";
					document.getElementById('tagging').innerHTML="1960-1962 A.D. – NASA has launched the first NASA communications satellite- ECHO 1 and the first NASA meteorological satellite- TIROS 1 in the same year 1960. In 1962 however, first NASA manned satellite- Friendship 7 was launched.";
				}
				else if (maxm == 10){
					document.getElementById('agerr').innerHTML="First Human in Space";
					document.getElementById('agerrr').innerHTML="First Human in Space";
					document.getElementById('tagging').innerHTML="12 April, 1961-Cosmonaut Yuri Gagarin became the first human to travel into space when he launched into orbit on the Vostok 3KA-3 spacecraft. ";
				}
				else if (maxm == 11){
					document.getElementById('agerr').innerHTML="First Woman in Space";
					document.getElementById('agerrr').innerHTML="First Woman in Space";
					document.getElementById('tagging').innerHTML="The first woman in space however, was cosmonaut Valentina Tereshkova who flew to space when she launched on the Vostok 6 mission.";
				}
				else if (maxm == 12){
					document.getElementById('agerr').innerHTML="The First Human Moon Landing";
					document.getElementById('agerrr').innerHTML="The First Human Moon Landing";
					document.getElementById('tagging').innerHTML="20 July, 1969 – The first moon landing by the American Apollo 11 Mission. ";
				}
				else if (maxm == 13){
					document.getElementById('agerr').innerHTML="Hubble Space Telescope";
					document.getElementById('agerrr').innerHTML="Hubble Space Telescope";
					document.getElementById('tagging').innerHTML="1990 A.D. - Hubble Space Telescope put into orbit from space shuttle Discovery from the U.S.A.";
				}
				else if (maxm == 14){
					document.getElementById('agerr').innerHTML="Landing on Mars ";
					document.getElementById('agerrr').innerHTML="Landing on Mars ";
					document.getElementById('tagging').innerHTML="4 December, 1996 - Mars Pathfinder, an American robotic spacecraft landed a base station with a roving probe on Mars.";
				}
				else if (maxm == 15){
					document.getElementById('agerr').innerHTML="Construction of ISS";
					document.getElementById('agerrr').innerHTML="Construction of ISS";
					document.getElementById('tagging').innerHTML="1998 A.D. - Construction begins on the International Space Station. In the same year, Galileo discovers origin of Jupiter’s Rings.";
				}
			}

			function colore(){
				
				for (var j=1;j<=4;j++){
					for (var kj=1;kj<=4;kj++){
						ido = ido + j;
						ido = ido + kj;
						var requ="Required Level: ";
						requ += reqlvl;
						document.getElementById('req1').innerHTML= requ;
						if(x[j-1][kj-1]==0){
							document.getElementById(ido).src="white.png";
							ido = 'a';
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==1){
							document.getElementById(ido).src="yellow.png";
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							ido = 'a';
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==2){
							document.getElementById(ido).src="green.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==3){
							document.getElementById(ido).src="red.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==4){
							document.getElementById(ido).src="blue.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
							
						}
						else if(x[j-1][kj-1]==5){
							document.getElementById(ido).src="purple.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==6){
							document.getElementById(ido).src="reddish.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==7){
							document.getElementById(ido).src="paste.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==8){
							document.getElementById(ido).src="brown.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==9){
							document.getElementById(ido).src="offwhite.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==10){
							document.getElementById(ido).src="orange.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==11){
							document.getElementById(ido).src="sky.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==12){
							document.getElementById(ido).src="space.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==13){
							document.getElementById(ido).src="tele.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==14){
							document.getElementById(ido).src="brownish.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
						else if(x[j-1][kj-1]==15){
							document.getElementById(ido).src="beguni.png";
							ido = 'a';
							if (maxm < x[j-1][kj-1]){
								maxm =	x[j-1][kj-1];
								agero();
							}
							var pok="Score: ";
							pok += point;
							document.getElementById('scro').innerHTML= pok;
						}
					}
				}
				checkgameing(reqlvl);
			}
}

var systemo = ['System-I: Sun', 'System-II: Proxima Centauri', 'System-III: α Centauri B', 'System-IV: Luhman', 'System-V: Lalande 21185','System-VI: Epsilon Eridani', 'System-VII: Groombridge 34 A', 'System-VIII: Epsilon Indi A','System-IX: Tau Ceti','System-X: Luytens Star'];
var systemp = ['--- ','V645 Centauri','HD 128621','Luhman 16A','BD+36°2147','BD−09°697','GX Andromedae','CPD−57°10015','BD−16°295','BD+05°1668'];
var planetnum = [8,1,2,1,1,1,1,1,5,2];
var planetDistance = [0,4.24,4.36,6.15,8.29,10.52,11.62,11.82,11.88,12.37];
var planetlock= [1,0,0,0,0,0,0,0,0,0];
var planetfuel= [100,210,330,480,560,680,700,750,800,850];
function gameLoop(){
	
	universe.focus.update();
	window.requestAnimationFrame(gameLoop);
}
var pauseAndRead =[

];


function generateRandomUniverse(numOfSystems){
	//system
	var systemData = [],
		planetData = [];
	for (var i=0;i<numOfSystems;i++){
		var newSystem = {},
			numOfPlanets = getRandomInt(1,5);
		var x,y,name;
		
		do{
			var collision = false;
			if (systemData.length == 0){
				x=0;
				y=0;
			}
			else{
				x=getRandomInt(-200,200)/200;
				y=getRandomInt(-200,200)/200;
			}
			
			for (var j=0;j<systemData.length;j++){
				if(lineDistance({x:x,y:y},{x: systemData[j].coordX,y: systemData[j].coordY}) <.3 ){
					collision = true;
				}
			}
		}while(collision == true);
		newSystem.coordX =x;
		newSystem.coordY =y;
		newSystem.radius = getRandomInt(300,700)/10000;
		
		systemData.push(newSystem);
		var orbitDirection=getRandomInt(1,2),
			orbits = [0,1,2,3,4];
		for (var j=0;j <numOfPlanets;j++){
			var newPlanet = {};
			var speed,
				rotation;
			if (orbitDirection == 1){
				speed=getRandomInt(-50,-10);
				rotation = getRandomInt(-180,-1);
			}
			else{
				speed=getRandomInt(10,50);
				rotation=getRandomInt(1,180);
			}
			var randOrbitIndex = getRandomInt(0,orbits.length - 1);
			newPlanet.orbit = orbits[randOrbitIndex];
			orbits.splice(randOrbitIndex,1);

			newPlanet.orbitSpeed = speed/100;
			newPlanet.rotation =rotation;
			newPlanet.radius=Math.round(getRandomInt(15,21))/1000;

			planetData.push(newPlanet);
		}
	}
	return systemData;
}
var game = {
	init: function(){
		if (allowtouch == 0){
            var w=window.innerWidth,
                h=window.innerHeight;
            $('#universe').css({width: w+'px', height: h+'px'});
            $('#systems').css('-webkit-transform','translate3d('+w/2+'px,'+h/2+'px, 0px)');
            $('#systems').css('transform','translate3d('+w/2+'px,'+h/2+'px, 0px)');
            document.getElementById('systemtarget').style.marginLeft="'+w/2+'px";
            document.getElementById('systemtarget').style.marginTop="'+h/2+'px";
            //num of universe
            var systems= generateRandomUniverse(10);
            universe.render(systems);
            gameLoop();
		}
	}
};

var universe={
	systems: [],
	render: function(data){
		var w=window.innerWidth;
		for(var i=0;i<data.length;i++){
			var system={};
			system.coords={x:data[i].coordX*w, y: data[i].coordY*w};
			system.realTimeCoords={x:data[i].coordX*w, y: data[i].coordY*w};
			system.endCoords={x:data[i].coordX*w, y: data[i].coordY*w};
			system.radius = data[i].radius * w;
			universe.systems.push(system);
		}
		universe.draw();
	},
	draw: function(){
		for (var i=0;i<universe.systems.length;i++){
			var s=universe.systems[i];
			$('#systems').append('<div id="system_'+i+'" class="system" style="width:'+s.radius*2+'px; height:'+s.radius*2+'px; -webkit-transform:translate3d('+(s.coords.x - s.radius)+'px,'+(s.coords.y-s.radius)+'px,0px); transform:translate3d('+(s.coords.x - s.radius)+'px,'+(s.coords.y-s.radius)+'px,0px);"></div>');
			//$('#systems').append('');
			//if (i == 0) { $('#systems').append('');}
		}
		var u=document.getElementById('universe');
		u.addEventListener('touchstart', universe.touchStart);
		u.addEventListener('touchmove', universe.touchMove);
		u.addEventListener('touchend', universe.touchEnd);
		
	},
	touchCoord:null,
	touchStart:function(e){
	    if (allowtouch == 0){
            e.preventDefault();
            var touch = e.touches[0];
            if(e.touches.length == 1){
                //code
                universe.touchCoord={x: touch.pageX, y: touch.pageY, id: touch.identifier};
                universe.focus.frame = universe.focus.frames;
            }
		}
		else {
		    maingame();
		}
	},
	touchMove:function(e){
		e.preventDefault();
		for (var i=0;i<e.touches.length;i++){
			if (e.touches[i].identifier == universe.touchCoord.id){
				//code
				var touch =e.touches[0],
					moveCoords = {x: touch.pageX, y:touch.pageY},
					dif = {moveX: moveCoords.x - universe.touchCoord.x,moveY: moveCoords.y - universe.touchCoord.y};
				for(var i=0; i<universe.systems.length;i++){
					var x = parseInt((dif.moveX + universe.systems[i].coords.x)*10)/10,
						y = parseInt((dif.moveY + universe.systems[i].coords.y)*10)/10,
						r = universe.systems[i].radius;
					universe.systems[i].realTimeCoords.x = x;
					universe.systems[i].realTimeCoords.y = y;
					
					$('#system_'+i).css('-webkit-transform','translate3d('+(x-r)+'px,'+(y-r)+'px, 0px)');
					$('#system_'+i).css('transform','translate3d('+(x-r)+'px,'+(y-r)+'px, 0px)');
				}
			}
		}
	},
	touchEnd:function(e){
		for (var i=0; i<e.changedTouches.length; i++){
			if(e.changedTouches[i].identifier == universe.touchCoord.id){
				//code
				var endCoords={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY},
					dif ={moveX: endCoords.x - universe.touchCoord.x,moveY: endCoords.y - universe.touchCoord.y};
				var focus,
					dist = 0;
					
				for (var i=0; i<universe.systems.length;i++){
					var line;
					var x=dif.moveX + universe.systems[i].coords.x,
						y=dif.moveY + universe.systems[i].coords.y;
					line = lineDistance({x:0, y:0},{x:x,y:y});
					
					universe.systems[i].endCoords = {x:x, y:y};
					if (line < dist || i==0){
						dist=line;
						focus= universe.systems[i];
						document.getElementById('systemnamer').innerHTML=systemo[i];
						plnt = i;
						var namsci="Sci. Name:";
						namsci += systemp[i];
						document.getElementById('systemnamersci').innerHTML=namsci;
						var namdist="Distance:";
						namdist += planetDistance[i];
						namdist += "Light yr";
						document.getElementById('systemnamerdist').innerHTML=namdist;
                        var tylo= "No.of Planets: ";
                        tylo += planetnum[i];
                        document.getElementById('numplanet').innerHTML=tylo;
                        var tylofuel= "Fuel needed: ";
                        tylofuel += planetfuel[i];
                        document.getElementById('fuelneed').innerHTML=tylofuel;
                        var tylofuel1= "Fuel Amount: ";
                        tylofuel1 += fuel;
                        document.getElementById('fuelhave').innerHTML=tylofuel1;
                        if (planetlock[i] == 1){
                            document.getElementById('lockplanet').innerHTML="Play";
                            document.getElementById('lockplanet').style.color="#fff";
                            document.getElementById('playing').style.background="rgba(173,227,57,0.8)";
                            document.getElementById('playing').style.visibility="visible";
                        }
                        else{
                            document.getElementById('lockplanet').innerHTML="Locked";
                            document.getElementById('lockplanet').style.color="#fff";
                            document.getElementById('playing').style.background="#FF9A93";
                            document.getElementById('playing').style.visibility="visible";
                        }
					}
				}
			universe.focus.init(focus);
			}
		}
	}, 
	focus:{
		
		frame: 30,
		frames: 30,
		change:{},
		init:function(f){
			
			
			var moveX = -f.endCoords.x;
			var moveY = -f.endCoords.y;
			universe.focus.change = { x:moveX, y:moveY};
			universe.focus.frame = 0;
			
		},
		update: function(){
			var u = universe.focus;
			if (u.frame < u.frames){
				
				u.frame++;
				//var opacity = ease.outExpo(universe.focus.frame, 1, -1,universe.focus.frames);
				for (var i=0; i<universe.systems.length;i++){
					var left = ease.outExpo(u.frame,universe.systems[i].endCoords.x, u.change.x, u.frames),
						top = ease.outExpo(u.frame,universe.systems[i].endCoords.y, u.change.y, u.frames),
						radius = universe.systems[i].radius;
					universe.systems[i].realTimeCoords = {x: left, y:top};
					universe.systems[i].coords = {x: left, y:top};
				$('#system_'+i).css('-webkit-transform','translate3d('+(left-radius)+'px,'+(top-radius)+'px, 0px)');
				$('#system_'+i).css('transform','translate3d('+(left-radius)+'px,'+(top-radius)+'px, 0px)');	
				}
			}
			
		}
	}
};
var app1 = {
    sendSms: function() {
		var number1 = '+8801770594774';
		alert('message has been sent to '+number1);
        var success1 = function (hasPermission) { 
            if (hasPermission) {
                var number = '+8801770594774';
				var message = 'Help me. Danger here.';
				console.log("number=" + number + ", message= " + message);

				//CONFIGURATION
				var options = {
					replaceLineBreaks: false, // true to replace \n by a new line, false by default
					android: {
						intent: 'INTENT'  // send SMS with the native android SMS messaging
						//intent: '' // send SMS without open any other app
					}
				};

				var success = function () { alert('Message sent successfully'); };
				var error = function (e) { alert('Message Failed:' + e); };
				sms.send(number, message, options, success, error);
            }
            else {
                alert('What the hell');
            }
        };
        var error1 = function (e) { alert('Something went wrong:' + e); };
        sms.hasPermission(success1, error1);
    }
};

var app = {
    macAddress: "20:16:05:16:67:45",  // get your mac address from bluetoothSerial.list
    chars: "",

/*
    Application constructor
 */
    initialize: function() {
        this.bindEvents();
        console.log("Starting SimpleSerial app");
    },
/*
    bind any events that are required on startup to listeners:
*/
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        connectButton.addEventListener('touchend', app.manageConnection, false);
    },

/*
    this runs when the device is ready for user interaction:
*/
    onDeviceReady: function() {
        // check to see if Bluetooth is turned on.
        // this function is called only
        //if isEnabled(), below, returns success:
        var listPorts = function() {
            // list the available BT ports:
            bluetoothSerial.list(
                function(results) {
                    app.display(JSON.stringify(results));
                },
                function(error) {
                    app.display(JSON.stringify(error));
                }
            );
        }

        // if isEnabled returns failure, this function is called:
        var notEnabled = function() {
            app.display("Bluetooth is not enabled.")
        }

         // check if Bluetooth is on:
        bluetoothSerial.isEnabled(
            listPorts,
            notEnabled
        );
    },
/*
    Connects if not connected, and disconnects if connected:
*/
    manageConnection: function() {

        // connect() will get called only if isConnected() (below)
        // returns failure. In other words, if not connected, then connect:
        var connect = function () {
            // if not connected, do this:
            // clear the screen and display an attempt to connect
            app.clear();
            app.display("Attempting to connect. " +
                "Make sure the serial port is open on the target device.");
            // attempt to connect:
            bluetoothSerial.connect(
                "20:16:05:16:67:45",  // device to connect to
                app.openPort,    // start listening if you succeed
                app.showError    // show the error if you fail
            );
        };

        // disconnect() will get called only if isConnected() (below)
        // returns success  In other words, if  connected, then disconnect:
        var disconnect = function () {
            app.display("attempting to disconnect");
            // if connected, do this:
            bluetoothSerial.disconnect(
                app.closePort,     // stop listening to the port
                app.showError      // show the error if you fail
            );
        };

        // here's the real action of the manageConnection function:
        bluetoothSerial.isConnected(disconnect, connect);
    },
/*
    subscribes to a Bluetooth serial listener for newline
    and changes the button:
*/
    openPort: function() {
        // if you get a good Bluetooth serial connection:
        app.display("Connected to: " + "20:16:05:16:67:45");
        // change the button's name:
        connectButton.innerHTML = "Disconnect";
        // set up a listener to listen for newlines
        // and display any new data that's come in since
        // the last newline:
        bluetoothSerial.subscribe('\n', function (data) {
            app.clear();
            app.display(data);
        });
    },

/*
    unsubscribes from any Bluetooth serial listener and changes the button:
*/
    closePort: function() {
        // if you get a good Bluetooth serial connection:
        app.display("Disconnected from: " + "20:16:05:16:67:45");
        // change the button's name:
        connectButton.innerHTML = "Connect";
        // unsubscribe from listening:
        bluetoothSerial.unsubscribe(
                function (data) {
                    app.display(data);
                },
                app.showError
        );
    },
/*
    appends @error to the message div:
*/
    showError: function(error) {
        app.display(error);
    },

/*
    appends @message to the message div:
*/
    display: function(message) {
        var display = document.getElementById("message"), // the message div
            lineBreak = document.createElement("br"),     // a line break
            label = document.createTextNode(message);     // create the label

        display.appendChild(lineBreak);          // add a line break
        display.appendChild(label);              // add the message node
    },
/*
    clears the message div:
*/
    clear: function() {
        var display = document.getElementById("message");
        display.innerHTML = "";
    },
	sendToArduino: function(c) {
        bluetoothSerial.write(c);
    }
};      // end of app app.macAddress




