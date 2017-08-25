$(document).ready(function() {
    
    var pizza = [
    {id: 1, name: 'Margarita', points:2, image:'margarita.png', costs: 0}
    ];

    var boosters = [
        { id: 1, name: 'Włoska czapka kucharska', points: 10, per: 1000, image: 'cookhat.png', value: 1 },
        { id: 1, name: 'cos inneg niz ', points: 10, per: 1000, image: 'ptak.png', value: 1 },
        { id: 1, name: 'makarena hop siu xd', points: 10, per: 1000, image: 'mis.png', value: 1 },
        { id: 1, name: 'no nie wiem', points: 10, per: 1000, image: 'gimp.png', value: 1 }
    ];
    
    var counter = 0;
    
    
    
    
    $("#link").click(function(){
      $(".logowanie").toggle(); 
      $("#link").toggle();
    });
    
   $("#przycisk").click(function(e){
      alert('zalogowano');
      $(".logowanie").toggle(); 
      $("#link").toggle();
    });
    
   $('<img/>', {class: 'pizza'}).attr('src', './img/margarita.png').appendTo('.pizza-container');
    
    $('.pizza').click(function(e){

        counter = counter + pizza[0].points;
        $('.counter').html(counter)

    });
    
    $('img').mouseover(function(e){
        $(this).width('35%');
        $(this).height('35%')
    });
    
    $('.pizza').mouseleave(function(e){
        $(this).width('');
        $(this).height('');
    });
    
    $('<ul/>', {class: 'boosters'}).appendTo('.boostList');

    for(var b of boosters) {
        $('<li/>', {id: 'b_' + b.id})
       .css('background-image', 'url(img/' + b.image + ')' )
       .addClass('boostItem')
        .html(b.name)
        .appendTo('.boosters')
       // $('<img/>').attr('src', 'url(img/' + b.image +')').appendTo('.boosters');

    }
    
    $('ul.boosters > li').on('click', function(e) {


        
        var elementId = $(this).attr('id');
        
        var id = parseInt(elementId.replace('b_', ''));
        var currentB;
        
        $()
        
        for(var b of boosters){
            if(b.id == id){
                currentB = b;
                break;
            }
        }      

        var userPoints = parseInt($('.counter').html());
        if(userPoints > currentB.points){
            
            userPoints -= currentB.points;
            $('.counter').html(userPoints);
            setInterval(function(){
                var points = parseInt($('.counter').html());
                points += currentB.value;
                $('.counter').html(points);
                
            },currentB.per);
        }
        
 
    });

    
});
 


