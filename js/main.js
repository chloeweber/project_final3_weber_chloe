$( document ).ready( function() {
    $( '#fullpage' ).fullpage( {
        sectionsColor: [ '#f7ae36', '#fed37c', '#fefbd8', '#f7ae36', '#fed37c', '#fefbd8' ],
        anchors: [ 'about', 'frozenBananas', 'beverages', 'entrees', 'desserts', 'contact' ],
        menu: '#menu',
        scrollingSpeed: 1000
    } );
} );

$( document ).ready( function() {
    $( '.drawer' ).drawer();
} );
