$(document).ready(function(){
    var logo = ["ikony/android.png","ikony/chrome.png","ikony/firefox.png","ikony/html5.png","ikony/origin.png","ikony/slack.png","ikony/twitter.png","ikony/windows.png"];
    var answer = ["ANDROID","CHROME","FIREFOX","HTML5","ORIGIN","SLACK","TWITTER","WINDOWS"];
    var letters = ["A","B",'C','D','E','F','G','H','I','J','K','L','M','N','O','P','R','S','T','U','W','V','X','Y','Z'];
    var RandomLetters = [];
    
    
    var count = 0;
    var numberek = 0;
    
    $('#button1').click(function(){
        
        odpal();
//        $('#button1').hide();
//        $('h1').hide();
        $('.section0').hide();
      });  
    
    $('#button').click(function(){
        $('#button').hide();
        odpal(numberek);
    });
    
   function odpal(){
    //----------------------------------------------------------------------------------
    //wszystkie loga
    //----------------------------------------------------------------------------------
    
    function getLogo(){
        var theLogo = logo;
        for(var i = 0; i<theLogo.length;i++){
            return theLogo[i];
        }
        
        //$('#obrazki').append('<img src="' + theLogo[0] + ' "/> ')
    }
       
    $('img[src="' + logo[numberek-1] + '"]').remove();
    $('#obrazki').append("<img src='" + logo[numberek] + "' />");
    console.log(getLogo());
    
    console.log(getLogo());
        
    
//------------------------------------------------------------------------------------ //                                   wszystkie odpowiedzi iteracja
//--------------------------------------------------------------------------------------    
    function getAnswer(){
        
        var theAnswer = answer;
            
        var splited = theAnswer[numberek].split('');
            
        console.log(splited);  
        
        if(numberek>0){
        
            for(var i = 0;i<answer[numberek-1].length;i++){
                $('#pusty span' + ' ').remove();
            }
            }
            
            for(var i = 0;i<answer[numberek].length;i++){
                $('#pusty').append('<span>' + ' ');
            }
        
            
        }
    getAnswer();
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
    
    var shuffleArr = []
    
    function shuffleArray(array) {
        
        shuffleArr = newArr;
        
        for (var i = shuffleArr.length - 1; i > 0; i--) {
            
            var j = Math.floor(Math.random() * (i + 1));
            
            var temp = shuffleArr[i];
            
            shuffleArr[i] = shuffleArr[j]
            
            shuffleArr[j] = temp;
            
        } 
        
        if(numberek>0){
              
              $('#litera span').remove();
              $('#litery span').remove();
              
          }
        
        for(var i = 0; i<shuffleArr.length;i++){ 
         
            $('#litery').append('<span>' + shuffleArr[i] + '');
             
        }
        return shuffleArr;
        
    }
    
    shuffleArray()
    
    //--------------------------------------------------------------------------------------
    //                                  Znikanie liter
    //--------------------------------------------------------------------------------------
    
    
    
    var nowyarr = []; 
       
    var arrwynik = [];
    
  $(document).on('click', '#litery span', function(e){
      
      if(nowyarr.length < answer[numberek].length){ 
      
     nowyarr.push(this.innerText);
      
      arrwynik = nowyarr.join('');
      
      //console.log(arrwynik);
      
      //console.log(nowyarr);
      
      //console.log(answer[numberek]);
     
      $('#litera').append(this);  

      $('#litera span').off();
      
      if(arrwynik == answer[numberek]){
          
        count++;  
          
        //alert('Brawo')
          
        $('#button button').css("display", "block"); 
        
        numberek++;
          
        $('#button').show();
      }
      
   }
          
  });    

   $(document).on('click', '#litera span', function(e){
          
          nowyarr.pop();
          
          $('#litery').append(this);
           
   });
    
       
  }
    
});


