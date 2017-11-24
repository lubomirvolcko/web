function setCurrentDate() {
    var currentDate = document.getElementById('currentDate');
    var today = new Date();
    currentDate.innerHTML=today.getDate()+"-"+(parseInt(today.getMonth())+1)+"-"+today.getFullYear();

    var currentTime=document.getElementById('currentTime');
    var strHours=today.getHours();
    if(strHours<10) strHours="0"+strHours;

    var strMinutes=today.getMinutes();
    strMinutes= strMinutes<10?"0"+strMinutes:strMinutes;

    var strSeconds=today.getSeconds();
    if(strSeconds<10) strSeconds="0"+strSeconds;

    currentTime.innerHTML=strHours+":"+strMinutes+":"+strSeconds;

}

function time() {
    setInterval(setCurrentDate,1000);
    document.getElementById('celebrating1').style.display = "none";
    document.getElementById('celebrating2').style.display = "none";
}
    
function changedBirthDate() {
    var birthDate=document.getElementById('birth');
    var objectDate=new Date(birthDate.value)
    //console.log(objectDate.getDate()+"-"+objectDate.getMonth()+"-"+objectDate.getFullYear());
    var day = objectDate.getDate();
    var month = objectDate.getMonth()+1;
    var year = objectDate.getFullYear();
    console.log("Your date of birth: "+day+"-"+month+"-"+year);
    var today = new Date();
    var currDay=today.getDate();
    var currMonth=today.getMonth()+1;
    var currYear=today.getFullYear();
    console.log("Today: "+currDay+"-"+currMonth+"-"+currYear);    
    
    var errorcount = 0;
    if(objectDate>today)
        {
            console.log("Invalid birth date!");
            document.getElementById('error').innerHTML = "Invalid birth date!";
            errorcount++;
            document.getElementById('celebrating1').style.display = "none";
            document.getElementById('celebrating2').style.display = "none";
        }
    else {document.getElementById('error').innerHTML = ""}
    

    var weekday = objectDate.getDay();
    
    console.log("weekday = "+weekday);
    
    if(day==currDay && month==currMonth)
                {
                    document.getElementById('celebrating1').style.display = "inline";
                    document.getElementById('celebrating2').style.display = "inline";
                }
    
    if(errorcount==0)
        {   
            
            
            switch(weekday)
            {
                case 1:  document.getElementById('weekbirthday').innerHTML = "Monday";break;
                case 2:  document.getElementById('weekbirthday').innerHTML = "Thuesday";break;
                case 3:  document.getElementById('weekbirthday').innerHTML = "Wednesday";break;
                case 4:  document.getElementById('weekbirthday').innerHTML = "Thursday";break;
                case 5:  document.getElementById('weekbirthday').innerHTML = "Friday";break;
                case 6:  document.getElementById('weekbirthday').innerHTML = "Saturday";break;
                case 0:  document.getElementById('weekbirthday').innerHTML = "Sunday";break;
                default: document.getElementById('weekbirthday').innerHTML = "";
            }
             
            
            var age = parseInt(currYear) - parseInt(year);
            if(parseInt(currMonth) < parseInt(month)  || (parseInt(currMonth)  == parseInt(month)  && parseInt(currDay)  < parseInt(day) ))
            {
                age--;
            }
            console.log(age);
            document.getElementById('age').innerHTML = age;
            
            
        switch(month)
        {
            case 1: if(day>0 && day<=20) 
					{						                
                        document.getElementById('zodiacSign').innerHTML = "Capricorn\(Kozorožec\)";
					}else if(day>=21 && day<=31)
							 {
								document.getElementById('zodiacSign').innerHTML = "Aquarius\(Vodnár\)";
                             } break;
		case 2: if(day>0 && day<=19)
					{
						document.getElementById('zodiacSign').innerHTML = "Aquarius\(Vodnár\)";
					}else if(day>=20 && day<=29)
							{
								document.getElementById('zodiacSign').innerHTML = "Pisces\(Ryby\)";
                            } break;
		case 3: if(day>0 && day<=20)
					{
						document.getElementById('zodiacSign').innerHTML = "Pisces\(Ryby\)";
					}else if(day>=21 && day<=31)
							{
								document.getElementById('zodiacSign').innerHTML = "Aries\(Baran\)";
                            } break;
		case 4: if(day>0 && day<=20)
					{
						document.getElementById('zodiacSign').innerHTML = "Aries\(Baran\)";
					}else if(day>=21 && day<=30)
							{
								document.getElementById('zodiacSign').innerHTML = "Taurus\(Býk\)";
                            } break;
		case 5: if(day>0 && day<=20)
					{
						document.getElementById('zodiacSign').innerHTML = "Taurus\(Býk\)";
					}else if(day>=21 && day<=31)
							{
								document.getElementById('zodiacSign').innerHTML = "Gemini\(Blíženci\)";
                            } break;
		case 6: if(day>0 && day<=20)
					{
						document.getElementById('zodiacSign').innerHTML = "Gemini\(Blíženci\)";
					}else if(day>=21 && day<=30)
							{
								document.getElementById('zodiacSign').innerHTML = "Cancer\(Rak\)";
                            } break;
		case 7: if(day>0 && day<=22)
					{
						document.getElementById('zodiacSign').innerHTML = "Cancer\(Rak\)";
					}else if(day>=23 && day<=31)
							{
								document.getElementById('zodiacSign').innerHTML = "Leo\(Lev\)";
                            } break;
		case 8: if(day>0 && day<=22)
					{
						document.getElementById('zodiacSign').innerHTML = "Leo\(Lev\)";
					}else if(day>=23 && day<=31)
							{
								document.getElementById('zodiacSign').innerHTML = "Virgo\(Panna\)";
                            } break;
		case 9: if(day>0 && day<=22)
					{
						document.getElementById('zodiacSign').innerHTML = "Virgo\(Panna\)";
					}else if(day>=23 && day<=30)
							{
								document.getElementById('zodiacSign').innerHTML = "Libra\(Váhy\)";
                            } break;
		case 10: if(day>0 && day<=22)
					{
						document.getElementById('zodiacSign').innerHTML = "Libra\(Váhy\)";
					}else if(day>=23 && day<=31)
							{
								document.getElementById('zodiacSign').innerHTML = "Scorpio\(Škorpión\)";
                            } break;
		case 11: if(day>0 && day<=22)
					{
						document.getElementById('zodiacSign').innerHTML = "Scorpio\(Škorpión\)";
					}else if(day>=23 && day<=30)
							{
								document.getElementById('zodiacSign').innerHTML = "Sagittarius\(Strelec\)";
                            } break;
		case 12: if(day>0 && day<=21)
					{
						document.getElementById('zodiacSign').innerHTML = "Sagittarius\(Strelec\)";
					}else if(day>=22 && day<=31)
							{
								document.getElementById('zodiacSign').innerHTML = "Capricorn\(Kozorožec\)";
                            } break;
		default: document.getElementById('zodiacSign').innerHTML = "Invalid date";
	}
        }
    else {
        document.getElementById('age').innerHTML = "";
        document.getElementById('zodiacSign').innerHTML = "";
    }    
}

