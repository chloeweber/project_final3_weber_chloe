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
imgOne.addEventListener( 'mouseover', overOne );
imgOne.addEventListener( 'mouseout', outOne );

function overOne() {
    imgOne.style.width = ' 64px ';
    imgOne.style.height = ' 64px ';
}

function outOne() {
    imgOne.style.width = ' 50px ';
    imgOne.style.height = ' 50px ';
}

var imgTwo = document.getElementById( 'img-two' );
imgTwo.addEventListener( 'mouseover', overTwo );
imgTwo.addEventListener( 'mouseout', outTwo );

function overTwo() {
    imgTwo.style.width = ' 64px ';
    imgTwo.style.height = ' 64px ';
}

function outTwo() {
    imgTwo.style.width = ' 50px ';
    imgTwo.style.height = ' 50px ';
}

var imgThree = document.getElementById( 'img-three' );
imgThree.addEventListener( 'mouseover', overThree );
imgThree.addEventListener( 'mouseout', outThree );

function overThree() {
    imgThree.style.width = ' 64px ';
    imgThree.style.height = ' 64px ';
}

function outThree() {
    imgThree.style.width = ' 50px ';
    imgThree.style.height = ' 50px ';
}

var imgFour = document.getElementById( 'img-four' );
imgFour.addEventListener( 'mouseover', overFour );
imgFour.addEventListener( 'mouseout', outFour );

function overFour() {
    imgFour.style.width = ' 64px ';
    imgFour.style.height = ' 64px ';
}

function outFour() {
    imgFour.style.width = ' 50px ';
    imgFour.style.height = ' 50px ';
}

$( document ).ready( function( ) {
    $( '.item-menu' ).hover( function( ) {
        $( 'body' ).css( 'background-color', 'blue' ); //edit, body must be in quotes!
    } );
} );

$( document ).ready( function( ) {
    $( '.banana-item-light' ).hover( function( ) {
        $( this ).css( 'background', '#f7ae36' );
    },
    function( ) {
        $( this ).css( 'background', '#fed37c' );
    } );
} );

$( document ).ready( function( ) {
    $( '.banana-item-dark' ).hover( function( ) {
        $( this ).css( 'background', '#f7ae36' );
    },
    function( ) {
        $( this ).css( 'background', '#fefbd8' );
    } );
} );
