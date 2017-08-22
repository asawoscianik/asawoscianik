//
//var btn = document.getElementById('losowa');
//var twojaliczba = document.getElementById('liczba');
//
//var random = Math.floor((Math.random() * 100) + 1);
//console.log(random);
//
//function zobacz(){
//    
//
//
//btn.addEventListener('click', function () {
//   
//   
//    if(random == twojaliczba.value){
//        alert('brawo wygrales mikser')
//        twojaliczba.value=""; 
//    }
//    else if(twojaliczba > random){
//        alert('za duza')
//    }
//    else if(twojaliczba < random){
//        alert('za mala')
//    }
//    else{
//        twojaliczba.value="";
//        zobacz();   
//    }
//});
//    
//    }
//zobacz();
////////////////////////////////////////////////////////////////////////////////////////
//var start = document.getElementById('start');
//var end = document.getElementById('end');
//var przycisk1 = document.getElementById('przycisk1');
//var sekcjaA = document.getElementById('sekcja1');
//var sekcjaB = document.getElementById('sekcja2');
//var liczbauzytkownika = document.getElementById('liczba');
//var przycisk2 = document.getElementById('przycisk2')
//var tekst = document.getElementById('tekst');
//
//przycisk1.addEventListener('click', function(){
//   sekcjaA.style.display='none';
//    sekcjaB.style.display='block';
//    console.log(start.value);
//    console.log(end.value);
//    
//    
//});
//
//
//
//
//przycisk2.addEventListener('click', function(){
//    var losowa = parseInt(start.value) + Math.random() * (parseInt(end.value) - parseInt(start.value));
//    tekst.innerHTML = 'twoja liczba z przedzialu od: ' + start.value + ' do: ' + end.value  + ' wynosi: ' + Math.round(losowa);
//});
//
//
//przycisk3.addEventListener('click', function(){
//    sekcjaA.style.display='block';
//    sekcjaB.style.display='none';
//    start.value = "";
//    end.value = "";
//
//});

/////////////////////////////////////////////////////////////////////////////////

//function sum() {
//  //console.log("1. arguments = ", arguments);
//  var keys = Object.keys(arguments);
//  //console.log("2. keys = ", keys);
//  var sum = 0;
//  for(var i = 0; i < keys.length; i++) {
//    sum += arguments[keys[i]];
//    //console.log("\tKlucz: " + keys[i] + " | i: " + i + " | element: ", arguments[keys[i]] );
//  }
//  return sum;
//}
//
//console.log( sum(1, 2, 3, 14, 32, -15        ) );


////////////////////////////////////////////////////////////////////////////////////


//function concat(){
//  var ret="";
//    var keys = Object.keys(arguments);
//    for(var key of keys){
//        ret = ret + arguments[key];
//    }
//    return ret;
//}
//console.log( concat("ad", "am", "sa", "wo", "sc", "ianik") ); 