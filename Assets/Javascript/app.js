
$(document).ready(function(){

    

    $('button').on('click', function() {
        var actor = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=dc6zaTOxFJmzC&limit=10";



        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var actorDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var actorImage = $('<img/>');

                    actorImage.addClass('Img')

                    actorImage.attr('src', results[i].images.fixed_height.url);

                    actorImage.attr('data-still', results[i].images.fixed_height_still.url)

                    actorImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    actorDiv.append(p);

                    actorDiv.append(actorImage);

                    actorDiv.prependTo($('#gifs'));
                }

                $('.Img').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var actors = [''];

    
        //adding Buttongs

        // Event handler for clicking
        $('#theButton').on('click', function(){
            var actorButton = $("#gif-input").val();

            //Adding actor/actress

            var newButton = $("<button/>").addClass( "btn btn-danger btn-info actor").attr('data-name',actorButton).html(actorButton).css({'margin': '5px'});
            
            $("#actorsbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actorButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(actorButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var actorDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var actorImage = $('<img/>');

                    actorImage.addClass('Img')

                    actorImage.attr('src', results[i].images.fixed_height_still.url);

                    actorImage.attr('data-still', results[i].images.fixed_height_still.url)

                    actorImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    actorDiv.append(p);

                    actorDiv.append(actorImage);

                    actorDiv.prependTo($('#gifs'));
                }

                $('.Img').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});