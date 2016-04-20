$( document ).ready( function() {
    $( '#fullpage' ).fullpage( {
        sectionsColor: [ '#fefbd8', '#fed37c', '#fefbd8', '#fed37c', '#fefbd8', '#fed37c' ],
        anchors: [ 'about', 'frozenBananas', 'beverages', 'entrees', 'desserts', 'contact' ],
        menu: '#menu',
        scrollingSpeed: 1000
    } );
} );

$( document ).ready( function() {
    $( '.drawer' ).drawer();
} );

var imgOne = document.getElementById( 'img-one' );
imgOne.addEventListener( 'click', mouseOver );
imgOne.addEventListener( 'mouseout', mouseOut );

function mouseOver() {
    console.log( 'yay' );
    imgOne.style.width = ' 64px ';
    imgOne.style.height = ' 64px ';
}

function mouseOut() {
    imgOne.style.width = ' 50px ';
    imgOne.style.height = ' 50px ';
}
