/* Plugin 1: This jQuery code calls the FullPage plugin's Javascript file. This plugin makes
my website a single-scroll website that only displays content that fits on the screen. */
$( document ).ready( function() {
    $( '#fullpage' ).fullpage( {
        sectionsColor: [ '#fefbd8', '#fed37c', '#fefbd8', '#fed37c', '#fefbd8', '#fed37c' ],
        anchors: [ 'about', 'frozenBananas', 'beverages', 'entrees', 'desserts', 'contact' ],
        menu: '#menu',
        scrollingSpeed: 1000
    } );
} );

/* Plugin 2: This jQuery code calls the Drawer plugin's Javascript file. This plugin adds
an off screen navigation menu. */
$( document ).ready( function() {
    $( '.drawer' ).drawer();
} );

/*Custom Javascript Code: This code can be found on the contact page of my site.
This code makes each social media icon larger upon mouse over and normal size upon mouse out.*/
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

/* Custon jQuery Code: This code can be found on each of the menu pages. This code changes
the background color of each menu item to either a dark or light orange (depending on the page
background color) upon hover, then changes it back to the normal background color.*/
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
