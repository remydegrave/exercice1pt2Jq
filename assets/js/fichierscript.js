$(function(){
    // Pour agrandir l'image quand on vient dessus avec la souris.
    $('.img').mouseover(function(){
            $('img').width(600);
        });
        // Pour réduire la taille de l'image quand la souris n'est pas dessus.
    $('.img').mouseout(function(){
            $('img').width(300);
        });
});