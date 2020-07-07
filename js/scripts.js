$(document).ready(function() {
    $("#profile-carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa fa-pause')) 
        {
            $("#profile-carousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa fa-pause');
            $("#carouselButton").children("span").addClass('fa fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa fa-play'))
        {
            $("#profile-carousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa fa-play');
            $("#carouselButton").children("span").addClass('fa fa-pause');                    
        }
    });
});