/*function nameDay() 
{
    calendar = new Array("Nový rok", "Alexandra", "Daniela", "Drahoslav", "Andrea", "Antónia", "Bohuslava/Róbert", "Severín", "Alexej", "Dáša", "Malvína", "Ernest", "Rastislav", "Radovan", "Dobroslav", "Kristína", "Nataša" ,"Bohdana" ,"Drahomíra" ,"Dalibor" ,"Vincent" ,"Zora" , "Miloš" ,"Timotej" ,"Gejza" ,"Tamara" ,"Bohuš" ,"Alfonz" , "Gašpar" ,"Ema" ,"Emil" , "Tatiana" ,"Erika/Erik" ,"Blažej" ,"Veronika" ,"Agáta" ,"Dorota" , "Vanda" ,"Zoja" ,"Zdenko" ,"Gabriela" ,"Dezider" ,"Perla" , "Arpád" ,"Valentín" ,"Pravoslav" ,"Ida" ,"Miloslava" ,"Jaromír" , "Vlasta" ,"Lívia" ,"Eleonóra" ,"Etela" ,"Roman/Romana" , "Matej" ,"Frederik/Frederika" ,"Viktor" ,"Alexander" , "Zlatica" ,"" , "Albín" ,"Anežka" ,"Bohumil/Bohumila" ,"Kazimír" ,"Fridrich" , "Radoslav/Radoslava" ,"Tomáš/Róbert" ,"Alan/Alana" ,"Františka" , "Branislav/Bruno" ,"Angela/Angelika" ,"Gregor" ,"Vlastimil" , "Matilda" ,"Svetlana" ,"Boleslav" ,"Ľubica" ,"Eduard" ,"Jozef" , "Víťazoslav" ,"Blahoslav" ,"Beňadik" ,"Adrián" ,"Gabriel" , "Marián" ,"Emanuel" ,"Alena" ,"Soňa" ,"Miroslav" ,"Vieroslava" , "Benjamín" , "Hugo" ,"Zita" ,"Richard" ,"Izidor" ,"Miroslava" ,"Irena" , "Zoltán/Róbert" ,"Albert" ,"Milena" ,"Igor" ,"Július" ,"Estera" , "Aleš" ,"Justína" ,"Fedor" ,"Dana/Danica" ,"Rudolf" ,"Valér" , "Jela" ,"Marcel" ,"Ervín" ,"Slavomír" ,"Vojtech" ,"Juraj" , "Marek" ,"Jaroslava" ,"Jaroslav" ,"Jarmila" ,"Lea" , "Anastázia" , "Sviatok práce" ,"Žigmund" ,"Galina" ,"Florián" ,"Lesana/Lesia" ,"Hermína" , "Monika/Róbert" ,"Ingrida" ,"Roland" ,"Viktória" ,"Blažena" , "Pankrác" ,"Servác" ,"Bonifác" ,"Žofia" ,"Svetozár" ,"Gizela" , "Viola" ,"Gertrúda" ,"Bernard" ,"Zina" ,"Júlia/Juliana" , "Želmíra" ,"Ela" ,"Urban" ,"Dušan" ,"Iveta" ,"Viliam" ,"Vilma" , "Ferdinand" ,"Petronela/Petrana" , "Žaneta" ,"Xénia" ,"Karolína" ,"Lenka" ,"Laura" ,"Norbert" , "Róbert" ,"Medard" ,"Stanislava" ,"Margaréta" ,"Dobroslava" , "Zlatko" ,"Anton" ,"Vasil" ,"Vít" ,"Blanka" ,"Adolf" ,"Vratislav" , "Alfréd" ,"Valéria" ,"Alojz" ,"Paulína" ,"Sidónia" ,"Ján" , "Tadeáš" ,"Adriana" ,"Ladislav/Ladislava" ,"Beata" , "Peter/Pavol/Petra" ,"Melánia" , "Diana" ,"Berta" ,"Miloslav" ,"Prokop" ,"" ,"Patrik/Patrícia" , "Oliver" ,"Ivan" ,"Lujza" ,"Amália" ,"Milota" ,"Nina" ,"Margita" , "Kamil" ,"Henrich" ,"Drahomír" ,"Bohuslav" ,"Kamila" ,"Dušana" , "Iľja/Eliáš" ,"Daniel" ,"Magdaléna" ,"Oľga" ,"Vladimír" , "Jakub" ,"Anna/Hana" ,"Božena" ,"Krištof" ,"Marta" ,"Libuša" , "Ignác" , "Božidara" ,"Gustáv" ,"Jerguš" ,"Dominik/Dominika" ,"Hortenzia" , "Jozefína" ,"Štefánia" ,"Oskar" ,"Ľubomíra" ,"Vavrinec" , "Zuzana" ,"Darina" ,"Ľubomír" ,"Mojmír" ,"Marcela" ,"Leonard" , "Milica" ,"Elena/Helena" ,"Lýdia" ,"Anabela" ,"Jana" ,"Tichomír" , "Filip" ,"Bartolomej" ,"Ľudovít" ,"Samuel" ,"Silvia" ,"Augustín" , "Nikola/Nikolaj" ,"Ružena" ,"Nora" , "Drahoslava" ,"Linda" ,"Belo" ,"Rozália" ,"Regína" ,"Alica" , "Marianna" ,"Miriama" ,"Martina" ,"Oleg" ,"Bystrík" , "Mária" ,"Ctibor" ,"Ľudomil" ,"Jolana" ,"Ľudmila" ,"Olympia" , "Eugénia" ,"Konštantín" ,"Ľuboslav/Ľuboslava" ,"Matúš" ,"Móric" , "Zdenka" ,"Ľuboš/Ľubor" ,"Vladislav" ,"Edita" ,"Cyprián" , "Václav" ,"Michal/Michaela" ,"Jarolím" , "Arnold" ,"Levoslav" ,"Stela" ,"František" ,"Viera" ,"Natália" , "Eliška" ,"Brigita" ,"Dionýz" ,"Slavomíra" ,"Valentína" , "Maximilián" ,"Koloman" ,"Boris" ,"Terézia" ,"Vladimíra" , "Hedviga" ,"Lukáš" ,"Kristián" ,"Vendelín" ,"Uršuľa" ,"Sergej" , "Alojzia" ,"Kvetoslava" ,"Aurel" ,"Demeter" ,"Sabína" ,"Dobromila" , "Klára" ,"Šimon/Simona" ,"Aurélia" , "Denis/Denisa" ,"" ,"Hubert" ,"Karol" ,"Imrich" ,"Renáta" , "René" ,"Bohumír" ,"Teodor" ,"Tibor" ,"Martin/Maroš" ,"Svätopluk" , "Stanislav" ,"Irma" ,"Leopold" ,"Agnesa" ,"Klaudia" ,"Eugen" , "Alžbeta" ,"Félix" ,"Elvíra" ,"Cecília" ,"Klement" ,"Emília" , "Katarína" ,"Kornel" ,"Milan" ,"Henrieta" ,"Vratko" , "Ondrej/Andrej" , "Edmund" ,"Bibiána" ,"Oldrich" ,"Barbora" ,"Oto" ,"Mikuláš" , "Ambróz" ,"Marína" ,"Izabela" ,"Radúz" ,"Hilda" ,"Otília" , "Lucia" ,"Branislava/Bronislava" ,"Ivica" ,"Albína" ,"Kornélia" , "Sláva/Slávka" ,"Judita" ,"Dagmara" ,"Bohdan" ,"Adela" ,"Nadežda" , "Adam/Eva" ,"Vianoce" ,"Štefan" ,"Filoména" ,"Ivana/Ivona" ,"Milada" , "Dávid" ,"Silvester");
    
    var fname = document.getElementById('fname');    
    days = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
    month = new Array(1,2,3,4,5,6,7,8,9,10,11,12);
    var today = new Date();
    var currDay=today.getDate();
    var currMonth=today.getMonth()+1;
    var currYear=today.getFullYear();

    var i;
    var j;
    var k;
    for(i=0;i<365;i++)
        for(j=0;j<12;j++)
            for(k=0;k<12;k++)
            {
                if(fname==calendar[i])
                {
                    if(i>)
                }
    
            }
    
    
    
} */


