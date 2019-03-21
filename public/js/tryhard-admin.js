$(document).ready(function() {
    /* sidenav dropdown menu*/
    $('.sidenav-link-dropdown').click(function() {
        $(this)
            .find('.caret')
            .toggleClass('caret-up');
        $(this)
            .find('ul.sidenav-second-level')
            .slideToggle(function() {
                $(this).toggleClass('menu-opened');
            });
    });

    /*Add active class once a href tags clicked*/
    $('a').click(function() {
        $(this).toggleClass('active');
    });

    /*** Prevents the a href default event from the dropdown a tags ***/

    $('#api-sidenav-link').click(function(event) {
        event.preventDefault();
    });

    $('#poolers-sidenav-link').click(function(event) {
        event.preventDefault();
    });

    $('#pooler-teams-subnav-link').click(function(event) {
        event.preventDefault();
    });

    $('#players-sidenav-link').click(function(event) {
        event.preventDefault();
    });

    /* Create New League*/
    $('#new-league-subnav-link').click(function() {
        $('.content').load('new-league.html');
    });

    /* League Link - Load league template page via ajax call */
    //   $('#leagues-subnav-link').click(function (event) {
    //       event.preventDefault();
    //       $('.content').load('league.html');
    //   });

    /* Change disabled state on the ON/OFF switch box selection*/
    // if( $( "#myonoffswitch" ).prop( "checked" ) ) {
    //     alert("test");
    //     $("input[type=number]").prop("disabled", false);
    // }else{
    //     $("input[type=number]").prop("disabled", true);
    //   }
});
