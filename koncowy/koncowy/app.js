$(document).ready(function(){

    var logo = ["ikony/android.png","ikony/chrome.png","ikony/firefox.png","ikony/html5.png","ikony/origin.png","ikony/slack.png","ikony/twitter.png","ikony/windows.png"];

    var answer = ["ANDROID","CHROME","FIREFOX","HTML5","ORIGIN","SLACK","TWITTER","WINDOWS"];

    var letters = ["A","B",'C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','W','V','X','Y','Z'];

    var RandomLetters = [];
    
    
  
    var numberek = 0;
    $('#button1').click(function(){
        odpal(0);
        $('#button1').hide();
       
      });  
    
    $('#button').click(function(){
        $('#button').hide();
        
        odpal(numberek);
    })

   function odpal(){

    //----------------------------------------------------------------------------------
    //wszystkie loga
    //----------------------------------------------------------------------------------

    
    function getLogo(){

        var theLogo = logo;

        for(var i = 0; i<theLogo.length;i++){

            return theLogo[1];

        }
        
        //$('#obrazki').append('<img src="' + theLogo[0] + ' "/> ')

    }
    $('#obrazki').append("<img src='" + logo[numberek] + "' />");

    console.log(getLogo());
        
    
//------------------------------------------------------------------------------------ //                                   wszystkie odpowiedzi iteracja
//--------------------------------------------------------------------------------------    

    function getAnswer(){

        var theAnswer = answer;

       // for(var i = 0;i < theAnswer.length;i++){

            //return theAnswer; wszystkie odpowiedzi
            
            var splited = theAnswer[numberek].split('');
            
            console.log(splited);  
        
            var xd = theAnswer[numberek]
            
            for(var i = 0;i<answer[numberek].length;i++){
                $('#pusty').append('<span>' + ' ');
            }

    }

    console.log(getAnswer());
//-----------------------------------------------------------------------------------------
    
    //wszystkie litery

//---------------------------------------------------------------------------------------    
    function getLetter(){

        var theLetter = letters;

        for(var i = 0; i < theLetter.length; i++){

            return theLetter;

        }

    }

    //console.log(getLetter());
    
//------------------------------------------------------------------------------------//    
    
//                          Losowe litery z literami z answer
    
//-------------------------------------------------------------------------------------
    var newArr = [];
    
    function LosoweLitery(){
        
        var theAnswer = answer[numberek];

        for(var i = 0;i < theAnswer.length;i++){

            //return theAnswer; wszystkie odpowiedzi
            
            var splited = theAnswer[i].split('');
            
            //newArr2.push(splited);
            
            for (var j = 0;j<splited.length;j++){
                
                
                newArr.push(splited[j]);
            }    

    }
         

        for(var i = 0; i < 21-answer[numberek].length; i++) {

            var randomIndex = Math.floor(Math.random() * letters.length);

            var randomLetter = letters[randomIndex];
            

            newArr.push(randomLetter);
        }
       
      return newArr;
        
    }

    LosoweLitery();
    //-------------------------------------------------------------------------------
    
    //                       LOSOWE LITERY WYMIESZANE
    
    //-------------------------------------------------------------------------------
    
    function shuffleArray(array) {
        
        var array = newArr;
        
        for (var i = array.length - 1; i > 0; i--) {
            
            var j = Math.floor(Math.random() * (i + 1));
            
            var temp = array[i];
            
            array[i] = array[j]
            
            array[j] = temp;
            
        } 
        
        for(var i = 0; i<array.length;i++){ 
         
            $('#litery').append('<span>' + array[i] + ' ');
            //$('#litery').append(`<span> ${array[i]}  </span>`);  
        }
        return array;
        
    }
    
    console.log(shuffleArray());
    
    
    //--------------------------------------------------------------------------------------
    //                                  Znikanie liter
    //--------------------------------------------------------------------------------------
    
    var count = 0;
    
    var nowyarr = []; 
       
    
  $('#litery span').click(function(e){
       
      var arrx =[];
      
     arrx.push(this.innerText);
      
      var arrwynik = nowyarr.join('');
      
        console.log(arrwynik);
      
      console.log(answer[numberek]);
      
      if(arrwynik == answer[numberek]){
          
          alert('Brawo')
          $('#button button').css("display", "block"); 
          $('#button').show();
          numberek++
      }
     
    $('#litera').append(this);  
        
    count++;
        
//    console.log(count);
    $('#litera span').off();
      
    if(count > answer[numberek].length-1){
             
        $('#litery span').off();
             
     }
     
  }); 
       
       $('#litera span').click(function(e){
           
          alert('heh');
          
          $(this).replaceWith('');
          
          $(this).append('#litery span');
          
          arrwynik.split('').pop().join('');
          
          
           
       });
       
  }
    
});





